/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_galleryah","._zs_galleryjz{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjA{color:#666}._zs_galleryjA ._zs_galleryjB{float:left;line-height:26px}._zs_galleryjA ._zs_galleryjB ._zs_galleryjC{min-width:66px}._zs_galleryjA ._zs_galleryjB ._zs_galleryjC ._zs_gallerydQ{height:26px;line-height:24px}._zs_galleryjA ._zs_galleryjD{display:inline-block}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE{float:left;line-height:26px}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjF,._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjG{display:block;min-width:26px;height:26px;margin:0 2px;font-size:12px;border-radius:4px;text-align:center}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjG{color:#666}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjG:hover{color:#333}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjG._zs_galleryjH{color:#333;background-color:#eee}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjG._zs_galleryjI{background:transparent;cursor:not-allowed}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjF{color:#999;line-height:28px}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjF:hover{color:#666}._zs_galleryjA ._zs_galleryjD ._zs_galleryjE ._zs_galleryjF._zs_galleryjI{color:#eee;background:transparent;cursor:not-allowed}._zs_galleryjA ._zs_galleryjJ{float:right;margin-left:15px}._zs_galleryjA ._zs_galleryjJ ._zs_galleryjK{width:40px;text-align:center}");
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
} ; var $g = '', $_temp, $p = '', simplify = $$.simplify, mini = $$.mini, tipOffset = $$.tipOffset, tipTotal = $$.tipTotal, tipPer = $$.tipPer, sizesChange = $$.sizesChange, sizesPlacement = $$.sizesPlacement, sizes = $$.sizes, size = $$.size, tipUnit = $$.tipUnit, jump = $$.jump, tipJumpTo = $$.tipJumpTo, next = $$.next, viewId = $$.viewId, tipJumpUnit = $$.tipJumpUnit, hideTotal = $$.hideTotal, page = $$.page, pages = $$.pages, start = $$.start, end = $$.end; $p += '<div mxv mxa="_zs_gallerycu:_" class="clearfix _zs_galleryjA">'; if (!simplify && !mini) {
    ;
    $p += '<div mxv mxa="_zs_gallerycu:a" class="_zs_galleryjB"><span>' + $n(tipOffset) + '</span><span>' + $n(tipTotal) + '，</span><span>' + $n(tipPer) + '</span>';
    if (sizesChange) {
        ;
        $p += '<div mxv="sizes,size" class="ml10 mr10 _zs_galleryjC" mx-change="' + $viewId + '__cj()" mx-view="mx-dropdown/index?placement=' + $eu(sizesPlacement) + '&list=' + $i($$ref, sizes) + '&selected=' + $i($$ref, size) + '"></div>';
    }
    else {
        ;
        $p += ' ' + $e(size) + ' ';
    }
    ;
    $p += '<span>' + $n(tipUnit) + '</span></div>';
} ; $p += ' '; if (!jump) {
    ;
    $p += '<div mxv mxa="_zs_gallerycu:b" class="_zs_galleryjJ"><span mxa="_zs_gallerycu:c" class="mr5">' + $e(tipJumpTo) + '</span><input class="input input-small _zs_galleryjK mr5" value="' + $e(next) + '" id="' + $e(viewId) + '_jump_input" mx-change="' + $viewId + '__l()" mx-focusin="' + $viewId + '__l()" mx-focusout="' + $viewId + '__l()"/><span mxa="_zs_gallerycu:d" class="mr10">' + $e(tipJumpUnit) + '</span><a mxs="_zs_gallerycu:_" href="javascript:;" class="btn btn-small" mx-click="' + $viewId + '__ck()">跳转</a></div>';
} ; $p += '<ul class="clearfix _zs_galleryjD" '; if (!hideTotal) {
    ;
    $p += ' style="float: right;" ';
} ; $p += '><li mxa="_zs_gallerycu:e" class="_zs_galleryjE"><a class="mc-iconfont _zs_galleryjF '; if (page == 1) {
    ;
    $p += '_zs_galleryjI';
} ; $p += '" href="#" mx-click="' + $viewId + ''; if (page > 1) {
    ;
    $p += '__ci({page:' + $e(page - 1) + '})';
}
else {
    ;
    $p += '__H()';
} ; $p += '">&#xe61e;</a></li>'; if (mini) {
    ;
    $p += '<li mxa="_zs_gallerycu:f" class="_zs_galleryjE">' + $e(page) + ' / ' + $e(pages) + '</li>';
}
else {
    ;
    $p += ' ';
    if (start > 1) {
        ;
        $p += '<li mxs="_zs_gallerycu:a" class="_zs_galleryjE"><a class="_zs_galleryjG" href="#" mx-click="' + $viewId + '__ci({page:1})">1</a></li>';
    }
    ;
    $p += ' ';
    if (start > 2) {
        ;
        $p += '<li mxs="_zs_gallerycu:b" class="_zs_galleryjE"><a class="_zs_galleryjG _zs_galleryjI" href="#" mx-click="' + $viewId + '__H()">...</a></li>';
    }
    ;
    $p += ' ';
    for (var i = start; i <= end; i++) {
        ;
        $p += '<li mxa="_zs_gallerycu:g" class="_zs_galleryjE"><a class="_zs_galleryjG ';
        if (i == page) {
            ;
            $p += '_zs_galleryjH';
        }
        ;
        $p += '" href="#" mx-click="' + $viewId + '__ci({page:' + $e(i) + '})">' + $e(i) + '</a></li>';
    }
    ;
    $p += ' ';
    if (end + 2 <= pages) {
        ;
        $p += '<li mxs="_zs_gallerycu:b" class="_zs_galleryjE"><a class="_zs_galleryjG _zs_galleryjI" href="#" mx-click="' + $viewId + '__H()">...</a></li>';
    }
    ;
    $p += ' ';
    if (end < pages) {
        ;
        $p += '<li mxa="_zs_gallerycu:h" class="_zs_galleryjE"><a class="_zs_galleryjG" href="#" mx-click="' + $viewId + '__ci({page:' + $e(pages) + '})">' + $e(pages) + '</a></li>';
    }
    ;
    $p += ' ';
} ; $p += '<li mxa="_zs_gallerycu:i" class="_zs_galleryjE"><a class="mc-iconfont _zs_galleryjF rotate180 '; if (page == pages) {
    ;
    $p += '_zs_galleryjI';
} ; $p += '" href="#" mx-click="' + $viewId + ''; if (page < pages) {
    ;
    $p += '__ci({page:' + $e(page + 1) + '})';
}
else {
    ;
    $p += '__H()';
} ; $p += '">&#xe61e;</a></li>'; if (!hideTotal) {
    ;
    $p += '<li mxa="_zs_gallerycu:j" class="_zs_galleryjE ml10">' + $n(tipTotal) + '</li>';
} ; $p += '</ul></div>'; return $p; },
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
        var info = me['__ch']();
        me.updater.digest(info);
    },
    '__ch': function () {
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
        var tipOffset = I18n['pager.offset'].replace('${min}', "" + offsetStart).replace('${max}', "" + offsetEnd), tipTotal = I18n['pager.total'].replace('${total}', "" + total), tipPer = I18n['pager.per.page'], tipUnit = I18n['pager.unit'], tipJumpTo = I18n['pager.jump.to'], tipJumpUnit = I18n['pager.jump.unit'];
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
    '__y': function () {
        var me = this;
        var node = $('#' + me.id);
        var data = me.updater.get();
        node.trigger({
            type: 'change',
            page: data.page,
            size: data.size
        });
    },
    '__ci<click>': function (e) {
        e.preventDefault();
        var me = this;
        me.updater.set(e.params);
        me.render();
        me['__y']();
    },
    '__cj<change>': function (e) {
        e.stopPropagation();
        var me = this;
        me.updater.set({
            // page: 1,
            size: e.value
        });
        me.render();
        me['__y']();
    },
    '__l<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '__ck<click>': function (e) {
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
        me['__y']();
    },
    '__H<click>': function (e) {
        e.preventDefault();
    }
});

});