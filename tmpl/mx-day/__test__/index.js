/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        let years = [];
        for (let i = 1996; i < 2020; i++) {
            years.push(i);
        }
        me.updater.digest({
            years
        });
    },
    'showDays<change>'(e){
        console.log(e.days);
    }
});