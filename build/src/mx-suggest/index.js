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
Magix.applyStyle("_zs_gallery_mx-suggest_index_","[mx-view*=\"mx-suggest/index\"] {\n  position: relative;\n  display: inline-block;\n}\n");
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
    $p += '<div mxv mxa="_zs_galleryd\\:_" class="search-box"><i mxs="_zs_galleryd\\:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
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
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '" mx-keyup="' + $viewId + '@{suggest}()" mx-paste="' + $viewId + '@{suggest}()" mx-focusin="' + $viewId + '@{suggest}()" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{stop}()"/><div class="mx-output mx-output-bottom ';
    $line = 14;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += ' mx-output-open ';
        $line = 14;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><ul mxa="_zs_galleryd\\:a" class="mx-output-list">';
    $line = 16;
    $art = 'if loading';
    ;
    $expr = '<%if (loading) {%>';
    if (loading) {
        ;
        $p += '<li mxs="_zs_galleryd\\:a"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';
        $line = 18;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 19;
        $art = 'if (list.length > 0)';
        ;
        $expr = '<%if (list.length > 0) {%>';
        if (list.length > 0) {
            ;
            $p += ' ';
            $line = 20;
            $art = 'each list as item';
            ;
            $expr = '<%for (var $art_ijtzpvocf$art_i = 0, $art_cymwokzvg$art_c = list.length; $art_ijtzpvocf$art_i < $art_cymwokzvg$art_c; $art_ijtzpvocf$art_i++) {            var item = list[$art_ijtzpvocf$art_i]%>';
            for (var $art_ijtzpvocf$art_i = 0, $art_cymwokzvg$art_c = list.length; $art_ijtzpvocf$art_i < $art_cymwokzvg$art_c; $art_ijtzpvocf$art_i++) {
                var item = list[$art_ijtzpvocf$art_i];
                $p += '<li mxa="_zs_galleryd\\:b" class="mx-output-item"><span class="mx-output-link ';
                $line = 22;
                $art = 'if ((selectedValue + \'\') === (item.value + \'\'))';
                ;
                $expr = '<%if ((selectedValue + \'\') === (item.value + \'\')) {%>';
                if ((selectedValue + '') === (item.value + '')) {
                    ;
                    $p += ' mx-output-link-active ';
                    $line = 22;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" data-active="(selectedValue + \'\') === (item.value + \'\')" mx-click="' + $viewId + '@{select}({item:\'';
                $line = 24;
                $art = '@item';
                ;
                $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})">';
                $line = 25;
                $art = '!item.text';
                ;
                $p += ($expr = '<%!item.text%>', $n(item.text)) + '</span></li>';
                $line = 28;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 29;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<li mxa="_zs_galleryd\\:c" class="text-center color-9 pt20 pb20">';
            $line = 30;
            $art = '=emptyText';
            ;
            $p += ($expr = '<%=emptyText%>', $e(emptyText)) + '</li>';
            $line = 31;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 32;
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
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
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
            // 回车逻辑
            that['@{enter}'](idx);
        }
        else {
            that['@{suggest.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{show}']();
            }), 250);
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
        this['@{list.bak}'] = this['@{wrap}'](list);
        this['@{show}'](true);
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{show}': function (ignore) {
        var that = this;
        var selectedText = $('#' + that.id + '_input').val();
        if (that['@{dynamic.list}']) {
            // 动态更新数据
            if (!selectedText) {
                // 未输入内容不响应：清空选项
                that.updater.set({
                    list: that['@{list.bak}'] = []
                });
                that['@{hide}']();
            }
            else {
                that.updater.digest({
                    list: that['@{list.bak}'],
                    selectedText: selectedText,
                    show: true
                });
                Monitor['@{add}'](that);
                if (!ignore) {
                    that['@{owner.node}'].trigger({
                        type: 'show',
                        keyword: selectedText
                    });
                }
            }
        }
        else {
            var source = that['@{list.bak}'];
            var lowerText_1 = (selectedText + '').toLowerCase();
            var list_1 = [];
            var types_1 = that['@{search.type}'];
            source.forEach(function (item) {
                var has = false;
                types_1.forEach(function (type) {
                    if ((item[type] + '').toLowerCase().indexOf(lowerText_1) > -1) {
                        has = true;
                    }
                });
                if (has) {
                    list_1.push(item);
                }
            });
            that.updater.digest({
                list: list_1,
                selectedText: selectedText,
                show: true
            });
            Monitor['@{add}'](that);
            if (!ignore) {
                that['@{owner.node}'].trigger({
                    type: 'show',
                    keyword: selectedText
                });
            }
        }
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
    '@{enter}': function (idx) {
        var that = this;
        var selectedText = $('#' + that.id + '_input').val();
        var item = {
            value: '',
            text: ''
        };
        if (!selectedText && that['@{dynamic.list}']) {
            // 动态更新数据的时候，当前输入框为空，清空选中项
        }
        else {
            var list = that.updater.get().list;
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (idx < 0) {
                idx = 0;
            }
            item = list[idx];
        }
        this['@{select}'](item);
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
        that['@{hide}']();
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
    }
});

});