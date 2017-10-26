/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-checkbox/storestate',["$","magix"],function(require,exports,module){
/*$,Magix*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var $ = require('$');
var Magix = require('magix');
module.exports = {
    ctor: function () {
        var me = this;
        me['_V'] = {};
        me.on('rendered', function (e) {
            var state = me['_V'];
            var ipts = $('#' + e.id + ' input[linkage-parent]');
            ipts.each(function (idx, item) {
                var linkName = $(item).attr('linkage-parent');
                var object = state[linkName];
                if (object && object[item.value] == 1) {
                    item.checked = true;
                }
                else {
                    item.checked = false;
                }
            });
        });
    },
    getStoreState: function (key) {
        var store = this['_V'];
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
            var object = me['_V'][linkName];
            if (!object) {
                object = me['_V'][linkName] = {};
            }
            if (node.prop('checked')) {
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
        var object = me['_V'][linkName];
        if (!object) {
            object = me['_V'][linkName] = {};
        }
        $('#' + me.id + ' input[type=checkbox]').each(function (index, input) {
            input = $(input);
            var tempName = input.attr('linkage-parent');
            var value = input.val();
            if (value && tempName == linkName) {
                if (e.target.checked) {
                    object[value] = 1;
                }
                else {
                    delete object[value];
                }
            }
        });
    }
};

});