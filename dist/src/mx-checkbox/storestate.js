/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/storestate",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

var $ = require("$");
var Magix = require("magix");
module.exports = {
    ctor: function () {
        var me = this;
        me['@{state.store}'] = {};
        var ready = function (e) {
            var state = me['@{state.store}'];
            var ipts = $('#' + (e.id || me.id) + ' input[linkage-parent]');
            ipts.each(function (idx, item) {
                var linkName = $(item).attr('linkage-parent');
                var object = state[linkName] || (state[linkName] = {});
                if (item.checked) {
                    object[item.value] = 1;
                }
                else {
                    if (object && object[item.value] == 1) {
                        item.checked = true;
                    }
                    else {
                        item.checked = false;
                    }
                }
            });
        };
        me.on('domready', ready);
    },
    clearStoreState: function (parent, child) {
        var me = this;
        var store = this['@{state.store}'];
        if (!parent) {
            // 全部清空
            this['@{state.store}'] = {};
            $('#' + me.id).find('input[linkage]').prop('checked', false);
            $('#' + me.id).find('input[linkage-parent]').prop('checked', false);
        }
        else {
            if (!child) {
                // 清空某一个父节点
                delete this['@{state.store}'][parent];
                $('#' + me.id).find("input[linkage=\"" + parent + "\"]").prop('checked', false);
                $('#' + me.id).find("input[linkage-parent=\"" + parent + "\"]").prop('checked', false);
            }
            else {
                // 清空某一个子节点
                delete this['@{state.store}'][parent][child];
                var childNode = $('#' + me.id).find("input[linkage-parent=\"" + parent + "\"][value=\"" + child + "\"]");
                if (childNode[0].checked) {
                    childNode.prop('checked', false);
                    childNode.trigger('change');
                }
            }
        }
    },
    getStoreState: function (parent) {
        var store = this['@{state.store}'];
        var keys = [];
        var value;
        if (parent) {
            value = store[parent];
            if (value) {
                keys = Magix.keys(value);
            }
        }
        else {
            for (var p in store) {
                value = store[p];
                if (value) {
                    keys = keys.concat(Magix.keys(value));
                }
            }
        }
        return keys;
    },
    '$input[linkage-parent]<change>': function (e) {
        var me = this;
        var node = $(e.eventTarget);
        var value = node.val();
        var linkName = node.attr('linkage-parent');
        if (value) {
            var object = me['@{state.store}'][linkName];
            if (!object) {
                object = me['@{state.store}'][linkName] = {};
            }
            if (!node[0].disabled && node[0].checked) {
                object[value] = 1;
            }
            else {
                delete object[value];
            }
        }
    },
    '$input[linkage]<change>': function (e) {
        var me = this;
        var linkName = $(e.eventTarget).attr('linkage');
        var object = me['@{state.store}'][linkName];
        if (!object) {
            object = me['@{state.store}'][linkName] = {};
        }
        $('#' + me.id + ' input[type=checkbox]').each(function (index, input) {
            input = $(input);
            var tempName = input.attr('linkage-parent');
            var value = input.val();
            if (value && (tempName == linkName)) {
                if (input[0].disabled) {
                    delete object[value];
                }
                else {
                    if (e.target.checked) {
                        object[value] = 1;
                    }
                    else {
                        delete object[value];
                    }
                }
            }
        });
    }
};

});