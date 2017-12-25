/*
ver:1.3.10
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../linkage');
let GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@linkage.html',
    mixins: [Linkage, GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showEx1<click>' () {
        this.gtipRT(this.getSelectedIds('example1'));
    }
});