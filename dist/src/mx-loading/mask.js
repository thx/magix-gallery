let $ = require('$');
let Magix = require('magix');
Magix.applyStyle('@index.less');
let Tmpl = '@mask.html';

let Base = require('./base');
module.exports = Magix.mix({
    '@{loading.build}'() {
        let me = this;
        let maskId = me.id + '_loading';
        let node = $('#' + maskId);
        if (!node.length) {
            let tmpl = $.isFunction(Tmpl) ? Tmpl({
                id: maskId
            }, me.id) : Tmpl;
            $(document.body).append(tmpl);
            node = $('#' + maskId);
        }
        return node;
    },
    showLoading() {
        let me = this;
        let node = me['@{loading.build}']();
        node.show();
    },
}, Base)
