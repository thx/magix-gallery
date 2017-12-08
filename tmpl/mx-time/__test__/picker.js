/*
ver:1.3.8
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