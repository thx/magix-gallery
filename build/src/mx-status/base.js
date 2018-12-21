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
        this.viewOptions = e;
    },
    render: function () {
        var viewOptions = this.viewOptions;
        var opers = viewOptions.opers || [];
        var selected = viewOptions.selected || (opers[0] || '').value;
        this.update(selected);
    },
    update: function (selected) {
        var viewOptions = this.viewOptions;
        var opers = viewOptions.opers || [];
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
        var info = viewOptions.info || {};
        var showInfo = false;
        if (!$.isEmptyObject(info)) {
            showInfo = true;
        }
        this.updater.digest({
            info: info,
            opers: opers,
            cur: cur,
            showInfo: showInfo,
            show: false
        });
    },
    'select<click>': function (e) {
        var that = this;
        var item = e.params.item;
        var cur = that.updater.get('cur');
        if (cur.value == item.value) {
            return;
        }
        that.update(item.value);
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