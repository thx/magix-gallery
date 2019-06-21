/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/index",["magix","$","../mx-medusa/util","../mx-util/monitor"],(require,exports,module)=>{
/*Magix,$,I18n,Monitor*/

var Magix = require("magix");
var $ = require("$");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-util/monitor");
Magix.applyStyle("_zs_gallery_mx-suggest_index_","[mx-view*=\"mx-suggest/index\"] {\n  position: relative;\n  display: inline-block;\n}\n[mx-view*=\"mx-suggest/index\"] ._zs_gallery_mx-suggest_index_-delete-icon {\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  width: 12px;\n  height: 12px;\n  font-size: 12px;\n  margin-top: -6px;\n  color: #ccc;\n  cursor: pointer;\n  transition: all var(--duration);\n  background-color: #fff;\n}\n[mx-view*=\"mx-suggest/index\"] ._zs_gallery_mx-suggest_index_-delete-icon:hover {\n  color: #999;\n}\n");
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
} ; var $g = '', $_temp, $p = '', placeholder = $$.placeholder, viewId = $$.viewId, selectedText = $$.selectedText, show = $$.show, loading = $$.loading, list = $$.list, selectedValue = $$.selectedValue, emptyText = $$.emptyText; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryea:_" class="search-box"><i mxs="_zs_galleryea:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
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
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '" mx-keyup="' + $viewId + '@{suggest}()" mx-paste="' + $viewId + '@{suggest}()" mx-focusin="' + $viewId + '@{suggest}()" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{stop}()"/>';
    $line = 13;
    $art = 'if selectedText';
    ;
    $expr = '<%if (selectedText) {%>';
    if (selectedText) {
        ;
        $p += '<i mxs="_zs_galleryea:a" class="mc-iconfont _zs_gallery_mx-suggest_index_-delete-icon" mx-click="' + $viewId + '@{clear}()">&#xe6f8;</i>';
        $line = 15;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div class="mx-output mx-output-bottom ';
    $line = 17;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += ' mx-output-open ';
        $line = 17;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><ul mxa="_zs_galleryea:a" class="mx-output-list">';
    $line = 19;
    $art = 'if loading';
    ;
    $expr = '<%if (loading) {%>';
    if (loading) {
        ;
        $p += '<li mxs="_zs_galleryea:b"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';
        $line = 21;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 22;
        $art = 'if (list.length > 0)';
        ;
        $expr = '<%if (list.length > 0) {%>';
        if (list.length > 0) {
            ;
            $p += ' ';
            $line = 23;
            $art = 'each list as item';
            ;
            $expr = '<%for (var $art_iaweseuyo$art_i = 0, $art_cdrcrbtr$art_c = list.length; $art_iaweseuyo$art_i < $art_cdrcrbtr$art_c; $art_iaweseuyo$art_i++) {            var item = list[$art_iaweseuyo$art_i]%>';
            for (var $art_iaweseuyo$art_i = 0, $art_cdrcrbtr$art_c = list.length; $art_iaweseuyo$art_i < $art_cdrcrbtr$art_c; $art_iaweseuyo$art_i++) {
                var item = list[$art_iaweseuyo$art_i];
                $p += '<li mxa="_zs_galleryea:b" class="mx-output-item"><span class="mx-output-link ';
                $line = 25;
                $art = 'if ((selectedValue + \'\') === (item.value + \'\'))';
                ;
                $expr = '<%if ((selectedValue + \'\') === (item.value + \'\')) {%>';
                if ((selectedValue + '') === (item.value + '')) {
                    ;
                    $p += ' mx-output-link-active ';
                    $line = 25;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" data-active="(selectedValue + \'\') === (item.value + \'\')" mx-click="' + $viewId + '@{select}({item:\'';
                $line = 27;
                $art = '@item';
                ;
                $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})">';
                $line = 28;
                $art = '!item.text';
                ;
                $p += ($expr = '<%!item.text%>', $n(item.text)) + '</span></li>';
                $line = 31;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 32;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<li mxa="_zs_galleryea:c" class="text-center color-9 pt20 pb20">';
            $line = 33;
            $art = '=emptyText';
            ;
            $p += ($expr = '<%=emptyText%>', $e(emptyText)) + '</li>';
            $line = 34;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 35;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</ul></div></div>';
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
        that.updater.snapshot();
        that.assign(extra);
        // 初始化列表为空默认为动态刷新列表
        var list = extra.list || [];
        that['@{dynamic.list}'] = (list.length == 0);
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
        var altered = that.updater.altered();
        var placeholder = data.placeholder || '';
        if (!placeholder) {
            placeholder = I18n['search'];
        }
        //动态数据时，是否回车默认选中第一个，默认为true
        that['@{dynamic.enter}'] = data.dynamicEnter + '' === 'true';
        // text，value的key值
        that['@{key.value}'] = data.listValue || 'value';
        that['@{key.text}'] = data.listText || 'text';
        var list = that['@{wrap}']((data.list || that['@{list.bak}']));
        that['@{list.bak}'] = list;
        // selectedValue：当前选中的value值
        // item：完整selected对象
        // 优先级item > selectedValue
        var item = data.item || {};
        var selectedValue = item.value || data.selected || '';
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
            show: false,
            emptyText: I18n['empty.text']
        });
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selectedValue);
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    '@{wrap}': function (origin) {
        var listValue = this['@{key.value}'], listText = this['@{key.text}'];
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
        var _a = that.updater.get(), list = _a.list, selectedValue = _a.selectedValue;
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
            // 回车
            if (that['@{dynamic.enter}']) {
                // 回车选中当前输入值
                var selectedText = $('#' + that.id + '_input').val();
                that['@{select}']({
                    value: selectedText,
                    text: selectedText
                });
            }
            else {
                // 回车默认选中第一个
                that['@{enter}'](idx);
            }
        }
        else {
            that['@{suggest.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{show}']();
            }), 250);
        }
    },
    '@{clear}<click>': function () {
        var that = this;
        var show = that.updater.get().show;
        if (show) {
            // 展开的情况下，更新静态数据list
            that.updater.digest({
                list: that['@{list.bak}'],
                selectedText: ''
            });
        }
        else {
            // 收起状态下，清空选项
            that.updater.digest({
                selectedText: ''
            });
            that['@{select}']({
                value: '',
                text: ''
            });
        }
    },
    '@{show}': function (ignore) {
        var that = this;
        var selectedText = $('#' + that.id + '_input').val();
        var source = that['@{list.bak}'];
        var list = [];
        if (that['@{dynamic.list}']) {
            // 动态更新数据
            if (!selectedText) {
                // 未输入内容不响应：清空选项
                that.updater.set({
                    list: that['@{list.bak}'] = []
                });
                that['@{hide}']();
                // 不显示下拉框
                return;
            }
            else {
                // 动态情况下不需要过滤，直接显示动态更新的list
                list = source;
            }
        }
        else {
            // 静态数据根据关键词过滤
            var lowerText_1 = (selectedText + '').toLowerCase();
            var types_1 = that['@{search.type}'];
            source.forEach(function (item) {
                var has = false;
                types_1.forEach(function (type) {
                    if ((item[type] + '').toLowerCase().indexOf(lowerText_1) > -1) {
                        has = true;
                    }
                });
                if (has) {
                    list.push(item);
                }
            });
        }
        that.updater.digest({
            list: list,
            selectedText: selectedText,
            show: true
        });
        Monitor['@{add}'](that);
        if (!ignore) {
            // 是否需要通知外部展开下拉框了
            that['@{owner.node}'].trigger({
                type: 'show',
                keyword: selectedText
            });
        }
    },
    '@{hide}': function (item) {
        var that = this;
        if (that['@{suggest.delay.timer}']) {
            clearTimeout(that['@{suggest.delay.timer}']);
        }
        item = item || {
            text: $('#' + that.id + '_input').val() //保留用户输入
        };
        var selectedValue = item.value || '', selectedText = item.text || '';
        that.updater.digest({
            selectedValue: selectedValue,
            selectedText: selectedText,
            show: false,
            loading: false
        });
        Monitor['@{remove}'](that);
        // 双向绑定
        that['@{owner.node}'].trigger({
            type: 'focusout',
            keyword: selectedText
        });
    },
    /**
     * 回车处理
     */
    '@{enter}': function (idx) {
        var that = this;
        var selectedText = $('#' + that.id + '_input').val();
        if (!selectedText) {
            // 输入框内容为空时
            // 清空选项
            that['@{select}']({
                value: '',
                text: ''
            });
        }
        else {
            var list = that.updater.get().list;
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (idx < 0) {
                idx = 0;
            }
            if (list[idx]) {
                that['@{select}'](list[idx]);
            }
        }
    },
    '@{select}<click>': function (e) {
        e.stopPropagation();
        var item = e.params.item;
        this['@{select}'](item);
    },
    '@{select}': function (item) {
        var that = this;
        var notice = !(item.value == that['@{value.bak}']);
        var selectedValue = that['@{value.bak}'] = item.value;
        that['@{hide}'](item);
        if (notice) {
            // 双向绑定
            that['@{owner.node}'].val(selectedValue).trigger({
                type: 'change',
                selected: selectedValue,
                item: item
            });
            // 兼容老的事件处理
            that['@{owner.node}'].trigger({
                type: 'suggest',
                selected: {
                    value: selectedValue,
                    text: item.text
                }
            });
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
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
        this['@{list.bak}'] = this['@{wrap}'](list);
        this['@{show}'](true);
    }
});

});