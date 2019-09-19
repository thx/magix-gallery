let $ = require('$');
let Magix = require('magix');
module.exports = {
    ctor() {
        let me = this;
        me['@{state.store}'] = {};
        let ready = e => {
            let state = me['@{state.store}'];
            let ipts = $('#' + (e.id || me.id) + ' input[linkage-parent]');
            ipts.each((idx, item) => {
                let linkName = $(item).attr('linkage-parent');
                let object = state[linkName] || (state[linkName] = {});
                if (item.checked) {
                    object[item.value] = 1;
                } else {
                    if (object && object[item.value] == 1) {
                        item.checked = true;
                    } else {
                        item.checked = false;
                    }
                }
            });
        };
        me.on('domready', ready);
    },
    clearStoreState(parent, child){
        let me = this;
        let store = this['@{state.store}'];

        if(!parent){
            // 全部清空
            this['@{state.store}'] = {};
            $('#' + me.id).find('input[linkage]').prop('checked', false);
            $('#' + me.id).find('input[linkage-parent]').prop('checked', false);
        }else{
            if(!child){
                // 清空某一个父节点
                delete this['@{state.store}'][parent];
                $('#' + me.id).find(`input[linkage="${parent}"]`).prop('checked', false);
                $('#' + me.id).find(`input[linkage-parent="${parent}"]`).prop('checked', false);
            }else{
                // 清空某一个子节点
                delete this['@{state.store}'][parent][child];
                let childNode = $('#' + me.id).find(`input[linkage-parent="${parent}"][value="${child}"]`);
                if(childNode[0].checked){
                    childNode.prop('checked', false)
                    childNode.trigger('change');
                }
            }
        }
    },
    getStoreState(parent) {
        let store = this['@{state.store}'];
        let keys = [];
        let value;
        if (parent) {
            value = store[parent];
            if (value) {
                keys = Magix.keys(value);
            }
        } else {
            for (let p in store) {
                value = store[p];
                if (value) {
                    keys = keys.concat(Magix.keys(value));
                }
            }
        }
        return keys;
    },
    '$input[linkage-parent]<change>' (e) {
        let me = this;
        let node = $(e.eventTarget);
        let value = node.val();
        let linkName = node.attr('linkage-parent');
        if (value) {
            let object = me['@{state.store}'][linkName];
            if (!object) {
                object = me['@{state.store}'][linkName] = {};
            }
            if (!node[0].disabled && node[0].checked) {
                object[value] = 1;
            } else {
                delete object[value];
            }
        }
    },
    '$input[linkage]<change>' (e) {
        let me = this;
        let linkName = $(e.eventTarget).attr('linkage');
        let object = me['@{state.store}'][linkName];
        if (!object) {
            object = me['@{state.store}'][linkName] = {};
        }
        $('#' + me.id + ' input[type=checkbox]').each((index, input) => {
            input = $(input);
            let tempName = input.attr('linkage-parent');
            let value = input.val();
            if (value && (tempName == linkName)) {
                if(input[0].disabled){
                    delete object[value];
                }else{
                    if (e.target.checked) {
                        object[value] = 1;
                    } else {
                        delete object[value];
                    }
                }
            }
        });
    }
};