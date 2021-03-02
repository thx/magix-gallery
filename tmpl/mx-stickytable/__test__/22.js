/**
 * loading
 */
let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../../mx-loading/mask');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@22.html',
    mixins: [Loading],
    render() {
        this.updater.digest({
            index: 1
        });
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

            let { index } = that.updater.get();
            that.updater.digest({
                index: index + 1
            })
        }, 4000);
    }
});