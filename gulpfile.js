let gulp = require('gulp');
let combineTool = require('magix-combine');
let watch = require('gulp-watch');
let del = require('del');
let fs = require('fs');
let pkg = require('./package.json');
let terser = require('gulp-terser-scoped').default;
let ts = require('typescript');
let classReg = /\bclass\s*=\s*"[^"]+/;

combineTool.config({
    debug: true,
    log: true,
    srcFolder: 'build/src',
    loaderType: 'cmd_es',
    projectName: '_',
    tmplAddViewsToDependencies: true,
    tmplMultiBindEvents: true,
    magixUpdaterIncrement: true,
    galleries: {
        mxRoot: '',
        mxMap: {  //配置到 https://github.com/thx/magix-combine-tool-config/blob/master/index.js
            'mx-carousel.panel'(tag) {
                return `<div ${tag.attrs} data-carousel="true">${tag.content}</div>`;
            },
            'mx-popover': {
                tag: 'span'
            },
            'mx-calendar.rangepicker': {
                tag: 'div'
            },
            'mx-switch': {
                tag: 'span'
            },
            'mx-loading'() {
                return `<div class="loading">
                        <span class="loading-anim"></span>
                    </div>`;
            },
            'mx-dropdown.item'(tag) {
                return `<i ${tag.attrs} class="none">${tag.content}</i>`;
            }
        }
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
        debug: false,
        log: false
    });
});

gulp.task('compress', ['turnOffDebug', 'combine'], () => {
    return gulp.src('./build/src/**/*.js')
        .pipe(terser({
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
