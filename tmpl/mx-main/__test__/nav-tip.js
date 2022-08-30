let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@nav-tip.html',
    init(extra) {
        this.updater.set(extra.info);
    },
    render() {
        // 延迟显示loading动画
        setTimeout(() => {
            this.updater.digest();
        }, 1000)
    }
});