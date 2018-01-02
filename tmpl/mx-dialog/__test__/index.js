/*
ver:2.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest();
    },
    'view<click>' () {
        this.mxDialog('@moduleId', {
            inDialog: true,
            width: 600
        });
    }
});