/*
ver:1.3.9
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@range.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            vertical: true
        });
    },
    'showValue<change>'(e) {
        this.gtipRT('value:' + e.value);
    }
});