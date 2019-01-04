/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/subs",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryq","._zs_gallerybs{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerybt{position:absolute;top:0;right:0;width:120px;padding:10px 0 10px 10px;border-left:1px solid #e6e6e6}._zs_gallerybt ._zs_gallerybu{margin-bottom:6px}._zs_gallerybt ._zs_gallerybu:last-child{margin-bottom:0}._zs_gallerybt._zs_gallerybv{position:fixed}");
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
} ; var $g = '', $_temp, $p = '', fixed = $$.fixed, list = $$.list; $p += '<div class="_zs_gallerybt '; if (fixed) {
    ;
    $p += ' _zs_gallerybv ';
} ; $p += '">'; for (var $art_itvtxwctq$art_i = 0, $art_cwhzaomjhkm$art_c = list.length; $art_itvtxwctq$art_i < $art_cwhzaomjhkm$art_c; $art_itvtxwctq$art_i++) {
    var item = list[$art_itvtxwctq$art_i];
    $p += '<div mxa="_zs_galleryO:_" class="_zs_gallerybu"><a href="javascript:;" mx-click="' + $viewId + 'to({key:\'' + $e($eq(item.key)) + '\'})">' + $e(item.name) + '</a></div>';
    if (item.subs && item.subs.length) {
        ;
        $p += ' ';
        for (var $art_ikquntuzke$art_i = 0, $art_objckdobkkb$art_obj = item.subs, $art_cebhfvlov$art_c = $art_objckdobkkb$art_obj.length; $art_ikquntuzke$art_i < $art_cebhfvlov$art_c; $art_ikquntuzke$art_i++) {
            var sub = $art_objckdobkkb$art_obj[$art_ikquntuzke$art_i];
            $p += '<div mxa="_zs_galleryO:a" class="_zs_gallerybu pl10"><a href="javascript:;" mx-click="' + $viewId + 'to({key:\'' + $e($eq(sub.key)) + '\'})">' + $e(sub.name) + '</a></div>';
        }
        ;
        $p += ' ';
    }
    ;
    $p += ' ';
} ; $p += '</div>'; return $p; },
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
        var examples = $('._zs_galleryh');
        examples.removeClass('_zs_galleryi');
        node.find('._zs_galleryh').addClass('_zs_galleryi');
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