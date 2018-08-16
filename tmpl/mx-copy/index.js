'top@./vendor/clipboard.js';
let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me.assign(extra);
        let owner = $('#' + me.id);
        let clipboard = new window.Clipboard(owner[0], {
            target() {
                return Magix.node(me['@{copy.node}']);
            }
        });
        clipboard.on('success', (e) => {
            e.clearSelection();
            owner.trigger('success');
        });
        clipboard.on('error', () => {
            owner.trigger('error');
        });
        me.capture('@{clipboard}', clipboard);
    },
    assign(ops) {
        this['@{copy.node}'] = ops.copyNode;
        return true;
    }
});