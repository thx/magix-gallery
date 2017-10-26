/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../../mx-checkbox/linkage');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Linkage],
    render() {
        let me = this;
        me.updater.digest();
    }
});