/*
ver:2.0.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'done<success>'() {
        this.gtipRT('复制成功～');
    },
    'bad<error>'() {
        this.gtipRT('复制失败～');
    }
});