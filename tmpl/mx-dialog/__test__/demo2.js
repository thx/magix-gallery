let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@demo2.html',
    init(e) {
        this.viewOptions = e;

        let dlg = this.viewOptions.dialog;
        dlg.beforeClose(() => {
            // do something
            // return true 可执行dlg.close()
            // return false 不关闭浮层
            return true;
        })
    },
    render() {
        this.updater.digest();
    }
});
