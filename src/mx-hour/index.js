/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/index',["magix","../mx-dragdrop/index","$"],function(require,exports,module){
/*Magix,DD,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
Magix.applyStyle("r",".dh{height:60px;padding:5px 0}.di{position:relative;width:4%;height:100%}.di,.dj{display:inline-block}.dj{width:1px;height:20%;border-left:1px solid #e6e6e6;position:absolute;left:0;top:30%}.dk,.dl .dj{height:40%}.dk{position:absolute;left:0;top:30%;display:inline-block;width:100%;z-index:1}.dm .dk{background-color:#6363e6;opacity:.3}.dn,.do{display:none;position:absolute;background-color:#6363e6;font-size:10px;width:36px;height:15px;text-align:center;color:#fff;border-radius:2px;z-index:2}.do{left:-18px;top:35px}.dn{right:-18px;top:0}.dp{position:absolute;left:50%;width:0;height:0;margin-left:-3px;border-left:3px solid transparent;border-right:3px solid transparent}.do .dp{border-bottom:3px solid #6363e6;top:-3px}.dn .dp{border-top:3px solid #6363e6;bottom:-3px}");
var DD = require('../mx-dragdrop/index');
var $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"dh\"><%for(var a=0;a<24;a++){%><div class=\"di<%if(a%6===0){%> dl<%}%>\" mx-mousedown=\"\u001f\u001e_ao()\" mx-mouseover=\"\u001f\u001e_ca()\"><div class=\"dj\"></div><div class=\"dk\"></div><div class=\"do\"><div class=\"dp\"></div><span><%=a%>:00</span></div><div class=\"dn\"><div class=\"dp\"></div><span><%=a+1%>:00</span></div></div><%}%><div class=\"di dl\"><div class=\"dj\"></div></div></div>","subs":[]},
    init: function (extra) {
        var me = this;
        me['_bY'] = extra.range;
    },
    render: function () {
        var me = this;
        me.updater.digest();
        me['_bW'] = $('#' + me.id + ' .di');
        if (me['_bY']) {
            me.val(me['_bY']);
        }
    },
    '_bZ': function () {
        var me = this;
        var hours = me['_bW'];
        hours.each(function (idx, item) {
            item = $(item);
            var start = item.find('.do');
            var end = item.find('.dn');
            if (!item.hasClass('dm')) {
                start.hide();
                end.hide();
            }
            else {
                start[item.prev().hasClass('dm') ? 'hide' : 'show']();
                end[item.next().hasClass('dm') ? 'hide' : 'show']();
            }
        });
    },
    val: function (str) {
        var me = this;
        var hours = me['_bW'];
        if (str || str === '') {
            hours.each(function (idx, item) {
                item = $(item);
                if (str.charAt(idx) == '1') {
                    item.addClass('dm');
                }
                else {
                    item.removeClass('dm');
                }
            });
            me['_bZ']();
        }
        else {
            str = [];
            hours.each(function (idx, item) {
                item = $(item);
                if (idx < 24)
                    str.push(item.hasClass('dm') ? 1 : 0);
            });
            str = str.join('');
        }
        return str;
    },
    '_ao<mousedown>': function (e) {
        var me = this;
        var current = $(e.eventTarget);
        var active = current.hasClass('dm');
        current.toggleClass('dm');
        me['_bZ']();
        $('#' + me.id).trigger({
            type: 'change',
            range: me.val()
        });
        me['_c_'] = active;
        me['_ar'] = true;
        DD.begin(e.target, function () {
            DD.clear();
        }, function () {
            delete me['_ar'];
        });
    },
    '_ca<mouseover>': function (e) {
        var me = this;
        if (me['_ar']) {
            var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
            if (flag) {
                var current = $(e.eventTarget);
                current[me['_c_'] ? 'removeClass' : 'addClass']('dm');
                me['_bZ']();
                $('#' + me.id).trigger({
                    type: 'change',
                    range: me.val()
                });
            }
        }
    }
}, {
    improve: function (str) {
        if (!str) {
            str = '';
        }
        var start = 0;
        var end = 24;
        while (start < end) {
            if (!str.charAt(start)) {
                str += '0';
            }
            start++;
        }
        return str;
    }
});

});