/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

"use strict";
exports.__esModule = true;
var Magix = require("magix");
var Vframe = Magix.Vframe;
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popconfirm_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-popconfirm_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-popconfirm_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-popconfirm_index_-bottom-left,\n._zs_gallery_mx-popconfirm_index_-bottom-right,\n._zs_gallery_mx-popconfirm_index_-bottom-center,\n._zs_gallery_mx-popconfirm_index_-top-left,\n._zs_gallery_mx-popconfirm_index_-top-right,\n._zs_gallery_mx-popconfirm_index_-top-center,\n._zs_gallery_mx-popconfirm_index_-right-top,\n._zs_gallery_mx-popconfirm_index_-right-bottom,\n._zs_gallery_mx-popconfirm_index_-right-center,\n._zs_gallery_mx-popconfirm_index_-left-top,\n._zs_gallery_mx-popconfirm_index_-left-bottom,\n._zs_gallery_mx-popconfirm_index_-left-center {\n  opacity: 0;\n  transition: opacity 0.15s, -webkit-transform 0.15s;\n  transition: transform 0.15s, opacity 0.15s;\n  transition: transform 0.15s, opacity 0.15s, -webkit-transform 0.15s;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n/**\n * popover下左 初始隐藏状态\n * 注意使用opacity控制popover的显示和隐藏，不要设置display: none\n */\n._zs_gallery_mx-popconfirm_index_-bottom-left,\n._zs_gallery_mx-popconfirm_index_-right-top {\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n._zs_gallery_mx-popconfirm_index_-bottom-right,\n._zs_gallery_mx-popconfirm_index_-left-top {\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n}\n._zs_gallery_mx-popconfirm_index_-bottom-center {\n  -webkit-transform-origin: 50% 0;\n          transform-origin: 50% 0;\n}\n._zs_gallery_mx-popconfirm_index_-top-left,\n._zs_gallery_mx-popconfirm_index_-right-bottom {\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n}\n._zs_gallery_mx-popconfirm_index_-top-right,\n._zs_gallery_mx-popconfirm_index_-left-bottom {\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n._zs_gallery_mx-popconfirm_index_-top-center {\n  -webkit-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n}\n._zs_gallery_mx-popconfirm_index_-left-center {\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n._zs_gallery_mx-popconfirm_index_-right-center {\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n._zs_gallery_mx-popconfirm_index_-show-out {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/**\n * popover显示\n */\n._zs_gallery_mx-popconfirm_index_-popover-hide {\n  display: none;\n}\n._zs_gallery_mx-popconfirm_index_-popover,\n._zs_gallery_mx-popconfirm_index_-popover-dark {\n  position: absolute;\n  z-index: 9999;\n  height: auto;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 22px;\n  white-space: normal;\n  font-weight: normal;\n  font-family: Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;\n}\n._zs_gallery_mx-popconfirm_index_-popover {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n  background-color: #fff;\n  color: #333;\n}\n._zs_gallery_mx-popconfirm_index_-popover ._zs_gallery_mx-popconfirm_index_-popover-content {\n  padding: 10px;\n}\n._zs_gallery_mx-popconfirm_index_-popover-dark {\n  background-color: rgba(33, 33, 33, 0.72);\n  color: #fff;\n}\n._zs_gallery_mx-popconfirm_index_-popover-dark ._zs_gallery_mx-popconfirm_index_-popover-content {\n  padding: 4px 10px;\n}\n[mx-view*=\"mx-popover/index\"] {\n  position: relative;\n  cursor: pointer;\n}\n");
var ShowDalay = 100;
var HideDalay = 200;
var ClassNames = {
    bottomLeft: '_zs_gallery_mx-popconfirm_index_-bottom-left',
    bottomRight: '_zs_gallery_mx-popconfirm_index_-bottom-right',
    bottomCenter: '_zs_gallery_mx-popconfirm_index_-bottom-center',
    topLeft: '_zs_gallery_mx-popconfirm_index_-top-left',
    topRight: '_zs_gallery_mx-popconfirm_index_-top-right',
    topCenter: '_zs_gallery_mx-popconfirm_index_-top-center',
    leftTop: '_zs_gallery_mx-popconfirm_index_-left-top',
    leftBottom: '_zs_gallery_mx-popconfirm_index_-left-bottom',
    leftCenter: '_zs_gallery_mx-popconfirm_index_-left-center',
    rightTop: '_zs_gallery_mx-popconfirm_index_-right-top',
    rightBottom: '_zs_gallery_mx-popconfirm_index_-right-bottom',
    rightCenter: '_zs_gallery_mx-popconfirm_index_-right-center'
};
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, trigger = $$.trigger; var $expr, $art, $line; try {
    $p += '';
    $line = 1;
    $art = '!trigger';
    ;
    $p += '' + ($expr = '<%!trigger%>', $n(trigger)) + '';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popconfirm/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        var placement = extra.placement || 'bottom', align = extra.align || 'center';
        me['@{pos.placement}'] = placement;
        me['@{pos.align}'] = align;
        me['@{pos.class}'] = ClassNames[placement + align[0].toUpperCase() + align.slice(1)];
        if (extra.type == 'dark') {
            me['@{pos.class}'] += ' _zs_gallery_mx-popconfirm_index_-popover-dark';
        }
        else {
            me['@{pos.class}'] += ' _zs_gallery_mx-popconfirm_index_-popover';
        }
        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;
        me['@{content}'] = extra.content || '';
        me['@{width}'] = extra.width || 200;
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
            }), ShowDalay);
        }, function () {
            me['@{hide}']();
        });
        me.bindScroll();
    },
    bindScroll: function () {
        var me = this;
        var scrollWrapper = me['@{scroll.wrapper}'];
        if (!scrollWrapper) {
            return;
        }
        var wrapper;
        if ((typeof scrollWrapper == 'string') && !(/^#/.test(scrollWrapper)) && !(/^\./.test(scrollWrapper))) {
            wrapper = $('#' + scrollWrapper);
        }
        else {
            wrapper = $(scrollWrapper);
        }
        wrapper.scroll(function () {
            if (me['@{pos.show}']) {
                me['@{setPos}']();
            }
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
            }), ShowDalay);
        }
    },
    '@{init}': function () {
        var me = this;
        var posClass = me['@{pos.class}'], posWidth = me['@{width}'], view = me['@{custom.view}'], viewData = me['@{custom.view.data}'], vId = me.id;
        if (!view) {
            view = 'mx-popconfirm/content';
            viewData = {
                content: me['@{content}']
            };
        }
        var popNode = "<div class=\"_zs_gallery_mx-popconfirm_index_-popover-hide " + posClass + "\" id=\"popover_" + vId + "\"\n                style=\"width: " + posWidth + "px;\"></div>";
        $(document.body).append(popNode);
        // 先实例化，绑定事件，再加载对应的view
        var vf = me.owner.mountVframe('popover_' + vId, '');
        vf.on('created', function () {
            var popNode = me['@{setPos}']();
            popNode.removeClass('_zs_gallery_mx-popconfirm_index_-popover-hide');
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
    '@{setPos}': function () {
        var me = this;
        var oNode = me['@{owner.node}'];
        var popNode = $('#popover_' + me.id);
        if (!popNode || !popNode.length) {
            return;
        }
        var width = oNode.outerWidth();
        var height = oNode.outerHeight();
        var offset = oNode.offset();
        var rWidth = popNode.outerWidth();
        var rHeight = popNode.outerHeight();
        // 默认下方居中
        var top = offset.top + 10, left = offset.left - (rWidth - width) / 2;
        // 可选组合：
        //     下右中左
        //     上右中左
        //     右上中下
        //     左上中下
        var placement = me['@{pos.placement}'], align = me['@{pos.align}'];
        var place = placement + '_' + align;
        switch (place) {
            case 'top_left':
                top = offset.top - rHeight - 10;
                left = offset.left;
                break;
            case 'top_center':
                top = offset.top - rHeight - 10;
                left = offset.left - (rWidth - width) / 2;
                break;
            case 'top_right':
                top = offset.top - rHeight - 10;
                left = offset.left + width - rWidth;
                break;
            case 'bottom_left':
                top = offset.top + height + 10;
                left = offset.left;
                break;
            case 'bottom_center':
                top = offset.top + height + 10;
                left = offset.left - (rWidth - width) / 2;
                break;
            case 'bottom_right':
                top = offset.top + height + 10;
                left = offset.left + width - rWidth;
                break;
            case 'left_top':
                top = offset.top;
                left = offset.left - rWidth - 10;
                break;
            case 'left_center':
                top = offset.top - (rHeight - height) / 2;
                left = offset.left - rWidth - 10;
                break;
            case 'left_bottom':
                top = offset.top - (rHeight - height);
                left = offset.left - rWidth - 10;
                break;
            case 'right_top':
                top = offset.top;
                left = offset.left + width + 10;
                break;
            case 'right_center':
                top = offset.top - (rHeight - height) / 2;
                left = offset.left + width + 10;
                break;
            case 'right_bottom':
                top = offset.top - (rHeight - height);
                left = offset.left + width + 10;
                break;
        }
        popNode.css({
            textAlign: me['@{text.align}'],
            left: left,
            top: top
        });
        return popNode;
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
        popNode.addClass('_zs_gallery_mx-popconfirm_index_-show-out');
    },
    '@{hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(function () {
            if (!me['@{pos.show}']) {
                return;
            }
            me['@{pos.show}'] = false;
            var popNode = $('#popover_' + me.id);
            popNode.removeClass('_zs_gallery_mx-popconfirm_index_-show-out');
        }), HideDalay);
    },
    /**
     * 页面滚动的时候
     * 如果popover展开则重新定位popover
     */
    '$win<scroll>': function (e) {
        var me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>': function (e) {
        var me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    }
});

});