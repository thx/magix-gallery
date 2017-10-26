/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-pagination/index',["magix","$","mx-dropdown/index"],function(require,exports,module){
/*Magix,$*/
require("mx-dropdown/index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
var DefaultSizes = [10, 20, 30, 40, 50, 100];
Magix.applyStyle("w",".eb{color:#999}.ec{font-size:0}.ed,.ee{font-size:14px}.ee{margin:0 3px;text-decoration:none;border-radius:4px;text-align:center;min-width:35px;height:28px;line-height:28px;display:block}.ef{font-size:12px;top:-1px}.eg .ee{color:#fff;background-color:#6363e6}.eh .ee,.eh .ee:hover{color:#999;background:transparent;cursor:not-allowed}.ei{-webkit-transform:scaleX(-1);transform:scaleX(-1)}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"ag eb\">1\u001d</div>","subs":[{"keys":["simplify","mini"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if(!$$.simplify&&!$$.mini){%><span>当前第<b mx-guid=\"g1\u001f\">2\u001d</b>条，共<b mx-guid=\"g2\u001f\">3\u001d</b>条，每页展现</span><div mx-guid=\"g3\u001f\" style=\"width:70px\" class=\"t h\" mx-change=\"\u001f\u001e_cQ()\" mx-view=\"mx-dropdown/index?list=<%@$$.sizes%>&selected=<%@$$.size%>\"></div><span>条</span><%}%><ul mx-guid=\"g4\u001f\" class=\"ag aa ec\">5\u001d</ul>","s":"1\u001d"},{"keys":["startSpace","offsetStart","offsetEnd","endSpace"],"path":"b[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var a=$$.startSpace;a--;){%>&nbsp;&nbsp;<%}%><%=$$.offsetStart%> - <%=$$.offsetEnd%><%for(var b=$$.endSpace;b--;){%>&nbsp;&nbsp;<%}%>","s":"2\u001d"},{"keys":["total"],"path":"b[mx-guid=\"g2\u001f\"]","tmpl":"<%=$$.total%>","s":"3\u001d"},{"keys":["sizes","size"],"path":"div[mx-guid=\"g3\u001f\"]","pKeys":["simplify","mini"],"attr":"mx-view=\"mx-dropdown/index?list=<%@$$.sizes%>&selected=<%@$$.size%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["start","end","page","pages"],"path":"ul[mx-guid=\"g4\u001f\"]","pKeys":["simplify","mini"],"tmpl":"<li class=\"aa<%if($$.page==1){%> eh<%}%>\"><a class=\"ee _ ef\" href=\"#\" <%if($$.page>1){%> mx-click=\"\u001f\u001e_cP({page:<%=$$.page-1%>})\" <%}else{%> mx-click=\"\u001f\u001e_D()\" <%}%> title=\"&lt;\">&#xe61e;</a></li><%if($$.mini){%><li mx-guid=\"g7\u001f\" class=\"aa ed\">8\u001d</li><%}else{if($$.start>1){%><li class=\"aa\"><a class=\"ee\" href=\"#\" mx-click=\"\u001f\u001e_cP({page:1})\" title=\"1\">1</a></li><%}if($$.start>2){%><li class=\"eh aa\"><a class=\"ee\" href=\"#\" mx-click=\"\u001f\u001e_D()\" title=\"...\">...</a></li><%}for(var d=$$.start;d<=$$.end;d++){%><li class=\"aa<%if(d==$$.page){%> eg<%}%>\"><a class=\"ee\" href=\"#\" mx-click=\"\u001f\u001e_cP({page:<%=d%>})\" title=\"<%=d%>\"><%=d%></a></li><%}if($$.end+2<=$$.pages){%><li class=\"aa eh\"><a class=\"ee\" href=\"#\" mx-click=\"\u001f\u001e_D()\" title=\"...\">...</a></li><%}if($$.end<$$.pages){%><li class=\"aa\"><a mx-guid=\"g8\u001f\" class=\"ee\" href=\"#\" mx-click=\"\u001f\u001e_cP({page:<%=$$.pages%>})\" title=\"<%=$$.pages%>\">9\u001d</a></li><%}}%><li class=\"aa<%if($$.page==$$.pages){%> eh<%}%>\"><a class=\"ee _ ef ei\" href=\"#\" <%if($$.page<$$.pages){%> mx-click=\"\u001f\u001e_cP({page:<%=$$.page+1%>})\" <%}else{%> mx-click=\"\u001f\u001e_D()\" <%}%> title=\"&gt;\">&#xe61e;</a></li>","s":"5\u001d"},{"keys":["pageSpace"],"path":"li[mx-guid=\"g7\u001f\"]","pKeys":["simplify","mini","start","end","page","pages"],"tmpl":"<%for(var c=$$.pageSpace;c--;){%>&nbsp;&nbsp;<%}%><%=$$.page%> / <%=$$.pages%>","s":"8\u001d"},{"keys":["pages"],"path":"a[mx-guid=\"g8\u001f\"]","tmpl":"<%=$$.pages%>","s":"9\u001d","attr":"mx-click=\"\u001f\u001e_cP({page:<%=$$.pages%>})\" title=\"<%=$$.pages%>\"","attrs":[{"n":"mx-click"},{"n":"title","p":1}]}]},
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
        var info = me['_cO']();
        me.updater.digest(info);
    },
    '_cO': function () {
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
    '_u': function () {
        var me = this;
        var node = $('#' + me.id);
        var data = me.updater.get();
        node.trigger({
            type: 'change',
            page: data.page,
            size: data.size
        });
    },
    '_cP<click>': function (e) {
        e.preventDefault();
        var me = this;
        me.updater.set({
            page: e.params.page
        });
        me.render();
        me['_u']();
    },
    '_cQ<change>': function (e) {
        e.stopPropagation();
        var me = this;
        me.updater.set({
            page: 1,
            size: e.item
        });
        me.render();
        me['_u']();
    },
    '_D<click>': function (e) {
        e.preventDefault();
    }
});

});