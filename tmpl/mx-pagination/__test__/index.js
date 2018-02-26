/*
ver:2.0.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            page: 1
        });
    },
    'show<change>'(e) {
        console.log(e.page, e.size);
    },
    'test<click>'(e) {
        let page = this.updater.get('page');
        this.updater.digest({
            page: page + 1
        });
    }
});