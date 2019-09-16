/*md5:15df7ba31b0836e9565bacc5efc0f392*/
let Magix = require('magix');
let $ = require('$');
let CSSVarUtil = require('@../mx-util/css-var');
Magix.applyStyle('@star.less');

module.exports = Magix.View.extend({
    tmpl: '@star.html',
    init(e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign(e) {
        let that = this;
        let altered = that.updater.altered();

        // num: 0, 0.5, 1 ... 4, 4.5, 5，
        // 最大值不超过count
        let num = +e.num || 0,
            count = +e.count || 5;  // icon个数
        let s = num + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        // 取半
        if (i > 0) {
            num = Math.floor(num) + 0.5;
        }
        if (num < 0) {
            num = 0;
        }
        if (num > count) {
            num = count;
        }

        that.updater.set({
            outerWidth: 24 * num,
            innerWidth: 24 * count,
            count,
            color: e.color || CSSVarUtil.get('--color-brand', '#4d7fff'),
            icon: e.icon || '<i class="mc-iconfont">&#xe60f;</i>'
        });

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();
    }
});