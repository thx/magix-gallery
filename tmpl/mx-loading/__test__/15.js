let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../../mx-loading/mask');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@15.html',
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
            sizzle: `#${that.id}_table`
        });
        
        that.timer = setTimeout(() => {
            that.hideLoading();
        }, 4000);
    }
});