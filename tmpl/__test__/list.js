/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@list.css');
module.exports = Magix.View.extend({
    tmpl: '@list.html',
    render() {
        let me = this;
        me.updater.digest();
    }
});