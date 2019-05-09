/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/edit/index",["magix","./theme","$","mx-form/index","mx-form/validator","mx-dialog/index","mx-color/picker","mx-popover/index"],(require,exports,module)=>{
/*Magix,Base,$,Form,Validator,Dialog*/
require("mx-color/picker");
require("mx-popover/index");
var Magix = require("magix");
var Base = require("./theme");
var $ = require("$");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var Dialog = require("mx-dialog/index");
Magix.applyStyle("_zs_gallery___test___edit_theme_","._zs_gallery___test___edit_theme_-dot {\n  display: inline-block;\n  width: var(--input-height);\n  height: var(--input-height);\n  border-radius: 50%;\n  vertical-align: middle;\n}\n:root {\n  --edit-theme-width: 126px;\n  --edit-nav-size: 20px;\n  --edit-color-width: calc(var(--edit-theme-width) * 4);\n  --edit-group-height: 50px;\n  --edit-wrapper-height: calc(var(--edit-group-height) * 2 + 780px);\n}\n._zs_gallery___test___edit_theme_-theme {\n  float: left;\n  width: var(--edit-theme-width);\n  text-align: center;\n}\n._zs_gallery___test___edit_theme_-edit {\n  position: relative;\n  height: var(--edit-wrapper-height);\n  padding-left: var(--edit-color-width);\n}\n._zs_gallery___test___edit_theme_-nav {\n  position: absolute;\n  z-index: 3;\n  top: calc(0px - var(--edit-nav-size));\n  left: 0;\n  width: var(--edit-theme-width);\n  height: var(--edit-nav-size);\n  text-align: center;\n  transition: left var(--duration);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow,\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-width: 0 var(--edit-nav-size) var(--edit-nav-size);\n  border-style: solid;\n  border-color: transparent transparent var(--color-border);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow {\n  position: absolute;\n  top: 1px;\n  left: 50%;\n  margin-left: calc(0px - var(--edit-nav-size));\n  border-color: transparent transparent #fff;\n}\n._zs_gallery___test___edit_theme_-colors {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: var(--edit-color-width);\n  height: 100%;\n  padding-left: 15px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-item {\n  float: left;\n  width: 120px;\n  height: 86px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-icon {\n  position: relative;\n  top: 1px;\n  margin-left: 3px;\n  color: #999;\n  font-size: 14px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-group {\n  height: var(--edit-group-height);\n  line-height: var(--edit-group-height);\n  font-size: calc(var(--font-size) + 2px);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper {\n  width: 100px;\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper [mx-view*=\"mx-color/picker\"] {\n  background-color: transparent;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper [mx-view*=\"mx-color/picker\"] .mx-trigger {\n  background-color: transparent;\n}\n._zs_gallery___test___edit_theme_-preview {\n  padding: 0 20px;\n}\n._zs_gallery___test___edit_theme_-preview ._zs_gallery___test___edit_theme_-iframe {\n  width: 100%;\n  height: var(--edit-wrapper-height);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery___test___edit_theme_-tip {\n  position: relative;\n  padding-left: calc(var(--font-size) * 15);\n}\n._zs_gallery___test___edit_theme_-tip ._zs_gallery___test___edit_theme_-tip-left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(var(--font-size) * 15);\n}\n");
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
} ; var $g = '', $_temp, $p = '', themes = $$.themes, custom = $$.custom, itemWidth = $$.itemWidth, cur = $$.cur, list = $$.list, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryf:_" class="tip-content has-border has-highlight mb20 mr20"><div class="clearfix lh24"><div class="fl">操作说明：</div><div class="fl"><div>1. 选择预置主题（钻展/直通车/超级推荐）或者自定义一个颜色作为项目品牌色；</div><div>2. 系统根据品牌色计算出默认色值，可在此基础上进行调整；</div><div>3. 左侧编辑区域列举可设置的变量，支持修改</div><div>4. 右侧iframe嵌入脚手架列举常见场景，与左侧设置的变量实时联动，帮您真实复原应用场景；</div></div></div><div class="clearfix lh24 _zs_gallery___test___edit_theme_-tip"><div class="_zs_gallery___test___edit_theme_-tip-left">关于项目配置和组件配置的说明：</div><div>超级推荐仿照Facebook，趋于将组件颜色统一化，只通过导航颜色区分不同品牌，后续只需要配置项目色值，组件色值所有都统一。</div><div>对于老项目项目品牌色 = 组件品牌色，老项目要做成品牌色变更是比较难的，故过渡阶段兼容配置，项目品牌和组件品牌可分别设置。</div><div>单个操作项说明可hover名称查看</div></div></div><div mxa="_zs_galleryf:_" class="clearfix mb30">';
    $line = 19;
    $art = 'each themes as t i';
    ;
    $expr = '<%for (var i = 0, $art_cwpczdioc$art_c = themes.length; i < $art_cwpczdioc$art_c; i++) {    var t = themes[i]%>';
    for (var i = 0, $art_cwpczdioc$art_c = themes.length; i < $art_cwpczdioc$art_c; i++) {
        var t = themes[i];
        $p += '<div mxa="_zs_galleryf:a" class="_zs_gallery___test___edit_theme_-theme"><div><a href="javascript:;" class="_zs_gallery___test___edit_theme_-dot" style="';
        $line = 21;
        $art = '=t.styles';
        ;
        $p += ($expr = '<%=t.styles%>', $e(t.styles)) + '" mx-click="' + $viewId + 'selectTheme({cur:';
        $line = 22;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '})"></a></div><div mxa="_zs_galleryf:b" class="mt10">';
        $line = 23;
        $art = '=t.text';
        ;
        $p += ($expr = '<%=t.text%>', $e(t.text)) + '</div></div>';
        $line = 25;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxa="_zs_galleryf:c" class="_zs_gallery___test___edit_theme_-theme"><div mx-change="' + $viewId + 'changeColor()" mx-view="mx-color/picker?dot=true&color=';
    $line = 30;
    $art = '=custom';
    ;
    $p += ($expr = '<%!$eu(custom)%>', $eu(custom)) + '"></div><div mxs="_zs_galleryf:a" class="text-center mt10">自定义</div></div><a mxs="_zs_galleryf:b" href="javascript:;" class="fl ml20 btn btn-brand" mx-click="' + $viewId + 'copy()">复制我的定制主题</a></div><div mxv mxa="_zs_galleryf:d" class="_zs_gallery___test___edit_theme_-edit"><div class="_zs_gallery___test___edit_theme_-nav" style="left:';
    $line = 39;
    $art = '=(itemWidth*cur)';
    ;
    $p += ($expr = '<%=(itemWidth * cur)%>', $e((itemWidth * cur))) + 'px;"><span mxs="_zs_galleryf:c" class="_zs_gallery___test___edit_theme_-arrow"></span><span mxs="_zs_galleryf:d" class="_zs_gallery___test___edit_theme_-white-arrow"></span></div><div mxv mxa="_zs_galleryf:e" class="_zs_gallery___test___edit_theme_-colors">';
    $line = 44;
    $art = 'each list as group';
    ;
    $expr = '<%for (var $art_ianynalq$art_i = 0, $art_caoratkv$art_c = list.length; $art_ianynalq$art_i < $art_caoratkv$art_c; $art_ianynalq$art_i++) {    var group = list[$art_ianynalq$art_i]%>';
    for (var $art_ianynalq$art_i = 0, $art_caoratkv$art_c = list.length; $art_ianynalq$art_i < $art_caoratkv$art_c; $art_ianynalq$art_i++) {
        var group = list[$art_ianynalq$art_i];
        $p += '<div mxa="_zs_galleryf:f" class="_zs_gallery___test___edit_theme_-group">';
        $line = 46;
        $art = '=group.text';
        ;
        $p += ($expr = '<%=group.text%>', $e(group.text)) + '<span class="mc-iconfont color-9" mx-view="mx-popover/index?content=';
        $line = 48;
        $art = '=group.tip';
        ;
        $p += ($expr = '<%!$eu(group.tip)%>', $eu(group.tip)) + '&width=400&offset=';
        $line = 50;
        $art = '@{left:140}';
        ;
        $p += ($expr = '<%@{ left: 140 }%>', $i($$ref, { left: 140 })) + '">&#xe629;</span></div><div mxv mxa="_zs_galleryf:g" class="clearfix">';
        $line = 53;
        $art = 'each group.subs as item';
        ;
        $expr = '<%for (var $art_igphdedn$art_i = 0, $art_objdinspoq$art_obj = group.subs, $art_cgjseyolw$art_c = $art_objdinspoq$art_obj.length; $art_igphdedn$art_i < $art_cgjseyolw$art_c; $art_igphdedn$art_i++) {        var item = $art_objdinspoq$art_obj[$art_igphdedn$art_i]%>';
        for (var $art_igphdedn$art_i = 0, $art_objdinspoq$art_obj = group.subs, $art_cgjseyolw$art_c = $art_objdinspoq$art_obj.length; $art_igphdedn$art_i < $art_cgjseyolw$art_c; $art_igphdedn$art_i++) {
            var item = $art_objdinspoq$art_obj[$art_igphdedn$art_i];
            $p += '<div mxv mxa="_zs_galleryf:h" class="_zs_gallery___test___edit_theme_-item"><div mxa="_zs_galleryf:i" class="nowrap mb10 color-6 cursor-help"><span mx-view="mx-popover/index?content=';
            $line = 56;
            $art = '=item.tip';
            ;
            $p += ($expr = '<%!$eu(item.tip)%>', $eu(item.tip)) + '&width=320&offset=';
            $line = 58;
            $art = '@{left: 120}';
            ;
            $p += ($expr = '<%@{ left: 120 }%>', $i($$ref, { left: 120 })) + '">';
            $line = 58;
            $art = '=item.text';
            ;
            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</span></div>';
            $line = 59;
            $art = 'if item.type == \'color\'';
            ;
            $expr = '<%if (item.type == \'color\') {%>';
            if (item.type == 'color') {
                ;
                $p += '<div mxv class="_zs_gallery___test___edit_theme_-color-wrapper" style="background-color: ';
                $line = 60;
                $art = '=item.value';
                ;
                $p += ($expr = '<%=item.value%>', $e(item.value)) + ';"><div mxv="list" mxe="' + $viewId + '_0_' + ($expr = '<%=$art_ianynalq$art_i%>', $e($art_ianynalq$art_i)) + '_' + ($expr = '<%=$art_igphdedn$art_i%>', $e($art_igphdedn$art_i)) + '" mxc="[';
                $line = 62;
                $art = ':item.value';
                ;
                $p += '{p:\'list.' + ($expr = '<%=$art_ianynalq$art_i%>', $e($art_ianynalq$art_i)) + '.subs.' + ($expr = '<%=$art_igphdedn$art_i%>', $e($art_igphdedn$art_i)) + '.value\',a:\'color\'}]" mx-change="' + $viewId + 'sync({key:\'';
                $line = 63;
                $art = '=item.key';
                ;
                $p += ($expr = '<%=$eq(item.key)%>', $e($eq(item.key))) + '\'})" mx-view="mx-color/picker?color=';
                $line = 62;
                $art = ':item.value';
                ;
                $p += ($expr = '<%@item.value%>', $i($$ref, item.value)) + '"></div></div>';
                $line = 65;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 66;
            $art = 'if item.type == \'text\'';
            ;
            $expr = '<%if (item.type == \'text\') {%>';
            if (item.type == 'text') {
                ;
                $p += '<div mxv><input mxe="' + $viewId + '_1_' + ($expr = '<%=$art_ianynalq$art_i%>', $e($art_ianynalq$art_i)) + '_' + ($expr = '<%=$art_igphdedn$art_i%>', $e($art_igphdedn$art_i)) + '" mxc="[';
                $line = 69;
                $art = ':item.value';
                ;
                $p += '{p:\'list.' + ($expr = '<%=$art_ianynalq$art_i%>', $e($art_ianynalq$art_i)) + '.subs.' + ($expr = '<%=$art_igphdedn$art_i%>', $e($art_igphdedn$art_i)) + '.value\'}]" class="w100" value="';
                $line = 69;
                $art = ':item.value';
                ;
                $p += ($expr = '<%=item.value%>', $e(item.value)) + '" mx-change="' + $viewId + 'sync({key:\'';
                $line = 70;
                $art = '=item.key';
                ;
                $p += ($expr = '<%=$eq(item.key)%>', $e($eq(item.key))) + '\'})"/></div>';
                $line = 72;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 74;
            $art = 'if item.gap';
            ;
            $expr = '<%if (item.gap) {%>';
            if (item.gap) {
                ;
                $p += '<div mxs="_zs_galleryf:e" class="_zs_gallery___test___edit_theme_-item"></div>';
                $line = 76;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 77;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 79;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_galleryf:j" class="_zs_gallery___test___edit_theme_-preview"><iframe src="https://mo.m.taobao.com/page_201904221752051#!/example/second1" class="_zs_gallery___test___edit_theme_-iframe" sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts" id="frame_';
    $line = 84;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" width="100%" height="770" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/edit/index.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator, Dialog],
    init: function (e) {
        this.initTheme();
        var list = [
            {
                text: '项目配置',
                tip: '超级推荐仿照Facebook，趋于将组件颜色统一化，只通过导航颜色区分不同品牌，后续只需要配置项目色值，组件色值所有都统一。<br/>对于老项目项目品牌色 = 组件品牌色，项目要做成品牌色变更是比较难的，故过渡阶段兼容配置，项目品牌和组件品牌可分别设置。',
                subs: [
                    {
                        type: 'color',
                        key: '--app-brand',
                        text: '项目品牌色',
                        tip: '项目品牌色，支持渐变，主要用于项目顶部和侧边导航，自定义时默认为项目品牌色 = 组件品牌色'
                    },
                    {
                        type: 'color',
                        key: '--app-brand-gradient',
                        text: '项目品牌渐变',
                        tip: '项目品牌色，支持渐变，主要用于项目顶部和侧边导航，自定义时默认为项目品牌色 = 组件品牌色'
                    },
                    {
                        type: 'color',
                        key: '--app-nav-bg',
                        text: '项目侧边导航背景',
                        tip: '项目侧边导航背景色'
                    },
                    {
                        type: 'color',
                        key: '--app-bg',
                        text: '项目背景',
                        tip: '项目采用卡片色设计，白框底部背景色'
                    }
                ]
            },
            {
                text: '组件配置',
                tip: '超级推荐仿照Facebook，趋于将组件颜色统一化，只通过导航颜色区分不同品牌，后续只需要配置项目色值，组件色值所有都统一。<br/>对于老项目项目品牌色 = 组件品牌色，项目要做成品牌色变更是比较难的，故过渡阶段兼容配置，项目品牌和组件品牌可分别设置。',
                subs: [
                    {
                        type: 'text',
                        key: '--font-size',
                        text: '字体',
                        tip: '字体大小，默认12px，组件基于此参数计算节点大小，<span class="color-brand">注：修改字体联动修改正常组件行高，小号组件行高</span>'
                    },
                    {
                        type: 'text',
                        key: '--line-height',
                        text: '文本行高',
                        tip: '文本行高，默认1.5'
                    },
                    {
                        type: 'text',
                        key: '--input-height',
                        text: '正常组件行高',
                        tip: 'input，btn，dropdown，calendar等等组件的trigger节点行高，默认 = 字体 + 20'
                    },
                    {
                        type: 'text',
                        key: '--input-small-height',
                        text: '小号组件行高',
                        tip: '小号input，小号btn，dropdown下拉列表单个选项，默认 = 字体 + 14'
                    },
                    {
                        type: 'color',
                        key: '--color-brand',
                        text: '品牌色',
                        tip: '组件品牌色，组件基本色值都基于品牌色产生'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-hover',
                        text: '品牌色hover',
                        tip: '组件品牌色hover色值，默认品牌色亮度减少10%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-light',
                        text: '品牌色20%',
                        tip: '主要应用于表格单行hover操作行背景值，开关浅色，滑动轴浅色；默认组件品牌色透明20%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-opacity',
                        text: '品牌色10%',
                        tip: '主要应用于表格单行hover显示行背景值，下拉选项选中态背景色；默认组件品牌色透明10%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-vs',
                        text: '品牌色对比色',
                        tip: '品牌色对比色，常用与报表对比场景'
                    },
                    {
                        type: 'color',
                        key: '--border-highlight',
                        text: '组件边框色',
                        tip: 'input，dropdown，calendar等组件的边框颜色；默认#e6e6e6'
                    },
                    {
                        type: 'color',
                        key: '--border-highlight-hover',
                        text: '组件边框hover色',
                        tip: 'input，dropdown，calendar等组件的边框hover颜色；默认#ccc',
                        gap: true
                    },
                    {
                        type: 'color',
                        key: '--btn-brand',
                        text: '深底按钮',
                        tip: '深底按钮色，支持渐变，默认等于品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-gradient',
                        text: '深底按钮渐变',
                        tip: '深底按钮色，支持渐变，默认等于品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-text',
                        text: '深底按钮文字',
                        tip: '深底色按钮文字颜色',
                        gap: true
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-hover',
                        text: '深底按钮hover',
                        tip: '深底按钮hover色值，支持渐变，默认等于品牌色hover'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-gradient-hover',
                        text: '深底按钮hover渐变',
                        tip: '深底按钮hover色值，支持渐变，默认等于品牌色hover'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-text-hover',
                        text: '深底按钮hover文字',
                        tip: '深底色按钮hover时文字颜色',
                        gap: true
                    },
                    {
                        type: 'color',
                        key: '--btn-border',
                        text: '浅底按钮边框',
                        tip: '浅底色按钮边框颜色，默认为品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-bg',
                        text: '浅底按钮背景',
                        tip: '浅底按钮背景色，默认为品牌色10%'
                    },
                    {
                        type: 'color',
                        key: '--btn-text',
                        text: '浅底按钮文字',
                        tip: '浅底按钮文字颜色，默认#333',
                        gap: true
                    },
                    {
                        type: 'color',
                        key: '--btn-border-hover',
                        text: '浅底按钮hover边框',
                        tip: '浅底按钮hover时边框颜色，默认为品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-bg-hover',
                        text: '浅底按钮hover背景',
                        tip: '浅底按钮hover时背景颜色，默认为品牌色20%'
                    },
                    {
                        type: 'color',
                        key: '--btn-text-hover',
                        text: '浅底按钮hover文字',
                        tip: '浅底按钮hover文字颜色，默认#333'
                    },
                    {
                        type: 'text',
                        key: '--btn-border-radius',
                        text: '按钮圆角',
                        tip: '按钮圆角，默认4px'
                    },
                    {
                        type: 'color',
                        key: '--color-warn',
                        text: '黄色警告',
                        tip: '警告场景提示颜色'
                    },
                    {
                        type: 'color',
                        key: '--color-red',
                        text: '红色错误',
                        tip: '错误场景提示颜色'
                    },
                    {
                        type: 'color',
                        key: '--color-green',
                        text: '绿色通过',
                        tip: '通过场景提示颜色',
                        gap: true
                    }
                ]
            }
        ];
        var root = getComputedStyle(document.documentElement);
        var itemWidth = root.getPropertyValue('--edit-theme-width').trim();
        this.updater.set({
            viewId: this.id,
            custom: '#51a300',
            cur: 2,
            itemWidth: +itemWidth.replace('px', ''),
            list: list
        });
    },
    render: function () {
        this.setValues();
    },
    setValues: function (post) {
        var that = this;
        var _a = that.updater.get(), list = _a.list, cur = _a.cur, custom = _a.custom, themes = _a.themes;
        var colors = {};
        if (cur == 3) {
            // 自定义
            colors = that['@{get.base}']({
                '--color-brand': custom
            });
        }
        else {
            var item = themes[cur];
            colors = item.colors;
        }
        list.forEach(function (g) {
            g.subs.forEach(function (s) {
                s.value = colors[s.key] || '';
            });
        });
        that.updater.digest({
            list: list
        });
        if (post) {
            // 通知iframe改变颜色
            var frame = document.getElementById('frame_' + that.id);
            frame.contentWindow.postMessage({
                type: 'changeTheme',
                colors: colors
            }, '*');
        }
    },
    'selectTheme<click>': function (event) {
        var cur = event.params.cur;
        this.updater.set({
            cur: cur
        });
        this.setValues(true);
    },
    'changeColor<change>': function (event) {
        this.updater.set({
            custom: event.color,
            cur: 3
        });
        this.setValues(true);
    },
    'sync<change>': function (event) {
        var list = this.updater.get('list');
        var colors = {};
        list.forEach(function (g) {
            g.subs.forEach(function (s) {
                colors[s.key] = s.value;
            });
        });
        var key = event.params.key;
        if (key == '--font-size') {
            var fs = colors['--font-size'].replace('px', '');
            colors['--input-height'] = (+fs + 20) + 'px';
            colors['--input-small-height'] = (+fs + 14) + 'px';
        }
        list.forEach(function (g) {
            g.subs.forEach(function (s) {
                s.value = colors[s.key];
            });
        });
        this.updater.digest({
            list: list
        });
        var frame = document.getElementById('frame_' + this.id);
        frame.contentWindow.postMessage({
            type: 'changeTheme',
            colors: colors
        }, '*');
    },
    'copy<click>': function (event) {
        var list = this.updater.get('list');
        var colors = {};
        list.forEach(function (g) {
            g.subs.forEach(function (s) {
                colors[s.key] = s.value;
            });
        });
        this.mxModal('__test__/edit/copy', {
            colors: colors
        }, {
            header: {
                title: '复制我的定制主题'
            },
            footer: {
                enter: false
            },
            width: 800
        });
    }
});

});