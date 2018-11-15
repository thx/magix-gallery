/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/anim",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-loading_anim_","/* @dependent: ./index.less */\n._zs_gallery_mx-loading_anim_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-loading/anim\"] ._zs_gallery_mx-loading_anim_-spinner {\n  position: relative;\n  left: 50%;\n}\n/********* Animations *********/\n._zs_gallery_mx-loading_anim_-bg-brand {\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-loading_anim_-bg-grey {\n  background-color: #e6e6e6;\n}\n/*** square ***/\n._zs_gallery_mx-loading_anim_-square {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-square-anim 1.2s infinite ease-in-out;\n  animation: _zs_gallery_mx-loading_anim_-square-anim 1.2s infinite ease-in-out;\n}\n@-webkit-keyframes _zs_gallery_mx-loading_anim_-square-anim {\n  0% {\n    -webkit-transform: perspective(120px);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(180deg);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);\n  }\n}\n@keyframes _zs_gallery_mx-loading_anim_-square-anim {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n/*** Double Bounce ***/\n._zs_gallery_mx-loading_anim_-double-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: 0.4;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-bounce 2s infinite ease-in-out;\n  animation: _zs_gallery_mx-loading_anim_-bounce 2s infinite ease-in-out;\n}\n._zs_gallery_mx-loading_anim_-double-circle2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes _zs_gallery_mx-loading_anim_-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes _zs_gallery_mx-loading_anim_-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*** Rectangle Bounce ***/\n._zs_gallery_mx-loading_anim_-rectangle {\n  text-align: center;\n  height: 100%;\n}\n._zs_gallery_mx-loading_anim_-rectangle ._zs_gallery_mx-loading_anim_-rect {\n  display: inline-block;\n  height: 100%;\n  width: 4px;\n  border-radius: 2px;\n  margin-right: 2px;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-rectangle-anim 1.2s infinite ease-in-out;\n  animation: _zs_gallery_mx-loading_anim_-rectangle-anim 1.2s infinite ease-in-out;\n}\n._zs_gallery_mx-loading_anim_-rectangle ._zs_gallery_mx-loading_anim_-rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n._zs_gallery_mx-loading_anim_-rectangle ._zs_gallery_mx-loading_anim_-rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n._zs_gallery_mx-loading_anim_-rectangle ._zs_gallery_mx-loading_anim_-rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n._zs_gallery_mx-loading_anim_-rectangle ._zs_gallery_mx-loading_anim_-rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n@-webkit-keyframes _zs_gallery_mx-loading_anim_-rectangle-anim {\n  0%,\n  40%,\n  100% {\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n  }\n}\n@keyframes _zs_gallery_mx-loading_anim_-rectangle-anim {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}\n/*** Wandering Cubes ***/\n._zs_gallery_mx-loading_anim_-cube1,\n._zs_gallery_mx-loading_anim_-cube2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-cubemove 1.8s infinite ease-in-out;\n  animation: _zs_gallery_mx-loading_anim_-cubemove 1.8s infinite ease-in-out;\n}\n._zs_gallery_mx-loading_anim_-cube2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n@-webkit-keyframes _zs_gallery_mx-loading_anim_-cubemove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n  }\n}\n@keyframes _zs_gallery_mx-loading_anim_-cubemove {\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n  75% {\n    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg);\n  }\n}\n/*** Chasing dots ***/\n._zs_gallery_mx-loading_anim_-dots {\n  position: relative;\n  text-align: center;\n  height: 100%;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-rotate 2s infinite linear;\n  animation: _zs_gallery_mx-loading_anim_-rotate 2s infinite linear;\n}\n._zs_gallery_mx-loading_anim_-dots ._zs_gallery_mx-loading_anim_-dot1,\n._zs_gallery_mx-loading_anim_-dots ._zs_gallery_mx-loading_anim_-dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  border-radius: 100%;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-bounce 2s infinite ease-in-out;\n  animation: _zs_gallery_mx-loading_anim_-bounce 2s infinite ease-in-out;\n}\n._zs_gallery_mx-loading_anim_-dots ._zs_gallery_mx-loading_anim_-dot2 {\n  top: auto;\n  bottom: 0px;\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes _zs_gallery_mx-loading_anim_-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes _zs_gallery_mx-loading_anim_-rotate {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n/***** Pulse *****/\n._zs_gallery_mx-loading_anim_-pulse {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-scaleout 1s infinite ease-in-out;\n  animation: _zs_gallery_mx-loading_anim_-scaleout 1s infinite ease-in-out;\n}\n@-webkit-keyframes _zs_gallery_mx-loading_anim_-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _zs_gallery_mx-loading_anim_-scaleout {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n/***** Three-bounce ***/\n._zs_gallery_mx-loading_anim_-three-bounce {\n  display: inline-block;\n  width: 30%;\n  height: 30%;\n  margin-right: 5%;\n  border-radius: 50%;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-bouncedelay 1.4s infinite ease-in-out;\n  animation: _zs_gallery_mx-loading_anim_-bouncedelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n._zs_gallery_mx-loading_anim_-three-bounce:last-child {\n  margin-right: 0;\n}\n._zs_gallery_mx-loading_anim_-three-bounce._zs_gallery_mx-loading_anim_-one {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n._zs_gallery_mx-loading_anim_-three-bounce._zs_gallery_mx-loading_anim_-two {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n@-webkit-keyframes _zs_gallery_mx-loading_anim_-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes _zs_gallery_mx-loading_anim_-bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/***** Circle spinner ***/\n._zs_gallery_mx-loading_anim_-spinner-container ._zs_gallery_mx-loading_anim_-spinner-circle {\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  position: absolute;\n  -webkit-animation: _zs_gallery_mx-loading_anim_-bouncedelay 1.2s infinite ease-in-out;\n  animation: _zs_gallery_mx-loading_anim_-bouncedelay 1.2s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n._zs_gallery_mx-loading_anim_-circle-spinner ._zs_gallery_mx-loading_anim_-spinner-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n._zs_gallery_mx-loading_anim_-container2 {\n  -webkit-transform: rotateZ(45deg);\n  transform: rotateZ(45deg);\n}\n._zs_gallery_mx-loading_anim_-container3 {\n  -webkit-transform: rotateZ(90deg);\n  transform: rotateZ(90deg);\n}\n._zs_gallery_mx-loading_anim_-circle1 {\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-loading_anim_-circle2 {\n  top: 0;\n  right: 0;\n}\n._zs_gallery_mx-loading_anim_-circle3 {\n  right: 0;\n  bottom: 0;\n}\n._zs_gallery_mx-loading_anim_-circle4 {\n  left: 0;\n  bottom: 0;\n}\n._zs_gallery_mx-loading_anim_-container2 ._zs_gallery_mx-loading_anim_-circle1 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n._zs_gallery_mx-loading_anim_-container3 ._zs_gallery_mx-loading_anim_-circle1 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n._zs_gallery_mx-loading_anim_-container1 ._zs_gallery_mx-loading_anim_-circle2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n._zs_gallery_mx-loading_anim_-container2 ._zs_gallery_mx-loading_anim_-circle2 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n._zs_gallery_mx-loading_anim_-container3 ._zs_gallery_mx-loading_anim_-circle2 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n._zs_gallery_mx-loading_anim_-container1 ._zs_gallery_mx-loading_anim_-circle3 {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n._zs_gallery_mx-loading_anim_-container2 ._zs_gallery_mx-loading_anim_-circle3 {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n._zs_gallery_mx-loading_anim_-container3 ._zs_gallery_mx-loading_anim_-circle3 {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n._zs_gallery_mx-loading_anim_-container1 ._zs_gallery_mx-loading_anim_-circle4 {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n._zs_gallery_mx-loading_anim_-container2 ._zs_gallery_mx-loading_anim_-circle4 {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n._zs_gallery_mx-loading_anim_-container3 ._zs_gallery_mx-loading_anim_-circle4 {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n");
var ClassNames = {
    brand: '_zs_gallery_mx-loading_anim_-bg-brand',
    grey: '_zs_gallery_mx-loading_anim_-bg-grey'
};
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
} ; var $g = '', $_temp, $p = '', size = $$.size, mode = $$.mode, classNames = $$.classNames, styles = $$.styles; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-loading_anim_-spinner" style="width: ';
    $line = 1;
    $art = '=size';
    ;
    $p += ($expr = '<%=size%>', $e(size)) + 'px; height: ';
    $line = 1;
    $art = '=size';
    ;
    $p += ($expr = '<%=size%>', $e(size)) + 'px; margin-left: ';
    $line = 1;
    $art = '=(0 - size/2)';
    ;
    $p += ($expr = '<%=(0 - size / 2)%>', $e((0 - size / 2))) + 'px;">';
    $line = 2;
    $art = 'if mode == \'square\'';
    ;
    $expr = '<%if (mode == \'square\') {%>';
    if (mode == 'square') {
        ;
        $p += '<div class="_zs_gallery_mx-loading_anim_-square ';
        $line = 3;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 3;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div>';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 5;
    $art = 'if mode == \'double-circle\'';
    ;
    $expr = '<%if (mode == \'double-circle\') {%>';
    if (mode == 'double-circle') {
        ;
        $p += '<div class="_zs_gallery_mx-loading_anim_-double-circle double-circle1 ';
        $line = 6;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 6;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-double-circle _zs_gallery_mx-loading_anim_-double-circle2 ';
        $line = 7;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 7;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div>';
        $line = 8;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 9;
    $art = 'if mode == \'rectangle\'';
    ;
    $expr = '<%if (mode == \'rectangle\') {%>';
    if (mode == 'rectangle') {
        ;
        $p += '<div mxa="_zs_gallerybO:_" class="_zs_gallery_mx-loading_anim_-rectangle"><div class="_zs_gallery_mx-loading_anim_-rect rect1 ';
        $line = 11;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 11;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-rect _zs_gallery_mx-loading_anim_-rect2 ';
        $line = 12;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 12;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-rect _zs_gallery_mx-loading_anim_-rect3 ';
        $line = 13;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 13;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-rect _zs_gallery_mx-loading_anim_-rect4 ';
        $line = 14;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 14;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-rect _zs_gallery_mx-loading_anim_-rect5 ';
        $line = 15;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 15;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div></div>';
        $line = 17;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 18;
    $art = 'if mode == \'cubes\'';
    ;
    $expr = '<%if (mode == \'cubes\') {%>';
    if (mode == 'cubes') {
        ;
        $p += '<div class="_zs_gallery_mx-loading_anim_-cube1 ';
        $line = 19;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 19;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-cube2 ';
        $line = 20;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 20;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 22;
    $art = 'if mode == \'pulse\'';
    ;
    $expr = '<%if (mode == \'pulse\') {%>';
    if (mode == 'pulse') {
        ;
        $p += '<div class="_zs_gallery_mx-loading_anim_-pulse ';
        $line = 23;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 23;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div>';
        $line = 24;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 25;
    $art = 'if mode == \'dots\'';
    ;
    $expr = '<%if (mode == \'dots\') {%>';
    if (mode == 'dots') {
        ;
        $p += '<div mxa="_zs_gallerybO:a" class="_zs_gallery_mx-loading_anim_-dots"><div class="_zs_gallery_mx-loading_anim_-dot1 ';
        $line = 27;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 27;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-dot2 ';
        $line = 28;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 28;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div></div>';
        $line = 30;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 31;
    $art = 'if mode == \'three-bounce\'';
    ;
    $expr = '<%if (mode == \'three-bounce\') {%>';
    if (mode == 'three-bounce') {
        ;
        $p += '<div class="_zs_gallery_mx-loading_anim_-three-bounce _zs_gallery_mx-loading_anim_-one ';
        $line = 32;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 32;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-three-bounce _zs_gallery_mx-loading_anim_-two ';
        $line = 33;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 33;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-three-bounce three ';
        $line = 34;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 34;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div>';
        $line = 35;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 36;
    $art = 'if mode == \'circle-spinner\'';
    ;
    $expr = '<%if (mode == \'circle-spinner\') {%>';
    if (mode == 'circle-spinner') {
        ;
        $p += '<div mxa="_zs_gallerybO:b" class="_zs_gallery_mx-loading_anim_-circle-spinner"><div mxa="_zs_gallerybO:c" class="_zs_gallery_mx-loading_anim_-spinner-container _zs_gallery_mx-loading_anim_-container1"><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle1 ';
        $line = 39;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 39;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle2 ';
        $line = 40;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 40;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle3 ';
        $line = 41;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 41;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle4 ';
        $line = 42;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 42;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div></div><div mxa="_zs_gallerybO:d" class="_zs_gallery_mx-loading_anim_-spinner-container _zs_gallery_mx-loading_anim_-container2"><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle1 ';
        $line = 45;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 45;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle2 ';
        $line = 46;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 46;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle3 ';
        $line = 47;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 47;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle4 ';
        $line = 48;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 48;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div></div><div mxa="_zs_gallerybO:e" class="_zs_gallery_mx-loading_anim_-spinner-container _zs_gallery_mx-loading_anim_-container3"><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle1 ';
        $line = 51;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 51;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle2 ';
        $line = 52;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 52;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle3 ';
        $line = 53;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 53;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div><div class="_zs_gallery_mx-loading_anim_-spinner-circle _zs_gallery_mx-loading_anim_-circle4 ';
        $line = 54;
        $art = '=classNames';
        ;
        $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
        $line = 54;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"></div></div></div>';
        $line = 57;
        $art = '/if';
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
    msg += $expr + '\r\n\tat file:mx-loading/anim.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var type = extra.type || 'grey';
        var classNames = [], styles = [];
        if (!extra.color) {
            classNames.push(ClassNames[type]);
        }
        else {
            // 自定义颜色
            styles.push('background-color:' + extra.color);
        }
        this.updater.set({
            mode: extra.mode || 'circle-spinner',
            size: extra.size || 60,
            styles: styles.join(';'),
            classNames: classNames.join(' ')
        });
    },
    render: function () {
        this.updater.digest();
    }
});

});