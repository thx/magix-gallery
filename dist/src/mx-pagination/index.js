/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/index",["magix","$","../mx-util/view","../mx-medusa/util","mx-dropdown/index"],(require,exports,module)=>{
/*magix_1,$,View,I18n*/
require("mx-dropdown/index");
"use strict";
exports.__esModule = true;
/**
 * 分页组件
 */
var magix_1 = require("magix");
var $ = require("$");
var View = require("../mx-util/view");
var I18n = require("../mx-medusa/util");
var DefaultSizes = [10, 20, 30, 40];
magix_1["default"].applyStyle("_zs_gallery_mx-pagination_index_","._zs_gallery_mx-pagination_index_-pager {\n  line-height: 0;\n  color: #666;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-infos {\n  float: left;\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-infos ._zs_gallery_mx-pagination_index_-pager-dropdown {\n  min-width: 66px;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items {\n  display: inline-block;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item {\n  float: left;\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner,\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-icon {\n  display: block;\n  min-width: var(--input-small-height);\n  height: var(--input-small-height);\n  margin: 0 2px;\n  font-size: var(--font-size);\n  border-radius: var(--border-radius);\n  text-align: center;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner {\n  color: #666;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner:hover {\n  color: #333;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner._zs_gallery_mx-pagination_index_-active {\n  color: #333;\n  background-color: #eee;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-inner._zs_gallery_mx-pagination_index_-notallowed {\n  background: transparent;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-icon {\n  color: #999;\n  line-height: calc(var(--input-small-height) + 2px);\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-icon:hover {\n  color: #666;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-num-items ._zs_gallery_mx-pagination_index_-num-item ._zs_gallery_mx-pagination_index_-num-item-icon._zs_gallery_mx-pagination_index_-notallowed {\n  color: #eee;\n  background: transparent;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-quick {\n  float: right;\n  margin-left: 15px;\n}\n._zs_gallery_mx-pagination_index_-pager ._zs_gallery_mx-pagination_index_-quick ._zs_gallery_mx-pagination_index_-quick-input {\n  width: 40px;\n  text-align: center;\n}\n");
exports["default"] = View.extend({
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
} ; var $g = '', $_temp, $p = '', simplify = $$.simplify, mini = $$.mini, tipOffset = $$.tipOffset, tipTotal = $$.tipTotal, tipPer = $$.tipPer, sizesChange = $$.sizesChange, sizesPlacement = $$.sizesPlacement, sizes = $$.sizes, size = $$.size, spm = $$.spm, tipUnit = $$.tipUnit, jump = $$.jump, tipJumpTo = $$.tipJumpTo, next = $$.next, viewId = $$.viewId, tipJumpUnit = $$.tipJumpUnit, hideTotal = $$.hideTotal, page = $$.page, pages = $$.pages, start = $$.start, end = $$.end; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerydH:_" class="clearfix _zs_gallery_mx-pagination_index_-pager">';
    $line = 2;
    $art = 'if (!simplify&&!mini)';
    ;
    $expr = '<%if (!simplify && !mini) {%>';
    if (!simplify && !mini) {
        ;
        $p += '<div mxv mxa="_zs_gallerydH:a" class="_zs_gallery_mx-pagination_index_-infos"><span>';
        $line = 4;
        $art = '!tipOffset';
        ;
        $p += ($expr = '<%!tipOffset%>', $n(tipOffset)) + '</span><span>';
        $line = 5;
        $art = '!tipTotal';
        ;
        $p += ($expr = '<%!tipTotal%>', $n(tipTotal)) + '，</span><span>';
        $line = 6;
        $art = '!tipPer';
        ;
        $p += ($expr = '<%!tipPer%>', $n(tipPer)) + '</span>';
        $line = 8;
        $art = 'if sizesChange';
        ;
        $expr = '<%if (sizesChange) {%>';
        if (sizesChange) {
            ;
            $p += '<div mxv="sizes,size" class="ml10 mr10 _zs_gallery_mx-pagination_index_-pager-dropdown" mx-change="' + $viewId + '@{changeSize}()" ';
            $line = 15;
            $art = 'if spm';
            ;
            $expr = '<%if (spm) {%>';
            if (spm) {
                ;
                $p += ' data-spm-click="';
                $line = 15;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + 'dpd" ';
                $line = 15;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' mx-view="mx-dropdown/index?small=true&placement=';
            $line = 11;
            $art = '=sizesPlacement';
            ;
            $p += ($expr = '<%!$eu(sizesPlacement)%>', $eu(sizesPlacement)) + '&list=';
            $line = 12;
            $art = '@sizes';
            ;
            $p += ($expr = '<%@sizes%>', $i($$ref, sizes)) + '&selected=';
            $line = 13;
            $art = '@size';
            ;
            $p += ($expr = '<%@size%>', $i($$ref, size)) + '"></div>';
            $line = 16;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' ';
            $line = 17;
            $art = '=size';
            ;
            $p += ($expr = '<%=size%>', $e(size)) + ' ';
            $line = 18;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<span>';
        $line = 19;
        $art = '!tipUnit';
        ;
        $p += ($expr = '<%!tipUnit%>', $n(tipUnit)) + '</span></div>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 23;
    $art = 'if !jump';
    ;
    $expr = '<%if (!jump) {%>';
    if (!jump) {
        ;
        $p += '<div mxv mxa="_zs_gallerydH:b" class="_zs_gallery_mx-pagination_index_-quick"><span mxa="_zs_gallerydH:c" class="mr5">';
        $line = 26;
        $art = '=tipJumpTo';
        ;
        $p += ($expr = '<%=tipJumpTo%>', $e(tipJumpTo)) + '</span><input class="input input-small _zs_gallery_mx-pagination_index_-quick-input mr5" value="';
        $line = 28;
        $art = '=next';
        ;
        $p += ($expr = '<%=next%>', $e(next)) + '" id="';
        $line = 28;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_jump_input" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" ';
        $line = 32;
        $art = 'if spm';
        ;
        $expr = '<%if (spm) {%>';
        if (spm) {
            ;
            $p += ' data-spm-click="';
            $line = 32;
            $art = '=spm';
            ;
            $p += ($expr = '<%=spm%>', $e(spm)) + 'ji" ';
            $line = 32;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '/><span mxa="_zs_gallerydH:d" class="mr10">';
        $line = 33;
        $art = '=tipJumpUnit';
        ;
        $p += ($expr = '<%=tipJumpUnit%>', $e(tipJumpUnit)) + '</span><a href="javascript:;" class="btn btn-small" mx-click="' + $viewId + '@{jump}()" ';
        $line = 34;
        $art = 'if spm';
        ;
        $expr = '<%if (spm) {%>';
        if (spm) {
            ;
            $p += ' data-spm-click="';
            $line = 34;
            $art = '=spm';
            ;
            $p += ($expr = '<%=spm%>', $e(spm)) + 'jt" ';
            $line = 34;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>跳转</a></div>';
        $line = 36;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<ul class="clearfix _zs_gallery_mx-pagination_index_-num-items ';
    $line = 38;
    $art = 'if !hideTotal';
    ;
    $expr = '<%if (!hideTotal) {%>';
    if (!hideTotal) {
        ;
        $p += ' fr ';
        $line = 38;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><li mxa="_zs_gallerydH:e" class="_zs_gallery_mx-pagination_index_-num-item"><a class="mc-iconfont _zs_gallery_mx-pagination_index_-num-item-icon ';
    $line = 41;
    $art = 'if (page==1)';
    ;
    $expr = '<%if (page == 1) {%>';
    if (page == 1) {
        ;
        $p += ' _zs_gallery_mx-pagination_index_-notallowed ';
        $line = 41;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" href="#" mx-click="' + $viewId + '';
    $line = 41;
    $art = 'if (page>1)';
    ;
    $expr = '<%if (page > 1) {%>';
    if (page > 1) {
        ;
        $p += '@{toPage}({page:\'';
        $line = 41;
        $art = '=(page-1)';
        ;
        $p += ($expr = '<%=(page - 1)%>', $e((page - 1))) + '\'})';
        $line = 41;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '@{prevent}()';
        $line = 41;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 41;
    $art = 'if spm';
    ;
    $expr = '<%if (spm) {%>';
    if (spm) {
        ;
        $p += ' data-spm-click="';
        $line = 41;
        $art = '=spm';
        ;
        $p += ($expr = '<%=spm%>', $e(spm)) + 'prev" ';
        $line = 41;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>&#xe61e;</a></li>';
    $line = 46;
    $art = 'if mini';
    ;
    $expr = '<%if (mini) {%>';
    if (mini) {
        ;
        $p += '<li mxa="_zs_gallerydH:f" class="_zs_gallery_mx-pagination_index_-num-item">';
        $line = 47;
        $art = '=page';
        ;
        $p += ($expr = '<%=page%>', $e(page)) + ' / ';
        $line = 47;
        $art = '=pages';
        ;
        $p += ($expr = '<%=pages%>', $e(pages)) + '</li>';
        $line = 48;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 49;
        $art = 'if (start>1)';
        ;
        $expr = '<%if (start > 1) {%>';
        if (start > 1) {
            ;
            $p += '<li mxa="_zs_gallerydH:g" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner" href="#" mx-click="' + $viewId + '@{toPage}({page:1})" ';
            $line = 51;
            $art = 'if spm';
            ;
            $expr = '<%if (spm) {%>';
            if (spm) {
                ;
                $p += ' data-spm-click="';
                $line = 51;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + 'n1" ';
                $line = 51;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>1</a></li>';
            $line = 53;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 54;
        $art = 'if (start>2)';
        ;
        $expr = '<%if (start > 2) {%>';
        if (start > 2) {
            ;
            $p += '<li mxs="_zs_gallerydH:_" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner _zs_gallery_mx-pagination_index_-notallowed" href="#" mx-click="' + $viewId + '@{prevent}()">...</a></li>';
            $line = 58;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 59;
        $art = 'for (let i=start;i<=end;i++)';
        ;
        $expr = '<%for (var i = start; i <= end; i++) {%>';
        for (var i = start; i <= end; i++) {
            ;
            $p += '<li mxa="_zs_gallerydH:h" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner ';
            $line = 61;
            $art = 'if (i==page)';
            ;
            $expr = '<%if (i == page) {%>';
            if (i == page) {
                ;
                $p += ' _zs_gallery_mx-pagination_index_-active ';
                $line = 61;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" href="#" mx-click="' + $viewId + '@{toPage}({page:\'';
            $line = 61;
            $art = '=i';
            ;
            $p += ($expr = '<%=$eq(i)%>', $e($eq(i))) + '\'})" ';
            $line = 61;
            $art = 'if spm';
            ;
            $expr = '<%if (spm) {%>';
            if (spm) {
                ;
                $p += ' data-spm-click="';
                $line = 61;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + 'n';
                $line = 61;
                $art = '=i';
                ;
                $p += ($expr = '<%=i%>', $e(i)) + '" ';
                $line = 61;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>';
            $line = 61;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</a></li>';
            $line = 63;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 64;
        $art = 'if (end+2<=pages)';
        ;
        $expr = '<%if (end + 2 <= pages) {%>';
        if (end + 2 <= pages) {
            ;
            $p += '<li mxs="_zs_gallerydH:_" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner _zs_gallery_mx-pagination_index_-notallowed" href="#" mx-click="' + $viewId + '@{prevent}()">...</a></li>';
            $line = 68;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 69;
        $art = 'if (end<pages)';
        ;
        $expr = '<%if (end < pages) {%>';
        if (end < pages) {
            ;
            $p += '<li mxa="_zs_gallerydH:i" class="_zs_gallery_mx-pagination_index_-num-item"><a class="_zs_gallery_mx-pagination_index_-num-item-inner" href="#" mx-click="' + $viewId + '@{toPage}({page:\'';
            $line = 71;
            $art = '=pages';
            ;
            $p += ($expr = '<%=$eq(pages)%>', $e($eq(pages))) + '\'})" ';
            $line = 71;
            $art = 'if spm';
            ;
            $expr = '<%if (spm) {%>';
            if (spm) {
                ;
                $p += ' data-spm-click="';
                $line = 71;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + 'ne" ';
                $line = 71;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>';
            $line = 71;
            $art = '=pages';
            ;
            $p += ($expr = '<%=pages%>', $e(pages)) + '</a></li>';
            $line = 73;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 74;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<li mxa="_zs_gallerydH:j" class="_zs_gallery_mx-pagination_index_-num-item"><a class="mc-iconfont _zs_gallery_mx-pagination_index_-num-item-icon rotate180 ';
    $line = 78;
    $art = 'if (page==pages)';
    ;
    $expr = '<%if (page == pages) {%>';
    if (page == pages) {
        ;
        $p += ' _zs_gallery_mx-pagination_index_-notallowed ';
        $line = 78;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" href="#" mx-click="' + $viewId + '';
    $line = 78;
    $art = 'if (page<pages)';
    ;
    $expr = '<%if (page < pages) {%>';
    if (page < pages) {
        ;
        $p += '@{toPage}({page:\'';
        $line = 78;
        $art = '=(page+1)';
        ;
        $p += ($expr = '<%=(page + 1)%>', $e((page + 1))) + '\'})';
        $line = 78;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '@{prevent}()';
        $line = 78;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 78;
    $art = 'if spm';
    ;
    $expr = '<%if (spm) {%>';
    if (spm) {
        ;
        $p += ' data-spm-click="';
        $line = 78;
        $art = '=spm';
        ;
        $p += ($expr = '<%=spm%>', $e(spm)) + 'next" ';
        $line = 78;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>&#xe61e;</a></li>';
    $line = 82;
    $art = 'if !hideTotal';
    ;
    $expr = '<%if (!hideTotal) {%>';
    if (!hideTotal) {
        ;
        $p += '<li mxa="_zs_gallerydH:k" class="_zs_gallery_mx-pagination_index_-num-item ml10">';
        $line = 83;
        $art = '!tipTotal';
        ;
        $p += ($expr = '<%!tipTotal%>', $n(tipTotal)) + '</li>';
        $line = 84;
        $art = '/if';
        ;
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
    init: function (ops) {
        this.updater.snapshot();
        this.assign(ops);
    },
    assign: function (ops) {
        var me = this;
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
        // 当前第几页
        // 优先级page > offset
        var page, size = ops.size || 40;
        if (ops.page) {
            page = ops.page;
        }
        else if (ops.offset) {
            page = parseInt(ops.offset / size) + 1;
        }
        else {
            page = 1;
        }
        me.updater.set({
            step: ops.step || 5,
            simplify: (ops.simplify + '') === 'true',
            mini: (ops.mini + '') === 'true',
            hideTotal: (ops.hideTotal + '') === 'true',
            jump: (ops.jump + '') === 'false',
            total: (ops.total | 0) || 0,
            page: page,
            size: size,
            sizesChange: sizesChange,
            sizesPlacement: ops.sizesPlacement || 'bottom',
            sizes: sizes //可选分页数
        });
        if (!altered) {
            altered = me.updater.altered();
        }
        if (altered) {
            me.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        var info = this['@{cal.page.info}']();
        this.updater.digest(info);
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
        if (total == 0) {
            offsetStart = offsetEnd = 0;
        }
        var tipOffset = I18n['pager.offset'].replace('{min}', "" + offsetStart).replace('{max}', "" + offsetEnd), tipTotal = I18n['pager.total'].replace('{total}', "" + total), tipPer = I18n['pager.per.page'], tipUnit = I18n['pager.unit'], tipJumpTo = I18n['pager.jump.to'], tipJumpUnit = I18n['pager.jump.unit'];
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
        var page = +data.page, size = +data.size;
        var offset = (page - 1) * size;
        node.trigger({
            type: 'change',
            page: page,
            size: size,
            offset: offset
        });
    },
    '@{toPage}<click>': function (e) {
        e.preventDefault();
        this.updater.set(e.params);
        this.render();
        this['@{fire.event}']();
    },
    '@{changeSize}<change>': function (e) {
        e.stopPropagation();
        this.updater.set({
            size: e.value
        });
        this.render();
        this['@{fire.event}']();
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{jump}<click>': function (e) {
        e.stopPropagation();
        var i = $("#" + this.id + "_jump_input");
        var page = +(i.val());
        if (!Number.isInteger(page)) {
            return;
        }
        this.updater.set({
            page: page
        });
        this.render();
        this['@{fire.event}']();
    },
    '@{prevent}<click>': function (e) {
        e.preventDefault();
    }
});

});