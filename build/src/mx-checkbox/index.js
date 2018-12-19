/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    init: function (extra) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var checked = (extra.checked + '') === 'true';
        var disabled = (extra.disabled + '') === 'true';
        var indeterminate = (extra.indeterminate + '') === 'true';
        that.updater.set({
            checked: checked,
            disabled: disabled,
            indeterminate: indeterminate
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest({});
        var data = this.updater.get();
        var node = $('#' + this.id);
        ['checked', 'disabled', 'indeterminate'].forEach(function (key) {
            node.prop(key, data[key]);
        });
    }
});

});