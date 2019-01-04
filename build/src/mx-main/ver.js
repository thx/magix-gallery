/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/ver",["magix","mx-main/steps"],(require,exports,module)=>{
/*Magix,Base*/

var Magix = require("magix");
var Base = require("mx-main/steps");
Magix.applyStyle("_zs_galleryag","._zs_galleryjs{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjt{position:relative;margin-bottom:20px;padding-left:52px}._zs_galleryjt ._zs_galleryju{position:absolute;top:47px;left:21px;z-index:2;width:0;height:100%;margin-left:-1px;border-left:2px solid #e6e6e6}._zs_galleryjt ._zs_galleryjv{position:absolute;top:5px;left:0;z-index:3;width:42px;height:42px;border-radius:50%;border:2px solid #e6e6e6;text-align:center;background-color:#fafafa;cursor:pointer;transition:all .25s}._zs_galleryjt ._zs_galleryjv>*{line-height:38px;color:#ccc;font-weight:700}._zs_galleryjt ._zs_galleryjw{border-radius:4px;background-color:#fff}._zs_galleryjt ._zs_galleryjw ._zs_galleryjx{padding:5px 20px;line-height:42px}._zs_galleryjt ._zs_galleryjw ._zs_galleryjy{padding:20px;border-top:1px solid #e6e6e6}");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', stepInfos = $$.stepInfos, curStepInfo = $$.curStepInfo, viewId = $$.viewId; for (var $art_imgjagexec$art_i = 0, $art_crdpcxbcs$art_c = stepInfos.length; $art_imgjagexec$art_i < $art_crdpcxbcs$art_c; $art_imgjagexec$art_i++) {
    var step = stepInfos[$art_imgjagexec$art_i];
    $p += '<div mxv mxa="_zs_galleryco:_" class="clearfix _zs_galleryjt"><div mxa="_zs_galleryco:a" class="_zs_galleryjv">' + $n(step.icon) + '</div>';
    if (step.index < stepInfos.length) {
        ;
        $p += '<div mxs="_zs_galleryco:_" class="_zs_galleryju"></div>';
    }
    ;
    $p += '<div mxv mxa="_zs_galleryco:b" class="_zs_galleryjw"><div mxa="_zs_galleryco:c" class="_zs_galleryjx"><span mxa="_zs_galleryco:d" class="fontsize-16">' + $e(step.label) + '</span>';
    if (!step.locked && !step.current) {
        ;
        $p += '<a class="fr color-brand" href="javascript:;" mx-click="' + $viewId + 'nav({stepIndex:' + $e(step.index) + '})">修改</a>';
    }
    ;
    $p += '</div>';
    if (step.current) {
        ;
        $p += '<div mxv mxa="_zs_galleryco:e" class="_zs_galleryjy"><div mxv="curStepInfo" mx-view="' + $e(curStepInfo.view) + '?info=' + $i($$ref, curStepInfo) + '" id="' + $e(viewId) + '_cur_content"><div mxs="_zs_galleryco:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryco:f" class="pt20">';
        if (curStepInfo.prevTip) {
            ;
            $p += '<a mxa="_zs_galleryco:g" href="javascript:;" class="btn min-width-100 mr15" mx-click="' + $viewId + 'prev()">' + $e(curStepInfo.prevTip) + '</a>';
        }
        ;
        $p += ' ';
        if (curStepInfo.nextTip) {
            ;
            $p += '<a mxa="_zs_galleryco:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="' + $viewId + 'next()">' + $e(curStepInfo.nextTip) + '</a>';
        }
        ;
        $p += '</div><div id="' + $e(viewId) + '_error"></div></div>';
    }
    ;
    $p += '</div></div>';
} ; return $p; }
});

});