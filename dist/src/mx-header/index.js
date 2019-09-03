/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/index",["magix","$","mx-header/data"],(require,exports,module)=>{
/*Magix,$,Data*/

var Magix = require("magix");
var $ = require("$");
var Data = require("mx-header/data");
Magix.applyStyle("_zs_gallery_mx-header_index_","._zs_gallery_mx-header_index_-others {\n  height: 50px;\n  margin: 0 auto;\n  line-height: 50px;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-link {\n  opacity: 0.5;\n  color: #333;\n  cursor: pointer;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-link:hover {\n  opacity: 1;\n  color: #333;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-arrow {\n  opacity: 0.5;\n  display: inline-block;\n  position: relative;\n  top: 4px;\n  right: 0;\n  font-size: 20px;\n  transition: transform var(--duration) ease-out;\n  color: #333;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-subs {\n  top: 38px;\n  left: 50%;\n  width: 160px;\n  margin-left: -80px;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-subs dl {\n  padding: 10px 20px;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-subs dl dt {\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  font-size: 14px;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-subs dl dd {\n  height: 32px;\n  margin-left: 25px;\n  line-height: 32px;\n  font-size: 12px;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item {\n  float: left;\n  position: relative;\n  margin-right: 35px;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:hover ._zs_gallery_mx-header_index_-title-link {\n  opacity: 1;\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:hover ._zs_gallery_mx-header_index_-title-arrow {\n  opacity: 1;\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:hover ._zs_gallery_mx-header_index_-title-subs {\n  opacity: 1;\n  transform: scale(1);\n}\n._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:last-child {\n  margin-right: 0;\n}\n._zs_gallery_mx-header_index_-front {\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  top: 50px;\n  left: 0;\n}\n._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner {\n  margin: 0 auto;\n  background-color: #fff;\n}\n._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-front-item {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n}\n._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-nav {\n  position: relative;\n  padding: 0 16px;\n  font-size: 14px;\n  border-bottom: 2px solid transparent;\n}\n._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-nav ._zs_gallery_mx-header_index_-nav-arrow {\n  opacity: 0.5;\n  position: absolute;\n  top: 15px;\n  right: -2px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-size: 20px;\n  transition: transform var(--duration) ease-out;\n  color: #666;\n}\n._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-nav ._zs_gallery_mx-header_index_-nav-subs {\n  top: 40px;\n  left: 50%;\n  width: 120px;\n  margin-left: -60px;\n  line-height: 28px;\n  text-align: center;\n}\n._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-nav:hover ._zs_gallery_mx-header_index_-nav-arrow {\n  opacity: 1;\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-nav:hover ._zs_gallery_mx-header_index_-nav-subs {\n  opacity: 1;\n  transform: scale(1);\n}\n._zs_gallery_mx-header_index_-front._zs_gallery_mx-header_index_-fixed {\n  position: fixed;\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n}\n._zs_gallery_mx-header_index_-header {\n  position: relative;\n}\n._zs_gallery_mx-header_index_-dark-header {\n  height: 88px;\n  background-color: #09122b;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-others {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-others-inner {\n  float: left;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-link,\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-title-arrow {\n  opacity: 0.7;\n  color: #fff;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-front {\n  transition: background-color var(--duration) ease-out;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner {\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-radius: 60px;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-logo {\n  margin-right: 30px;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-logo img {\n  display: inline-block;\n  height: 40px;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-nav {\n  margin: 0 8px;\n}\n._zs_gallery_mx-header_index_-dark-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-nav._zs_gallery_mx-header_index_-cur ._zs_gallery_mx-header_index_-nav-inner {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-header_index_-white-header {\n  height: 100px;\n  background-color: #fff;\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-others-inner {\n  float: right;\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-front {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-logo {\n  margin-right: 40px;\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-logo img {\n  display: inline-block;\n  height: 32px;\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-nav {\n  margin: 0 16px;\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-nav ._zs_gallery_mx-header_index_-nav-inner {\n  opacity: 0.5;\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-nav:hover ._zs_gallery_mx-header_index_-nav-inner {\n  opacity: 1;\n  color: #333;\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-nav._zs_gallery_mx-header_index_-cur {\n  border-bottom: 2px solid var(--color-brand);\n}\n._zs_gallery_mx-header_index_-white-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-nav._zs_gallery_mx-header_index_-cur ._zs_gallery_mx-header_index_-nav-inner {\n  opacity: 1;\n  color: #333;\n  font-weight: bold;\n}\n");
Magix.applyStyle("_zs_gallery_mx-popover_index_","._zs_gallery_mx-popover_index_-bottom-left,\n._zs_gallery_mx-popover_index_-bottom-right,\n._zs_gallery_mx-popover_index_-bottom-center,\n._zs_gallery_mx-popover_index_-top-left,\n._zs_gallery_mx-popover_index_-top-right,\n._zs_gallery_mx-popover_index_-top-center,\n._zs_gallery_mx-popover_index_-right-top,\n._zs_gallery_mx-popover_index_-right-bottom,\n._zs_gallery_mx-popover_index_-right-center,\n._zs_gallery_mx-popover_index_-left-top,\n._zs_gallery_mx-popover_index_-left-bottom,\n._zs_gallery_mx-popover_index_-left-center {\n  opacity: 0;\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scale(0);\n}\n/**\n * popover下左 初始隐藏状态\n * 注意使用opacity控制popover的显示和隐藏，不要设置display: none\n */\n._zs_gallery_mx-popover_index_-bottom-left,\n._zs_gallery_mx-popover_index_-right-top {\n  transform-origin: 0 0;\n}\n._zs_gallery_mx-popover_index_-bottom-right,\n._zs_gallery_mx-popover_index_-left-top {\n  transform-origin: 100% 0;\n}\n._zs_gallery_mx-popover_index_-bottom-center {\n  transform-origin: 50% 0;\n}\n._zs_gallery_mx-popover_index_-top-left,\n._zs_gallery_mx-popover_index_-right-bottom {\n  transform-origin: 0 100%;\n}\n._zs_gallery_mx-popover_index_-top-right,\n._zs_gallery_mx-popover_index_-left-bottom {\n  transform-origin: 100% 100%;\n}\n._zs_gallery_mx-popover_index_-top-center {\n  transform-origin: 50% 100%;\n}\n._zs_gallery_mx-popover_index_-left-center {\n  transform-origin: 100% 50%;\n}\n._zs_gallery_mx-popover_index_-right-center {\n  transform-origin: 0 50%;\n}\n._zs_gallery_mx-popover_index_-show-out {\n  opacity: 1;\n  transform: scale(1);\n}\n/**\n * popover显示\n */\n._zs_gallery_mx-popover_index_-popover-hide {\n  display: none;\n}\n._zs_gallery_mx-popover_index_-popover,\n._zs_gallery_mx-popover_index_-popover-dark {\n  position: absolute;\n  z-index: 999999;\n  height: auto;\n  border-radius: var(--border-radius);\n  font-size: 12px;\n  line-height: 22px;\n  white-space: normal;\n  font-weight: normal;\n  font-family: Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;\n}\n._zs_gallery_mx-popover_index_-popover {\n  background-color: #fff;\n  color: #333;\n}\n._zs_gallery_mx-popover_index_-popover ._zs_gallery_mx-popover_index_-popover-content {\n  padding: 10px;\n  word-break: break-all;\n}\n._zs_gallery_mx-popover_index_-popover-dark {\n  background-color: rgba(33, 33, 33, 0.72);\n  color: #fff;\n}\n._zs_gallery_mx-popover_index_-popover-dark ._zs_gallery_mx-popover_index_-popover-content {\n  padding: 4px 10px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', dark = $$.dark, width = $$.width, list = $$.list, fixed = $$.fixed, styles = $$.styles, logo = $$.logo, navs = $$.navs, parent = $$.parent, child = $$.child; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-header_index_-header ';
    $line = 1;
    $art = 'if dark';
    ;
    $expr = '<%if (dark) {%>';
    if (dark) {
        ;
        $p += ' _zs_gallery_mx-header_index_-dark-header ';
        $line = 1;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-header_index_-white-header ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><div class="_zs_gallery_mx-header_index_-others" style="width: ';
    $line = 2;
    $art = '=width';
    ;
    $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div mxa="_zs_gallerycR:_" class="_zs_gallery_mx-header_index_-others-inner clearfix"><div mxs="_zs_gallerycR:_" class="_zs_gallery_mx-header_index_-item"><a class="_zs_gallery_mx-header_index_-title-link" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';
    $line = 7;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cxswmibncn$art_c = list.length; index < $art_cxswmibncn$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cxswmibncn$art_c = list.length; index < $art_cxswmibncn$art_c; index++) {
        var item = list[index];
        $p += '<div mxa="_zs_gallerycR:a" class="_zs_gallery_mx-header_index_-item"><span mxa="_zs_gallerycR:b" class="_zs_gallery_mx-header_index_-title-link">';
        $line = 9;
        $art = '=item.title';
        ;
        $p += ($expr = '<%=item.title%>', $e(item.title)) + '</span><i mxs="_zs_gallerycR:a" class="_zs_gallery_mx-header_index_-title-arrow mc-iconfont">&#xe692;</i><div mxa="_zs_gallerycR:c" class="_zs_gallery_mx-popover_index_-popover _zs_gallery_mx-popover_index_-bottom-center mx-shadow _zs_gallery_mx-header_index_-title-subs">';
        $line = 12;
        $art = 'each item.seconds as second';
        ;
        $expr = '<%for (var $art_itlzlqalh$art_i = 0, $art_objctnkroxpl$art_obj = item.seconds, $art_cftqfgfp$art_c = $art_objctnkroxpl$art_obj.length; $art_itlzlqalh$art_i < $art_cftqfgfp$art_c; $art_itlzlqalh$art_i++) {        var second = $art_objctnkroxpl$art_obj[$art_itlzlqalh$art_i]%>';
        for (var $art_itlzlqalh$art_i = 0, $art_objctnkroxpl$art_obj = item.seconds, $art_cftqfgfp$art_c = $art_objctnkroxpl$art_obj.length; $art_itlzlqalh$art_i < $art_cftqfgfp$art_c; $art_itlzlqalh$art_i++) {
            var second = $art_objctnkroxpl$art_obj[$art_itlzlqalh$art_i];
            $p += '<dl>';
            $line = 14;
            $art = 'if second.title';
            ;
            $expr = '<%if (second.title) {%>';
            if (second.title) {
                ;
                $p += '<dt>';
                $line = 15;
                $art = '=second.title';
                ;
                $p += ($expr = '<%=second.title%>', $e(second.title)) + '</dt>';
                $line = 16;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 17;
            $art = 'each second.thirds as third';
            ;
            $expr = '<%for (var $art_iwqfszyvc$art_i = 0, $art_objsrhmtbjc$art_obj = second.thirds, $art_cicgzeferu$art_c = $art_objsrhmtbjc$art_obj.length; $art_iwqfszyvc$art_i < $art_cicgzeferu$art_c; $art_iwqfszyvc$art_i++) {            var third = $art_objsrhmtbjc$art_obj[$art_iwqfszyvc$art_i]%>';
            for (var $art_iwqfszyvc$art_i = 0, $art_objsrhmtbjc$art_obj = second.thirds, $art_cicgzeferu$art_c = $art_objsrhmtbjc$art_obj.length; $art_iwqfszyvc$art_i < $art_cicgzeferu$art_c; $art_iwqfszyvc$art_i++) {
                var third = $art_objsrhmtbjc$art_obj[$art_iwqfszyvc$art_i];
                $p += '<dd><a href="';
                $line = 18;
                $art = '=third.link';
                ;
                $p += ($expr = '<%=third.link%>', $e(third.link)) + '" target="_blank" rel="noopener noreferrer">';
                $line = 18;
                $art = '=third.name';
                ;
                $p += ($expr = '<%=third.name%>', $e(third.name)) + '</a></dd>';
                $line = 19;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</dl>';
            $line = 21;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 24;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div class="_zs_gallery_mx-header_index_-front ';
    $line = 27;
    $art = 'if fixed';
    ;
    $expr = '<%if (fixed) {%>';
    if (fixed) {
        ;
        $p += ' _zs_gallery_mx-header_index_-fixed ';
        $line = 27;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 27;
    $art = 'if fixed';
    ;
    $expr = '<%if (fixed) {%>';
    if (fixed) {
        ;
        $p += ' style="';
        $line = 27;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '" ';
        $line = 27;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '><div class="_zs_gallery_mx-header_index_-front-inner clearfix" style="width: ';
    $line = 28;
    $art = '=width';
    ;
    $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div mxa="_zs_gallerycR:d" class="_zs_gallery_mx-header_index_-front-item _zs_gallery_mx-header_index_-logo"><img src="';
    $line = 30;
    $art = '=logo';
    ;
    $p += ($expr = '<%=logo%>', $e(logo)) + '"/></div>';
    $line = 32;
    $art = 'if (navs.length > 0)';
    ;
    $expr = '<%if (navs.length > 0) {%>';
    if (navs.length > 0) {
        ;
        $p += ' ';
        $line = 33;
        $art = 'each navs as nav';
        ;
        $expr = '<%for (var $art_iyieufbpc$art_i = 0, $art_crmuixq$art_c = navs.length; $art_iyieufbpc$art_i < $art_crmuixq$art_c; $art_iyieufbpc$art_i++) {        var nav = navs[$art_iyieufbpc$art_i]%>';
        for (var $art_iyieufbpc$art_i = 0, $art_crmuixq$art_c = navs.length; $art_iyieufbpc$art_i < $art_crmuixq$art_c; $art_iyieufbpc$art_i++) {
            var nav = navs[$art_iyieufbpc$art_i];
            $p += '<div class="_zs_gallery_mx-header_index_-front-item _zs_gallery_mx-header_index_-nav ';
            $line = 34;
            $art = 'if (parent == nav.value)';
            ;
            $expr = '<%if (parent == nav.value) {%>';
            if (parent == nav.value) {
                ;
                $p += ' _zs_gallery_mx-header_index_-cur ';
                $line = 34;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '"><a class="_zs_gallery_mx-header_index_-nav-inner" href="javascript:;" ';
            $line = 35;
            $art = 'if !nav.subs || !nav.subs.length';
            ;
            $expr = '<%if (!nav.subs || !nav.subs.length) {%>';
            if (!nav.subs || !nav.subs.length) {
                ;
                $p += ' mx-click="' + $viewId + 'to({nav:\'';
                $line = 35;
                $art = '@nav';
                ;
                $p += ($expr = '<%@nav%>', $i($$ref, nav)) + '\'})" ';
                $line = 35;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>';
            $line = 35;
            $art = '=nav.text';
            ;
            $p += ($expr = '<%=nav.text%>', $e(nav.text)) + '</a>';
            $line = 36;
            $art = 'if nav.subs && nav.subs.length';
            ;
            $expr = '<%if (nav.subs && nav.subs.length) {%>';
            if (nav.subs && nav.subs.length) {
                ;
                $p += '<i mxs="_zs_gallerycR:b" class="_zs_gallery_mx-header_index_-nav-arrow mc-iconfont">&#xe692;</i><div mxa="_zs_gallerycR:e" class="_zs_gallery_mx-popover_index_-popover _zs_gallery_mx-popover_index_-bottom-center mx-shadow _zs_gallery_mx-header_index_-nav-subs"><div mxa="_zs_gallerycR:f" class="_zs_gallery_mx-popover_index_-popover-content">';
                $line = 40;
                $art = 'each nav.subs as sub';
                ;
                $expr = '<%for (var $art_ijzl$art_i = 0, $art_objpeqishmar$art_obj = nav.subs, $art_cppakgzzc$art_c = $art_objpeqishmar$art_obj.length; $art_ijzl$art_i < $art_cppakgzzc$art_c; $art_ijzl$art_i++) {                var sub = $art_objpeqishmar$art_obj[$art_ijzl$art_i]%>';
                for (var $art_ijzl$art_i = 0, $art_objpeqishmar$art_obj = nav.subs, $art_cppakgzzc$art_c = $art_objpeqishmar$art_obj.length; $art_ijzl$art_i < $art_cppakgzzc$art_c; $art_ijzl$art_i++) {
                    var sub = $art_objpeqishmar$art_obj[$art_ijzl$art_i];
                    $p += '<div><a class="';
                    $line = 41;
                    $art = 'if (child == sub.value)';
                    ;
                    $expr = '<%if (child == sub.value) {%>';
                    if (child == sub.value) {
                        ;
                        $p += ' color-brand ';
                        $line = 41;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '" href="javascript:;" mx-click="' + $viewId + 'to({nav:\'';
                    $line = 41;
                    $art = '@nav';
                    ;
                    $p += ($expr = '<%@nav%>', $i($$ref, nav)) + '\',sub:\'';
                    $line = 41;
                    $art = '@sub';
                    ;
                    $p += ($expr = '<%@sub%>', $i($$ref, sub)) + '\'})">';
                    $line = 41;
                    $art = '=sub.text';
                    ;
                    $p += ($expr = '<%=sub.text%>', $e(sub.text)) + '</a></div>';
                    $line = 42;
                    $art = '/each';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div></div>';
                $line = 45;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 47;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 48;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/index.html';
    throw msg;
} return $p; },
    init: function (ops) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        //该处是否可以由magix自动调用
        this.assign(ops);
    },
    assign: function (ops) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        var wrapperId = ops.wrapper || '';
        var wrapper = wrapperId ? $('#' + wrapperId) : $(window);
        var width = ops.width || 1200;
        var navs = ops.navs || [];
        var logo = ops.logo || '//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png';
        var dark = (ops.dark + '' !== 'false'); //默认是true
        var maxWidth = wrapper.outerWidth();
        if (+width > (maxWidth - 40)) {
            width = maxWidth - 40;
        }
        //默认不选中任何一个导航，表示选中的一级导航
        // 如果默认为某个二级导航，订正选中态为一级的
        var cur = ops.cur || '';
        var parent = '', child = '';
        navs.forEach(function (nav) {
            if (nav.value == cur) {
                // 选中的是一级菜单
                parent = nav.value;
                child = '';
            }
            if (nav.subs && nav.subs.length) {
                nav.subs.forEach(function (sub) {
                    if (sub.value == cur) {
                        // 选中的是二级菜单
                        parent = nav.value;
                        child = sub.value;
                    }
                });
            }
        });
        that.updater.set({
            wrapperId: wrapperId,
            width: width,
            navs: navs,
            logo: logo,
            parent: parent,
            child: child,
            dark: dark
        });
        that['@{wrapper}'] = wrapper;
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
    render: function () {
        var that = this;
        that.updater.digest({
            list: Data.products,
            fixed: false
        });
        var data = that.updater.get();
        var wrapper = that['@{wrapper}'];
        var maxWidth = wrapper.outerWidth(), wrapperId = data.wrapperId;
        var scrollFn = function () {
            var front = $('#' + that.id + ' ._zs_gallery_mx-header_index_-front');
            var others = $('#' + that.id + ' ._zs_gallery_mx-header_index_-others');
            var scrollTop = wrapper.scrollTop(), otherHeight = others.outerHeight();
            var styles = [
                'width:' + maxWidth + 'px',
                'left: 0'
            ];
            if (wrapperId) {
                styles.push('position: absolute', 'top: ' + scrollTop + 'px');
            }
            else {
                styles.push('position: fixed', 'top: 0');
            }
            if (scrollTop > otherHeight) {
                that.updater.digest({
                    fixed: true,
                    styles: styles.join(';')
                });
            }
            else {
                that.updater.digest({
                    fixed: false
                });
            }
        };
        if (!that.$init) {
            that.$init = 1;
            wrapper.on('scroll', scrollFn);
            that.on('destroy', function () {
                wrapper.off('scroll', scrollFn);
            });
        }
        scrollFn();
    },
    'to<click>': function (event) {
        var that = this;
        var nav = event.params.nav || {}, sub = event.params.sub || {};
        // 高亮一级导航
        that.updater.digest({
            parent: nav.value || '',
            child: sub.value || ''
        });
        // 当前选中的tab
        var selected = {};
        if ($.isEmptyObject(sub)) {
            // 一级导航
            selected = nav;
        }
        else {
            // 二级导航
            selected = sub;
        }
        $('#' + that.id).trigger({
            type: 'navchange',
            nav: selected
        });
    }
});

});