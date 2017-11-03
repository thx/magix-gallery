/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@rangepicker.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>' (e) {
        console.log(e.dates);
        this.gtipRT('日期：' + JSON.stringify(e.dates));
    }
});