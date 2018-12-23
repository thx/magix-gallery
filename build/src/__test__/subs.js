/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/subs",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___subs_","/* @dependent: ./index.less */\n._zs_gallery___test___subs_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___subs_-content-subs {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 120px;\n  padding: 10px 0 10px 10px;\n  border-left: 1px solid #e6e6e6;\n}\n._zs_gallery___test___subs_-content-subs ._zs_gallery___test___subs_-sub-link {\n  margin-bottom: 6px;\n}\n._zs_gallery___test___subs_-content-subs ._zs_gallery___test___subs_-sub-link:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery___test___subs_-content-subs._zs_gallery___test___subs_-subs-fixed {\n  position: fixed;\n}\n");
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
} ; var $g = '', $_temp, $p = '', fixed = $$.fixed, list = $$.list; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery___test___subs_-content-subs ';
    $line = 1;
    $art = 'if fixed';
    ;
    $expr = '<%if (fixed) {%>';
    if (fixed) {
        ;
        $p += ' _zs_gallery___test___subs_-subs-fixed ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 2;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ielacypmm$art_i = 0, $art_cpusieqk$art_c = list.length; $art_ielacypmm$art_i < $art_cpusieqk$art_c; $art_ielacypmm$art_i++) {    var item = list[$art_ielacypmm$art_i]%>';
    for (var $art_ielacypmm$art_i = 0, $art_cpusieqk$art_c = list.length; $art_ielacypmm$art_i < $art_cpusieqk$art_c; $art_ielacypmm$art_i++) {
        var item = list[$art_ielacypmm$art_i];
        $p += '<div mxa="_zs_galleryO:_" class="_zs_gallery___test___subs_-sub-link"><a href="javascript:;" mx-click="' + $viewId + 'to({key:\'';
        $line = 4;
        $art = '=item.key';
        ;
        $p += ($expr = '<%=$eq(item.key)%>', $e($eq(item.key))) + '\'})">';
        $line = 4;
        $art = '=item.name';
        ;
        $p += ($expr = '<%=item.name%>', $e(item.name)) + '</a></div>';
        $line = 6;
        $art = 'if (item.subs && item.subs.length)';
        ;
        $expr = '<%if (item.subs && item.subs.length) {%>';
        if (item.subs && item.subs.length) {
            ;
            $p += ' ';
            $line = 7;
            $art = 'each item.subs as sub';
            ;
            $expr = '<%for (var $art_iipbrl$art_i = 0, $art_objlomwxdi$art_obj = item.subs, $art_couwbhtxu$art_c = $art_objlomwxdi$art_obj.length; $art_iipbrl$art_i < $art_couwbhtxu$art_c; $art_iipbrl$art_i++) {            var sub = $art_objlomwxdi$art_obj[$art_iipbrl$art_i]%>';
            for (var $art_iipbrl$art_i = 0, $art_objlomwxdi$art_obj = item.subs, $art_couwbhtxu$art_c = $art_objlomwxdi$art_obj.length; $art_iipbrl$art_i < $art_couwbhtxu$art_c; $art_iipbrl$art_i++) {
                var sub = $art_objlomwxdi$art_obj[$art_iipbrl$art_i];
                $p += '<div mxa="_zs_galleryO:a" class="_zs_gallery___test___subs_-sub-link pl10"><a href="javascript:;" mx-click="' + $viewId + 'to({key:\'';
                $line = 9;
                $art = '=sub.key';
                ;
                $p += ($expr = '<%=$eq(sub.key)%>', $e($eq(sub.key))) + '\'})">';
                $line = 9;
                $art = '=sub.name';
                ;
                $p += ($expr = '<%=sub.name%>', $e(sub.name)) + '</a></div>';
                $line = 11;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 12;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 13;
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
    msg += $expr + '\r\n\tat file:__test__/subs.html';
    throw msg;
} return $p; },
    init: function (e) {
        var list = e.list || [];
        this.updater.set({
            list: list
        });
    },
    render: function () {
        this.updater.digest();
    },
    'to<click>': function (e) {
        var key = e.params.key;
        var node = $('#' + key);
        var examples = $('._zs_gallery___test___layout_-example');
        examples.removeClass('_zs_gallery___test___layout_-example-highlight');
        node.find('._zs_gallery___test___layout_-example').addClass('_zs_gallery___test___layout_-example-highlight');
        $(window).scrollTop(node.offset().top);
    },
    '$win<scroll>': function (e) {
        var that = this;
        var mainNode = $('#' + that.id);
        var scrollTop = $(window).scrollTop();
        var mainTop = mainNode.offset().top;
        if (scrollTop >= mainTop) {
            if (that.updater.get('fixed')) {
                return;
            }
            that.updater.digest({
                fixed: true
            });
        }
        else {
            if (!that.updater.get('fixed')) {
                return;
            }
            that.updater.digest({
                fixed: false
            });
        }
    }
});

});