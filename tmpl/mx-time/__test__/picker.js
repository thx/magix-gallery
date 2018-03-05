/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let c = 10;
module.exports = Magix.View.extend({
    tmpl: '@picker.html',
    render() {
        let me = this;
        me.updater.digest({
            time: '18:00:30'
        });
    },
    'update<click>'() {
        this.updater.digest({
            time: '19:00:' + c++
        });
    }
});