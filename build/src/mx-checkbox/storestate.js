/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
        me['__ac'] = {};
        var ready = function (e) {
            var state = me['__ac'];
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
    clearStoreState: function (key) {
        var me = this;
        var store = this['__ac'];
        if (!key) {
            // 全部清空
            this['__ac'] = {};
            $('#' + me.id).find('input[linkage]').prop('checked', false);
            $('#' + me.id).find('input[linkage-parent]').prop('checked', false);
        }
        else {
            delete this['__ac'][key];
            $('#' + me.id).find('input[linkage="' + key + '"]').prop('checked', false);
            $('#' + me.id).find('input[linkage-parent="' + key + '"]').prop('checked', false);
        }
    },
    getStoreState: function (key) {
        var store = this['__ac'];
        var keys = [];
        var value;
        if (key) {
            value = store[key];
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
            var object = me['__ac'][linkName];
            if (!object) {
                object = me['__ac'][linkName] = {};
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
        var object = me['__ac'][linkName];
        if (!object) {
            object = me['__ac'][linkName] = {};
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