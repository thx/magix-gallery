/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/index",["magix","mx-popover/base","../mx-monitor/index","$"],(require,exports,module)=>{
/*Magix,Base,Monitor,$*/

var Magix = require("magix");
var Vframe = Magix.Vframe;
var Base = require("mx-popover/base");
var Monitor = require("../mx-monitor/index");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popover_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-popover_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-popover_index_-bottom-left,\n._zs_gallery_mx-popover_index_-bottom-right,\n._zs_gallery_mx-popover_index_-bottom-center,\n._zs_gallery_mx-popover_index_-top-left,\n._zs_gallery_mx-popover_index_-top-right,\n._zs_gallery_mx-popover_index_-top-center,\n._zs_gallery_mx-popover_index_-right-top,\n._zs_gallery_mx-popover_index_-right-bottom,\n._zs_gallery_mx-popover_index_-right-center,\n._zs_gallery_mx-popover_index_-left-top,\n._zs_gallery_mx-popover_index_-left-bottom,\n._zs_gallery_mx-popover_index_-left-center {\n  opacity: 0;\n  transition: opacity 0.15s, -webkit-transform 0.15s;\n  transition: transform 0.15s, opacity 0.15s;\n  transition: transform 0.15s, opacity 0.15s, -webkit-transform 0.15s;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n/**\n * popover下左 初始隐藏状态\n * 注意使用opacity控制popover的显示和隐藏，不要设置display: none\n */\n._zs_gallery_mx-popover_index_-bottom-left,\n._zs_gallery_mx-popover_index_-right-top {\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n._zs_gallery_mx-popover_index_-bottom-right,\n._zs_gallery_mx-popover_index_-left-top {\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n}\n._zs_gallery_mx-popover_index_-bottom-center {\n  -webkit-transform-origin: 50% 0;\n          transform-origin: 50% 0;\n}\n._zs_gallery_mx-popover_index_-top-left,\n._zs_gallery_mx-popover_index_-right-bottom {\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n}\n._zs_gallery_mx-popover_index_-top-right,\n._zs_gallery_mx-popover_index_-left-bottom {\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n._zs_gallery_mx-popover_index_-top-center {\n  -webkit-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n}\n._zs_gallery_mx-popover_index_-left-center {\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n._zs_gallery_mx-popover_index_-right-center {\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n._zs_gallery_mx-popover_index_-show-out {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/**\n * popover显示\n */\n._zs_gallery_mx-popover_index_-popover-hide {\n  display: none;\n}\n._zs_gallery_mx-popover_index_-popover,\n._zs_gallery_mx-popover_index_-popover-dark {\n  position: absolute;\n  z-index: 9999;\n  height: auto;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 22px;\n  white-space: normal;\n  font-weight: normal;\n  font-family: Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;\n}\n._zs_gallery_mx-popover_index_-popover {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n  background-color: #fff;\n  color: #333;\n}\n._zs_gallery_mx-popover_index_-popover ._zs_gallery_mx-popover_index_-popover-content {\n  padding: 10px;\n  word-break: break-all;\n}\n._zs_gallery_mx-popover_index_-popover-dark {\n  background-color: rgba(33, 33, 33, 0.72);\n  color: #fff;\n}\n._zs_gallery_mx-popover_index_-popover-dark ._zs_gallery_mx-popover_index_-popover-content {\n  padding: 4px 10px;\n}\n");
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
        Monitor['@{setup}']();
        var map = {
            t: 'top',
            l: 'left',
            r: 'right',
            b: 'bottom',
            c: 'center'
        };
        var place = extra.place || 'bc';
        var places = place.split('');
        var placement = map[places[0]], align = map[places[1]];
        me['@{pos.placement}'] = placement;
        me['@{pos.align}'] = align;
        me['@{pos.class}'] = me.constants.classNames[[placement, align].join('-')] + ' _zs_gallery_mx-popover_index_-popover';
        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;
        me['@{content}'] = extra.content || '';
        me['@{width}'] = extra.width || 200;
        me['@{text.align}'] = (extra.alignText || 'left');
        me.on('destroy', function () {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            $('#popover_' + me.id).remove();
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        var oNode = $('#' + me.id);
        me['@{trigger.content}'] = oNode.html();
        me['@{owner.node}'] = oNode;
        oNode.on('click', function () {
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
                me['@{show}'](); //等待内容显示
            }), me.constants.showDelay);
        });
        me.bindScroll();
    },
    render: function () {
        var me = this;
        me.updater.digest({
            trigger: me['@{trigger.content}']
        });
    },
    '@{init}': function () {
        var me = this;
        var posClass = me['@{pos.class}'], posWidth = me['@{width}'], vId = me.id, view = 'mx-popconfirm/content', viewData = {
            content: me['@{content}']
        };
        var popNode = "<div class=\"_zs_gallery_mx-popover_index_-popover-hide " + posClass + "\" id=\"popover_" + vId + "\"\n                style=\"width: " + posWidth + "px;\"></div>";
        $(document.body).append(popNode);
        // 先实例化，绑定事件，再加载对应的view
        var vf = me.owner.mountVframe('popover_' + vId, '');
        vf.on('created', function () {
            var popNode = me['@{setPos}']();
            popNode.removeClass('_zs_gallery_mx-popover_index_-popover-hide');
        });
        vf.mountView(view, {
            data: viewData,
            submit: function () {
                me['@{hide}']();
                me['@{owner.node}'].trigger({
                    type: 'popconfirm'
                });
            },
            cancel: function () {
                me['@{hide}']();
            }
        });
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'popover_' + this.id);
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
        Monitor['@{add}'](me);
    },
    '@{hide}': function () {
        var me = this;
        if (!me['@{pos.show}']) {
            return;
        }
        me['@{pos.show}'] = false;
        var popNode = $('#popover_' + me.id);
        popNode.removeClass('_zs_gallery_mx-popover_index_-show-out');
        Monitor['@{remove}'](me);
    }
});

});