let Magix = require('magix');
let Base = require('../mx-util/view');
let Form = require('../mx-form/index');
let Validator = require('../mx-form/validator');
let $ = require('$');
let CopyText = '复制代码';
let Chartx = require('./pro/chartpark/index');

module.exports = Base.extend({
    mixins: [Form, Validator],
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
        data['text' + id] = '<i class="mx-iconfont color-green">&#xe71a;</i>复制成功';
        that.updater.digest(data);

        setTimeout(() => {
            data['text' + id] = CopyText;
            that.updater.digest(data);
        }, 1000);
    },
    getChartOptions(id) {
        return $.extend(true, {}, Chartx.getOptions(id))
    },
    getCssVar(key, def) {
        let root = window.getComputedStyle(document.documentElement);
        let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
        if (!v) {
            return def || '';
        } else {
            return v.trim();
        }
    },
});