let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../../mx-loading/mask');

module.exports = Base.extend({
    tmpl: '@15.html',
    mixins: [Loading],
    render() {
        this.updater.digest({
            line: 3
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
            let line = that.updater.get('line');
            that.updater.digest({
                line: line * 2
            })
            that.hideLoading();
        }, 4000);
    }
});