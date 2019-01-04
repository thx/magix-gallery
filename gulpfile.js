let gulp = require('gulp');
let combineTool = require('magix-combine');
let watch = require('gulp-watch');
let concat = require('gulp-concat');
let del = require('del');
let fs = require('fs');
let pkg = require('./package.json');
let terser = require('gulp-terser-scoped');
let ts = require('typescript');
let classReg = /\bclass\s*=\s*"[^"]+/;

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
        mxMap: {}
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

gulp.task('turnOffDebug', () => {
    combineTool.config({
        debug: false
    });
});

gulp.task('compress', ['turnOffDebug', 'combine'], () => {
    return del('./dist').then(() => {
        return gulp.src('./build/src/**/*.js')
            .pipe(concat('all.js'))
            .pipe(gulp.dest('./disc'));
    }).then(() => {
        return gulp.src('./disc/all.js')
            .pipe(terser({
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    global_defs: {
                        DEBUG: false
                    }
                }
            }))
            .pipe(gulp.dest('./disc'))
    });
});

gulp.task('release', ['compress'], () => {
    let index = fs.readFileSync('./index.html').toString();
    
    let cs = fs.readFileSync('./disc/all.js').toString();
    cs = cs.replace(/\$/g, '$$$$');
    index = index.replace(/<script id="test">[\s\S]*?<\/script>/, '<script id="test">' + cs + '</script>');

    fs.writeFileSync('./index.html', index);
});
