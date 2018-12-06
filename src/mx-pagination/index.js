/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/index",["magix","$","mx-dropdown/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dropdown/index");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var DefaultSizes = [10, 20, 30, 40, 50, 100];
Magix.applyStyle("__mx-pagination_index_","/* @dependent: ./index.less */\n.__mx-pagination_index_-pager {\n  color: #999;\n}\n.__mx-pagination_index_-fz0 {\n  font-size: 0;\n}\n.__mx-pagination_index_-fz {\n  font-size: 14px;\n}\n.__mx-pagination_index_-num-item {\n  margin: 0 3px;\n  text-decoration: none;\n  border-radius: 4px;\n  text-align: center;\n  min-width: 35px;\n  height: 28px;\n  line-height: 28px;\n  display: block;\n  font-size: 14px;\n}\n.__mx-pagination_index_-icon {\n  font-size: 12px;\n  top: -1px;\n}\n.__mx-pagination_index_-active .__mx-pagination_index_-num-item {\n  color: #fff;\n  background-color: #f96447;\n}\n.__mx-pagination_index_-notallowed .__mx-pagination_index_-num-item,\n.__mx-pagination_index_-notallowed .__mx-pagination_index_-num-item:hover {\n  color: #999;\n  background: transparent;\n  cursor: not-allowed;\n}\n.__mx-pagination_index_-rotate180 {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', simplify = $$.simplify, mini = $$.mini, startSpace = $$.startSpace, offsetStart = $$.offsetStart, offsetEnd = $$.offsetEnd, endSpace = $$.endSpace, total = $$.total, sizes = $$.sizes, size = $$.size, page = $$.page, pageSpace = $$.pageSpace, pages = $$.pages, start = $$.start, end = $$.end; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_{:_" class="__mx-style_index_-clearfix __mx-pagination_index_-pager">';
    $expr = '<%if (!simplify && !mini) {%>';
    if (!simplify && !mini) {
        ;
        $p += '<span>当前第<b>';
        $expr = '<%for (var i_1 = startSpace; i_1--;) {%>';
        for (var i_1 = startSpace; i_1--;) {
            ;
            $p += '&nbsp;&nbsp;';
            $expr = '<%}%>';
        }
        ;
        $p += ($expr = '<%=offsetStart%>', $e(offsetStart)) + ' - ' + ($expr = '<%=offsetEnd%>', $e(offsetEnd));
        $expr = '<%for (var i_2 = endSpace; i_2--;) {%>';
        for (var i_2 = endSpace; i_2--;) {
            ;
            $p += '&nbsp;&nbsp;';
            $expr = '<%}%>';
        }
        ;
        $p += '</b>条，共<b>' + ($expr = '<%=total%>', $e(total)) + '</b>条，每页展现</span><div mxv="sizes,size" style="width:70px" class="__mx-style_index_-ml10 __mx-style_index_-mr10" mx-change="' + $viewId + '@{changeSize}()" mx-view="mx-dropdown/index?list=' + ($expr = '<%@sizes%>', $i($$ref, sizes)) + '&selected=' + ($expr = '<%@size%>', $i($$ref, size)) + '"></div><span mxs="_{:_">条</span>';
        $expr = '<%}%>';
    }
    ;
    $p += '<ul mxa="_{:a" class="__mx-style_index_-clearfix __mx-style_index_-ib __mx-pagination_index_-fz0"><li class="__mx-style_index_-ib';
    $expr = '<%if (page == 1) {%>';
    if (page == 1) {
        ;
        $p += ' __mx-pagination_index_-notallowed';
        $expr = '<%}%>';
    }
    ;
    $p += '"><a class="__mx-pagination_index_-num-item __mx-style_index_-mc-iconfont __mx-pagination_index_-icon" href="#" mx-click="' + $viewId + '';
    $expr = '<%if (page > 1) {%>';
    if (page > 1) {
        ;
        $p += '@{toPage}({page:' + ($expr = '<%=page - 1%>', $e(page - 1)) + '})';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '@{prevent}()';
        $expr = '<%}%>';
    }
    ;
    $p += '" title="&lt;">&#xe61e;</a></li>';
    $expr = '<%if (mini) {%>';
    if (mini) {
        ;
        $p += '<li mxa="_{:b" class="__mx-style_index_-ib __mx-pagination_index_-fz">';
        $expr = '<%for (var i_3 = pageSpace; i_3--;) {%>';
        for (var i_3 = pageSpace; i_3--;) {
            ;
            $p += '&nbsp;&nbsp;';
            $expr = '<%}%>';
        }
        ;
        $p += ($expr = '<%=page%>', $e(page)) + ' / ' + ($expr = '<%=pages%>', $e(pages)) + '</li>';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $expr = '<%if (start > 1) {%>';
        if (start > 1) {
            ;
            $p += '<li mxs="_{:a" class="__mx-style_index_-ib"><a class="__mx-pagination_index_-num-item" href="#" mx-click="' + $viewId + '@{toPage}({page:1})" title="1">1</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%if (start > 2) {%>';
        if (start > 2) {
            ;
            $p += '<li mxs="_{:b" class="__mx-pagination_index_-notallowed __mx-style_index_-ib"><a class="__mx-pagination_index_-num-item" href="#" mx-click="' + $viewId + '@{prevent}()" title="...">...</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%for (var i = start; i <= end; i++) {%>';
        for (var i = start; i <= end; i++) {
            ;
            $p += '<li class="__mx-style_index_-ib';
            $expr = '<%if (i == page) {%>';
            if (i == page) {
                ;
                $p += ' __mx-pagination_index_-active';
                $expr = '<%}%>';
            }
            ;
            $p += '"><a class="__mx-pagination_index_-num-item" href="#" mx-click="' + $viewId + '@{toPage}({page:' + ($expr = '<%=i%>', $e(i)) + '})" title="' + ($expr = '<%=i%>', $e(i)) + '">' + ($expr = '<%=i%>', $e(i)) + '</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%if (end + 2 <= pages) {%>';
        if (end + 2 <= pages) {
            ;
            $p += '<li mxs="_{:c" class="__mx-style_index_-ib __mx-pagination_index_-notallowed"><a class="__mx-pagination_index_-num-item" href="#" mx-click="' + $viewId + '@{prevent}()" title="...">...</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%if (end < pages) {%>';
        if (end < pages) {
            ;
            $p += '<li mxa="_{:c" class="__mx-style_index_-ib"><a class="__mx-pagination_index_-num-item" href="#" mx-click="' + $viewId + '@{toPage}({page:' + ($expr = '<%=pages%>', $e(pages)) + '})" title="' + ($expr = '<%=pages%>', $e(pages)) + '">' + ($expr = '<%=pages%>', $e(pages)) + '</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%}%>';
    }
    ;
    $p += '<li class="__mx-style_index_-ib';
    $expr = '<%if (page == pages) {%>';
    if (page == pages) {
        ;
        $p += ' __mx-pagination_index_-notallowed';
        $expr = '<%}%>';
    }
    ;
    $p += '"><a class="__mx-pagination_index_-num-item __mx-style_index_-mc-iconfont __mx-pagination_index_-icon __mx-pagination_index_-rotate180" href="#" mx-click="' + $viewId + '';
    $expr = '<%if (page < pages) {%>';
    if (page < pages) {
        ;
        $p += '@{toPage}({page:' + ($expr = '<%=page + 1%>', $e(page + 1)) + '})';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '@{prevent}()';
        $expr = '<%}%>';
    }
    ;
    $p += '" title="&gt;">&#xe61e;</a></li></ul></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-pagination/index.html';
    throw msg;
} return $p; },
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
        var info = me['@{cal.page.info}']();
        me.updater.digest(info);
    },
    '@{cal.page.info}': function () {
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
        if (start <= 2) { //=2 +1  =1  +2
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
    '@{fire.event}': function () {
        var me = this;
        var node = $('#' + me.id);
        var data = me.updater.get();
        node.trigger({
            type: 'change',
            page: data.page,
            size: data.size
        });
    },
    '@{toPage}<click>': function (e) {
        e.preventDefault();
        var me = this;
        me.updater.set(e.params);
        me.render();
        me['@{fire.event}']();
    },
    '@{changeSize}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        me.updater.set({
            page: 1,
            size: e.item
        });
        me.render();
        me['@{fire.event}']();
    },
    '@{prevent}<click>': function (e) {
        e.preventDefault();
    }
});

});