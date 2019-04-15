/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/index",["magix","$","../mx-monitor/index","./content"],(require,exports,module)=>{
/*Magix,$,Monitor*/
require("./content");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_gallery_mx-time_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-time_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-time_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-time_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-time_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-time_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-time_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-time_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n/**\n * 按钮中间的loading点动画\n */\n@keyframes _zs_gallery_mx-time_index_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-time_index_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@keyframes _zs_gallery_mx-time_index_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-time_index_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n._zs_gallery_mx-time_index_-time-toggle {\n  position: relative;\n  width: 100%;\n  height: 32px;\n  padding: 0 25px 0 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 30px;\n  transition: all 0.25s;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  background-color: #fff;\n}\n._zs_gallery_mx-time_index_-time-toggle ._zs_gallery_mx-time_index_-time-toggle-label {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-time_index_-time-toggle ._zs_gallery_mx-time_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: #e6e6e6;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-time_index_-time-toggle._zs_gallery_mx-time_index_-open ._zs_gallery_mx-time_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-time_index_-time-wrapper {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 100%;\n  z-index: 99;\n  min-width: 220px;\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-time_index_-time-wrapper._zs_gallery_mx-time_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-time_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-time_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n[mx-view*=\"mx-time/index\"] {\n  position: relative;\n  display: inline-block;\n  min-width: 100px;\n  vertical-align: middle;\n}\n[mx-view*=\"mx-time/index\"]:hover ._zs_gallery_mx-time_index_-time-toggle {\n  border-color: #ccc;\n}\n[mx-view*=\"mx-time/index\"]:hover ._zs_gallery_mx-time_index_-time-toggle ._zs_gallery_mx-time_index_-arrow {\n  color: #ccc;\n}\n[mx-view*=\"mx-time/index\"][mx-disabled] ._zs_gallery_mx-time_index_-time-toggle,\n[mx-view*=\"mx-time/index\"][mx-disabled]:hover ._zs_gallery_mx-time_index_-time-toggle {\n  border-color: #e6e6e6;\n  color: #999;\n  background-color: #eee;\n  cursor: not-allowed;\n}\n[mx-view*=\"mx-time/index\"][mx-disabled] ._zs_gallery_mx-time_index_-time-toggle ._zs_gallery_mx-time_index_-arrow,\n[mx-view*=\"mx-time/index\"][mx-disabled]:hover ._zs_gallery_mx-time_index_-time-toggle ._zs_gallery_mx-time_index_-arrow {\n  color: #ccc;\n}\n._zs_gallery_mx-time_index_-footer {\n  margin: 10px;\n  padding: 10px 0 0 0;\n  border-top: 1px solid #e6e6e6;\n  text-align: left;\n}\n");
var format = function (t) {
    if (t < 10)
        return '0' + t;
    return t;
};
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, disabled = $$.disabled, name = $$.name, time = $$.time, rList = $$.rList, viewId = $$.viewId, types = $$.types; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-time_index_-time-toggle ';
    $line = 1;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' _zs_gallery_mx-time_index_-open ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 2;
    $art = 'if !disabled';
    ;
    $expr = '<%if (!disabled) {%>';
    if (!disabled) {
        ;
        $p += ' mx-click="' + $viewId + '@{show}()" ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '><span mxa="_zs_galleryeW:_" class="_zs_gallery_mx-time_index_-time-toggle-label">';
    $line = 4;
    $art = 'if name';
    ;
    $expr = '<%if (name) {%>';
    if (name) {
        ;
        $p += '<span mxa="_zs_galleryeW:a" class="color-9">';
        $line = 4;
        $art = '=name';
        ;
        $p += ($expr = '<%=name%>', $e(name)) + '：</span>';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 5;
    $art = '=time';
    ;
    $p += ($expr = '<%=time%>', $e(time)) + '</span><span mxs="_zs_galleryeW:_" class="mc-iconfont _zs_gallery_mx-time_index_-arrow">&#xe692;</span></div><div class="_zs_gallery_mx-time_index_-time-wrapper ';
    $line = 10;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' _zs_gallery_mx-time_index_-open ';
        $line = 10;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 11;
    $art = 'if rList';
    ;
    $expr = '<%if (rList) {%>';
    if (rList) {
        ;
        $p += '<div mx-view="mx-time/content?time=';
        $line = 14;
        $art = '=time';
        ;
        $p += ($expr = '<%!$eu(time)%>', $eu(time)) + '&types=';
        $line = 15;
        $art = '=types';
        ;
        $p += ($expr = '<%!$eu(types)%>', $eu(types)) + '" id="';
        $line = 13;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_content" mx-change="' + $viewId + '@{stop}()"></div><div mxs="_zs_galleryeW:a" class="_zs_gallery_mx-time_index_-footer"><button type="button" class="btn btn-small btn-brand" mx-click="' + $viewId + '@{hide}({enter:true})">确定</button><button type="button" class="btn btn-small ml10" mx-click="' + $viewId + '@{hide}()">取消</button></div>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{owner.node}'] = $('#' + me.id);
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['@{ui.disabled}'] = disabledNode && (disabledNode.length > 0);
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        var time = extra.time;
        if (!time) {
            var d = new Date();
            time = format(d.getHours()) + ':' +
                format(d.getMinutes()) + ':' +
                format(d.getSeconds());
        }
        me.updater.set({
            viewId: me.id,
            disabled: me['@{ui.disabled}'],
            time: time,
            types: extra.types,
            expand: false //列表是否展开
        });
        me['@{owner.node}'].val(time);
    },
    render: function () {
        this.updater.digest({});
    },
    '@{hide}': function () {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me.updater.digest({
                expand: false
            });
            Monitor['@{remove}'](me);
        }
    },
    '@{show}<click>': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (!expand) {
            var d = {
                expand: true
            };
            var r = me.updater.get('rList');
            if (!r) {
                d.rList = true;
            }
            me.updater.digest(d);
            Monitor['@{add}'](me);
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}<click>': function (e) {
        var me = this;
        var oldTime = me.updater.get('time');
        var newTime = oldTime;
        if (e.params.enter) {
            // 确定
            var vf = Magix.Vframe.get(me.id + '_content');
            newTime = vf.invoke('val');
        }
        me['@{hide}']();
        if (e.params.enter) {
            if (oldTime != newTime) {
                me.updater.digest({
                    time: newTime
                });
                me['@{owner.node}'].val(newTime).trigger({
                    type: 'change',
                    time: newTime
                });
            }
        }
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});