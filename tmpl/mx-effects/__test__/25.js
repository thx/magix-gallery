let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@25.html',
    render() {
        let that = this;
        that.updater.digest({
            num: 40
        });

        // that['@{interval.timer}'] = setInterval(that.wrapAsync(() => {
        //     let { num } = that.updater.get();
        //     if (num >= 100) {
        //         clearInterval(that['@{interval.timer}']);
        //     } else {
        //         num += 10;
        //         that.updater.digest({
        //             num
        //         })
        //     }
        // }), 200);
    }
});