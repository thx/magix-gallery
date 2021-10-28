//#loader=none;
'@./sea.js';
'@./jquery.js';
'@./magix.js';

define('$', function () {
    return jQuery;
});

let url = 'src/';
let p = {
    __test__: `${url}__test__`
};
let coms = [
    'btn',
    'title',
    'popover',
    'popconfirm',
    'preview',
    'loading',
    'feedback',
    'wanxiang',
    'copy',
    'dialog',
    'chart',
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
    'collapse',
    'cascade',
    'color',
    'secradio',
    'tree',
    'grid',
    'gtip',
    'runner',
    'util',
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
    'tabs',
    'stickytable',
    'number',
    'input',
    'radio'
];
for (let c of coms) {
    p[`mx-${c}`] = url + `mx-${c}`;
}
seajs.config({
    paths: p,
    alias: {
        'scroll': 'scroll.js'
    }
});

let routes = {
    '/header/all': '__test__/empty',
    '/header/white': '__test__/empty',
    '/header/color': '__test__/empty',
    '/header/wireless': '__test__/empty',
    '/carousel/demo': '__test__/empty',
    '/carousel/wireless': '__test__/empty',
    '/style/wireless': '__test__/empty',
    '/main/index-light': '__test__/empty',
    '/main/index-dynamic': '__test__/empty',
    '/main/index-custom': '__test__/empty',
    '/main/index-def': '__test__/empty',
    '/main/dis-def': '__test__/empty',
    '/main/hor-demo': '__test__/empty',
    '/main/ver-demo': '__test__/empty',
    '/footer/full': '__test__/empty',
    '/footer/wireless': '__test__/empty',
    '/effects/wireless': '__test__/empty',
    '/effects/progress2': '__test__/empty',
    '/wanxiang/demo1': '__test__/wanxiang',
    '/wanxiang/demo2': '__test__/wanxiang',
    '/wanxiang/demo3': '__test__/wanxiang',
    '/dropdown/wireless': '__test__/empty',
    '/im/demo1': '__test__/im',
    '/im/demo2': '__test__/im'
};

seajs.use(['magix', 'scroll'], (Magix, Scroll) => {
    Magix.boot({
        rootId: 'app',
        defaultView: '__test__/base',
        defaultPath: '/input/index',
        routes
    });
});;