/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-suggest_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-suggest_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-suggest_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n/**\n   css3注意点小计\n    - animation-fill-mode 动画结束停在最后一帧\n    - translate(-30%, 0) 百分比是相对于元素自己的宽高，margin-left:-30%; 是相对于父容器的宽高\n    - transition、animation动画不能设置display:none;\n    - :after, :before等伪元素目前不支持嵌套，未来会支持 [还有多重伪元素 div::before(3) { content: ”; }];\n      - :after.content 用法\n        { content: url(@imgsrc) }  - 加载指定资源图片\n        { content: attr(data-src) } - 读取当前节点上的自定义属性值\n        { content: content:\"选项\" counter(sectioncounter) \"： \";\n          counter-increment: sectioncounter;\n        } - 自动计数器 【参考资料：http://dev.opera.com/articles/view/automatic-numbering-with-css-counters/】\n\n    - box-sizing: [content-box | padding-box | border-box];\n      - 全局设置：\n        html {\n          box-sizing: border-box;\n        }\n        *, *:before, *:after {\n          box-sizing: inherit;\n        }\n        // 宽度包含了border以及padding，这在容器设置了100%百分比宽度时又设置了padding时很有用\n */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-suggest_index_-fade-in-down {\n  0% {\n    -webkit-transform: translate(0, -20%);\n            transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-suggest_index_-fade-in-down {\n  0% {\n    -webkit-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-suggest_index_-fade-in-up {\n  0% {\n    -webkit-transform: translate(0, 20%);\n            transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-suggest_index_-fade-in-up {\n  0% {\n    -webkit-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n[mx-view*=\"mx-suggest/index\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-suggest_index_-suggest-box-right,\n._zs_gallery_mx-suggest_index_-suggest-box-left {\n  position: relative;\n  height: 32px;\n}\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu,\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu {\n  display: none;\n  position: absolute;\n  top: 100%;\n  min-width: 100%;\n  z-index: 99;\n  margin-top: 10px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item,\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item {\n  margin: 2px 0;\n  padding: 0 10px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n  white-space: nowrap;\n  word-break: break-all;\n}\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item:hover,\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item._zs_gallery_mx-suggest_index_-active,\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item._zs_gallery_mx-suggest_index_-active,\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item._zs_gallery_mx-suggest_index_-active:hover,\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item._zs_gallery_mx-suggest_index_-active:hover,\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item._zs_gallery_mx-suggest_index_-active:active,\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item._zs_gallery_mx-suggest_index_-active:active,\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item._zs_gallery_mx-suggest_index_-active:focus,\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu ._zs_gallery_mx-suggest_index_-suggest-item._zs_gallery_mx-suggest_index_-active:focus {\n  color: #fff;\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu._zs_gallery_mx-suggest_index_-open,\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu._zs_gallery_mx-suggest_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-suggest_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-suggest_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-suggest_index_-suggest-box-right ._zs_gallery_mx-suggest_index_-suggest-menu {\n  right: 0;\n}\n._zs_gallery_mx-suggest_index_-suggest-box-left ._zs_gallery_mx-suggest_index_-suggest-menu {\n  left: 0;\n}\n");
var Monitor = require("../mx-monitor/index");
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
} ; var $g = '', $_temp, $p = '', align = $$.align, placeholder = $$.placeholder, viewId = $$.viewId, selectText = $$.selectText, show = $$.show, list = $$.list, selectedValue = $$.selectedValue; var $expr, $art, $line; try {
    $p += '<div mxv class="search-box ';
    $line = 1;
    $art = 'if (align==\'right\')';
    ;
    $expr = '<%if (align == \'right\') {%>';
    if (align == 'right') {
        ;
        $p += ' _zs_gallery_mx-suggest_index_-suggest-box-right ';
        $line = 1;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-suggest_index_-suggest-box-left ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><i mxs="_zs_gallerycE:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
    $line = 3;
    $art = '=placeholder';
    ;
    $p += ($expr = '<%=placeholder%>', $e(placeholder)) + '" id="';
    $line = 4;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_input" value="';
    $line = 5;
    $art = '=selectText';
    ;
    $p += ($expr = '<%=selectText%>', $e(selectText)) + '" mx-keyup="' + $viewId + '@{suggest}()" mx-paste="' + $viewId + '@{suggest}()" mx-focusin="' + $viewId + '@{suggest}()" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{stop}()"/><ul class="_zs_gallery_mx-suggest_index_-suggest-menu ';
    $line = 12;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += ' _zs_gallery_mx-suggest_index_-open ';
        $line = 12;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 13;
    $art = 'if (list.length > 0)';
    ;
    $expr = '<%if (list.length > 0) {%>';
    if (list.length > 0) {
        ;
        $p += ' ';
        $line = 14;
        $art = 'each list as item';
        ;
        $expr = '<%for (var $art_ioxps$art_i = 0, $art_cogsexnmep$art_c = list.length; $art_ioxps$art_i < $art_cogsexnmep$art_c; $art_ioxps$art_i++) {        var item = list[$art_ioxps$art_i]%>';
        for (var $art_ioxps$art_i = 0, $art_cogsexnmep$art_c = list.length; $art_ioxps$art_i < $art_cogsexnmep$art_c; $art_ioxps$art_i++) {
            var item = list[$art_ioxps$art_i];
            $p += '<li class="_zs_gallery_mx-suggest_index_-suggest-item ';
            $line = 15;
            $art = 'if ((selectedValue + \'\') === (item.value + \'\'))';
            ;
            $expr = '<%if ((selectedValue + \'\') === (item.value + \'\')) {%>';
            if ((selectedValue + '') === (item.value + '')) {
                ;
                $p += ' _zs_gallery_mx-suggest_index_-active ';
                $line = 15;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + '@{select}({item:\'';
            $line = 16;
            $art = '@item';
            ;
            $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})">';
            $line = 17;
            $art = '=item.text';
            ;
            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</li>';
            $line = 19;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 20;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<li mxs="_zs_gallerycE:a" class="text-center color-9">无匹配选项</li>';
        $line = 22;
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
            placeholder = '搜索';
        }
        that['key.value'] = data.listValue || 'value';
        that['key.text'] = data.listText || 'text';
        // 多种类型搜索的时候
        var list = that['@{wrap}'](data.list);
        //当前选中的value值
        var selectedValue = data.selected || '';
        var selectText = '';
        if (selectedValue) {
            for (var index = 0; index < list.length; index++) {
                if (list[index].value == selectedValue) {
                    selectText = list[index].text;
                    break;
                }
            }
        }
        // 上下键切换缓存
        that['@{value.bak}'] = selectedValue;
        that['@{list.bak}'] = list;
        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            viewId: that.id,
            list: list,
            selectedValue: selectedValue,
            selectText: selectText,
            placeholder: placeholder,
            align: data.align || 'left',
            show: false
        });
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
            that['@{value.bak}'] = list[idx].value;
            that['@{hide}']();
            that['@{fire}']();
        }
        else {
            that['@{suggest.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{show}']();
            }), 300);
        }
    },
    '@{hide}': function () {
        var that = this;
        var data = that.updater.get();
        var list = data.list, selectedValue = that['@{value.bak}'] + '', selectText = '';
        // 上下键切换未选择
        for (var index = 0; index < list.length; index++) {
            var item = list[index];
            if ((item.value + '') === selectedValue) {
                selectText = item.text;
                break;
            }
        }
        that.updater.digest({
            selectedValue: selectedValue,
            selectText: selectText,
            show: false
        });
        Monitor['@{remove}'](that);
    },
    /**
     * 外部更新list可选项
     */
    update: function (list) {
        var that = this;
        that['@{list.bak}'] = that['@{wrap}'](list);
        that['@{show}'](true);
    },
    '@{show}': function (ignore) {
        var that = this;
        var source = that['@{list.bak}'];
        var selectText = $('#' + that.id + '_input').val();
        var lowerText = (selectText + '').toLowerCase();
        var list = [];
        source.forEach(function (item) {
            if ((item.text + '').toLowerCase().indexOf(lowerText) > -1) {
                list.push(item);
            }
        });
        that.updater.digest({
            list: list,
            selectText: selectText,
            show: true
        });
        Monitor['@{add}'](that);
        if (!ignore) {
            that['@{owner.node}'].trigger({
                type: 'show',
                keyword: selectText
            });
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{select}<click>': function (e) {
        e.stopPropagation();
        var that = this;
        var item = e.params.item;
        that.updater.digest({
            selectText: item.text,
            selectedValue: that['@{value.bak}'] = item.value,
            show: false
        });
        that['@{fire}']();
    },
    '@{fire}': function () {
        var that = this;
        var selectedValue = that.updater.get('selectedValue'), selectText = that.updater.get('selectText');
        that['@{owner.node}'].val(selectedValue).trigger({
            type: 'suggest',
            selected: {
                value: selectedValue,
                text: selectText
            }
        });
    }
});

});