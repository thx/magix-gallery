/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@week.html',
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>'(e) {
        console.log(e);
    }
});