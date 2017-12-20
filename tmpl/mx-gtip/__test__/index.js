/*
ver:1.3.9
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
    'rt<click>' () {
        this.gtipRT('右上角，消息内容' + Date.now());
    },
    'rb<click>' () {
        this.gtipRB('右下角，消息内容' + Date.now());
    },
    'lt<click>' () {
        this.gtipLT('左上角，消息内容' + Date.now());
    },
    'lb<click>' () {
        this.gtipLB('左下角，消息内容' + Date.now());
    },
    'rtt<click>' (e) {
        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);
    }
});