/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-duration/index",["magix","mx-form/index","mx-form/validator","mx-duration/data"],(require,exports,module)=>{
/*Magix,Form,Validator,Data*/

/**
 * 时段溢价
 * discount：已选数据 '00:00-12:00:100,12:00-24:00:250;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100',
 * width：容器宽度，最小
 * type：half 半小时，hour一小时，默认half
 */
var Magix = require("magix");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var Data = require("mx-duration/data");
var WidthLimit = 780;
Magix.applyStyle("_zs_gallery_mx-duration_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-duration_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-duration_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-duration_index_-circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 3px;\n  border-radius: 50%;\n}\n._zs_gallery_mx-duration_index_-duration {\n  box-sizing: border-box;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-week {\n  border-top: 1px solid #e6e6e6;\n  border-right: 1px solid #e6e6e6;\n  border-left: 1px solid #e6e6e6;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-week ._zs_gallery_mx-duration_index_-week-item {\n  color: #999;\n  text-align: center;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-week ._zs_gallery_mx-duration_index_-week-item:first-child {\n  border-top-left-radius: 4px;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-week ._zs_gallery_mx-duration_index_-week-item:last-child {\n  border-bottom-left-radius: 4px;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-range {\n  background-color: #fafafa;\n  border-top: 1px solid #e6e6e6;\n  border-bottom: 1px solid #e6e6e6;\n  border-top-right-radius: 4px;\n  text-align: center;\n  color: #999;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-range ._zs_gallery_mx-duration_index_-range-item {\n  float: left;\n  border-right: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-range ._zs_gallery_mx-duration_index_-range-item:last-child {\n  border-top-right-radius: 4px;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-time {\n  background-color: #fafafa;\n  text-align: center;\n  color: #999;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-time ._zs_gallery_mx-duration_index_-time-item {\n  float: left;\n  border-right: 1px solid #e6e6e6;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-boxzone ._zs_gallery_mx-duration_index_-box {\n  background: #fff;\n  border-right: 1px solid #e6e6e6;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-boxzone ._zs_gallery_mx-duration_index_-box:last-child {\n  border-bottom-right-radius: 4px;\n}\n._zs_gallery_mx-duration_index_-duration-wrapper {\n  position: relative;\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-mask {\n  position: absolute;\n  z-index: 100;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n  border: 1px solid #4d7fff;\n  background: rgba(75, 138, 251, 0.2);\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-hover {\n  position: absolute;\n  z-index: 100;\n  width: 140px;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n  border-radius: 4px;\n  background: #fff;\n  filter: alpha(opacity=80);\n  opacity: 0.8;\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-setting {\n  position: absolute;\n  z-index: 100;\n  width: 260px;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n  border-radius: 4px;\n  background: #fff;\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-setting ._zs_gallery_mx-duration_index_-setting-content {\n  padding: 20px 20px 10px 20px;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-setting ._zs_gallery_mx-duration_index_-setting-footer {\n  padding: 10px 20px;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, maxWidth = $$.maxWidth, hoverInfo = $$.hoverInfo, maskInfo = $$.maskInfo, settingInfo = $$.settingInfo, viewId = $$.viewId, boxWidth = $$.boxWidth, multiple = $$.multiple, headerHeight = $$.headerHeight, weeks = $$.weeks, boxHeight = $$.boxHeight, rowNum = $$.rowNum, ranges = $$.ranges, boxZones = $$.boxZones; var $expr, $art, $line; try {
    $p += '<div mxv style="width: ';
    $line = 1;
    $art = '=maxWidth';
    ;
    $p += '' + ($expr = '<%=maxWidth%>', $e(maxWidth)) + 'px;" class="_zs_gallery_mx-duration_index_-duration-wrapper">';
    $line = 3;
    $art = 'if hoverInfo.show';
    ;
    $p += '';
    $expr = '<%if(hoverInfo.show){%>';
    if (hoverInfo.show) {
        ;
        $p += '<div style="top: ';
        $line = 4;
        $art = '=hoverInfo.top';
        ;
        $p += '' + ($expr = '<%=hoverInfo.top%>', $e(hoverInfo.top)) + 'px; left: ';
        $line = 4;
        $art = '=hoverInfo.left';
        ;
        $p += '' + ($expr = '<%=hoverInfo.left%>', $e(hoverInfo.left)) + 'px;" class="_zs_gallery_mx-duration_index_-discount-hover"><div mxa="_zs_galleryaj:_" class="mb5">';
        $line = 6;
        $art = '=hoverInfo.week';
        ;
        $p += '' + ($expr = '<%=hoverInfo.week%>', $e(hoverInfo.week)) + '</div><div mxa="_zs_galleryaj:a" class="mb5"><strong>';
        $line = 7;
        $art = '=hoverInfo.time';
        ;
        $p += '' + ($expr = '<%=hoverInfo.time%>', $e(hoverInfo.time)) + '</strong></div><div><strong>';
        $line = 8;
        $art = '=hoverInfo.discount';
        ;
        $p += '' + ($expr = '<%=hoverInfo.discount%>', $e(hoverInfo.discount)) + '</strong>%折扣</div></div>';
        $line = 10;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 13;
    $art = 'if maskInfo.show';
    ;
    $p += '';
    $expr = '<%if(maskInfo.show){%>';
    if (maskInfo.show) {
        ;
        $p += '<div style="top: ';
        $line = 14;
        $art = '=maskInfo.top';
        ;
        $p += '' + ($expr = '<%=maskInfo.top%>', $e(maskInfo.top)) + 'px; left: ';
        $line = 14;
        $art = '=maskInfo.left';
        ;
        $p += '' + ($expr = '<%=maskInfo.left%>', $e(maskInfo.left)) + 'px; height: ';
        $line = 14;
        $art = '=maskInfo.height';
        ;
        $p += '' + ($expr = '<%=maskInfo.height%>', $e(maskInfo.height)) + 'px; width: ';
        $line = 14;
        $art = '=maskInfo.width';
        ;
        $p += '' + ($expr = '<%=maskInfo.width%>', $e(maskInfo.width)) + 'px;" class="_zs_gallery_mx-duration_index_-discount-mask"></div>';
        $line = 16;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 19;
    $art = 'if settingInfo.show';
    ;
    $p += '';
    $expr = '<%if(settingInfo.show){%>';
    if (settingInfo.show) {
        ;
        $p += '<div mxv style="top: ';
        $line = 20;
        $art = '=settingInfo.top';
        ;
        $p += '' + ($expr = '<%=settingInfo.top%>', $e(settingInfo.top)) + 'px; left: ';
        $line = 20;
        $art = '=settingInfo.left';
        ;
        $p += '' + ($expr = '<%=settingInfo.left%>', $e(settingInfo.left)) + 'px;" class="_zs_gallery_mx-duration_index_-discount-setting"><div mxv mxa="_zs_galleryaj:b" class="_zs_gallery_mx-duration_index_-setting-content"><div mxa="_zs_galleryaj:c" class="mb20"><span>';
        $line = 24;
        $art = '=settingInfo.week';
        ;
        $p += '' + ($expr = '<%=settingInfo.week%>', $e(settingInfo.week)) + '</span>：<strong mxa="_zs_galleryaj:d" class="ml5">';
        $line = 25;
        $art = '=settingInfo.time';
        ;
        $p += '' + ($expr = '<%=settingInfo.time%>', $e(settingInfo.time)) + '</strong></div><div mxv mxa="_zs_galleryaj:e" class="mb5"><label mxv><input type="radio" class="radio" name="settingType" value="1" mx-change="' + $viewId + 'changeSettingType({type:1})" ';
        $line = 31;
        $art = 'if settingInfo.type == 1';
        ;
        $p += '';
        $expr = '<%if(settingInfo.type==1){%>';
        if (settingInfo.type == 1) {
            ;
            $p += ' checked="true" ';
            $line = 31;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '/>自定义：</label>';
        $line = 33;
        $art = 'if settingInfo.type == 1';
        ;
        $p += '';
        $expr = '<%if(settingInfo.type==1){%>';
        if (settingInfo.type == 1) {
            ;
            $p += '<input mxe="' + $viewId + '_0" mxc="[';
            $line = 36;
            $art = ':settingInfo.discount{required:true,posint:[true,\'范围:30-250的整数\'],min:[30,\'范围:30-250的整数\'],max:[250,\'范围:30-250的整数\']}';
            ;
            $p += '{p:\'settingInfo.discount\',f:{required:true,posint:[true,\'范围:30-250的整数\'],min:[30,\'范围:30-250的整数\'],max:[250,\'范围:30-250的整数\']}}]" class="input w100" value="';
            $line = 35;
            $art = '=settingInfo.discount';
            ;
            $p += '' + ($expr = '<%=settingInfo.discount%>', $e(settingInfo.discount)) + '"/>';
            $line = 37;
            $art = 'else';
            ;
            $p += '';
            $expr = '<%}else{%>';
        }
        else {
            ;
            $p += '<input class="input w100" disabled="true" value="';
            $line = 40;
            $art = '=settingInfo.discount';
            ;
            $p += '' + ($expr = '<%=settingInfo.discount%>', $e(settingInfo.discount)) + '"/>';
            $line = 41;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '<span mxs="_zs_galleryaj:_" class="ml5">%</span></div><div mxv mxa="_zs_galleryaj:f" class="mb10"><label mxv><input type="radio" name="settingType" class="radio" value="2" mx-change="' + $viewId + 'changeSettingType({type:2})" ';
        $line = 48;
        $art = 'if settingInfo.type == 2';
        ;
        $p += '';
        $expr = '<%if(settingInfo.type==2){%>';
        if (settingInfo.type == 2) {
            ;
            $p += ' checked="true" ';
            $line = 48;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '/>无折扣</label></div><div mxv mxa="_zs_galleryaj:g" class="mb10"><label mxv><input type="radio" name="settingType" class="radio" value="3" mx-change="' + $viewId + 'changeSettingType({type:3})" ';
        $line = 55;
        $art = 'if settingInfo.type == 3';
        ;
        $p += '';
        $expr = '<%if(settingInfo.type==3){%>';
        if (settingInfo.type == 3) {
            ;
            $p += ' checked="true" ';
            $line = 55;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '/>不投放</label></div></div><div mxs="_zs_galleryaj:a" class="_zs_gallery_mx-duration_index_-setting-footer"><a class="btn btn-brand mr10 w60" href="javascript:;" mx-click="' + $viewId + 'submitSetting()">确定</a><a class="btn w60" href="javascript:;" mx-click="' + $viewId + 'cancelSetting()">取消</a></div></div>';
        $line = 64;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<div class="_zs_gallery_mx-duration_index_-duration clearfix" id="';
    $line = 66;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_duration" style="width: ';
    $line = 67;
    $art = '=(maxWidth)';
    ;
    $p += '' + ($expr = '<%=(maxWidth)%>', $e((maxWidth))) + 'px;"><ul class="_zs_gallery_mx-duration_index_-week fl" style="width: ';
    $line = 68;
    $art = '=(boxWidth*multiple)';
    ;
    $p += '' + ($expr = '<%=(boxWidth*multiple)%>', $e((boxWidth * multiple))) + 'px;"><li class="_zs_gallery_mx-duration_index_-week-item" style="height: ';
    $line = 69;
    $art = '=headerHeight+1';
    ;
    $p += '' + ($expr = '<%=headerHeight+1%>', $e(headerHeight + 1)) + 'px; line-height: ';
    $line = 69;
    $art = '=headerHeight';
    ;
    $p += '' + ($expr = '<%=headerHeight%>', $e(headerHeight)) + 'px;">星期</li>';
    $line = 70;
    $art = 'each weeks as week';
    ;
    $p += '';
    $expr = '<%for(var $art_ijndcxvqtld$art_i=0;$art_ijndcxvqtld$art_i<weeks.length;$art_ijndcxvqtld$art_i++){var week=weeks[$art_ijndcxvqtld$art_i]%>';
    for (var $art_ijndcxvqtld$art_i = 0; $art_ijndcxvqtld$art_i < weeks.length; $art_ijndcxvqtld$art_i++) {
        var week = weeks[$art_ijndcxvqtld$art_i];
        $p += '<li class="_zs_gallery_mx-duration_index_-week-item" style="height: ';
        $line = 71;
        $art = '=boxHeight';
        ;
        $p += '' + ($expr = '<%=boxHeight%>', $e(boxHeight)) + 'px; line-height: ';
        $line = 71;
        $art = '=boxHeight';
        ;
        $p += '' + ($expr = '<%=boxHeight%>', $e(boxHeight)) + 'px;">';
        $line = 71;
        $art = '=week';
        ;
        $p += '' + ($expr = '<%=week%>', $e(week)) + '</li>';
        $line = 72;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul><div class="_zs_gallery_mx-duration_index_-content fl" style="width: ';
    $line = 74;
    $art = '=boxWidth*rowNum';
    ;
    $p += '' + ($expr = '<%=boxWidth*rowNum%>', $e(boxWidth * rowNum)) + 'px;"><ul mxa="_zs_galleryaj:h" class="_zs_gallery_mx-duration_index_-range clearfix">';
    $line = 76;
    $art = 'each ranges as range';
    ;
    $p += '';
    $expr = '<%for(var $art_ikvhgxsp$art_i=0;$art_ikvhgxsp$art_i<ranges.length;$art_ikvhgxsp$art_i++){var range=ranges[$art_ikvhgxsp$art_i]%>';
    for (var $art_ikvhgxsp$art_i = 0; $art_ikvhgxsp$art_i < ranges.length; $art_ikvhgxsp$art_i++) {
        var range = ranges[$art_ikvhgxsp$art_i];
        $p += '<li class="_zs_gallery_mx-duration_index_-range-item" style="width: ';
        $line = 77;
        $art = '=(boxWidth*(rowNum/4))';
        ;
        $p += '' + ($expr = '<%=(boxWidth*(rowNum/4))%>', $e((boxWidth * (rowNum / 4)))) + 'px; height: ';
        $line = 77;
        $art = '=headerHeight/2';
        ;
        $p += '' + ($expr = '<%=headerHeight/2%>', $e(headerHeight / 2)) + 'px; line-height: ';
        $line = 77;
        $art = '=headerHeight/2';
        ;
        $p += '' + ($expr = '<%=headerHeight/2%>', $e(headerHeight / 2)) + 'px;">';
        $line = 77;
        $art = '=range';
        ;
        $p += '' + ($expr = '<%=range%>', $e(range)) + '</li>';
        $line = 78;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul><ul mxa="_zs_galleryaj:i" class="_zs_gallery_mx-duration_index_-time clearfix">';
    $line = 81;
    $art = 'for (let i=0;i<24;i+=1)';
    ;
    $p += '';
    $expr = '<%for(var i=0;i<24;i+=1){%>';
    for (var i = 0; i < 24; i += 1) {
        ;
        $p += '<li class="_zs_gallery_mx-duration_index_-time-item" style="width: ';
        $line = 82;
        $art = '=(boxWidth*multiple)';
        ;
        $p += '' + ($expr = '<%=(boxWidth*multiple)%>', $e((boxWidth * multiple))) + 'px; height: ';
        $line = 82;
        $art = '=headerHeight/2';
        ;
        $p += '' + ($expr = '<%=headerHeight/2%>', $e(headerHeight / 2)) + 'px; line-height: ';
        $line = 82;
        $art = '=headerHeight/2';
        ;
        $p += '' + ($expr = '<%=headerHeight/2%>', $e(headerHeight / 2)) + 'px;">';
        $line = 82;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</li>';
        $line = 83;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul><ul mxa="_zs_galleryaj:j" class="_zs_gallery_mx-duration_index_-boxzone clearfix">';
    $line = 86;
    $art = 'each boxZones as zone';
    ;
    $p += '';
    $expr = '<%for(var $art_ibrultjx$art_i=0;$art_ibrultjx$art_i<boxZones.length;$art_ibrultjx$art_i++){var zone=boxZones[$art_ibrultjx$art_i]%>';
    for (var $art_ibrultjx$art_i = 0; $art_ibrultjx$art_i < boxZones.length; $art_ibrultjx$art_i++) {
        var zone = boxZones[$art_ibrultjx$art_i];
        $p += '<li class="_zs_gallery_mx-duration_index_-box fl" style="width: ';
        $line = 88;
        $art = '=boxWidth';
        ;
        $p += '' + ($expr = '<%=boxWidth%>', $e(boxWidth)) + 'px; height: ';
        $line = 88;
        $art = '=boxHeight';
        ;
        $p += '' + ($expr = '<%=boxHeight%>', $e(boxHeight)) + 'px; background-color: ';
        $line = 88;
        $art = '=zone.bg';
        ;
        $p += '' + ($expr = '<%=zone.bg%>', $e(zone.bg)) + '" mx-click="' + $viewId + 'clickOutside({index:';
        $line = 89;
        $art = '=zone.index';
        ;
        $p += '' + ($expr = '<%=zone.index%>', $e(zone.index)) + '})" mx-mousedown="' + $viewId + 'select()" mx-mouseover="' + $viewId + 'showTip({index:';
        $line = 91;
        $art = '=zone.index';
        ;
        $p += '' + ($expr = '<%=zone.index%>', $e(zone.index)) + '})" mx-mouseout="' + $viewId + 'hideTip({index:';
        $line = 92;
        $art = '=zone.index';
        ;
        $p += '' + ($expr = '<%=zone.index%>', $e(zone.index)) + '})"></li>';
        $line = 93;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul></div></div><div mxs="_zs_galleryaj:b" class="mt20 clearfix"><a class="btn mr10 fl" href="javascript:;" mx-click="' + $viewId + 'clear()">清空</a><a class="btn mr10 fl" href="javascript:;" mx-click="' + $viewId + 'reset()">重置</a><span class="fr lh32 color-c"><span class="_zs_gallery_mx-duration_index_-circle" style="background-color: rgba(97,199,242,0.7)"></span><span class="font-tahoma bold color-c mr15">30-100%</span><span class="_zs_gallery_mx-duration_index_-circle" style="background-color: rgba(77,166,255,0.7)"></span><span class="font-tahoma bold color-c mr15">100-200%</span><span class="_zs_gallery_mx-duration_index_-circle" style="background-color: rgba(134,115,230,0.7)"></span><span class="font-tahoma bold color-c mr15">200-250%</span><i class="mc-iconfont displacement-2">&#xe705;</i><span class="mr10">可以拖拽鼠标选择投放时段</span></span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-duration/index.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    init: function (viewOptions) {
        var that = this;
        var half = (/^true$/i).test(viewOptions.half), maxWidth = viewOptions.width || WidthLimit, timeDiscount = viewOptions.selected || Data.none;
        var gap = 24, columnNum = 7, //一列有多少个格子
        multiple = half ? 2 : 1; //倍数
        if (maxWidth && +maxWidth < WidthLimit) {
            maxWidth = WidthLimit;
        }
        var rowNum = gap * multiple, boxWidth = maxWidth / (25 * multiple);
        var boxLength = rowNum * columnNum;
        that.updater.set({
            timeDiscount: timeDiscount,
            weeks: ['一', '二', '三', '四', '五', '六', '日'],
            ranges: ['00:00 - 06:00', '06:00 - 12:00', '12:00 - 18:00', '18:00 - 24:00'],
            multiple: multiple,
            maxWidth: maxWidth,
            rowNum: rowNum,
            columnNum: columnNum,
            headerHeight: 60,
            boxWidth: boxWidth,
            boxHeight: 40,
            boxLength: boxLength,
            boxZones: that.getBoxzone(boxLength),
            valid: '',
            maskInfo: {
                show: false,
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                startRow: 0,
                endRow: 0,
                startColumn: 0,
                endColumn: 0,
                selectedZones: []
            },
            settingInfo: {
                show: false,
                week: '',
                time: '',
                discount: '',
                type: 1 //1自定义 2无折扣 3不投放
            },
            hoverInfo: {
                show: false,
                left: 0,
                top: 0,
                week: '',
                time: '',
                discount: ''
            }
        });
        that.discountColorMap = that.getColorMap();
        that.on('destroy', function () {
            $(document.body).off('mousemove.duration');
            $(document.body).off('mouseup.duration');
            clearTimeout(that.hoverTimeout);
            clearTimeout(that.hideTimeout);
        });
    },
    render: function () {
        var that = this;
        var updater = that.updater;
        var timeDiscount = updater.get('timeDiscount'), boxLength = updater.get('boxLength');
        var array = that.report2Array(timeDiscount);
        for (var i = 0; i < boxLength; i++) {
            that.setBoxDiscount(i, array[i]);
        }
        that.updater.digest();
        that.wrapper = $('#' + that.id + '_duration');
    },
    /**
     * 提交格式转化为数组，半小时一格
     * 00:00-24:00:100;
     * 00:00-01:00:100,01:00-14:00:120,14:00-21:00:70,21:00-24:00:200;
     * 00:00-24:00:100......
     */
    report2Array: function (report) {
        var array = [];
        var that = this;
        var updater = that.updater;
        var rowNum = updater.get('rowNum'), multiple = updater.get('multiple');
        var arr = report.split(';'); // ;分隔天的内容
        for (var i = 0, aLen = arr.length; i < aLen; i++) {
            var list = arr[i].split(','); // ,分隔一天内时段的内容
            for (var j = 0, lLen = list.length; j < lLen; j++) {
                if (list[j] == '0') {
                    continue;
                }
                var darray = list[j].match(/(\d{2}):(\d{2})-(\d{2}):(\d{2}):(\d+)/);
                // for (let t = 1; t <= 5; t++) {
                //     darray[t] = parseInt(darray[t]);
                // }
                // 00:00-24:00:100
                // 分解成['00:00-24:00:100', '00', '00', '24', '00', '100']
                //i表示星期几，第几行
                var start = parseInt(darray[1]) * multiple + rowNum * i;
                if (darray[2] == '30') {
                    start++;
                }
                var end = parseInt(darray[3]) * multiple + rowNum * i;
                if (darray[4] == '30') {
                    end++;
                }
                var discount = parseInt(darray[5]);
                for (var index = start; index <= end - 1; index++) {
                    array[index] = discount;
                }
            }
        }
        return array;
    },
    /**
     * 将时段设置成对应的折扣值及颜色
     */
    setBoxDiscount: function (index, discount) {
        var that = this;
        discount = parseInt(discount) || 0;
        var background = this.discountColorMap[discount];
        var boxZones = that.updater.get('boxZones');
        boxZones[index].bg = background;
        boxZones[index].discount = discount;
    },
    /**
     * 时段选择
     */
    'select<mousedown>': function (downEvent) {
        downEvent.preventDefault();
        var that = this;
        var updater = that.updater;
        var hoverInfo = updater.get('hoverInfo'), settingInfo = updater.get('settingInfo'), maskInfo = updater.get('maskInfo'), boxWidth = updater.get('boxWidth'), multiple = updater.get('multiple'), headerHeight = updater.get('headerHeight');
        hoverInfo.show = false;
        settingInfo.show = false;
        var wrapper = that.wrapper;
        var wrapperLeft = wrapper.offset().left, wrapperTop = wrapper.offset().top;
        var startX = downEvent.pageX - wrapperLeft;
        var startY = downEvent.pageY - wrapperTop;
        $(document.body).off('mousemove.duration')
            .on('mousemove.duration', function (moveEvent) {
            moveEvent.preventDefault();
            var diffX = moveEvent.pageX - wrapperLeft;
            var diffY = moveEvent.pageY - wrapperTop;
            var endX = Math.min(diffX, wrapper.outerWidth());
            var endY = Math.min(diffY, wrapper.outerHeight());
            var left = Math.max(boxWidth * multiple, Math.min(startX, endX)), top = Math.max(headerHeight, Math.min(startY, endY));
            maskInfo.left = left;
            maskInfo.top = top + 1;
            maskInfo.width = Math.max(startX, endX) - left;
            maskInfo.height = Math.max(startY, endY) - top;
            maskInfo.show = true;
            that.updater.digest({
                hoverInfo: hoverInfo,
                settingInfo: settingInfo,
                maskInfo: maskInfo
            });
        });
        $(document.body).off('mouseup.duration')
            .on('mouseup.duration', function (upEvent) {
            if (!maskInfo.show) {
                return;
            }
            upEvent.preventDefault();
            $(document.body).off('mousemove.duration');
            that.selectEnd();
            $(document.body).off('mouseup.duration');
        });
    },
    selectEnd: function (indexStart) {
        var that = this;
        var updater = that.updater;
        var maskInfo = updater.get('maskInfo'), headerHeight = updater.get('headerHeight'), boxHeight = updater.get('boxHeight'), boxWidth = updater.get('boxWidth'), multiple = updater.get('multiple'), columnNum = updater.get('columnNum'), rowNum = updater.get('rowNum');
        // 从0开始
        var row1 = parseInt((maskInfo.top - headerHeight) / boxHeight);
        var row2 = parseInt((maskInfo.height + maskInfo.top - headerHeight) / boxHeight);
        var column1 = parseInt((maskInfo.left - boxWidth * multiple) / boxWidth);
        var column2 = parseInt((maskInfo.width + maskInfo.left - boxWidth * multiple) / boxWidth);
        var startRow = Math.max(0, row1);
        var endRow = Math.min(columnNum - 1, row2);
        var startColumn = Math.max(0, column1);
        var endColumn = Math.min(rowNum - 1, column2);
        var selected = [];
        for (var i = startRow; i <= endRow; i++) {
            for (var j = startColumn; j <= endColumn; j++) {
                selected.push(i * rowNum + j);
            }
        }
        maskInfo.selectedZones = selected;
        maskInfo.startRow = startRow;
        maskInfo.endRow = endRow;
        maskInfo.startColumn = startColumn;
        maskInfo.endColumn = endColumn;
        maskInfo.left = boxWidth * multiple + startColumn * boxWidth;
        maskInfo.top = headerHeight + startRow * boxHeight + 1;
        maskInfo.width = (endColumn - startColumn + 1) * boxWidth;
        maskInfo.height = (endRow - startRow + 1) * boxHeight;
        maskInfo.show = true;
        that.showSetting();
    },
    /**
     * 选中情况下点击其他区域隐藏选中区域
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    'clickOutside<click>': function (event) {
        var that = this;
        var index = +event.params.index;
        var maskInfo = that.updater.get('maskInfo');
        if (!maskInfo.show ||
            (maskInfo.show && maskInfo.selectedZones.indexOf(index) > -1)) {
            return;
        }
        event.preventDefault();
        $(document.body).off('mousemove.duration');
        $(document.body).off('mouseup.duration');
        $(document.body).off('click.duration');
        that['cancelSetting<click>']();
    },
    'changeSettingType<change>': function (event) {
        var that = this;
        var updater = that.updater;
        var settingInfo = updater.get('settingInfo');
        settingInfo.type = event.params.type;
        updater.digest({
            settingInfo: settingInfo
        });
    },
    'submitSetting<click>': function () {
        var that = this;
        var updater = that.updater;
        var src = updater.get();
        var settingInfo = src.settingInfo, maskInfo = src.maskInfo;
        var discount = 0;
        var valid = true;
        switch (+settingInfo.type) {
            case 1://自定义
                valid = that.isValid();
                var result = that.fromKeys(src, 'settingInfo');
                discount = result.settingInfo.discount;
                break;
            case 2://无折扣
                discount = 100;
                break;
            case 3://不投放
                discount = 0;
                break;
        }
        if (!valid) {
            return;
        }
        settingInfo.show = false;
        settingInfo.type = 1;
        maskInfo.show = false;
        for (var i = 0; i < maskInfo.selectedZones.length; i++) {
            that.setBoxDiscount(maskInfo.selectedZones[i], discount);
        }
        that.updater.digest({
            settingInfo: settingInfo,
            maskInfo: maskInfo
        });
    },
    'cancelSetting<click>': function () {
        var that = this;
        var updater = that.updater;
        var settingInfo = updater.get('settingInfo'), maskInfo = updater.get('maskInfo');
        maskInfo.show = false;
        settingInfo.show = false;
        settingInfo.type = 1;
        that.updater.digest({
            settingInfo: settingInfo,
            maskInfo: maskInfo
        });
    },
    showSetting: function () {
        var that = this;
        var updater = that.updater;
        var settingInfo = updater.get('settingInfo'), maskInfo = updater.get('maskInfo'), boxZones = updater.get('boxZones');
        var startweek = maskInfo.startRow + 1;
        var endweek = maskInfo.endRow + 1;
        var week;
        if (startweek != endweek) {
            week = that.formatweek(startweek) + ' - ' + that.formatweek(endweek);
        }
        else {
            week = that.formatweek(startweek);
        }
        settingInfo.week = week;
        settingInfo.time = that.getDuration(maskInfo.startColumn, maskInfo.endColumn + 1, '%s - %s');
        var selectedZones = maskInfo.selectedZones;
        var lastDiscount;
        var isSame = true;
        for (var i = 0; i < selectedZones.length; i++) {
            var index = selectedZones[i];
            var tempDiscount = boxZones[index].discount;
            if (!tempDiscount || (lastDiscount && tempDiscount != lastDiscount)) {
                isSame = false;
                break;
            }
            lastDiscount = tempDiscount;
        }
        settingInfo.discount = isSame ? lastDiscount : '';
        var settingInfoWidth = 260;
        var settingInfoHeight = 238;
        var wrapperWdith = that.wrapper.outerWidth();
        var wrapperHeight = that.wrapper.outerHeight();
        var left = (maskInfo.left + maskInfo.width / 2);
        if (left + settingInfoWidth > wrapperWdith) {
            left -= settingInfoWidth;
        }
        var top = (maskInfo.top + maskInfo.height / 2);
        if (top + settingInfoHeight > wrapperHeight + 100) {
            top -= settingInfoHeight;
        }
        settingInfo.left = left;
        settingInfo.top = top;
        settingInfo.show = true;
        that.updater.digest({
            boxZones: boxZones,
            settingInfo: settingInfo,
            maskInfo: maskInfo
        });
    },
    /**
     * 鼠标hover时段tip
     */
    'showTip<mouseover>': function (event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }
        var that = this;
        clearTimeout(that.hoverTimeout);
        clearTimeout(that.hideTimeout);
        var updater = that.updater;
        var settingInfo = updater.get('settingInfo'), maskInfo = updater.get('maskInfo');
        if (maskInfo.show || settingInfo.show) {
            return;
        }
        var boxWidth = updater.get('boxWidth'), boxHeight = updater.get('boxHeight'), headerHeight = updater.get('headerHeight'), rowNum = updater.get('rowNum'), hoverInfo = updater.get('hoverInfo'), boxZones = updater.get('boxZones');
        that.hoverTimeout = setTimeout(function () {
            var index = parseInt(event.params.index);
            var left = boxWidth + (index % rowNum + 1) * boxWidth;
            var top = headerHeight + (parseInt(index / rowNum) + 1) * boxHeight;
            var week = that.formatweek(parseInt(index / rowNum) + 1);
            var time = that.getDuration(index, index + 1, '%s - %s');
            var discount = boxZones[index].discount;
            hoverInfo.left = left;
            hoverInfo.top = top;
            hoverInfo.week = week;
            hoverInfo.time = time;
            hoverInfo.discount = discount;
            hoverInfo.show = true;
            updater.digest({
                hoverInfo: hoverInfo
            });
        }, 200);
    },
    'hideTip<mouseout>': function (event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }
        var that = this;
        clearTimeout(that.hoverTimeout);
        clearTimeout(that.hideTimeout);
        var updater = that.updater;
        that.hideTimeout = setTimeout(function () {
            var hoverInfo = updater.get('hoverInfo');
            hoverInfo.show = false;
            that.updater.digest({
                hoverInfo: hoverInfo
            });
        }, 200);
    },
    /**
     * 重置
     */
    'reset<click>': function (event) {
        var that = this;
        var updater = that.updater;
        var boxLength = updater.get('boxLength');
        for (var i = 0; i < boxLength; i++) {
            that.setBoxDiscount(i, 100);
        }
        that.updater.digest();
    },
    /**
     * 清空
     */
    'clear<click>': function (event) {
        var that = this;
        var updater = that.updater;
        var boxLength = updater.get('boxLength');
        for (var i = 0; i < boxLength; i++) {
            that.setBoxDiscount(i, 0);
        }
        that.updater.digest();
    },
    array2Report: function (array) {
        var that = this;
        var updater = that.updater;
        var columnNum = updater.get('columnNum'), rowNum = updater.get('rowNum'), multiple = updater.get('multiple');
        var result = [];
        for (var row = 0; row < columnNum; row++) {
            result[row] = 0;
            var rowDatas = [];
            for (var column = 0; column < rowNum; column++) {
                var index = row * rowNum + column;
                var discount = array[index];
                if (!discount) {
                    continue;
                }
                var last = rowDatas[rowDatas.length - 1];
                if (last && last.discount == discount && last.end == column) {
                    last.end = column + 1;
                }
                else {
                    rowDatas.push({
                        start: column,
                        end: column + 1,
                        discount: discount
                    });
                }
            }
            var rowStrs = rowDatas.map(function (r) {
                return that.getDuration(r.start, r.end) + ':' + r.discount;
            });
            if (rowStrs && rowStrs.length > 0) {
                result[row] = rowStrs.join(',');
            }
        }
        return result.join(';');
    },
    submit: function () {
        var that = this;
        var boxZones = that.updater.get('boxZones');
        var discounts = boxZones.map(function (zone) {
            return zone.discount;
        });
        var timeDiscount = that.array2Report(discounts);
        if (timeDiscount == Data.none) {
            return {
                ok: false
            };
        }
        else {
            return {
                ok: true,
                val: timeDiscount
            };
        }
    },
    update: function (timeDiscount) {
        var that = this;
        var timeDiscount = that.updater.get('timeDiscount'), boxLength = that.updater.get('boxLength');
        var array = that.report2Array(timeDiscount);
        for (var i = 0; i < boxLength; i++) {
            that.setBoxDiscount(i, array[i]);
        }
    },
    formatweek: function (week) {
        return '星期' + ['日', '一', '二', '三', '四', '五', '六'][week % 7];
    },
    getDuration: function (start, end, format) {
        var rowNum = this.updater.get('rowNum');
        var startStr = this.getTimeFromNum(start);
        var endStr = '';
        if (end % rowNum == 0) {
            endStr = '24:00';
        }
        else {
            endStr = this.getTimeFromNum(end);
        }
        var str = startStr + '-' + endStr;
        if (format) {
            str = format.replace('%s', startStr).replace('%s', endStr);
        }
        return str;
    },
    getTimeFromNum: function (num) {
        var that = this;
        var rowNum = that.updater.get('rowNum'), multiple = that.updater.get('multiple');
        var h = Math.floor((num % rowNum) / multiple);
        if ((h + '').length == 1) {
            h = '0' + h;
        }
        var m = ((num % rowNum) % multiple == 1) ? '30' : '00';
        return h + ':' + m;
    },
    getBoxzone: function (boxLength) {
        var boxzone = []; //可选择范围
        for (var i = 0; i < boxLength; i++) {
            boxzone.push({
                index: i,
                bg: '#ffffff',
                discount: 0
            });
        }
        ;
        return boxzone;
    },
    getColorMap: function (discount) {
        var min = 0;
        var max = 250;
        var map = {
            '[0,1)': '#ffffff',
            '[30,40)': 'rgba(97,199,242,0.05)',
            '[40,50)': 'rgba(97,199,242,0.1)',
            '[50,60)': 'rgba(97,199,242,0.15)',
            '[60,70)': 'rgba(97,199,242,0.2)',
            '[70,80)': 'rgba(97,199,242,0.25)',
            '[80,90)': 'rgba(97,199,242,0.3)',
            '[90,100)': 'rgba(97,199,242,0.35)',
            '[100,101)': 'rgba(97,199,242,0.4)',
            '[101,110)': 'rgba(77,166,255,0.15)',
            '[110,120)': 'rgba(77,166,255,0.2)',
            '[120,130)': 'rgba(77,166,255,0.25)',
            '[130,140)': 'rgba(77,166,255,0.3)',
            '[140,150)': 'rgba(77,166,255,0.35)',
            '[150,160)': 'rgba(77,166,255,0.4)',
            '[160,170)': 'rgba(77,166,255,0.45)',
            '[170,180)': 'rgba(77,166,255,0.5)',
            '[180,190)': 'rgba(77,166,255,0.55)',
            '[190,200)': 'rgba(77,166,255,0.6)',
            '[200,210)': 'rgba(134,115,230,0.3)',
            '[210,220)': 'rgba(134,115,230,0.35)',
            '[220,230)': 'rgba(134,115,230,0.4)',
            '[230,240)': 'rgba(134,115,230,0.45)',
            '[240,250)': 'rgba(134,115,230,0.5)',
            '[250,251)': 'rgba(134,115,230,0.55)'
        };
        var discountColorMap = {};
        for (var i = min; i <= max; i++) {
            discountColorMap[i] = '#ffffff';
            for (var k in map) {
                var range = k.substring(1, k.length - 1).split(',');
                var rangeMin = range[0];
                var rangeMax = range[1];
                if (i >= rangeMin && i < rangeMax) {
                    discountColorMap[i] = map[k];
                    break;
                }
            }
        }
        return discountColorMap;
    }
});

});