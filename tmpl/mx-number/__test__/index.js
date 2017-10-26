/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>' (e) {
        this.gtipRT('当前值：' + e.eventTarget.value);
    }
});