/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-area/index",["magix","mx-area/data"],(require,exports,module)=>{
/*Magix,Data*/

/**
 * 地域选择
 * options
 *      city 城市是否可选
 *      selected 当前选中的城市 id
 *
 * method
 * val 获取选中值
 */
var Magix = require("magix");
var Data = require("mx-area/data");
Magix.applyStyle("_zs_gallery_mx-area_index_","._zs_gallery_mx-area_index_-area-search-box,\n._zs_gallery_mx-area_index_-tab-search-box {\n  display: block;\n  width: 300px;\n  margin-bottom: 12px;\n}\n._zs_gallery_mx-area_index_-tab-search-box {\n  margin-left: 20px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province {\n  position: relative;\n  float: left;\n  width: 16%;\n  height: 46px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-name {\n  padding: 5px 0;\n  border-radius: var(--border-radius);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-name._zs_gallery_mx-area_index_-highlight {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-label {\n  float: left;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-count {\n  float: left;\n  font-size: 12px;\n  font-weight: bold;\n  font-family: \"Tahoma\";\n  line-height: 44px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-arrow {\n  position: absolute;\n  top: 0;\n  left: calc(var(--font-size) * 4 + 28px);\n  width: 20px;\n  height: 46px;\n  line-height: 46px;\n  text-align: center;\n  font-size: 22px;\n  color: #ccc;\n  cursor: pointer;\n  transition: all var(--duration);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-arrow._zs_gallery_mx-area_index_-province-expand {\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-cities {\n  position: absolute;\n  top: 46px;\n  left: -72px;\n  z-index: 99;\n  width: 240px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-cities ._zs_gallery_mx-area_index_-city {\n  float: left;\n  width: 48%;\n  height: 32px;\n  margin-right: 2%;\n  line-height: 32px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n._zs_gallery_mx-area_index_-all {\n  height: 46px;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-area {\n  position: relative;\n  padding-left: 25px;\n}\n._zs_gallery_mx-area_index_-area ._zs_gallery_mx-area_index_-area-name {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 25px;\n  height: 100%;\n  line-height: 46px;\n  font-size: 14px;\n  color: #999;\n  font-weight: bold;\n  font-family: \"Tahoma\";\n}\n._zs_gallery_mx-area_index_-area-half {\n  float: left;\n  width: 50%;\n}\n._zs_gallery_mx-area_index_-area-half ._zs_gallery_mx-area_index_-province {\n  width: 33%;\n  min-width: calc(var(--font-size) * 6 + 28px);\n}\n._zs_gallery_mx-area_index_-tabs {\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab {\n  float: left;\n  margin-bottom: -1px;\n  padding-left: 20px;\n  border-bottom: 1px solid transparent;\n  cursor: pointer;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-check,\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-text {\n  float: left;\n  height: 46px;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-text {\n  padding-left: 5px;\n  padding-right: 25px;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab:hover {\n  color: var(--color-brand);\n  transition: color var(--duration);\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab._zs_gallery_mx-area_index_-cur {\n  color: var(--color-brand);\n  border-bottom: 1px solid var(--color-brand);\n}\n");
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
} ; var $g = '', $_temp, $p = '', isTab = $$.isTab, placeholder = $$.placeholder, types = $$.types, curTab = $$.curTab, viewId = $$.viewId, showProvinceId = $$.showProvinceId; var $expr, $art, $line; try {
    $p += '<div mxv class="search-box _zs_gallery_mx-area_index_-area-search-box ';
    $line = 1;
    $art = 'if isTab';
    ;
    $expr = '<%if (isTab) {%>';
    if (isTab) {
        ;
        $p += ' _zs_gallery_mx-area_index_-tab-search-box ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><i mxs="_zs_galleryW:_" class="mc-iconfont search-icon">&#xe651;</i><input mx-keyup="' + $viewId + '@{search}()" class="input search-input" placeholder="';
    $line = 3;
    $art = '=placeholder';
    ;
    $p += ($expr = '<%=placeholder%>', $e(placeholder)) + '"/></div>';
    $line = 5;
    $art = 'if isTab';
    ;
    $expr = '<%if (isTab) {%>';
    if (isTab) {
        ;
        $p += '<div mxv mxa="_zs_galleryW:_" class="_zs_gallery_mx-area_index_-tabs clearfix">';
        $line = 7;
        $art = 'each types as type typeIndex';
        ;
        $expr = '<%for (var typeIndex = 0, $art_cqcnchh$art_c = types.length; typeIndex < $art_cqcnchh$art_c; typeIndex++) {        var type = types[typeIndex]%>';
        for (var typeIndex = 0, $art_cqcnchh$art_c = types.length; typeIndex < $art_cqcnchh$art_c; typeIndex++) {
            var type = types[typeIndex];
            $p += '<div mxv class="_zs_gallery_mx-area_index_-tab ';
            $line = 8;
            $art = 'if (type.id == curTab)';
            ;
            $expr = '<%if (type.id == curTab) {%>';
            if (type.id == curTab) {
                ;
                $p += ' _zs_gallery_mx-area_index_-cur ';
                $line = 8;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' clearfix"><div mxv mxa="_zs_galleryW:a" class="_zs_gallery_mx-area_index_-tab-check"><input type="checkbox" mx-change="' + $viewId + '@{changeAll}({typeIndex:';
            $line = 11;
            $art = '=typeIndex';
            ;
            $p += ($expr = '<%=typeIndex%>', $e(typeIndex)) + '})" ';
            $line = 12;
            $art = 'if type.checked';
            ;
            $expr = '<%if (type.checked) {%>';
            if (type.checked) {
                ;
                $p += ' checked="true" ';
                $line = 12;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '/></div><div class="_zs_gallery_mx-area_index_-tab-text" mx-click="' + $viewId + '@{changeTab}({curTab:\'';
            $line = 14;
            $art = '=type.id';
            ;
            $p += ($expr = '<%=$eq(type.id)%>', $e($eq(type.id))) + '\'})">';
            $line = 15;
            $art = '=type.name';
            ;
            $p += ($expr = '<%=type.name%>', $e(type.name)) + '</div></div>';
            $line = 18;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 20;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 21;
    $art = 'each types as type typeIndex';
    ;
    $expr = '<%for (var typeIndex = 0, $art_chrlaa$art_c = types.length; typeIndex < $art_chrlaa$art_c; typeIndex++) {    var type = types[typeIndex]%>';
    for (var typeIndex = 0, $art_chrlaa$art_c = types.length; typeIndex < $art_chrlaa$art_c; typeIndex++) {
        var type = types[typeIndex];
        $p += '<div mxv class="';
        $line = 22;
        $art = 'if isTab';
        ;
        $expr = '<%if (isTab) {%>';
        if (isTab) {
            ;
            $p += ' pl20 ';
            $line = 22;
            $art = 'if (type.id != curTab)';
            ;
            $expr = '<%if (type.id != curTab) {%>';
            if (type.id != curTab) {
                ;
                $p += ' hide ';
                $line = 22;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 22;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' mb15 ';
            $line = 22;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '">';
        $line = 23;
        $art = 'if !isTab';
        ;
        $expr = '<%if (!isTab) {%>';
        if (!isTab) {
            ;
            $p += '<div mxv mxa="_zs_galleryW:b" class="_zs_gallery_mx-area_index_-all"><label mxv for="';
            $line = 25;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
            $line = 25;
            $art = '=type.id';
            ;
            $p += ($expr = '<%=type.id%>', $e(type.id)) + '_all"><input mx-change="' + $viewId + '@{changeAll}({typeIndex:';
            $line = 26;
            $art = '=typeIndex';
            ;
            $p += ($expr = '<%=typeIndex%>', $e(typeIndex)) + '})" id="';
            $line = 26;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
            $line = 26;
            $art = '=type.id';
            ;
            $p += ($expr = '<%=type.id%>', $e(type.id)) + '_all" type="checkbox" ';
            $line = 26;
            $art = 'if type.checked';
            ;
            $expr = '<%if (type.checked) {%>';
            if (type.checked) {
                ;
                $p += ' checked="true" ';
                $line = 26;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '/><span mxa="_zs_galleryW:c" class="ml5">全选 - ';
            $line = 27;
            $art = '=type.name';
            ;
            $p += ($expr = '<%=type.name%>', $e(type.name)) + '</span></label></div>';
            $line = 30;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxv mxa="_zs_galleryW:d" class="clearfix">';
        $line = 32;
        $art = 'each type.groups as group groupIndex';
        ;
        $expr = '<%for (var groupIndex = 0, $art_objryteezssnd$art_obj = type.groups, $art_cruslzgcylb$art_c = $art_objryteezssnd$art_obj.length; groupIndex < $art_cruslzgcylb$art_c; groupIndex++) {        var group = $art_objryteezssnd$art_obj[groupIndex]%>';
        for (var groupIndex = 0, $art_objryteezssnd$art_obj = type.groups, $art_cruslzgcylb$art_c = $art_objryteezssnd$art_obj.length; groupIndex < $art_cruslzgcylb$art_c; groupIndex++) {
            var group = $art_objryteezssnd$art_obj[groupIndex];
            $p += '<div mxv ';
            $line = 33;
            $art = 'if type.half';
            ;
            $expr = '<%if (type.half) {%>';
            if (type.half) {
                ;
                $p += ' class="_zs_gallery_mx-area_index_-area-half" ';
                $line = 33;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>';
            $line = 34;
            $art = 'each group as area areaIndex';
            ;
            $expr = '<%for (var areaIndex = 0, $art_coichxc$art_c = group.length; areaIndex < $art_coichxc$art_c; areaIndex++) {            var area = group[areaIndex]%>';
            for (var areaIndex = 0, $art_coichxc$art_c = group.length; areaIndex < $art_coichxc$art_c; areaIndex++) {
                var area = group[areaIndex];
                $p += ' ';
                $line = 35;
                $art = 'if area.name';
                ;
                $expr = '<%if (area.name) {%>';
                if (area.name) {
                    ;
                    $p += '<div mxv mxa="_zs_galleryW:e" class="_zs_gallery_mx-area_index_-area"><div mxa="_zs_galleryW:f" class="_zs_gallery_mx-area_index_-area-name">';
                    $line = 37;
                    $art = '=area.name';
                    ;
                    $p += ($expr = '<%=area.name%>', $e(area.name)) + '</div>';
                    $line = 38;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '<div mxv mxa="_zs_galleryW:g" class="_zs_gallery_mx-area_index_-provinces clearfix">';
                $line = 40;
                $art = 'each area.provinces as province';
                ;
                $expr = '<%for (var $art_iealor$art_i = 0, $art_objxqocgi$art_obj = area.provinces, $art_cmanvnehoa$art_c = $art_objxqocgi$art_obj.length; $art_iealor$art_i < $art_cmanvnehoa$art_c; $art_iealor$art_i++) {                var province = $art_objxqocgi$art_obj[$art_iealor$art_i]%>';
                for (var $art_iealor$art_i = 0, $art_objxqocgi$art_obj = area.provinces, $art_cmanvnehoa$art_c = $art_objxqocgi$art_obj.length; $art_iealor$art_i < $art_cmanvnehoa$art_c; $art_iealor$art_i++) {
                    var province = $art_objxqocgi$art_obj[$art_iealor$art_i];
                    $p += '<div mxv class="_zs_gallery_mx-area_index_-province clearfix" id="';
                    $line = 41;
                    $art = '=viewId';
                    ;
                    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_province_wrapper_';
                    $line = 41;
                    $art = '=province.id';
                    ;
                    $p += ($expr = '<%=province.id%>', $e(province.id)) + '"><label mxv class="_zs_gallery_mx-area_index_-province-label" for="';
                    $line = 42;
                    $art = '=viewId';
                    ;
                    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_province_';
                    $line = 42;
                    $art = '=province.id';
                    ;
                    $p += ($expr = '<%=province.id%>', $e(province.id)) + '"><input mx-change="' + $viewId + '@{changeOne}({typeIndex:';
                    $line = 43;
                    $art = '=typeIndex';
                    ;
                    $p += ($expr = '<%=typeIndex%>', $e(typeIndex)) + ',province:';
                    $line = 43;
                    $art = '=province.id';
                    ;
                    $p += ($expr = '<%=province.id%>', $e(province.id)) + '})" type="checkbox" id="';
                    $line = 43;
                    $art = '=viewId';
                    ;
                    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_province_';
                    $line = 43;
                    $art = '=province.id';
                    ;
                    $p += ($expr = '<%=province.id%>', $e(province.id)) + '" ';
                    $line = 43;
                    $art = 'if province.checked';
                    ;
                    $expr = '<%if (province.checked) {%>';
                    if (province.checked) {
                        ;
                        $p += ' checked="true" ';
                        $line = 43;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '/><span class="_zs_gallery_mx-area_index_-name ';
                    $line = 44;
                    $art = 'if province.highlight';
                    ;
                    $expr = '<%if (province.highlight) {%>';
                    if (province.highlight) {
                        ;
                        $p += ' _zs_gallery_mx-area_index_-highlight ';
                        $line = 44;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '">';
                    $line = 44;
                    $art = '=province.name';
                    ;
                    $p += ($expr = '<%=province.name%>', $e(province.name)) + '</span></label>';
                    $line = 46;
                    $art = 'if province.hasCity && (province.count > 0)';
                    ;
                    $expr = '<%if (province.hasCity && (province.count > 0)) {%>';
                    if (province.hasCity && (province.count > 0)) {
                        ;
                        $p += '<span mxa="_zs_galleryW:h" class="_zs_gallery_mx-area_index_-province-count">(';
                        $line = 47;
                        $art = '=province.count';
                        ;
                        $p += ($expr = '<%=province.count%>', $e(province.count)) + ')</span>';
                        $line = 48;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' ';
                    $line = 49;
                    $art = 'if province.hasCity';
                    ;
                    $expr = '<%if (province.hasCity) {%>';
                    if (province.hasCity) {
                        ;
                        $p += '<i class="mc-iconfont _zs_gallery_mx-area_index_-province-arrow ';
                        $line = 50;
                        $art = 'if (province.hasCity && (province.id == showProvinceId))';
                        ;
                        $expr = '<%if (province.hasCity && (province.id == showProvinceId)) {%>';
                        if (province.hasCity && (province.id == showProvinceId)) {
                            ;
                            $p += ' _zs_gallery_mx-area_index_-province-expand ';
                            $line = 50;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += '" mx-click="' + $viewId + '@{toggleCity}({province:';
                        $line = 50;
                        $art = '=province.id';
                        ;
                        $p += ($expr = '<%=province.id%>', $e(province.id)) + '})">&#xe692;</i>';
                        $line = 51;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '<div mxv style="display: ';
                    $line = 52;
                    $art = '=(province.hasCity && (province.id == showProvinceId)) ? \'block\' : \'none\'';
                    ;
                    $p += ($expr = '<%=(province.hasCity && (province.id == showProvinceId)) ? \'block\' : \'none\'%>', $e((province.hasCity && (province.id == showProvinceId)) ? 'block' : 'none')) + ';" class="_zs_gallery_mx-area_index_-cities mx-shadow clearfix">';
                    $line = 53;
                    $art = 'each province.cities as city';
                    ;
                    $expr = '<%for (var $art_ivvhkzddo$art_i = 0, $art_objrweit$art_obj = province.cities, $art_cizettpsdfv$art_c = $art_objrweit$art_obj.length; $art_ivvhkzddo$art_i < $art_cizettpsdfv$art_c; $art_ivvhkzddo$art_i++) {                    var city = $art_objrweit$art_obj[$art_ivvhkzddo$art_i]%>';
                    for (var $art_ivvhkzddo$art_i = 0, $art_objrweit$art_obj = province.cities, $art_cizettpsdfv$art_c = $art_objrweit$art_obj.length; $art_ivvhkzddo$art_i < $art_cizettpsdfv$art_c; $art_ivvhkzddo$art_i++) {
                        var city = $art_objrweit$art_obj[$art_ivvhkzddo$art_i];
                        $p += '<label mxv for="';
                        $line = 54;
                        $art = '=viewId';
                        ;
                        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_city_';
                        $line = 54;
                        $art = '=city.id';
                        ;
                        $p += ($expr = '<%=city.id%>', $e(city.id)) + '" class="_zs_gallery_mx-area_index_-city"><input mx-change="' + $viewId + '@{changeOne}({typeIndex:';
                        $line = 55;
                        $art = '=typeIndex';
                        ;
                        $p += ($expr = '<%=typeIndex%>', $e(typeIndex)) + ',province:';
                        $line = 55;
                        $art = '=province.id';
                        ;
                        $p += ($expr = '<%=province.id%>', $e(province.id)) + ',city:';
                        $line = 55;
                        $art = '=city.id';
                        ;
                        $p += ($expr = '<%=city.id%>', $e(city.id)) + '})" id="';
                        $line = 55;
                        $art = '=viewId';
                        ;
                        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_city_';
                        $line = 55;
                        $art = '=city.id';
                        ;
                        $p += ($expr = '<%=city.id%>', $e(city.id)) + '" type="checkbox" ';
                        $line = 55;
                        $art = 'if city.checked';
                        ;
                        $expr = '<%if (city.checked) {%>';
                        if (city.checked) {
                            ;
                            $p += ' checked="true" ';
                            $line = 55;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += '/><span class="_zs_gallery_mx-area_index_-name ';
                        $line = 56;
                        $art = 'if city.highlight';
                        ;
                        $expr = '<%if (city.highlight) {%>';
                        if (city.highlight) {
                            ;
                            $p += ' _zs_gallery_mx-area_index_-highlight ';
                            $line = 56;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += '">';
                        $line = 56;
                        $art = '=city.name';
                        ;
                        $p += ($expr = '<%=city.name%>', $e(city.name)) + '</span></label>';
                        $line = 58;
                        $art = '/each';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '</div></div>';
                    $line = 61;
                    $art = '/each';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 63;
                $art = 'if area.name';
                ;
                $expr = '<%if (area.name) {%>';
                if (area.name) {
                    ;
                    $p += '</div>';
                    $line = 65;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 66;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 68;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 71;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-area/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        that.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var selected = (extra.selected || []).map(function (id) {
            return +id;
        });
        var cityVisible = (/^true$/i).test(extra.city);
        // tab切换展示
        var isTab = (extra.type == 'tab');
        var data = $.extend(true, [], (extra.data || [])), types = [];
        if (data.length == 0) {
            var commonAreas = $.extend(true, [], Data.commonAreas), commonAllChecked_1 = true, lastProvinces = $.extend(true, [], Data.lastProvinces), lastAllChecked_1 = true;
            commonAreas.forEach(function (area) {
                area.provinces.forEach(function (province) {
                    that['@{init.province}'](province, selected, cityVisible);
                    commonAllChecked_1 = commonAllChecked_1 && province.checked;
                });
            });
            lastProvinces.forEach(function (province) {
                that['@{init.province}'](province, selected, cityVisible);
                lastAllChecked_1 = lastAllChecked_1 && province.checked;
            });
            types = [{
                    name: '常用地域',
                    id: 'more',
                    half: true,
                    checked: commonAllChecked_1,
                    groups: [commonAreas.splice(0, 7), commonAreas]
                }, {
                    name: '非常用地域',
                    id: 'less',
                    checked: lastAllChecked_1,
                    groups: [
                        [{
                                provinces: lastProvinces
                            }]
                    ]
                }];
        }
        else {
            // 自定义数据
            types = data.map(function (item, index) {
                var allChecked = true;
                var provinces = item.provinces;
                provinces.forEach(function (province) {
                    that['@{init.province}'](province, selected, cityVisible);
                    allChecked = allChecked && province.checked;
                });
                return {
                    name: item.name,
                    id: index,
                    checked: allChecked,
                    groups: [
                        [{
                                provinces: item.provinces
                            }]
                    ]
                };
            });
        }
        that.updater.set({
            viewId: that.id,
            showProvinceId: -1,
            cityVisible: cityVisible,
            placeholder: '省份' + (cityVisible ? '/城市' : ''),
            types: types,
            selected: selected,
            isTab: isTab,
            curTab: types[0].id
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest({});
    },
    '@{toggleCity}<click>': function (event) {
        event.preventDefault();
        var that = this;
        var province = event.params.province, oldProvince = that.updater.get('showProvinceId');
        if (province == oldProvince) {
            that.updater.digest({
                showProvinceId: -1
            });
        }
        else {
            that.updater.digest({
                showProvinceId: province
            });
        }
    },
    '@{changeTab}<click>': function (event) {
        this.updater.digest({
            curTab: event.params.curTab
        });
    },
    '@{changeAll}<change>': function (event) {
        var that = this;
        var target = event.target;
        var checked = target.checked;
        var types = that.updater.get('types');
        var type = types[event.params.typeIndex];
        type.checked = checked;
        type.groups.forEach(function (group) {
            group.forEach(function (area) {
                area.provinces.forEach(function (province) {
                    var cities = province.cities;
                    province.checked = checked;
                    cities.forEach(function (city) {
                        city.checked = checked;
                    });
                    province.count = checked ? cities.length : 0;
                });
            });
        });
        var d = {
            types: types
        };
        if (that.updater.get('isTab')) {
            d.curTab = type.id;
        }
        that.updater.digest(d);
    },
    '@{changeOne}<change>': function (event) {
        var that = this;
        var target = event.target;
        var checked = target.checked;
        var eventParams = event.params;
        var typeIndex = eventParams.typeIndex, provinceId = eventParams.province, cityId = eventParams.city;
        var types = that.updater.get('types');
        var allChecked = true;
        types[typeIndex].groups.forEach(function (group) {
            group.forEach(function (area) {
                area.provinces.forEach(function (province) {
                    if (province.id == provinceId) {
                        var cities = province.cities;
                        if (cityId) {
                            // 选择城市
                            var count_1 = 0;
                            cities.forEach(function (city) {
                                if (city.id == cityId) {
                                    city.checked = checked;
                                }
                                if (city.checked) {
                                    count_1++;
                                }
                            });
                            province.checked = (count_1 > 0) && (count_1 == cities.length);
                            province.count = count_1;
                        }
                        else {
                            // 选择省
                            province.checked = checked;
                            province.count = checked ? cities.length : 0;
                            cities.forEach(function (city) {
                                city.checked = checked;
                            });
                        }
                    }
                    allChecked = allChecked && province.checked;
                });
            });
        });
        types[typeIndex].checked = allChecked;
        that.updater.digest({
            types: types
        });
    },
    '@{init.province}': function (province, selected, cityVisible) {
        // province 省的id被选中了，则其全部城市id不传
        // for example 1 = (2 + 3 + ... + 18)
        province.checked = ($.inArray(+province.id, selected) > -1);
        var count = 0;
        province.cities = province.cities || [];
        province.cities.forEach(function (city) {
            if (province.checked) {
                city.checked = true;
            }
            else {
                city.checked = ($.inArray(+city.id, selected) > -1);
            }
            if (city.checked) {
                count++;
            }
        });
        province.count = count;
        province.hasCity = (province.cities.length > 0) && cityVisible;
    },
    '@{search}<keyup>': function (event) {
        if (event.keyCode !== 13) {
            return;
        }
        var that = this;
        var searchName = event.target.value;
        var updater = that.updater;
        var types = updater.get('types'), cityVisible = updater.get('cityVisible');
        var provinceId, isCity = false;
        var highlightTypeId = updater.get('curTab');
        types.forEach(function (type) {
            var typeHighlight = false;
            type.groups.forEach(function (group) {
                group.forEach(function (area) {
                    area.provinces.forEach(function (province) {
                        province.highlight = false;
                        if (province.name == searchName) {
                            provinceId = province.id;
                            province.highlight = true;
                            highlightTypeId = type.id;
                        }
                        if (cityVisible) {
                            var cities = province.cities;
                            cities.forEach(function (city) {
                                city.highlight = false;
                                if (city.name == searchName) {
                                    provinceId = province.id;
                                    isCity = true;
                                    city.highlight = true;
                                    highlightTypeId = type.id;
                                }
                            });
                        }
                    });
                });
            });
        });
        updater.digest({
            curTab: highlightTypeId,
            types: types,
            showProvinceId: isCity ? provinceId : -1
        });
    },
    '$doc<click>': function (event) {
        var that = this;
        var showProvinceId = that.updater.get('showProvinceId');
        if (showProvinceId > 0) {
            var showNode = $('#' + that.id + '_province_wrapper_' + showProvinceId);
            var labelNode = showNode.find('._zs_gallery_mx-area_index_-province-label'), expandNode = showNode.find('._zs_gallery_mx-area_index_-province-arrow'), citiesNode = showNode.find('._zs_gallery_mx-area_index_-cities');
            var target = event.target;
            if (!Magix.inside(target, labelNode[0]) &&
                !Magix.inside(target, expandNode[0]) &&
                !Magix.inside(target, citiesNode[0])) {
                that.updater.digest({
                    showProvinceId: -1
                });
            }
        }
    },
    val: function (full) {
        var that = this;
        var _a = that.updater.get(), types = _a.types, cityVisible = _a.cityVisible;
        var selected = [];
        var all = [];
        types.forEach(function (type) {
            type.groups.forEach(function (group) {
                group.forEach(function (area) {
                    area.provinces.forEach(function (province) {
                        if (province.checked) {
                            selected.push(province.id);
                            all.push(province);
                        }
                        else {
                            if (cityVisible) {
                                province.cities.forEach(function (city) {
                                    if (city.checked) {
                                        selected.push(city.id);
                                        all.push(city);
                                    }
                                });
                            }
                        }
                    });
                });
            });
        });
        if (full) {
            return $.extend(true, [], all);
        }
        else {
            return selected;
        }
    },
    getSelected: function () {
        return this.val(true);
    }
});

});