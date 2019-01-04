define('$', function () {
    return jQuery;
});
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
    'popmenu',
    'im',
    'cascade',
    'secradio',
    'tree',
    'grid',
    'gtip',
    'runner',
    'time',
    'form',
    'table',
    'editor',
    'taginput',
    'style',
    'slider',
    'dragdrop',
    'suggest',
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

let routes = {
    '/header/all': '__test__/empty',
    '/header/def': '__test__/empty',
    '/carousel/demo': '__test__/empty',
    '/main/demo': '__test__/empty',
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