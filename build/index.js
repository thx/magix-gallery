define('$', function () {
    //magix中对DOM类库的依赖使用的是$做为标识，这里我们进行适配
    return jQuery;
});
// let url = location.origin + location.pathname;
// url = url.replace(/index\.html$/, '');
// url += 'build/src/';
let url = 'src/';

let p = {
    __test__: url + `__test__`
};
let coms = [
    'title',
    'popover',
    'popconfirm',
    'preview',
    'loading',
    'feedback',
    'wanxiang',
    'copy',
    'dialog',
    'error',
    'dropdown',
    'dragsort',
    'switch',
    'search',
    'carousel',
    'pagination',
    'calendar',
    'mustache',
    'checkbox',
    'tree',
    'runner',
    'time',
    'form',
    'table',
    'editor',
    'taginput',
    'style',
    'slider',
    'dragdrop',
    'uploader',
    'footer',
    'duration',
    'effects',
    'hour',
    'main',
    'indics',
    'status',
    'monitor',
    'medusa',
    'area',
    'header',
    'tabs'
];
for (let c of coms) {
    p[`mx-${c}`] = url + `mx-${c}`;
}
seajs.config({
    paths: p,
    alias: {
        'moment': 'moment.js',
        'scroll': 'scroll.js'
    }
});

// 空view加载
let routes = {
    '/header/all': '__test__/empty',
    '/header/def': '__test__/empty',
    '/carousel/demo': '__test__/empty',
    '/wanxiang/demo1': '__test__/wanxiang',
    '/wanxiang/demo2': '__test__/wanxiang',
    '/wanxiang/demo3': '__test__/wanxiang'
};

seajs.use(['magix', 'scroll'], (Magix, Scroll) => {
    Magix.boot({
        rootId: 'app',
        defaultView: '__test__/base',
        defaultPath: '/form/mixins',
        routes
    });
});