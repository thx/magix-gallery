/*
ver:1.3.9
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@picker.html',
    render() {
        let me = this;
        me.updater.digest();
    }
});