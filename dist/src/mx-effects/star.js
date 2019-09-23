/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/star",["magix","$","mx-util/css-var"],(require,exports,module)=>{
/*Magix,$,CSSVarUtil*/

var Magix = require("magix");
var $ = require("$");
var CSSVarUtil = require("mx-util/css-var");
Magix.applyStyle("_zs_gallery_mx-effects_star_","[mx-view*=\"mx-effects/star\"] {\n  position: relative;\n  display: inline-block;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star,\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star > * {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  font-size: 20px;\n  color: inherit;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star {\n  float: left;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star-bg {\n  color: var(--color-border);\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 24px;\n  overflow: hidden;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star-on ._zs_gallery_mx-effects_star_-star-inner {\n  height: 24px;\n}\n[mx-view*=\"mx-effects/star\"][mx-view*=\"operational=true\"] ._zs_gallery_mx-effects_star_-star {\n  cursor: pointer;\n  transition: all var(--duration);\n}\n[mx-view*=\"mx-effects/star\"][mx-view*=\"operational=true\"] ._zs_gallery_mx-effects_star_-star._zs_gallery_mx-effects_star_-star-hover {\n  transform: scale(1.2);\n}\n");
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
} ; var $g = '', $_temp, $p = '', count = $$.count, hoverIndex = $$.hoverIndex, operational = $$.operational, icon = $$.icon, num = $$.num, starWidth = $$.starWidth, color = $$.color; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryb[:_" class="_zs_gallery_mx-effects_star_-star-bg clearfix">';
    $line = 2;
    $art = 'for (let i=0;i<count;i+=1)';
    ;
    $expr = '<%for (var i = 0; i < count; i += 1) {%>';
    for (var i = 0; i < count; i += 1) {
        ;
        $p += '<span class="_zs_gallery_mx-effects_star_-star ';
        $line = 3;
        $art = 'if (hoverIndex == i)';
        ;
        $expr = '<%if (hoverIndex == i) {%>';
        if (hoverIndex == i) {
            ;
            $p += ' _zs_gallery_mx-effects_star_-star-hover ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" ';
        $line = 4;
        $art = 'if operational';
        ;
        $expr = '<%if (operational) {%>';
        if (operational) {
            ;
            $p += ' mx-click="' + $viewId + '@{select}({index:';
            $line = 4;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '})" mx-mouseover="' + $viewId + '@{over}({index:';
            $line = 4;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '})" mx-mouseout="' + $viewId + '@{out}()" ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 4;
        $art = '!icon';
        ;
        $p += ($expr = '<%!icon%>', $n(icon)) + '</span>';
        $line = 5;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div class="_zs_gallery_mx-effects_star_-star-on" style="width: ';
    $line = 7;
    $art = '=(num * starWidth)';
    ;
    $p += ($expr = '<%=(num * starWidth)%>', $e((num * starWidth))) + 'px;"><div class="_zs_gallery_mx-effects_star_-star-inner clearfix" style="width:';
    $line = 8;
    $art = '=(count * starWidth)';
    ;
    $p += ($expr = '<%=(count * starWidth)%>', $e((count * starWidth))) + 'px;">';
    $line = 9;
    $art = 'for (let i=0;i<count;i+=1)';
    ;
    $expr = '<%for (var i = 0; i < count; i += 1) {%>';
    for (var i = 0; i < count; i += 1) {
        ;
        $p += '<span class="_zs_gallery_mx-effects_star_-star ';
        $line = 10;
        $art = 'if (hoverIndex == i)';
        ;
        $expr = '<%if (hoverIndex == i) {%>';
        if (hoverIndex == i) {
            ;
            $p += ' _zs_gallery_mx-effects_star_-star-hover ';
            $line = 10;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" style="color: ';
        $line = 11;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + ';" ';
        $line = 12;
        $art = 'if operational';
        ;
        $expr = '<%if (operational) {%>';
        if (operational) {
            ;
            $p += ' mx-click="' + $viewId + '@{select}({index:';
            $line = 12;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '})" mx-mouseover="' + $viewId + '@{over}({index:';
            $line = 12;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '})" mx-mouseout="' + $viewId + '@{out}()" ';
            $line = 12;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 12;
        $art = '!icon';
        ;
        $p += ($expr = '<%!icon%>', $n(icon)) + '</span>';
        $line = 13;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/star.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign: function (e) {
        var that = this;
        var altered = that.updater.altered();
        // num: 0, 0.5, 1 ... 4, 4.5, 5，
        // 最大值不超过count
        var num = +e.num || 0, count = +e.count || 5; // icon个数
        if (num < 0) {
            num = 0;
        }
        if (num > count) {
            num = count;
        }
        that.updater.set({
            starWidth: 24,
            num: num,
            count: count,
            operational: (e.operational + '' === 'true'),
            color: e.color || CSSVarUtil.get('--color-brand', '#4d7fff'),
            icon: e.icon || '<i class="mc-iconfont">&#xe60f;</i>'
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest({
            hoverIndex: -1
        });
        var that = this;
        that.updater.digest();
        that['@{owner.node}'] = $('#' + that.id);
        // 双向绑定
        var num = that.updater.get().num;
        that['@{owner.node}'].val(num);
    },
    '@{select}<click>': function (event) {
        event.preventDefault();
        event.stopPropagation();
        var that = this;
        var num = +event.params.index + 1;
        that.updater.digest({
            num: num
        });
        that['@{owner.node}'].val(num).trigger({
            type: 'change',
            num: num
        });
    },
    '@{out}<mouseout>': function (e) {
        var that = this;
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }
        that.updater.digest({
            hoverIndex: -1
        });
    },
    '@{over}<mouseover>': function (e) {
        var that = this;
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }
        that.updater.digest({
            hoverIndex: e.params.index
        });
    }
});

});