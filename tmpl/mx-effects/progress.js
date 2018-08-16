let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@progress.less');
let ClassNames = {
    left: '@progress.less:num-left',
    right: '@progress.less:num-right',
    top: '@progress.less:num-top',
    bottom: '@progress.less:num-bottom'
}

module.exports = Magix.View.extend({
    tmpl: '@progress.html',
    init(e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign(e) {
        let that = this;
        let altered = that.updater.altered();

        let placement = (e.textPlacement || 'top');
        let color = e.color || '';
        let num = +e.num || 0;
        let s = num + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        // 最多保留两位小数
        if (i > 2) {
            i = 2;
        }

        if (num < 0) {
            num = 0;
        }

        if (num > 100) {
            num = 100;
        }

        that.updater.set({
            placement,
            num: num.toFixed(i) + '%',
            cName: ClassNames[placement],
            color
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