/*
ver:2.0.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: '@sub.html',
    mixins: [Form],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        console.log(me.updater.get());
        me.updater.digest();
    }
});