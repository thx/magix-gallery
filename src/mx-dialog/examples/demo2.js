let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
module.exports = Magix.View.extend({
    tmpl: '@demo2.html',
    mixins: [Dialog],
    init(e) {
        let that = this;
        that.viewOptions = e;

        let dlg = that.viewOptions.dialog;
        dlg.beforeClose(() => {
            // do something
            // resolve 组件自动支持dlg.close
            return new Promise(resolve => {
                that.confirm({
                    title: '二次确认',
                    content: '确认要关闭吗',
                    enterCallback: resolve
                })
            })
        })
    },
    render() {
        this.updater.digest();
    }
});
