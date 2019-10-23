define('$', function () {
    return jQuery;
});
let url = 'src/';

let p = {
    examples: url + `examples`
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
    '/header/all': 'examples/empty',
    '/header/white': 'examples/empty',
    '/carousel/demo': 'examples/empty',
    '/main/demo': 'examples/empty',
    '/main/hor-demo': 'examples/empty',
    '/footer/full': 'examples/empty',
    '/effects/progress2': 'examples/empty',
    '/wanxiang/demo1': 'examples/wanxiang',
    '/wanxiang/demo2': 'examples/wanxiang',
    '/wanxiang/demo3': 'examples/wanxiang'
};

seajs.use(['magix', 'scroll'], (Magix, Scroll) => {
    Magix.boot({
        rootId: 'app',
        defaultView: 'examples/base',
        defaultPath: '/form/mixins',
        routes
    });
});