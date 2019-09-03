/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/linkage",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

var $ = require("$");
var Magix = require("magix");
var FindNames = function (node) {
    node = $(node);
    var subs = node.find('input[linkage-parent]');
    var names = {};
    subs.each(function (idx, item) {
        var name = $(item).attr('linkage-parent');
        names[name] = 1;
    });
    node.find('input[linkage]').each(function (idx, item) {
        var name = $(item).attr('linkage');
        names[name] = 1;
    });
    return Magix.keys(names);
};
var SyncState = function (node, checkbox, name) {
    var all = node.find('input[linkage=' + name + ']');
    var subs = node.find('input[linkage-parent=' + name + ']');
    var parentToggle, //是否为父节点触发变化 
    parentChecked = all[0].checked; //父节点选中状态
    if (checkbox) {
        // 某个checkbox状态变化触发
        // 判断为父节点还是子节点
        parentToggle = (all[0] == checkbox);
    }
    else {
        // 默认由parent的初始化状态控制
        parentToggle = all[0].checked;
    }
    var subLen = subs.length, enabledLen = 0;
    disabledLen = 0,
        checkedLen = 0;
    subs.each(function (index, item) {
        if (!item.disabled) {
            if (parentToggle) {
                item.checked = parentChecked;
            }
            if (item.checked) {
                checkedLen++;
            }
            enabledLen++;
        }
        else {
            disabledLen++;
        }
    });
    all.prop('checked', (checkedLen == enabledLen) && (checkedLen > 0) && (enabledLen > 0));
    all.prop('indeterminate', (checkedLen < enabledLen) && (checkedLen > 0) && (enabledLen > 0));
    all.prop('disabled', (disabledLen == subLen || subs.length == 0));
};
var ApplyTableCheckbox = function (node, checkbox) {
    node = $(node);
    var names = FindNames(node);
    if (names.length) {
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var name = names_1[_i];
            SyncState(node, checkbox, name);
        }
    }
};
module.exports = {
    ctor: function () {
        var me = this;
        me.on('rendered', function () {
            ApplyTableCheckbox('#' + me.id);
        });
        me.on('domready', function () {
            ApplyTableCheckbox('#' + me.id);
        });
        if (DEBUG) {
            var mixins = me.mixins;
            var linkageBeforeState = false;
            var findLinkage = false;
            for (var _i = 0, mixins_1 = mixins; _i < mixins_1.length; _i++) {
                var m = mixins_1[_i];
                if (m.getSelectedIds) {
                    findLinkage = true;
                }
                else if (m.getStoreState) {
                    if (findLinkage) {
                        linkageBeforeState = true;
                    }
                }
            }
            if (linkageBeforeState) {
                console.error('put `app/gallery/mx-checkbox/storestate` before `app/gallery/mx-checkbox/linkage`');
            }
        }
    },
    getSelectedIds: function (name) {
        var ids = [];
        $('#' + this.id + ' input:checked').each(function (idx, input) {
            var value = input.value;
            var node = $(input);
            var pName = node.attr('linkage-parent');
            if (pName && value && (!name || (name && name == pName))) {
                ids.push(input.value);
            }
        });
        return ids;
    },
    '$input[linkage-parent]<change>': function (e) {
        ApplyTableCheckbox('#' + this.id, e.eventTarget);
    },
    '$input[linkage]<change>': function (e) {
        ApplyTableCheckbox('#' + this.id, e.eventTarget);
    }
};

});