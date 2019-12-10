let $ = require('$');
let Magix = require('magix');

module.exports = {
    ctor() {
        let me = this;
        let maskId = me.id + '_loading';
        me.on('destroy', () => {
            me.hideLoading();

            let node = $('#' + maskId);
            if(node && node.length){
                node.remove();
            }

            let backNode = $('#' + maskId + '_mask');
            if(backNode && backNode.length){
                backNode.remove();
            }
        });
    },
    hideLoading() {
        let me = this;
        let maskId = me.id + '_loading';
        let node = me['@{loading.build}']();
        node.css({
            display: 'none'
        });

        let backNode = $('#' + maskId + '_mask');
        if(backNode.length > 0){
            backNode.css({
                display: 'none'
            });
        }
    }
};