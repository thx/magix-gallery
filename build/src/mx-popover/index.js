/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/index",["magix","mx-popover/base","$"],(require,exports,module)=>{
/*Magix,Base,$*/

var Magix = require("magix");
var Vframe = Magix.Vframe;
var Base = require("mx-popover/base");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popover_index_","._zs_gallery_mx-popover_index_-bottom-left,\n._zs_gallery_mx-popover_index_-bottom-right,\n._zs_gallery_mx-popover_index_-bottom-center,\n._zs_gallery_mx-popover_index_-top-left,\n._zs_gallery_mx-popover_index_-top-right,\n._zs_gallery_mx-popover_index_-top-center,\n._zs_gallery_mx-popover_index_-right-top,\n._zs_gallery_mx-popover_index_-right-bottom,\n._zs_gallery_mx-popover_index_-right-center,\n._zs_gallery_mx-popover_index_-left-top,\n._zs_gallery_mx-popover_index_-left-bottom,\n._zs_gallery_mx-popover_index_-left-center {\n  opacity: 0;\n  transition: opacity 0.15s, -webkit-transform 0.15s;\n  transition: transform 0.15s, opacity 0.15s;\n  transition: transform 0.15s, opacity 0.15s, -webkit-transform 0.15s;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n/**\n * popover下左 初始隐藏状态\n * 注意使用opacity控制popover的显示和隐藏，不要设置display: none\n */\n._zs_gallery_mx-popover_index_-bottom-left,\n._zs_gallery_mx-popover_index_-right-top {\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n._zs_gallery_mx-popover_index_-bottom-right,\n._zs_gallery_mx-popover_index_-left-top {\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n}\n._zs_gallery_mx-popover_index_-bottom-center {\n  -webkit-transform-origin: 50% 0;\n          transform-origin: 50% 0;\n}\n._zs_gallery_mx-popover_index_-top-left,\n._zs_gallery_mx-popover_index_-right-bottom {\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n}\n._zs_gallery_mx-popover_index_-top-right,\n._zs_gallery_mx-popover_index_-left-bottom {\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n._zs_gallery_mx-popover_index_-top-center {\n  -webkit-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n}\n._zs_gallery_mx-popover_index_-left-center {\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n._zs_gallery_mx-popover_index_-right-center {\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n._zs_gallery_mx-popover_index_-show-out {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/**\n * popover显示\n */\n._zs_gallery_mx-popover_index_-popover-hide {\n  display: none;\n}\n._zs_gallery_mx-popover_index_-popover,\n._zs_gallery_mx-popover_index_-popover-dark {\n  position: absolute;\n  z-index: 9999;\n  height: auto;\n  border-radius: var(--border-radius);\n  font-size: 12px;\n  line-height: 22px;\n  white-space: normal;\n  font-weight: normal;\n  font-family: Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;\n}\n._zs_gallery_mx-popover_index_-popover {\n  background-color: #fff;\n  color: #333;\n}\n._zs_gallery_mx-popover_index_-popover ._zs_gallery_mx-popover_index_-popover-content {\n  padding: 10px;\n  word-break: break-all;\n}\n._zs_gallery_mx-popover_index_-popover-dark {\n  background-color: rgba(33, 33, 33, 0.72);\n  color: #fff;\n}\n._zs_gallery_mx-popover_index_-popover-dark ._zs_gallery_mx-popover_index_-popover-content {\n  padding: 4px 10px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', trigger = $$.trigger; var $expr, $art, $line; try {
    $line = 1;
    $art = '!trigger';
    ;
    $p += ($expr = '<%!trigger%>', $n(trigger)) + '';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        var placement = extra.placement || 'bottom', align = extra.align || 'center';
        me['@{pos.placement}'] = placement;
        me['@{pos.align}'] = align;
        me['@{pos.class}'] = me.constants.classNames[[placement, align].join('-')];
        if (extra.mode == 'dark' || extra.type == 'dark') {
            me['@{pos.class}'] += ' _zs_gallery_mx-popover_index_-popover-dark';
            if (extra.type == 'dark') {
                // 自定义tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效
                // 为避免自定义tag失效，尽量避免参数命名与原生属性重名
                console.warn('type为历史配置，为避免与原生属性重命名触发自定义tag时的bug，请使用mode参数替换');
            }
        }
        else {
            me['@{pos.class}'] += ' _zs_gallery_mx-popover_index_-popover mx-shadow';
        }
        // 用户指定定位，指定left + top时忽略placement + align
        me['@{pos.left}'] = extra.left;
        me['@{pos.top}'] = extra.top;
        // 微量偏移：在placement + align / left + top 基础上微量偏移
        me['@{pos.offset}'] = extra.offset;
        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;
        me['@{content}'] = extra.content || '';
        me['@{width}'] = extra.width || 200;
        me['@{zIndex}'] = extra.zIndex || 9999;
        me['@{auto}'] = (/^true$/i).test(extra.auto) || false;
        me['@{custom.view}'] = extra.view || '';
        me['@{custom.view.data}'] = extra.data || {};
        me['@{text.align}'] = (extra.alignText || 'left');
        me.on('destroy', function () {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#popover_' + me.id).remove();
        });
        var oNode = $('#' + me.id);
        me['@{trigger.content}'] = oNode.html();
        me['@{owner.node}'] = oNode;
        oNode.hover(function () {
            clearTimeout(me['@{dealy.hide.timer}']);
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
                me['@{show}'](); //等待内容显示
            }), me.constants.showDelay);
        }, function () {
            me['@{hide}']();
        });
    },
    render: function () {
        var me = this;
        me.updater.digest({
            trigger: me['@{trigger.content}']
        });
        if (me['@{auto}']) {
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
                me['@{show}'](); //等待内容显示
            }), me.constants.showDelay);
        }
        me.bindScroll();
    },
    '@{init}': function () {
        var me = this;
        var posClass = me['@{pos.class}'], posWidth = me['@{width}'], zIndex = me['@{zIndex}'], view = me['@{custom.view}'], viewData = me['@{custom.view.data}'], vId = me.id;
        if (!view) {
            view = 'mx-popover/content';
            viewData = {
                content: me['@{content}']
            };
        }
        var popNode = "<div class=\"_zs_gallery_mx-popover_index_-popover-hide " + posClass + "\" id=\"popover_" + vId + "\"\n                style=\"width: " + posWidth + "px; z-index: " + zIndex + ";\"></div>";
        $(document.body).append(popNode);
        // 先实例化，绑定事件，再加载对应的view
        var vf = me.owner.mountVframe('popover_' + vId, '');
        vf.on('created', function () {
            var popNode = me['@{setPos}']();
            popNode.removeClass('_zs_gallery_mx-popover_index_-popover-hide');
            popNode.hover(function () {
                clearTimeout(me['@{dealy.hide.timer}']);
            }, function () {
                me['@{hide}']();
            });
        });
        vf.mountView(view, {
            data: viewData
        });
    },
    '@{show}': function () {
        var me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        if (!me['@{pos.init}']) {
            me['@{pos.init}'] = true;
            me['@{init}']();
        }
        if (me['@{pos.show}']) {
            return;
        }
        me['@{pos.show}'] = true;
        // 每次show时都重新定位
        var popNode = me['@{setPos}']();
        popNode.addClass('_zs_gallery_mx-popover_index_-show-out');
    },
    '@{hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(function () {
            if (!me['@{pos.show}']) {
                return;
            }
            me['@{pos.show}'] = false;
            var popNode = $('#popover_' + me.id);
            popNode.removeClass('_zs_gallery_mx-popover_index_-show-out');
        }), me.constants.hideDelay);
    }
});

});