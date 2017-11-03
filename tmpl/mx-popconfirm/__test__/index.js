/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../../mx-checkbox/linkage');
let GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Linkage,GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'del<enter>' (e) {
        this.gtipRT('delete:' + e.params.id);
    }
});