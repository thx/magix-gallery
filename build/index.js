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
    'switch',
    'search',
    'carousel',
    'pagination',
    'calendar',
    'mustache',
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
    'opers',
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
    paths: p
});

// 空view加载
let routes = {
    '/header/all': '__test__/empty',
    '/header/def': '__test__/empty',
    '/carousel/demo': '__test__/empty'
};

seajs.use('magix', function (Magix) {
    Magix.boot({
        rootId: 'app',
        defaultView: '__test__/all',
        defaultPath: '/form/mixins',
        routes
    });
});