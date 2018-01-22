/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/index",["magix","$","mx-dropdown/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dropdown/index");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var DefaultSizes = [10, 20, 30, 40, 50, 100];
Magix.applyStyle("_C","._el{color:#999}._em{font-size:0}._en,._eo{font-size:14px}._eo{margin:0 3px;text-decoration:none;border-radius:4px;text-align:center;min-width:35px;height:28px;line-height:28px;display:block}._ep{font-size:12px;top:-1px}._eq ._eo{color:#fff;background-color:#f96447}._er ._eo,._er ._eo:hover{color:#999;background:transparent;cursor:not-allowed}._es{-webkit-transform:scaleX(-1);transform:scaleX(-1)}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_ai _el\"><%if(!$$.simplify&&!$$.mini){%><span>当前第<b><%for(var _=$$.startSpace;_--;){%>&nbsp;&nbsp;<%}%><%=$$.offsetStart%> - <%=$$.offsetEnd%><%for(var a=$$.endSpace;a--;){%>&nbsp;&nbsp;<%}%></b>条，共<b><%=$$.total%></b>条，每页展现</span><div style=\"width:70px\" class=\"_t _h\" mx-change=\"\u001f\u001e__ea()\" mx-view=\"mx-dropdown/index?list=<%@$$.sizes%>&selected=<%@$$.size%>\"></div><span>条</span><%}%><ul class=\"_ai _ac _em\"><li class=\"_ac<%if($$.page==1){%> _er<%}%>\"><a class=\"_eo __ _ep\" href=\"#\" mx-click=\"\u001f\u001e<%if($$.page>1){%>__e_({page:<%=$$.page-1%>})<%}else{%>__E()<%}%>\" title=\"&lt;\">&#xe61e;</a></li><%if($$.mini){%><li class=\"_ac _en\"><%for(var b=$$.pageSpace;b--;){%>&nbsp;&nbsp;<%}%><%=$$.page%> / <%=$$.pages%></li><%}else{if($$.start>1){%><li class=\"_ac\"><a class=\"_eo\" href=\"#\" mx-click=\"\u001f\u001e__e_({page:1})\" title=\"1\">1</a></li><%}if($$.start>2){%><li class=\"_er _ac\"><a class=\"_eo\" href=\"#\" mx-click=\"\u001f\u001e__E()\" title=\"...\">...</a></li><%}for(var c=$$.start;c<=$$.end;c++){%><li class=\"_ac<%if(c==$$.page){%> _eq<%}%>\"><a class=\"_eo\" href=\"#\" mx-click=\"\u001f\u001e__e_({page:<%=c%>})\" title=\"<%=c%>\"><%=c%></a></li><%}if($$.end+2<=$$.pages){%><li class=\"_ac _er\"><a class=\"_eo\" href=\"#\" mx-click=\"\u001f\u001e__E()\" title=\"...\">...</a></li><%}if($$.end<$$.pages){%><li class=\"_ac\"><a class=\"_eo\" href=\"#\" mx-click=\"\u001f\u001e__e_({page:<%=$$.pages%>})\" title=\"<%=$$.pages%>\"><%=$$.pages%></a></li><%}}%><li class=\"_ac<%if($$.page==$$.pages){%> _er<%}%>\"><a class=\"_eo __ _ep _es\" href=\"#\" mx-click=\"\u001f\u001e<%if($$.page<$$.pages){%>__e_({page:<%=$$.page+1%>})<%}else{%>__E()<%}%>\" title=\"&gt;\">&#xe61e;</a></li></ul></div>"},
    init: function (extra) {
        var me = this;
        me.updater.set({
            sizes: DefaultSizes
        });
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        var total = (ops.total | 0) || 0;
        var size = ops.size || 20;
        var page = ops.page || 1;
        me.updater.set({
            step: ops.step || 7,
            simplify: (ops.simplify + '') === 'true',
            mini: (ops.mini + '') === 'true',
            page: page,
            total: total,
            size: size
        });
        return true;
    },
    render: function () {
        var me = this;
        var info = me['__dZ']();
        me.updater.digest(info);
    },
    '__dZ': function () {
        var me = this;
        var data = me.updater.get();
        var page = data.page | 0;
        var pages = Math.ceil((data.total || 1) / data.size);
        if (page > pages)
            page = pages;
        var step = data.step | 0;
        var middle = step / 2 | 0;
        var start = Math.max(1, page - middle);
        var end = Math.min(pages, start + step - 1);
        start = Math.max(1, end - step + 1);
        var offset;
        if (start <= 2) {
            offset = 3 - start;
            if (end + offset < pages) {
                end += offset;
            }
        }
        if (end + 2 > pages) {
            offset = 2 - (pages - end);
            if ((start - offset) > 1) {
                start -= offset;
            }
        }
        if (start == 3) {
            start -= 1;
        }
        if (end + 2 == pages) {
            end += 1;
        }
        var offsetStart = (page - 1) * data.size + 1;
        var offsetEnd = Math.min(data.total, page * data.size);
        return {
            pages: pages,
            offsetStart: offsetStart,
            offsetEnd: offsetEnd,
            startSpace: (data.total + '').length - (offsetStart + '').length,
            endSpace: (data.total + '').length - (offsetEnd + '').length,
            pageSpace: (pages + '').length - (page + '').length,
            page: page,
            start: start,
            end: end
        };
    },
    '__v': function () {
        var me = this;
        var node = $('#' + me.id);
        var data = me.updater.get();
        node.trigger({
            type: 'change',
            page: data.page,
            size: data.size
        });
    },
    '__e_<click>': function (e) {
        e.preventDefault();
        var me = this;
        me.updater.set(e.params);
        me.render();
        me['__v']();
    },
    '__ea<change>': function (e) {
        e.stopPropagation();
        var me = this;
        me.updater.set({
            page: 1,
            size: e.item
        });
        me.render();
        me['__v']();
    },
    '__E<click>': function (e) {
        e.preventDefault();
    }
});

});