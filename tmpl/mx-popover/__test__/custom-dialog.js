let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@custom-dialog.html',
    render() {
        let list = [{
            text: '默认情况下',
            action: `操作：<a class="color-brand" href="javascript:;" mx-click="open()">点击打开浮层</a>`
        }, {
            text: '自定义较小的z-index',
            action: `操作：<a class="color-brand" href="javascript:;" mx-click="open()">点击打开浮层</a>`
        }];
        this.updater.digest({
            list
        });
    },
    'open<click>'(e) {
        this.mxModal('@./dlg', {}, {
            width: 800,
            header: {
                title: '全屏右出浮层'
            },
            footer: {
                enter: false,
                cancel: false
            }
        });
    }
});