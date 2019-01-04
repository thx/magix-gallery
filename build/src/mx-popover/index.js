/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/index",["magix","mx-popover/base","$"],(require,exports,module)=>{
/*Magix,Base,$*/

var Magix = require("magix");
var Vframe = Magix.Vframe;
var Base = require("mx-popover/base");
var $ = require("$");
Magix.applyStyle("_zs_galleryaj","._zs_galleryjR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjS,._zs_galleryjT,._zs_galleryjU,._zs_galleryjV,._zs_galleryjW,._zs_galleryjX,._zs_galleryjY,._zs_galleryjZ,._zs_galleryk_,._zs_galleryka,._zs_gallerykb,._zs_gallerykc{opacity:0;transition:opacity .15s,-webkit-transform .15s;transition:transform .15s,opacity .15s;transition:transform .15s,opacity .15s,-webkit-transform .15s;-webkit-transform:scale(0);transform:scale(0)}._zs_galleryjT,._zs_galleryk_{-webkit-transform-origin:0 0;transform-origin:0 0}._zs_galleryjU,._zs_galleryjX{-webkit-transform-origin:100% 0;transform-origin:100% 0}._zs_galleryjS{-webkit-transform-origin:50% 0;transform-origin:50% 0}._zs_galleryjY,._zs_gallerykb{-webkit-transform-origin:0 100%;transform-origin:0 100%}._zs_galleryjV,._zs_gallerykc{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}._zs_galleryka{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._zs_galleryjW{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}._zs_galleryjZ{-webkit-transform-origin:0 50%;transform-origin:0 50%}._zs_gallerykd{opacity:1;-webkit-transform:scale(1);transform:scale(1)}._zs_galleryke{display:none}._zs_gallerykf,._zs_gallerykg{position:absolute;z-index:9999;height:auto;border-radius:4px;font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_gallerykf{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6;background-color:#fff;color:#333}._zs_gallerykf ._zs_gallerykh{padding:10px;word-break:break-all}._zs_gallerykg{background-color:rgba(33,33,33,.72);color:#fff}._zs_gallerykg ._zs_gallerykh{padding:4px 10px}");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', trigger = $$.trigger; $p += $n(trigger) + ''; return $p; },
    init: function (extra) {
        var me = this;
        var placement = extra.placement || 'bottom', align = extra.align || 'center';
        me['__cl'] = placement;
        me['__cm'] = align;
        me['__cn'] = me.constants.classNames[placement + align[0].toUpperCase() + align.slice(1)];
        if (extra.type == 'dark') {
            me['__cn'] += ' _zs_gallerykg';
        }
        else {
            me['__cn'] += ' _zs_gallerykf';
        }
        me['__bp'] = false;
        me['__bq'] = false;
        me['__br'] = false;
        me['__bs'] = extra.scrollWrapper;
        me['__co'] = extra.content || '';
        me['__cp'] = extra.width || 200;
        me['__cu'] = (/^true$/i).test(extra.auto) || false;
        me['__cv'] = extra.view || '';
        me['__cw'] = extra.data || {};
        me['__cq'] = (extra.alignText || 'left');
        me.on('destroy', function () {
            me['__j'].off('mouseenter mouseleave');
            if (me['__bt']) {
                clearTimeout(me['__bt']);
            }
            if (me['__bu']) {
                clearTimeout(me['__bu']);
            }
            $('#popover_' + me.id).remove();
        });
        var oNode = $('#' + me.id);
        me['__cr'] = oNode.html();
        me['__j'] = oNode;
        oNode.hover(function () {
            clearTimeout(me['__bu']);
            me['__bt'] = setTimeout(me.wrapAsync(function () {
                me['__n'](); //等待内容显示
            }), me.constants.showDelay);
        }, function () {
            me['__m']();
        });
    },
    render: function () {
        var me = this;
        me.updater.digest({
            trigger: me['__cr']
        });
        if (me['__cu']) {
            me['__bt'] = setTimeout(me.wrapAsync(function () {
                me['__n'](); //等待内容显示
            }), me.constants.showDelay);
        }
        me.bindScroll();
    },
    '__bz': function () {
        var me = this;
        var posClass = me['__cn'], posWidth = me['__cp'], view = me['__cv'], viewData = me['__cw'], vId = me.id;
        if (!view) {
            view = 'mx-popover/content';
            viewData = {
                content: me['__co']
            };
        }
        var popNode = "<div class=\"_zs_galleryke " + posClass + "\" id=\"popover_" + vId + "\"\n                style=\"width: " + posWidth + "px;\"></div>";
        $(document.body).append(popNode);
        // 先实例化，绑定事件，再加载对应的view
        var vf = me.owner.mountVframe('popover_' + vId, '');
        vf.on('created', function () {
            var popNode = me['__bx']();
            popNode.removeClass('_zs_galleryke');
            popNode.hover(function () {
                clearTimeout(me['__bu']);
            }, function () {
                me['__m']();
            });
        });
        vf.mountView(view, {
            data: viewData
        });
    },
    '__n': function () {
        var me = this;
        clearTimeout(me['__bt']);
        if (!me['__bp']) {
            me['__bp'] = true;
            me['__bz']();
        }
        if (me['__br']) {
            return;
        }
        me['__br'] = true;
        // 每次show时都重新定位
        var popNode = me['__bx']();
        popNode.addClass('_zs_gallerykd');
    },
    '__m': function () {
        var me = this;
        clearTimeout(me['__bt']);
        clearTimeout(me['__bu']);
        me['__bu'] = setTimeout(me.wrapAsync(function () {
            if (!me['__br']) {
                return;
            }
            me['__br'] = false;
            var popNode = $('#popover_' + me.id);
            popNode.removeClass('_zs_gallerykd');
        }), me.constants.hideDelay);
    }
});

});