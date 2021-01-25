let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@tip.html',
    init(extra) {
        this.updater.set(extra.info);
    },
    render() {
        // 延迟显示loading动画
        setTimeout(() => {
            this.updater.digest();
        }, 1500)
    }
});