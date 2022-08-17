let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../../mx-loading/mask');


module.exports = Base.extend({
    tmpl: '@14.html',
    mixins: [Loading],
    render() {
        this.updater.digest();
    },
    'show<click>'(e) {
        let that = this;
        if (that.timer) {
            clearTimeout(that.timer);
        }

        that.showLoading({
            dark: false,
            content: '页面正在加载...'
        });
        that.timer = setTimeout(() => {
            that.hideLoading();
        }, 2000);
    }
});