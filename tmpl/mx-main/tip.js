let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@tip.less');

module.exports = Magix.View.extend({
    tmpl: '@tip.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        let data = extra.data || {};
        this.updater.set(data);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});