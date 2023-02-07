let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let methods = [{
            key: 'mxDialog(viewPath, [viewOptions], [dialogOptions])',
            desc: '说明：自定义浮层',
        }, {
            key: 'alert(title, content, [enterCallback], [dialogOptions])',
            desc: '说明：警告小浮层',
        }, {
            key: 'confirm(viewOptions, [dialogOptions])',
            desc: '说明：二次确认浮层',
        }, {
            key: 'mxCloseAllDialogs()',
            desc: '说明：关闭当前所有展开的浮层',
        }];

        this.updater.digest({
            viewId: this.id,
            methods,
        });
    }
});