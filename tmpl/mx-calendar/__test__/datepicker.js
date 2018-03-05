/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@datepicker.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>' (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});