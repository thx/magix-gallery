/*
ver:2.0.3
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.css');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>'() {
        $('#' + this.id + ' button').invokeView('@{hide}');
    }
});