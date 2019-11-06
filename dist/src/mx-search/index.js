/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/index",["magix","$","../mx-util/view","../mx-util/monitor"],(require,exports,module)=>{
/*magix_1,$,View,Monitor*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var $ = require("$");
var View = require("../mx-util/view");
var Monitor = require("../mx-util/monitor");
magix_1["default"].applyStyle("_zs_gallery_mx-search_index_","._zs_gallery_mx-search_index_-search-box-right,\n._zs_gallery_mx-search_index_-search-box-left {\n  position: relative;\n  height: 32px;\n}\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu {\n  left: auto;\n  right: 0;\n}\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu {\n  left: 0;\n  right: auto;\n}\n");
exports["default"] = View.extend({
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
} ; var $g = '', $_temp, $p = '', align = $$.align, placeholder = $$.placeholder, searchValue = $$.searchValue, spm = $$.spm, list = $$.list, show = $$.show, searchKey = $$.searchKey; var $expr, $art, $line; try {
    $p += '<div mxv class="search-box ';
    $line = 1;
    $art = 'if (align==\'right\')';
    ;
    $expr = '<%if (align == \'right\') {%>';
    if (align == 'right') {
        ;
        $p += ' _zs_gallery_mx-search_index_-search-box-right ';
        $line = 1;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-search_index_-search-box-left ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><i mxs="_zs_galleryd\\:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
    $line = 3;
    $art = '=placeholder';
    ;
    $p += ($expr = '<%=placeholder%>', $e(placeholder)) + '" autocomplete="off" value="';
    $line = 5;
    $art = '=searchValue';
    ;
    $p += ($expr = '<%=searchValue%>', $e(searchValue)) + '" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-focusin="' + $viewId + '@{search}()" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{stop}()" ';
    $line = 11;
    $art = 'if spm';
    ;
    $expr = '<%if (spm) {%>';
    if (spm) {
        ;
        $p += ' data-spm-click="';
        $line = 11;
        $art = '=spm';
        ;
        $p += ($expr = '<%=spm%>', $e(spm)) + 'i" ';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '/><div class="mx-output mx-output-bottom ';
    $line = 13;
    $art = 'if ((list.length > 1) && searchValue && show)';
    ;
    $expr = '<%if ((list.length > 1) && searchValue && show) {%>';
    if ((list.length > 1) && searchValue && show) {
        ;
        $p += ' mx-output-open ';
        $line = 13;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' _zs_gallery_mx-search_index_-search-menu"><ul mxa="_zs_galleryd\\:_" class="mx-output-list">';
    $line = 15;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_iqmyazk$art_i = 0, $art_cawhzsaps$art_c = list.length; $art_iqmyazk$art_i < $art_cawhzsaps$art_c; $art_iqmyazk$art_i++) {    var item = list[$art_iqmyazk$art_i]%>';
    for (var $art_iqmyazk$art_i = 0, $art_cawhzsaps$art_c = list.length; $art_iqmyazk$art_i < $art_cawhzsaps$art_c; $art_iqmyazk$art_i++) {
        var item = list[$art_iqmyazk$art_i];
        $p += '<li mxa="_zs_galleryd\\:a" class="mx-output-item"><span class="mx-output-link ';
        $line = 17;
        $art = 'if (searchKey == item.value)';
        ;
        $expr = '<%if (searchKey == item.value) {%>';
        if (searchKey == item.value) {
            ;
            $p += ' mx-output-link-active ';
            $line = 17;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-click="' + $viewId + '@{select}({item:\'';
        $line = 18;
        $art = '@item';
        ;
        $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" ';
        $line = 18;
        $art = 'if spm';
        ;
        $expr = '<%if (spm) {%>';
        if (spm) {
            ;
            $p += ' data-spm-click="';
            $line = 18;
            $art = '=spm';
            ;
            $p += ($expr = '<%=spm%>', $e(spm)) + '';
            $line = 18;
            $art = '=item.value';
            ;
            $p += ($expr = '<%=item.value%>', $e(item.value)) + '" ';
            $line = 18;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 19;
        $art = '=item.prefix';
        ;
        $p += ($expr = '<%=item.prefix%>', $e(item.prefix)) + '';
        $line = 19;
        $art = '=searchValue';
        ;
        $p += ($expr = '<%=searchValue%>', $e(searchValue)) + '';
        $line = 19;
        $art = '=item.suffix';
        ;
        $p += ($expr = '<%=item.suffix%>', $e(item.suffix)) + '</span></li>';
        $line = 22;
        $art = '/each';
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
    msg += $expr + '\r\n\tat file:mx-search/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        that.updater.snapshot();
        that.assign(extra);
        Monitor['@{setup}']();
        that.on('destroy', function () {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
            if (that['@{search.delay.timer}']) {
                clearTimeout(that['@{search.delay.timer}']);
            }
        });
    },
    assign: function (data) {
        var that = this;
        var altered = that.updater.altered();
        //当前选中的key值
        that['@{search.key}'] = data.searchKey || '';
        // 上下键切换缓存
        that['@{search.key.bak}'] = that['@{search.key}'];
        //当前填入的搜索内容
        that['@{search.value}'] = data.searchValue || '';
        that['@{dis.placeholder}'] = data.placeholder || '';
        that['@{dis.align}'] = data.align || 'left';
        // 多种类型搜索的时候
        var list = [];
        if (data.list) {
            var listText_1 = data.listText || 'text';
            var listValue_1 = data.listValue || 'value';
            try {
                list = (new Function('return ' + data.list))();
            }
            catch (e) {
                list = data.list;
            }
            list = list.map(function (item) {
                var tpls = (item.tmpl || ('搜索含有 “${content}” 的' + item[listText_1])).split('${content}');
                return {
                    prefix: tpls[0],
                    suffix: tpls[1],
                    text: item[listText_1],
                    value: item[listValue_1]
                };
            });
            if (!that['@{dis.placeholder}']) {
                var ts = list.map(function (item) {
                    return item.text;
                });
                that['@{dis.placeholder}'] = $.unique(ts).join('/');
            }
        }
        else {
            if (!that['@{dis.placeholder}']) {
                that['@{dis.placeholder}'] = '搜索';
            }
        }
        that['@{data.list}'] = list;
        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            list: that['@{data.list}'],
            searchValue: that['@{search.value}'],
            searchKey: that['@{search.key}'],
            placeholder: that['@{dis.placeholder}'],
            align: that['@{dis.align}']
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
        this.updater.digest();
    },
    '@{search}<focusin,keyup,paste>': function (e) {
        e.stopPropagation();
        var that = this;
        if (that['@{search.delay.timer}']) {
            clearTimeout(that['@{search.delay.timer}']);
        }
        var show = that.updater.get('show'), list = that['@{data.list}'];
        if (e.keyCode == 40 || e.keyCode == 38) {
            // 下移 || 上移
            if (show) {
                var idx = -1, searchKey = that['@{search.key}'];
                for (var index = 0; index < list.length; index++) {
                    if (list[index].value == searchKey) {
                        idx = index;
                        break;
                    }
                }
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
                    searchKey: that['@{search.key}'] = list[idx].value
                });
            }
        }
        else if (e.keyCode == 13) {
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (!that['@{search.key}'] && list && list.length > 0) {
                that['@{search.key}'] = list[0].value;
            }
            that['@{search.key.bak}'] = that['@{search.key}'];
            that['@{search.value}'] = $.trim(e.eventTarget.value);
            that['@{hide}']();
            that['@{fire}']();
        }
        else {
            that['@{search.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{search.value}'] = $.trim(e.eventTarget.value);
                that['@{show}']();
            }), 250);
        }
    },
    '@{hide}': function () {
        var that = this;
        if (that['@{search.key}'] != that['@{search.key.bak}']) {
            // 上下键切换未选择
            that['@{search.key}'] = that['@{search.key.bak}'];
        }
        that.updater.digest({
            searchKey: that['@{search.key}'],
            searchValue: that['@{search.value}'],
            show: false
        });
        Monitor['@{remove}'](that);
    },
    '@{show}': function () {
        var that = this;
        that.updater.digest({
            searchKey: that['@{search.key}'],
            searchValue: that['@{search.value}'],
            show: true
        });
        Monitor['@{add}'](that);
    },
    '@{inside}': function (node) {
        return magix_1["default"].inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{select}<click>': function (e) {
        e.stopPropagation();
        var that = this;
        var item = e.params.item;
        that.updater.digest({
            searchKey: that['@{search.key}'] = that['@{search.key.bak}'] = item.value,
            show: false
        });
        that['@{fire}']();
    },
    '@{fire}': function () {
        var that = this;
        var searchValue = that['@{search.value}'];
        // 双向绑定
        that['@{owner.node}'].trigger({
            type: 'change',
            searchKey: that['@{search.key}'],
            searchValue: searchValue,
            selected: searchValue
        });
        // 兼容老的事件处理
        that['@{owner.node}'].trigger({
            type: 'search',
            searchKey: that['@{search.key}'],
            searchValue: searchValue
        });
    }
});

});