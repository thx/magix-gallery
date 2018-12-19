/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/base",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
module.exports = Magix.View.extend({
    init: function (e) {
        var opers = e.opers || [];
        var selected = e.selected || (opers[0] || '').value;
        // 当前项在最前面
        var cur = {};
        if (opers.length > 0) {
            for (var i = 0; i < opers.length; i++) {
                if (opers[i].value == selected) {
                    cur = opers[i];
                    opers.splice(i, 1);
                    break;
                }
            }
            opers.unshift(cur);
        }
        // 提示信息
        var info = e.info || {};
        var showInfo = false;
        if (!$.isEmptyObject(info)) {
            showInfo = true;
        }
        this.updater.set({
            info: info,
            opers: opers,
            cur: cur,
            showInfo: showInfo,
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