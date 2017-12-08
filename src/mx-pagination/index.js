/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-pagination/index',["magix","$","mx-dropdown/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dropdown/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let DefaultSizes = [10, 20, 30, 40, 50, 100];
Magix.applyStyle("__mx-pagination_index_",".__mx-pagination_index_-pager {\n  color: #999;\n}\n.__mx-pagination_index_-fz0 {\n  font-size: 0;\n}\n.__mx-pagination_index_-fz {\n  font-size: 14px;\n}\n.__mx-pagination_index_-num-item {\n  margin: 0 3px;\n  text-decoration: none;\n  border-radius: 4px;\n  text-align: center;\n  min-width: 35px;\n  height: 28px;\n  line-height: 28px;\n  display: block;\n  font-size: 14px;\n}\n.__mx-pagination_index_-icon {\n  font-size: 12px;\n  top: -1px;\n}\n.__mx-pagination_index_-active .__mx-pagination_index_-num-item {\n  color: #fff;\n  background-color: #f96447;\n}\n.__mx-pagination_index_-notallowed .__mx-pagination_index_-num-item,\n.__mx-pagination_index_-notallowed .__mx-pagination_index_-num-item:hover {\n  color: #999;\n  background: transparent;\n  cursor: not-allowed;\n}\n.__mx-pagination_index_-rotate180 {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-clearfix __mx-pagination_index_-pager\">1\u001d</div>","subs":[{"keys":["simplify","mini"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if(!$$.simplify&&!$$.mini){%><span>当前第<b mx-guid=\"g1\u001f\">2\u001d</b>条，共<b mx-guid=\"g2\u001f\">3\u001d</b>条，每页展现</span><div mx-guid=\"g3\u001f\" style=\"width:70px\" class=\"__mx-style_index_-ml10 __mx-style_index_-mr10\" mx-change=\"\u001f\u001e@{changeSize}()\" mx-view=\"mx-dropdown/index?list=<%@$$.sizes%>&selected=<%@$$.size%>\"></div><span>条</span><%}%><ul mx-guid=\"g4\u001f\" class=\"__mx-style_index_-clearfix __mx-style_index_-ib __mx-pagination_index_-fz0\">5\u001d</ul>","s":"1\u001d"},{"keys":["startSpace","offsetStart","offsetEnd","endSpace"],"path":"b[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var i_1=$$.startSpace;i_1--;){%>&nbsp;&nbsp;<%}%><%=$$.offsetStart%> - <%=$$.offsetEnd%><%for(var i_2=$$.endSpace;i_2--;){%>&nbsp;&nbsp;<%}%>","s":"2\u001d"},{"keys":["total"],"path":"b[mx-guid=\"g2\u001f\"]","tmpl":"<%=$$.total%>","s":"3\u001d"},{"keys":["sizes","size"],"path":"div[mx-guid=\"g3\u001f\"]","pKeys":["simplify","mini"],"attr":"mx-view=\"mx-dropdown/index?list=<%@$$.sizes%>&selected=<%@$$.size%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["start","end","page","pages"],"path":"ul[mx-guid=\"g4\u001f\"]","pKeys":["simplify","mini"],"tmpl":"<li class=\"__mx-style_index_-ib<%if($$.page==1){%> __mx-pagination_index_-notallowed<%}%>\"><a class=\"__mx-pagination_index_-num-item __mx-style_index_-mc-iconfont __mx-pagination_index_-icon\" href=\"#\" mx-click=\"\u001f\u001e<%if($$.page>1){%>@{toPage}({page:<%=$$.page-1%>})<%}else{%>@{prevent}()<%}%>\" title=\"&lt;\">&#xe61e;</a></li><%if($$.mini){%><li mx-guid=\"g7\u001f\" class=\"__mx-style_index_-ib __mx-pagination_index_-fz\">8\u001d</li><%}else{%> <%if($$.start>1){%><li class=\"__mx-style_index_-ib\"><a class=\"__mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001e@{toPage}({page:1})\" title=\"1\">1</a></li><%}%> <%if($$.start>2){%><li class=\"__mx-pagination_index_-notallowed __mx-style_index_-ib\"><a class=\"__mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001e@{prevent}()\" title=\"...\">...</a></li><%}%> <%for(var i=$$.start;i<=$$.end;i++){%><li class=\"__mx-style_index_-ib<%if(i==$$.page){%> __mx-pagination_index_-active<%}%>\"><a class=\"__mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001e@{toPage}({page:<%=i%>})\" title=\"<%=i%>\"><%=i%></a></li><%}%> <%if($$.end+2<=$$.pages){%><li class=\"__mx-style_index_-ib __mx-pagination_index_-notallowed\"><a class=\"__mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001e@{prevent}()\" title=\"...\">...</a></li><%}%> <%if($$.end<$$.pages){%><li class=\"__mx-style_index_-ib\"><a mx-guid=\"g8\u001f\" class=\"__mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001e@{toPage}({page:<%=$$.pages%>})\" title=\"<%=$$.pages%>\">9\u001d</a></li><%}%> <%}%><li class=\"__mx-style_index_-ib<%if($$.page==$$.pages){%> __mx-pagination_index_-notallowed<%}%>\"><a class=\"__mx-pagination_index_-num-item __mx-style_index_-mc-iconfont __mx-pagination_index_-icon __mx-pagination_index_-rotate180\" href=\"#\" mx-click=\"\u001f\u001e<%if($$.page<$$.pages){%>@{toPage}({page:<%=$$.page+1%>})<%}else{%>@{prevent}()<%}%>\" title=\"&gt;\">&#xe61e;</a></li>","s":"5\u001d"},{"keys":["pageSpace"],"path":"li[mx-guid=\"g7\u001f\"]","pKeys":["simplify","mini","start","end","page","pages"],"tmpl":"<%for(var i_3=$$.pageSpace;i_3--;){%>&nbsp;&nbsp;<%}%><%=$$.page%> / <%=$$.pages%>","s":"8\u001d"},{"keys":["pages"],"path":"a[mx-guid=\"g8\u001f\"]","tmpl":"<%=$$.pages%>","s":"9\u001d","attr":"mx-click=\"\u001f\u001e@{toPage}({page:<%=$$.pages%>})\" title=\"<%=$$.pages%>\"","attrs":[{"n":"mx-click"},{"n":"title","p":1}]}],"file":"mx-pagination/index.html"},
    init(extra) {
        let me = this;
        me.updater.set({
            sizes: DefaultSizes
        });
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        let total = (ops.total | 0) || 0;
        let size = ops.size || 20;
        let page = ops.page || 1;
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
    render() {
        let me = this;
        let info = me['@{cal.page.info}']();
        me.updater.digest(info);
    },
    '@{cal.page.info}'() {
        let me = this;
        let data = me.updater.get();
        let page = data.page | 0;
        let pages = Math.ceil((data.total || 1) / data.size);
        if (page > pages)
            page = pages;
        let step = data.step | 0;
        let middle = step / 2 | 0;
        let start = Math.max(1, page - middle);
        let end = Math.min(pages, start + step - 1);
        start = Math.max(1, end - step + 1);
        let offset;
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
        let offsetStart = (page - 1) * data.size + 1;
        let offsetEnd = Math.min(data.total, page * data.size);
        return {
            pages,
            offsetStart: offsetStart,
            offsetEnd: offsetEnd,
            startSpace: (data.total + '').length - (offsetStart + '').length,
            endSpace: (data.total + '').length - (offsetEnd + '').length,
            pageSpace: (pages + '').length - (page + '').length,
            page,
            start,
            end
        };
    },
    '@{fire.event}'() {
        let me = this;
        let node = $('#' + me.id);
        let data = me.updater.get();
        node.trigger({
            type: 'change',
            page: data.page,
            size: data.size
        });
    },
    '@{toPage}<click>'(e) {
        e.preventDefault();
        let me = this;
        me.updater.set(e.params);
        me.render();
        me['@{fire.event}']();
    },
    '@{changeSize}<change>'(e) {
        e.stopPropagation();
        let me = this;
        me.updater.set({
            page: 1,
            size: e.item
        });
        me.render();
        me['@{fire.event}']();
    },
    '@{prevent}<click>'(e) {
        e.preventDefault();
    }
});

});