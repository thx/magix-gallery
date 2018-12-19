/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/index",["magix","$","../mx-medusa/util","mx-dropdown/index"],(require,exports,module)=>{
/*Magix,$,I18n*/
require("mx-dropdown/index");
var Magix = require("magix");
var $ = require("$");
var DefaultSizes = [10, 20, 30, 40];
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-pagination_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-pagination_index_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-pagination_index_-pager {\n  color: #999;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-infos {\n  float: left;\n  line-height: 26px;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-infos ._zs_gallery_mx-pagination_index_-pager-dropdown {\n  min-width: 66px;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-infos ._zs_gallery_mx-pagination_index_-pager-dropdown ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  height: 26px;\n  line-height: 24px;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items {\n  display: inline-block;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item {\n  float: left;\n  line-height: 26px;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner,\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-icon {\n  display: block;\n  min-width: 26px;\n  height: 26px;\n  margin: 0 2px;\n  font-size: 12px;\n  border-radius: 4px;\n  text-align: center;\n  color: #999;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner:hover {\n  color: #666;\n  background-color: #eee;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner._zs_gallery_mx-pagination_index_-active {\n  color: #fff;\n  background-color: #385ACC;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner._zs_gallery_mx-pagination_index_-notallowed {\n  background: transparent;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-icon {\n  line-height: 28px;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-icon:hover {\n  color: #666;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-icon._zs_gallery_mx-pagination_index_-notallowed {\n  color: #e6e6e6;\n  background: transparent;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-quick {\n  float: right;\n  margin-left: 15px;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-quick ._zs_gallery_mx-pagination_index_-quick-input {\n  width: 40px;\n  text-align: center;\n}\n");
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
} ; var $g = '', $_temp, $p = '', simplify = $$.simplify, mini = $$.mini, tipOffset = $$.tipOffset, tipTotal = $$.tipTotal, tipPer = $$.tipPer, sizesChange = $$.sizesChange, sizesPlacement = $$.sizesPlacement, sizes = $$.sizes, size = $$.size, tipUnit = $$.tipUnit, jump = $$.jump, tipJumpTo = $$.tipJumpTo, next = $$.next, viewId = $$.viewId, tipJumpUnit = $$.tipJumpUnit, hideTotal = $$.hideTotal, page = $$.page, pages = $$.pages, start = $$.start, end = $$.end; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycf:_" class="clearfix _zs_gallery_mx-pagination_index_-pager">';
    $expr = '<%if (!simplify && !mini) {%>';
    if (!simplify && !mini) {
        ;
        $p += '<div mxv mxa="_zs_gallerycf:a" class="_zs_gallery_mx-pagination_index_-infos"><span>' + ($expr = '<%!tipOffset%>', $n(tipOffset)) + '</span><span>' + ($expr = '<%!tipTotal%>', $n(tipTotal)) + '，</span><span>' + ($expr = '<%!tipPer%>', $n(tipPer)) + '</span>';
        $expr = '<%if (sizesChange) {%>';
        if (sizesChange) {
            ;
            $p += '<div mxv="sizes,size" class="ml10 mr10 _zs_gallery_mx-pagination_index_-pager-dropdown" mx-change="' + $viewId + '@{changeSize}()" mx-view="mx-dropdown/index?placement=' + ($expr = '<%!$eu(sizesPlacement)%>', $eu(sizesPlacement)) + '&list=' + ($expr = '<%@sizes%>', $i($$ref, sizes)) + '&selected=' + ($expr = '<%@size%>', $i($$ref, size)) + '"></div>';
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<b>&nbsp;' + ($expr = '<%=size%>', $e(size)) + '&nbsp;</b>';
            $expr = '<%}%>';
        }
        ;
        $p += '<span>' + ($expr = '<%!tipUnit%>', $n(tipUnit)) + '</span></div>';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $expr = '<%if (!jump) {%>';
    if (!jump) {
        ;
        $p += '<div mxv mxa="_zs_gallerycf:b" class="_zs_gallery_mx-pagination_index_-quick"><span mxa="_zs_gallerycf:c" class="mr5">' + ($expr = '<%=tipJumpTo%>', $e(tipJumpTo)) + '</span><input class="input input-small _zs_gallery_mx-pagination_index_-quick-input mr5" value="';
        $line = 25;
        $art = '=next';
        ;
        $p += ($expr = '<%=next%>', $e(next)) + '" id="';
        $line = 25;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_jump_input" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()"/><span mxa="_zs_gallerycf:d" class="mr10">' + ($expr = '<%=tipJumpUnit%>', $e(tipJumpUnit)) + '</span><a mxs="_zs_gallerycf:_" href="javascript:;" class="btn btn-small" mx-click="' + $viewId + '@{jump}()">跳转</a></div>';
        $expr = '<%}%>';
    }
    ;
    $p += '<ul class="clearfix _zs_gallery_mx-pagination_index_-num-items" ';
    $expr = '<%if (!hideTotal) {%>';
    if (!hideTotal) {
        ;
        $p += ' style="float: right;" ';
        $expr = '<%}%>';
    }
    ;
    $p += '><li mxa="_zs_gallerycf:e" class="_zs_gallery_mx-pagination_index_-num-item"><a class="mc-iconfont _zs_gallery_mx-pagination_index_-num-item-icon ';
    $expr = '<%if (page == 1) {%>';
    if (page == 1) {
        ;
        $p += '_zs_gallery_mx-pagination_index_-notallowed';
        $expr = '<%}%>';
    }
    ;
    $p += '" href="#" mx-click="' + $viewId + '';
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
    $p += '">&#xe61e;</a></li>';
    $expr = '<%if (mini) {%>';
    if (mini) {
        ;
        $p += '<li mxa="_zs_gallerycf:f" class="_zs_gallery_mx-pagination_index_-num-item">' + ($expr = '<%=page%>', $e(page)) + ' / ' + ($expr = '<%=pages%>', $e(pages)) + '</li>';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $expr = '<%if (start > 1) {%>';
        if (start > 1) {
            ;
            $p += '<li mxs="_zs_gallerycf:a" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner" href="#" mx-click="' + $viewId + '@{toPage}({page:1})">1</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%if (start > 2) {%>';
        if (start > 2) {
            ;
            $p += '<li mxs="_zs_gallerycf:b" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner _zs_gallery_mx-pagination_index_-notallowed" href="#" mx-click="' + $viewId + '@{prevent}()">...</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%for (var i = start; i <= end; i++) {%>';
        for (var i = start; i <= end; i++) {
            ;
            $p += '<li mxa="_zs_gallerycf:g" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner ';
            $expr = '<%if (i == page) {%>';
            if (i == page) {
                ;
                $p += '_zs_gallery_mx-pagination_index_-active';
                $expr = '<%}%>';
            }
            ;
            $p += '" href="#" mx-click="' + $viewId + '@{toPage}({page:' + ($expr = '<%=i%>', $e(i)) + '})">' + ($expr = '<%=i%>', $e(i)) + '</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%if (end + 2 <= pages) {%>';
        if (end + 2 <= pages) {
            ;
            $p += '<li mxs="_zs_gallerycf:b" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner _zs_gallery_mx-pagination_index_-notallowed" href="#" mx-click="' + $viewId + '@{prevent}()">...</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%if (end < pages) {%>';
        if (end < pages) {
            ;
            $p += '<li mxa="_zs_gallerycf:h" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner" href="#" mx-click="' + $viewId + '@{toPage}({page:' + ($expr = '<%=pages%>', $e(pages)) + '})">' + ($expr = '<%=pages%>', $e(pages)) + '</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%}%>';
    }
    ;
    $p += '<li mxa="_zs_gallerycf:i" class="_zs_gallery_mx-pagination_index_-num-item"><a class="mc-iconfont _zs_gallery_mx-pagination_index_-num-item-icon rotate180 ';
    $expr = '<%if (page == pages) {%>';
    if (page == pages) {
        ;
        $p += '_zs_gallery_mx-pagination_index_-notallowed';
        $expr = '<%}%>';
    }
    ;
    $p += '" href="#" mx-click="' + $viewId + '';
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
    $p += '">&#xe61e;</a></li>';
    $expr = '<%if (!hideTotal) {%>';
    if (!hideTotal) {
        ;
        $p += '<li mxa="_zs_gallerycf:j" class="_zs_gallery_mx-pagination_index_-num-item ml10">' + ($expr = '<%!tipTotal%>', $n(tipTotal)) + '</li>';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul></div>';
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
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        //该处是否可以由magix自动调用
        this.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = me.updater.altered();
        var sizes = [];
        try {
            sizes = JSON.parse(ops.sizes);
        }
        catch (e) {
            sizes = ops.sizes;
        }
        if (!sizes || !sizes.length) {
            sizes = DefaultSizes;
        }
        var sizesChange = true;
        if ((/^false$/i).test(ops.sizesChange)) {
            sizesChange = false;
        }
        me.updater.set({
            viewId: me.id,
            step: ops.step || 5,
            simplify: (ops.simplify + '') === 'true',
            mini: (ops.mini + '') === 'true',
            hideTotal: (ops.hideTotal + '') === 'true',
            jump: (ops.jump + '') === 'false',
            page: ops.page || 1,
            total: (ops.total | 0) || 0,
            size: ops.size || 40,
            sizesChange: sizesChange,
            sizesPlacement: ops.sizesPlacement || 'bottom',
            sizes: sizes //可选分页数
        });
        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = me.updater.altered();
        }
        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            me.updater.snapshot();
            return true;
        }
        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    render: function () {
        var me = this;
        var info = me['@{cal.page.info}']();
        me.updater.digest(info);
    },
    '@{cal.page.info}': function () {
        var me = this;
        var data = me.updater.get();
        var total = data.total;
        var page = data.page | 0;
        var pages = Math.ceil((data.total || 1) / data.size);
        if (page > pages) {
            page = pages;
        }
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
        if (total == 0) {
            offsetStart = offsetEnd = 0;
        }
        var tipOffset = I18n['pager.offset'].replace('${min}', "<b>" + offsetStart + "</b>").replace('${max}', "<b>" + offsetEnd + "</b>"), tipTotal = I18n['pager.total'].replace('${total}', "<b>" + total + "</b>"), tipPer = I18n['pager.per.page'], tipUnit = I18n['pager.unit'], tipJumpTo = I18n['pager.jump.to'], tipJumpUnit = I18n['pager.jump.unit'];
        // 跳转，下一页
        var next = page + 1;
        if (next > pages) {
            next = pages;
        }
        return {
            pages: pages,
            offsetStart: offsetStart,
            offsetEnd: offsetEnd,
            page: page,
            start: start,
            end: end,
            next: next,
            tipOffset: tipOffset,
            tipTotal: tipTotal,
            tipPer: tipPer,
            tipUnit: tipUnit,
            tipJumpTo: tipJumpTo,
            tipJumpUnit: tipJumpUnit
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
            // page: 1,
            size: e.value
        });
        me.render();
        me['@{fire.event}']();
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{jump}<click>': function (e) {
        e.stopPropagation();
        var me = this;
        var i = $('#' + me.id + '_jump_input');
        var page = +(i.val());
        if (!Number.isInteger(page)) {
            return;
        }
        me.updater.set({
            page: page
        });
        me.render();
        me['@{fire.event}']();
    },
    '@{prevent}<click>': function (e) {
        e.preventDefault();
    }
});

});