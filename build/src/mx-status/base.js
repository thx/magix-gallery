/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/base",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
module.exports = Magix.View.extend({
    init: function (e) {
        var list = e.list || [];
        var selected = e.selected || list[0].value;
        // 当前项在最前面
        var cur = {};
        for (var i = 0; i < list.length; i++) {
            if (list[i].value == selected) {
                cur = list[i];
                list.splice(i, 1);
                break;
            }
        }
        list.unshift(cur);
        // 只有一条数据时也是只读
        var readonly = (e.readonly + '' === 'true') || (list.length == 1);
        this.updater.set({
            list: list,
            cur: cur,
            readonly: readonly,
            show: false
        });
    },
    render: function () {
        this.updater.digest();
    },
    'select<click>': function (e) {
        var that = this;
        var item = e.params.item;
        var cur = that.updater.get('cur');
        if (cur.value == item.value) {
            return;
        }
        that.updater.digest({
            show: false
        });
        $('#' + that.id).trigger({
            type: 'change',
            status: item
        });
    },
    'over<mouseover>': function (event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }
        this.updater.digest({
            show: true
        });
    },
    'out<mouseout>': function (event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }
        this.updater.digest({
            show: false
        });
    }
});

});