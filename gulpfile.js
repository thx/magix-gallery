let gulp = require('gulp');
let combineTool = require('magix-combine');
let watch = require('gulp-watch');
let del = require('del');
let fs = require('fs');
let pkg = require('./package.json');
let terser = require('gulp-terser-scoped');
let ts = require('typescript');
const { spawn } = require('child_process');
let spawnCommand = (command, args, options) => {
    //默认stdio: inherit可传入自定义options
    const _options = {
        stdio: 'inherit',
        shell: process.platform === 'win32' //win下需要设置shell为true
    }

    Object.assign(_options, options)

    return new Promise((resolve, reject) => {
        const sp = spawn(command, args, _options)

        sp.on('close', code => {
            resolve()
        })

        sp.on('error', err => {
            console.log(err)
        })
    })
};

combineTool.config({
    debug: true,
    loaderType: 'cmd_es',
    projectName: '_',
    tmplAddViewsToDependencies: true,
    tmplMultiBindEvents: true,
    magixUpdaterIncrement: true,
    galleries: {
        mxRoot: '',
        mxMap: {}
    },
    checker: {
        tmplAttrIframe: false, //检测iframe相关
        jsLoop: false,
        css: false  //样式
    },
    revisableStringSplitter: '',
    //cssSourceMap: true,
    cssSelectorPrefix: '_zs_gallery',
    globalCss: [
        './tmpl/mx-style/index.less'
    ],
    scopedCss: [
        './tmpl/__test__/layout.less'
    ],
    compileTmplCommand(content) {
        var str = ts.transpileModule(content, {
            compilerOptions: {
                lib: ['es7'],
                target: 'es3',
                module: ts.ModuleKind.None
            }
        });
        //console.log(content,str);
        str = str.outputText;
        return str;
    },
    compileJSStart(content, from) {
        var str = ts.transpileModule(content, {
            compilerOptions: {
                lib: ['es7'],
                target: 'es6', // es6
                module: ts.ModuleKind.None
            }
        });
        str = str.outputText;
        return str;
    }
});

/**
 * 清除目录
 */
gulp.task('cleanDir', () => del(['./build']));

/**
 * 同步chartpark
 */
gulp.task('chartpark', gulp.series('cleanDir', () => {
    return gulp.src('./chartpark/*')
        .pipe(gulp.dest('./build/chartpark/'));
}));

/**
 * 同步依赖
 */
gulp.task('rely', gulp.series('chartpark', () => {
    combineTool.config({
        log: false,
        tmplFolder: 'dist',
        srcFolder: 'build'
    })
    return combineTool.combine().then(() => {
        console.log('end rely');
    }).catch(ex => {
        console.log('gulpfile:', ex);
    });
}));


/**
 * 编译到src
 */
gulp.task('combine', async () => {
    // 直接使用 gulp.series 会失效，手动等待
    await spawnCommand('gulp', ['rely']);

    // 编译tmpl到src
    combineTool.config({
        log: true,
        tmplFolder: 'tmpl',
        srcFolder: 'build/src',
    })
    return combineTool.combine().then(() => {
        console.log('end combine');
    }).catch(ex => {
        console.log('gulpfile:', ex);
    });
});

/**
 * 启动监听任务，实时编译tmpl目录到src目录，开发时使用
 */
gulp.task('watch', gulp.series('combine', () => {
    watch('./tmpl/**/*', e => {
        if (fs.existsSync(e.path)) {
            combineTool.processFile(e.path).catch(ex => {
                console.log('ex', ex);
            });
        } else {
            combineTool.removeFile(e.path);
        }
    })
}));

gulp.task('build', async () => {
    // 发布时关闭log
    combineTool.config({
        log: false,
        debug: false,
    });

    // 直接使用 gulp.series 会失效，手动等待
    await spawnCommand('gulp', ['rely']);

    // 重新编译tmpl
    combineTool.config({
        tmplFolder: 'tmpl',
        srcFolder: 'build/src',
    });
    return combineTool.combine().then(() => {
        console.log('end combine');
    }).catch(ex => {
        console.log('gulpfile:', ex);
    });
});

/**
 * 注册dev命令
 */
gulp.task('compress', gulp.series('build', () => {
    return gulp.src('./build/**/*.js')
        .pipe(terser({
            compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true,
                global_defs: {
                    DEBUG: false
                }
            }
        }))
        .pipe(gulp.dest('./build/'));
}));

/**
 * 提交master
 * 提交tnpm
 */
gulp.task('release', async () => {
    await spawnCommand('git', ['pull']);
    await spawnCommand('git', ['add', '.']);
    await spawnCommand('git', ['commit', '-m', ('finish update version' + pkg.version)]);
    await spawnCommand('git', ['push', 'origin', 'master']);
    await spawnCommand('tnpm', ['pub']);
})

