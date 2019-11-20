/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/sub",["magix","../mx-util/view"],(require,exports,module)=>{
/*magix_1,View*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var View = require("../mx-util/view");
magix_1["default"].applyStyle("_zs_gallery_mx-header_sub_","._zs_gallery_mx-header_sub_-subs {\n  text-align: center;\n}\n._zs_gallery_mx-header_sub_-sub {\n  display: block;\n  padding: 8px 0;\n  color: #999;\n}\n._zs_gallery_mx-header_sub_-sub:hover {\n  color: #333;\n}\n._zs_gallery_mx-header_sub_-sub._zs_gallery_mx-header_sub_-sub-cur {\n  color: #333;\n  background-color: var(--color-brand-opacity);\n  color: var(--color-brand);\n}\n");
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
} ; var $g = '', $_temp, $p = '', subs = $$.subs, valueKey = $$.valueKey, child = $$.child, linkKey = $$.linkKey, nav = $$.nav, spm = $$.spm, textKey = $$.textKey; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryfS:_" class="_zs_gallery_mx-header_sub_-subs">';
    $line = 2;
    $art = 'each subs as sub';
    ;
    $expr = '<%for (var $art_itlwzlsovl$art_i = 0, $art_cosveicd$art_c = subs.length; $art_itlwzlsovl$art_i < $art_cosveicd$art_c; $art_itlwzlsovl$art_i++) {    var sub = subs[$art_itlwzlsovl$art_i]%>';
    for (var $art_itlwzlsovl$art_i = 0, $art_cosveicd$art_c = subs.length; $art_itlwzlsovl$art_i < $art_cosveicd$art_c; $art_itlwzlsovl$art_i++) {
        var sub = subs[$art_itlwzlsovl$art_i];
        $p += '<a data-nav="';
        $line = 3;
        $art = '=sub[valueKey]';
        ;
        $p += ($expr = '<%=sub[valueKey]%>', $e(sub[valueKey])) + '" class="_zs_gallery_mx-header_sub_-sub ';
        $line = 3;
        $art = 'if (child == sub[valueKey])';
        ;
        $expr = '<%if (child == sub[valueKey]) {%>';
        if (child == sub[valueKey]) {
            ;
            $p += ' _zs_gallery_mx-header_sub_-sub-cur ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" ';
        $line = 4;
        $art = 'if sub[linkKey]';
        ;
        $expr = '<%if (sub[linkKey]) {%>';
        if (sub[linkKey]) {
            ;
            $p += ' href="';
            $line = 4;
            $art = '=sub[linkKey]';
            ;
            $p += ($expr = '<%=sub[linkKey]%>', $e(sub[linkKey])) + '" target="_blank" rel="noopener noreferrer" ';
            $line = 4;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' mx-click="' + $viewId + 'to({nav:\'';
            $line = 4;
            $art = '@nav';
            ;
            $p += ($expr = '<%@nav%>', $i($$ref, nav)) + '\',sub:\'';
            $line = 4;
            $art = '@sub';
            ;
            $p += ($expr = '<%@sub%>', $i($$ref, sub)) + '\'})" href="javascript:;" ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 5;
        $art = 'if spm';
        ;
        $expr = '<%if (spm) {%>';
        if (spm) {
            ;
            $p += ' data-spm-click="';
            $line = 5;
            $art = '=spm';
            ;
            $p += ($expr = '<%=spm%>', $e(spm)) + '';
            $line = 5;
            $art = '=sub[valueKey]';
            ;
            $p += ($expr = '<%=sub[valueKey]%>', $e(sub[valueKey])) + '" ';
            $line = 5;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 5;
        $art = '=sub[textKey]';
        ;
        $p += ($expr = '<%=sub[textKey]%>', $e(sub[textKey])) + '</a>';
        $line = 6;
        $art = '/each';
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
    msg += $expr + '\r\n\tat file:mx-header/sub.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        that.updater.set(extra.data);
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
    }
});

});