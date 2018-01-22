/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let MLoading = require('../mask');
module.exports = Magix.View.extend({
    tmpl: '@mask.html',
    mixins: [MLoading],
    init() {
        this.count = 1;
    },
    render() {
        let me = this;
        setTimeout(me.wrapAsync(() => {
            me.updater.digest({
                count: this.count++
            });
        }), 2e3);
    },
    'refresh<click>' () {
        this.render();
    }
});