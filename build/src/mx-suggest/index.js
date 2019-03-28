/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/index",["magix","$","../mx-medusa/util","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,I18n,Monitor*/

var Magix = require("magix");
var $ = require("$");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_gallery_mx-suggest_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-suggest_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-suggest/index\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-suggest_index_-suggest-box {\n  position: relative;\n  height: 32px;\n}\n");
Magix.applyStyle("_zs_gallery_mx-suggest_suggest_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-suggest_suggest_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-suggest_suggest_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-suggest_suggest_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-suggest_suggest_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-suggest_suggest_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-suggest_suggest_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-suggest_suggest_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n/**\n * 按钮中间的loading点动画\n */\n@keyframes _zs_gallery_mx-suggest_suggest_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-suggest_suggest_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@keyframes _zs_gallery_mx-suggest_suggest_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-suggest_suggest_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n._zs_gallery_mx-suggest_suggest_-suggest-menu {\n  display: none;\n  position: absolute;\n  top: 100%;\n  z-index: 99;\n  min-width: 100%;\n  max-height: 300px;\n  margin-top: 10px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow-y: auto;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-suggest_suggest_-suggest-menu ._zs_gallery_mx-suggest_suggest_-suggest-item {\n  margin: 2px 0;\n  padding: 0 10px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n  white-space: nowrap;\n  word-break: break-all;\n}\n._zs_gallery_mx-suggest_suggest_-suggest-menu ._zs_gallery_mx-suggest_suggest_-suggest-item:hover,\n._zs_gallery_mx-suggest_suggest_-suggest-menu ._zs_gallery_mx-suggest_suggest_-suggest-item._zs_gallery_mx-suggest_suggest_-hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-suggest_suggest_-suggest-menu ._zs_gallery_mx-suggest_suggest_-suggest-item._zs_gallery_mx-suggest_suggest_-active,\n._zs_gallery_mx-suggest_suggest_-suggest-menu ._zs_gallery_mx-suggest_suggest_-suggest-item._zs_gallery_mx-suggest_suggest_-active:hover,\n._zs_gallery_mx-suggest_suggest_-suggest-menu ._zs_gallery_mx-suggest_suggest_-suggest-item._zs_gallery_mx-suggest_suggest_-active:active,\n._zs_gallery_mx-suggest_suggest_-suggest-menu ._zs_gallery_mx-suggest_suggest_-suggest-item._zs_gallery_mx-suggest_suggest_-active:focus {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n._zs_gallery_mx-suggest_suggest_-suggest-menu._zs_gallery_mx-suggest_suggest_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-suggest_suggest_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-suggest_suggest_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n");
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
} ; var $g = '', $_temp, $p = '', placeholder = $$.placeholder, viewId = $$.viewId, selectedText = $$.selectedText, show = $$.show, align = $$.align, loading = $$.loading, list = $$.list, selectedValue = $$.selectedValue, emptyText = $$.emptyText; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryd^:_" class="search-box"><i mxs="_zs_galleryd^:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
    $line = 4;
    $art = '=placeholder';
    ;
    $p += ($expr = '<%=placeholder%>', $e(placeholder)) + '" autocomplete="off" id="';
    $line = 6;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_input" value="';
    $line = 7;
    $art = '=selectedText';
    ;
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '" mx-keyup="' + $viewId + '@{suggest}()" mx-paste="' + $viewId + '@{suggest}()" mx-focusin="' + $viewId + '@{suggest}()" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{stop}()"/><ul class="_zs_gallery_mx-suggest_suggest_-suggest-menu ';
    $line = 14;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += ' _zs_gallery_mx-suggest_suggest_-open ';
        $line = 14;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" style="';
    $line = 14;
    $art = 'if (align==\'right\')';
    ;
    $expr = '<%if (align == \'right\') {%>';
    if (align == 'right') {
        ;
        $p += 'right: 0;';
        $line = 14;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += 'left: 0;';
        $line = 14;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 15;
    $art = 'if loading';
    ;
    $expr = '<%if (loading) {%>';
    if (loading) {
        ;
        $p += '<li mxs="_zs_galleryd^:a"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';
        $line = 19;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 20;
        $art = 'if (list.length > 0)';
        ;
        $expr = '<%if (list.length > 0) {%>';
        if (list.length > 0) {
            ;
            $p += ' ';
            $line = 21;
            $art = 'each list as item';
            ;
            $expr = '<%for (var $art_inbzucrvz$art_i = 0, $art_cmjccrndaf$art_c = list.length; $art_inbzucrvz$art_i < $art_cmjccrndaf$art_c; $art_inbzucrvz$art_i++) {            var item = list[$art_inbzucrvz$art_i]%>';
            for (var $art_inbzucrvz$art_i = 0, $art_cmjccrndaf$art_c = list.length; $art_inbzucrvz$art_i < $art_cmjccrndaf$art_c; $art_inbzucrvz$art_i++) {
                var item = list[$art_inbzucrvz$art_i];
                $p += '<li class="_zs_gallery_mx-suggest_suggest_-suggest-item ';
                $line = 22;
                $art = 'if ((selectedValue + \'\') === (item.value + \'\'))';
                ;
                $expr = '<%if ((selectedValue + \'\') === (item.value + \'\')) {%>';
                if ((selectedValue + '') === (item.value + '')) {
                    ;
                    $p += ' _zs_gallery_mx-suggest_suggest_-active ';
                    $line = 22;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" mx-click="' + $viewId + '@{select}({item:\'';
                $line = 23;
                $art = '@item';
                ;
                $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})">';
                $line = 24;
                $art = '!item.text';
                ;
                $p += ($expr = '<%!item.text%>', $n(item.text)) + '</li>';
                $line = 26;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 27;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<li mxa="_zs_galleryd^:a" class="text-center color-9">';
            $line = 28;
            $art = '=emptyText';
            ;
            $p += ($expr = '<%=emptyText%>', $e(emptyText)) + '</li>';
            $line = 29;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 30;
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
    msg += $expr + '\r\n\tat file:mx-suggest/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);
        Monitor['@{setup}']();
        that.on('destroy', function () {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
            if (that['@{suggest.delay.timer}']) {
                clearTimeout(that['@{suggest.delay.timer}']);
            }
        });
    },
    assign: function (data) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        var placeholder = data.placeholder || '';
        if (!placeholder) {
            placeholder = I18n['search'];
        }
        that['key.value'] = data.listValue || 'value';
        that['key.text'] = data.listText || 'text';
        // 多种类型搜索的时候
        var list = that['@{wrap}']((data.list || that['@{list.bak}']));
        that['@{list.bak}'] = list;
        // selectedValue：当前选中的value值
        // item：完整selected对象
        // 优先级selectedValue > item
        var item = data.item || {};
        var selectedValue = data.selected || item.value || '';
        var selectedText = item.text || '';
        if (selectedValue) {
            for (var index = 0; index < list.length; index++) {
                if (list[index].value == selectedValue) {
                    selectedText = list[index].text;
                    break;
                }
            }
        }
        // 上下键切换缓存
        that['@{value.bak}'] = selectedValue;
        // 在哪些值中搜索关键词
        var type = (data.type || 'text') + '';
        if (type == 'all') {
            type = 'text,value';
        }
        that['@{search.type}'] = type.split(',');
        that.updater.set({
            viewId: that.id,
            list: list,
            selectedValue: selectedValue,
            selectedText: selectedText,
            placeholder: placeholder,
            align: data.align || 'left',
            show: false,
            emptyText: I18n['empty.text']
        });
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selectedValue);
        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }
        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    '@{wrap}': function (origin) {
        var listValue = this['key.value'], listText = this['key.text'];
        var list = [];
        if (origin && (origin.length > 0)) {
            if (typeof origin[0] === 'object') {
                // 本身是个对象
                list = origin.map(function (item) {
                    return {
                        value: item[listValue],
                        text: item[listText]
                    };
                });
            }
            else {
                // 直接value列表
                list = origin.map(function (value) {
                    return {
                        value: value,
                        text: value
                    };
                });
            }
        }
        return list;
    },
    render: function () {
        this.updater.digest();
    },
    '@{suggest}<focusin,keyup,paste>': function (e) {
        e.stopPropagation();
        var that = this;
        if (that['@{suggest.delay.timer}']) {
            clearTimeout(that['@{suggest.delay.timer}']);
        }
        var data = that.updater.get();
        var list = data.list, selectedValue = data.selectedValue;
        var idx = -1;
        for (var index = 0; index < list.length; index++) {
            if (list[index].value == selectedValue) {
                idx = index;
                break;
            }
        }
        if (e.keyCode == 40 || e.keyCode == 38) {
            // 下移 || 上移
            if (e.keyCode == 40) {
                // 下移
                idx += 1;
                if (idx >= list.length) {
                    idx = 0;
                }
            }
            if (e.keyCode == 38) {
                // 下移
                idx -= 1;
                if (idx < 0) {
                    idx = list.length - 1;
                }
            }
            that.updater.digest({
                selectedValue: list[idx].value
            });
        }
        else if (e.keyCode == 13) {
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (idx < 0) {
                idx = 0;
            }
            that['@{select}'](list[idx]);
        }
        else {
            that['@{suggest.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{show}']();
            }), 300);
        }
    },
    showLoading: function () {
        this.updater.digest({
            loading: true
        });
    },
    hideLoading: function () {
        this.updater.digest({
            loading: false
        });
    },
    /**
     * 外部更新list可选项
     */
    update: function (list) {
        var that = this;
        var show = that.updater.get('show');
        if (show) {
            that['@{list.bak}'] = that['@{wrap}'](list);
            // 不需要再处理，直接返回什么，展示什么
            var selectedText = $('#' + that.id + '_input').val();
            that.updater.digest({
                list: that['@{list.bak}'],
                selectedText: selectedText
            });
            Monitor['@{add}'](that);
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{show}': function (ignore) {
        var that = this;
        var source = that['@{list.bak}'];
        var selectedText = $('#' + that.id + '_input').val();
        var lowerText = (selectedText + '').toLowerCase();
        var list = [];
        var types = that['@{search.type}'];
        source.forEach(function (item) {
            var has = false;
            types.forEach(function (type) {
                if ((item[type] + '').toLowerCase().indexOf(lowerText) > -1) {
                    has = true;
                }
            });
            if (has) {
                list.push(item);
            }
        });
        that.updater.digest({
            list: list,
            selectedText: selectedText,
            show: true
        });
        Monitor['@{add}'](that);
        that['@{owner.node}'].trigger({
            type: 'show',
            keyword: selectedText
        });
    },
    '@{hide}': function () {
        var that = this;
        var data = that.updater.get();
        var list = data.list, selectedValue = that['@{value.bak}'] + '', selectedText = '';
        // 上下键切换未选择
        for (var index = 0; index < list.length; index++) {
            var item = list[index];
            if ((item.value + '') === selectedValue) {
                selectedText = item.text;
                break;
            }
        }
        that.updater.digest({
            selectedValue: selectedValue,
            selectedText: selectedText,
            show: false
        });
        Monitor['@{remove}'](that);
        // 双向绑定
        that['@{owner.node}'].trigger('focusout');
    },
    '@{select}<click>': function (e) {
        e.stopPropagation();
        var item = e.params.item;
        this['@{select}'](item);
    },
    '@{select}': function (item) {
        var that = this;
        var notice = !(item.value == that['@{value.bak}']);
        var selectedText = item.text, selectedValue = that['@{value.bak}'] = item.value;
        that['@{hide}']();
        if (notice) {
            that['@{owner.node}'].val(selectedValue).trigger({
                type: 'suggest',
                selected: {
                    value: selectedValue,
                    text: selectedText
                }
            });
            // 双向绑定
            that['@{owner.node}'].trigger('change');
        }
    },
    '@{fire}': function (selectedValue, selectedText) {
        var that = this;
        that['@{owner.node}'].val(selectedValue).trigger({
            type: 'suggest',
            selected: {
                value: selectedValue,
                text: selectedText
            }
        });
    }
});

});