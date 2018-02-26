/*
ver:2.0.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@list.html',
    render() {
        let me = this;
        me.updater.digest();
    }
});