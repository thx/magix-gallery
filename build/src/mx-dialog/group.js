/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/group",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_galleryC","._zs_gallerydE{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydF{position:relative;padding-left:192px;border-radius:4px}._zs_gallerydF ._zs_gallerydG{position:absolute;top:-1px;left:-1px;bottom:-1px;width:192px;background-color:#fafafa;border-top-left-radius:4px;border-bottom-left-radius:4px;overflow-y:auto}._zs_gallerydF ._zs_gallerydG ._zs_gallerydH{display:block;height:44px;padding:0 16px;line-height:44px;border-left:4px solid #fafafa;color:#999;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis;transition:all .25s ease-out}._zs_gallerydF ._zs_gallerydG ._zs_gallerydH._zs_gallerydI{color:#333;background-color:#f6f9ff;border-left:4px solid #4d7fff}._zs_gallerydF ._zs_gallerydG ._zs_gallerydH._zs_gallerydJ{color:#4d7fff}._zs_gallerydF ._zs_gallerydK{padding:20px;overflow-y:auto}");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, curIndex = $$.curIndex, hoverIndex = $$.hoverIndex, textKey = $$.textKey, height = $$.height, contentView = $$.contentView; $p += '<div mxv mxa="_zs_galleryaw:_" class="_zs_gallerydF"><div mxa="_zs_galleryaw:a" class="_zs_gallerydG">'; for (var index = 0, $art_czsdgatlslr$art_c = list.length; index < $art_czsdgatlslr$art_c; index++) {
    var item = list[index];
    $p += '<a href="javascript:;" class="_zs_gallerydH ';
    if (index == curIndex) {
        ;
        $p += ' _zs_gallerydJ ';
    }
    ;
    $p += ' ';
    if (index == hoverIndex) {
        ;
        $p += ' _zs_gallerydI ';
    }
    ;
    $p += '" mx-mouseover="' + $viewId + 'over({index:\'' + $e($eq(index)) + '\'})" mx-mouseout="' + $viewId + 'out()" mx-click="' + $viewId + 'select({index:\'' + $e($eq(index)) + '\'})">' + $e(item[textKey]) + '</a>';
} ; $p += '</div><div mxv class="_zs_gallerydK" style="height: ' + $e(height) + 'px;"><div mxv="list,curIndex" mx-view="' + $e(contentView) + '?data=' + $i($$ref, list[curIndex]) + '"></div></div></div>'; return $p; },
    init: function (extra) {
        var textKey = extra.textKey || 'text';
        var list = extra.list || [];
        var curIndex = 0, hoverIndex = 0;
        this.updater.set({
            contentView: extra.contentView || '',
            list: list,
            textKey: textKey,
            curIndex: curIndex,
            hoverIndex: hoverIndex,
            height: extra.height
        });
    },
    render: function () {
        this.updater.digest();
    },
    'select<click>': function (e) {
        var index = e.params.index;
        this.updater.digest({
            curIndex: index,
            hoverIndex: index
        });
    },
    'over<mouseover>': function (e) {
        var index = e.params.index;
        this.updater.digest({
            hoverIndex: index
        });
    },
    'out<mouseout>': function (e) {
        var that = this;
        var curIndex = that.updater.get('curIndex');
        that.updater.digest({
            hoverIndex: curIndex
        });
    }
});

});