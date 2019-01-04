/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/hor",["magix","mx-main/steps"],(require,exports,module)=>{
/*Magix,Base*/

var Magix = require("magix");
var Base = require("mx-main/steps");
Magix.applyStyle("_zs_galleryac","._zs_galleryiI{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiJ{box-sizing:border-box;display:flex}._zs_galleryiK{position:relative;display:inline-block;margin-right:10px;white-space:nowrap;flex:1;vertical-align:top;overflow:hidden}._zs_galleryiK ._zs_galleryiL{float:left;position:relative;z-index:3;border-radius:50%;border:1px solid #4d7fff;color:#4d7fff;background-color:#fff;cursor:pointer;transition:all .25s}._zs_galleryiK ._zs_galleryiL,._zs_galleryiK ._zs_galleryiL ._zs_galleryiM{width:28px;height:28px;text-align:center;line-height:26px}._zs_galleryiK ._zs_galleryiL ._zs_galleryiM{position:absolute;top:0;left:0;font-size:26px}._zs_galleryiK ._zs_galleryiN{float:left;position:relative;z-index:3;padding-right:10px;padding-left:6px;font-size:14px;background-color:#fff;cursor:pointer;transition:all .25s;line-height:28px}._zs_galleryiK:after{content:\"\";position:absolute;z-index:2;top:50%;left:0;width:100%;height:0;border-top:1px solid #e6e6e6;transition:all .25s}._zs_galleryiK:last-child{flex:none}._zs_galleryiK:last-child:after{display:none}._zs_galleryiK._zs_galleryiO ._zs_galleryiL{border-color:#e6e6e6;background-color:#fafafa}._zs_galleryiK._zs_galleryiO ._zs_galleryiL,._zs_galleryiK._zs_galleryiO ._zs_galleryiN{color:#999;cursor:not-allowed}._zs_galleryiK._zs_galleryiP:after{border-top:1px solid #4d7fff}._zs_galleryiK._zs_galleryiQ ._zs_galleryiL{border-color:#4d7fff;color:#4d7fff;background-color:#f6f9ff}._zs_galleryiK._zs_galleryiQ ._zs_galleryiN{color:#4d7fff}");
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
} ; var $g = '', $_temp, $p = '', stepInfos = $$.stepInfos, curStepInfo = $$.curStepInfo, viewId = $$.viewId; $p += '<div mxa="_zs_gallerycl:_" class="_zs_galleryiJ">'; for (var $art_ijpzdzcvql$art_i = 0, $art_chmbumb$art_c = stepInfos.length; $art_ijpzdzcvql$art_i < $art_chmbumb$art_c; $art_ijpzdzcvql$art_i++) {
    var step = stepInfos[$art_ijpzdzcvql$art_i];
    $p += '<div class="clearfix _zs_galleryiK ';
    if (step.current) {
        ;
        $p += ' _zs_galleryiQ ';
    }
    ;
    $p += ' ';
    if (step.locked) {
        ;
        $p += ' _zs_galleryiO ';
    }
    ;
    $p += ' ';
    if (step.locked) {
        ;
        $p += ' _zs_galleryiO ';
    }
    ;
    $p += ' ';
    if (step.lineOn) {
        ;
        $p += ' _zs_galleryiP ';
    }
    ;
    $p += '" ';
    if (!step.locked) {
        ;
        $p += ' mx-click="' + $viewId + 'nav({stepIndex:' + $e(step.index) + '})" ';
    }
    ;
    $p += '><div mxa="_zs_gallerycl:a" class="_zs_galleryiL">';
    if (step.lineOn) {
        ;
        $p += '<i mxs="_zs_gallerycl:_" class="mc-iconfont _zs_galleryiM">&#xe65d;</i>';
    }
    else {
        ;
        $p += ' ' + $e(step.index) + ' ';
    }
    ;
    $p += '</div><div mxa="_zs_gallerycl:b" class="_zs_galleryiN">' + $e(step.label) + '</div></div>';
} ; $p += '</div><div mxv="curStepInfo" mx-view="' + $e(curStepInfo.view) + '?info=' + $i($$ref, curStepInfo) + '" class="pt20 pb20" id="' + $e(viewId) + '_cur_content"><div mxs="_zs_gallerycl:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div>'; if (curStepInfo.prevTip) {
    ;
    $p += '<a mxa="_zs_gallerycl:c" href="javascript:;" class="btn min-width-100 mr15" mx-click="' + $viewId + 'prev()">' + $e(curStepInfo.prevTip) + '</a>';
} ; $p += ' '; if (curStepInfo.nextTip) {
    ;
    $p += '<a mxa="_zs_gallerycl:d" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="' + $viewId + 'next()">' + $e(curStepInfo.nextTip) + '</a>';
} ; $p += '</div><div id="' + $e(viewId) + '_error"></div>'; return $p; }
});

});