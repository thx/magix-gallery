/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            showProgress: false,
            percent: 0
        });
    },
    'showError<error>'(e) {
        console.log(e.error);
    },
    'showSuccess<success>'(e) {
        console.log(e.response);
    },
    'showProgress<progress>'(e) {
        this.updater.digest({
            percent: e.percent
        });
    },
    'showStart<start>'(e) {
        console.log(e);
    }
});