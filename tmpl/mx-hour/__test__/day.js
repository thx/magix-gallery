/*
ver:2.0.3
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@day.html',
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>'(e) {
        console.log(e);
    }
});