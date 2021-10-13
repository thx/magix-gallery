let Magix = require('magix');
let Base = require('../mx-util/view');
let $ = require('$');
let CopyText = '复制代码';
let Chartx = require('./pro/chartpark/index');

module.exports = Base.extend({
    init() {
        let d = {};
        for (let i = 1; i < 20; i++) {
            d[`text${i}`] = CopyText;
        }
        this.updater.set(d);
    },
    'done<success>'(e) {
        let that = this;
        let id = e.params.id;
        let data = {};
        data['text' + id] = '<i class="mc-iconfont @scoped.style:desc-tip-icon">&#xe630;</i>复制成功';
        that.updater.digest(data);

        setTimeout(() => {
            data['text' + id] = CopyText;
            that.updater.digest(data);
        }, 1000);
    },
    getChartOptions(id) {
        return $.extend(true, {}, Chartx.getOptions(id))
    }
});