let gulp = require('gulp');
let combineTool = require('magix-combine');
let watch = require('gulp-watch');
let del = require('del');
let fs = require('fs');
let pkg = require('./package.json');
let uglify = require('gulp-uglify-es').default;
let ts = require('typescript');
combineTool.config({
    debug: true,
    srcFolder: 'build/src',
    loaderType: 'cmd_es',
    projectName: '_',
    tmplAddViewsToDependencies: true,
    tmplMultiBindEvents: true,
    magixUpdaterIncrement: true,
    galleries: {
        mxRoot: '',
        mxMap: {
            'mx-popover': {
                tag: 'span'
            },
            'mx-popconfirm': {
                tag: 'span'
            },
            'mx-calendar.rangepicker': {
                tag: 'div'
            },
            'mx-switch': {
                tag: 'span'
            },
            'mx-table'(tag) {
                let content = tag.content;
                let ctrl = tag.seprateAttrs('div');
                content = content.replace(/<table/g, '<div>$&').replace(/<\/table>/g, '$&</div>');
                return `<${ctrl.tag} mx-view="${tag.mxView}" ${ctrl.attrs} ${ctrl.viewAttrs}>${content}</${ctrl.tag}>`;
            },
            'mx-table.excel'(tag) {
                let content = tag.content;
                let ctrl = tag.seprateAttrs('div');
                content = content.replace(/<table/g, '<div>$&').replace(/<\/table>/g, '$&</div>');
                return `<${ctrl.tag} mx-view="${tag.mxView}" ${ctrl.attrs} ${ctrl.viewAttrs}>${content}</${ctrl.tag}>`;
            },
            'mx-loading'() {
                return `<div class="loading">
                        <span class="loading-anim"></span>
                    </div>`;
            },
            'mx-dropdown.item'(i) {
                return `<i ${i.attrs} class="none">${i.content}</i>`;
            },
            'mx-carousel.panel'(i) {
                return `<div ${i.attrs} style="position: absolute;" class="carousel-panel">${i.content}</div>`;
            }
        }
    },
    revisableStringSplitter: '',
    //cssSourceMap: true,
    cssSelectorPrefix: '_zs_gallery',
    scopedCss: [
        './tmpl/__test__/base.less'
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
                target: 'es3',
                module: ts.ModuleKind.None
            }
        });
        str = str.outputText;
        return str;
    }
});

gulp.task('cleanSrc', () => {
    return del('./build/src');
});

gulp.task('combine', ['cleanSrc'], () => {
    return combineTool.combine().then(() => {
        console.log('complete');
    }).catch(ex => {
        console.log('gulpfile:', ex);
    });
});

gulp.task('watch', ['combine'], () => {
    watch('./tmpl/**/*', e => {
        if (fs.existsSync(e.path)) {
            combineTool.processFile(e.path).catch(ex => {
                console.log('ex', ex);
            });
        } else {
            combineTool.removeFile(e.path);
        }
    });
});

gulp.task('ver', () => {
    combineTool.walk('./tmpl', file => {
        if (/\.js$/.test(file)) {
            let c = combineTool.readFile(file);
            c = c.replace(/\s*\/\*\s+ver:\d+\.\d+\.\d+\s+\*\/\s*/g, '');
            // c = `/*\r\nver:${pkg.version}\r\n*/\r\n${c}`;
            combineTool.writeFile(file, c);
        }
    });
});
gulp.task('turnOffDebug', () => {
    combineTool.config({
        debug: false
    });
});

gulp.task('compress', ['turnOffDebug', 'combine', 'ver'], () => {
    return gulp.src('./build/src/**/*.js')
        .pipe(uglify({
            compress: {
                drop_console: true,
                drop_debugger: true,
                global_defs: {
                    DEBUG: false
                }
            }
        }))
        .pipe(gulp.dest('./build/src/'));
});


const { exec, execSync, spawn, spawnSync } = require('child_process');
let  spawnCommand = (command, args, options) => {
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
 
 let execCommandReturn = (command) => {
     return new Promise((resolve, reject) => {
         const child = exec(command, {
             maxBuffer: 20000 * 1024
         })
         child.stdout.on('data', data => {
             resolve(data)
         })
 
         child.on('close', () => {
             resolve()
         })
     })
};

gulp.task('test', async () => {
    //先更新远程分支数据 
    await spawnCommand('git', ['pull']);

    //从本地分支里找出daily/0.0.x这种类型的分支里最大的分支号
    let branchs = await execCommandReturn('git branch -a');
    branchs = branchs.split('\n');

    const branchVersions = []
    branchs.forEach((branch) => {
        branch = branch.trim()
        const branchExec = /.*\/0\.0\.(\d+)/.exec(branch)
        if (branchExec) {
            branchVersions.push(branchExec[1])
        }
    })

    //最大的分支号
    const maxVersion = branchVersions.length ? Math.max.apply(null, branchVersions) : 0;
    const newDaily = `daily/0.0.${maxVersion + 1}`;
    
    await spawnCommand('git', ['checkout', '-b', newDaily]);
    await spawnCommand('git', ['push', 'origin', newDaily]);
})

gulp.task('release', ['compress'], () => {
    let index = fs.readFileSync('./index.html').toString();
    index = index.replace(/(?<=zs_gallery\/).*?(?=\/)/g, pkg.version);
    fs.writeFileSync('./index.html', index);
});