/*
ver:2.0.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let GTip = require('mx-gtip/index');
let Tips = ['非常不好', '很不好', '一般般', '很好', '非常好'];
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            ratingMsg: '',
            ratingValue: 0
        });
    },
    'over<itemover>'(e) {
        let tip = Tips[e.value - 1];
        this.updater.digest({
            ratingMsg: tip
        });
    },
    'out<itemout>'(e) {
        let tip = Tips[e.value - 1] || '';
        this.updater.digest({
            ratingMsg: tip
        });
    },
    'showValue<change>'(e) {
        this.gtipRT('当前值：' + e.value);
        this.updater.set({
            ratingValue: e.value
        });
    },
    'clear<click>'() {
        this.updater.digest({
            ratingMsg: '',
            ratingValue: 0
        });
    }
});