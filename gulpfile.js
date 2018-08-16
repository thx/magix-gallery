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
    return del('./src');
});

gulp.task('combine', ['cleanSrc'], () => {
    return combineTool.combine().then(() => {
        console.log('complete');
    }).catch(ex => {
        console.log('gulpfile:', ex);
    });
});

gulp.task('one', ['cleanSrc'], () => {
    combineTool.processFile('./tmpl/mx-form/__test__/index.js');
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
    return gulp.src('./src/**/*.js')
        .pipe(uglify({
            compress: {
                drop_console: true,
                drop_debugger: true,
                global_defs: {
                    DEBUG: false
                }
            }
        }))
        .pipe(gulp.dest('./src/'));
});
gulp.task('release', ['compress'], () => {
    let cs = fs.readFileSync('./src/__test__/all.js').toString();
    let index = fs.readFileSync('./index.html').toString();
    cs = cs.replace(/\$/g, '$$$$');
    index = index.replace(/<script id="test">[\s\S]*?<\/script>/, '<script id="test">' + cs + '</script>');

    // 更新目录内容
    let catalogue = fs.readFileSync('./test.js').toString();
    catalogue = catalogue.replace(/\$/g, '$$$$');
    index = index.replace(/<script id="catalogue">[\s\S]*?<\/script>/, '<script id="catalogue">' + catalogue + '</script>');
    fs.writeFileSync('./index.html', index);
});