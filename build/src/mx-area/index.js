/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_gallerys","._zs_gallerybA{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerybB,._zs_gallerybC{display:block;width:300px;margin-bottom:12px}._zs_gallerybC{margin-left:20px}._zs_gallerybD ._zs_gallerybE{position:relative;float:left;width:16%;height:46px}._zs_gallerybD ._zs_gallerybE ._zs_gallerybF{padding:5px;border-radius:4px;transition:all .25s}._zs_gallerybD ._zs_gallerybE ._zs_gallerybF._zs_gallerybG{background-color:#d8e3ff}._zs_gallerybD ._zs_gallerybE ._zs_gallerybH{float:left;line-height:46px}._zs_gallerybD ._zs_gallerybE ._zs_gallerybI{float:left;font-weight:700;font-family:Tahoma;line-height:44px}._zs_gallerybD ._zs_gallerybE ._zs_gallerybJ{position:absolute;top:15px;left:88px;width:20px;height:20px;line-height:20px;font-size:20px;color:#ccc;cursor:pointer}._zs_gallerybD ._zs_gallerybE ._zs_gallerybK{position:absolute;top:46px;left:-72px;z-index:3;width:240px;padding:10px;border-radius:4px;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerybD ._zs_gallerybE ._zs_gallerybK ._zs_gallerybL{float:left;width:48%;height:32px;margin-right:2%;line-height:32px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}._zs_gallerybM{height:46px;line-height:46px}._zs_gallerybN{position:relative;padding-left:25px}._zs_gallerybN ._zs_gallerybO{position:absolute;top:0;left:0;width:25px;height:100%;line-height:46px;font-size:14px;color:#999;font-weight:700;font-family:Tahoma}._zs_gallerybP{float:left;width:50%}._zs_gallerybP ._zs_gallerybE{width:33%}._zs_gallerybQ{border-bottom:1px solid #e6e6e6}._zs_gallerybQ ._zs_gallerybR{float:left;margin-bottom:-1px;padding-left:20px;border-bottom:1px solid transparent;cursor:pointer}._zs_gallerybQ ._zs_gallerybR ._zs_gallerybS,._zs_gallerybQ ._zs_gallerybR ._zs_gallerybT{float:left;height:46px;line-height:46px}._zs_gallerybQ ._zs_gallerybR ._zs_gallerybT{padding-left:5px;padding-right:25px}._zs_gallerybQ ._zs_gallerybR:hover{color:#4d7fff;transition:color .25s}._zs_gallerybQ ._zs_gallerybR._zs_gallerybU{color:#4d7fff;border-bottom:1px solid #4d7fff}");
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
} ; var $g = '', $_temp, $p = '', isTab = $$.isTab, placeholder = $$.placeholder, types = $$.types, curTab = $$.curTab, viewId = $$.viewId, showProvinceId = $$.showProvinceId; $p += '<div mxv class="search-box _zs_gallerybB '; if (isTab) {
    ;
    $p += ' _zs_gallerybC ';
} ; $p += '"><i mxs="_zs_galleryV:_" class="mc-iconfont search-icon">&#xe651;</i><input mx-keyup="' + $viewId + '__e()" class="input search-input" placeholder="' + $e(placeholder) + '"/></div>'; if (isTab) {
    ;
    $p += '<div mxv mxa="_zs_galleryV:_" class="_zs_gallerybQ clearfix">';
    for (var typeIndex = 0, $art_cccftze$art_c = types.length; typeIndex < $art_cccftze$art_c; typeIndex++) {
        var type = types[typeIndex];
        $p += '<div mxv class="_zs_gallerybR ';
        if (type.id == curTab) {
            ;
            $p += ' _zs_gallerybU ';
        }
        ;
        $p += ' clearfix"><div mxv mxa="_zs_galleryV:a" class="_zs_gallerybS"><input type="checkbox" mx-change="' + $viewId + '__c({typeIndex:' + $e(typeIndex) + '})" ';
        if (type.checked) {
            ;
            $p += ' checked="true" ';
        }
        ;
        $p += '/></div><div class="_zs_gallerybT" mx-click="' + $viewId + '__b({curTab:\'' + $e($eq(type.id)) + '\'})">' + $e(type.name) + '</div></div>';
    }
    ;
    $p += '</div>';
} ; $p += ' '; for (var typeIndex = 0, $art_ctuiwtiw$art_c = types.length; typeIndex < $art_ctuiwtiw$art_c; typeIndex++) {
    var type = types[typeIndex];
    $p += '<div mxv class="';
    if (isTab) {
        ;
        $p += ' pl20 ';
        if (type.id != curTab) {
            ;
            $p += ' hide ';
        }
        ;
        $p += ' ';
    }
    else {
        ;
        $p += ' mb15 ';
    }
    ;
    $p += '">';
    if (!isTab) {
        ;
        $p += '<div mxv mxa="_zs_galleryV:b" class="_zs_gallerybM"><label mxv for="' + $e(viewId) + '_' + $e(type.id) + '_all"><input mx-change="' + $viewId + '__c({typeIndex:' + $e(typeIndex) + '})" id="' + $e(viewId) + '_' + $e(type.id) + '_all" type="checkbox" ';
        if (type.checked) {
            ;
            $p += ' checked="true" ';
        }
        ;
        $p += '/><span mxa="_zs_galleryV:c" class="ml5">全选 - ' + $e(type.name) + '</span></label></div>';
    }
    ;
    $p += '<div mxv mxa="_zs_galleryV:d" class="clearfix">';
    for (var groupIndex = 0, $art_objbxtkkkd$art_obj = type.groups, $art_cdhtonv$art_c = $art_objbxtkkkd$art_obj.length; groupIndex < $art_cdhtonv$art_c; groupIndex++) {
        var group = $art_objbxtkkkd$art_obj[groupIndex];
        $p += '<div mxv ';
        if (type.half) {
            ;
            $p += ' class="_zs_gallerybP" ';
        }
        ;
        $p += '>';
        for (var areaIndex = 0, $art_cgobjzjxd$art_c = group.length; areaIndex < $art_cgobjzjxd$art_c; areaIndex++) {
            var area = group[areaIndex];
            $p += ' ';
            if (area.name) {
                ;
                $p += '<div mxv mxa="_zs_galleryV:e" class="_zs_gallerybN"><div mxa="_zs_galleryV:f" class="_zs_gallerybO">' + $e(area.name) + '</div>';
            }
            ;
            $p += '<div mxv mxa="_zs_galleryV:g" class="_zs_gallerybD clearfix">';
            for (var $art_ibafbsqyhwe$art_i = 0, $art_objncjlzttc$art_obj = area.provinces, $art_clnutxo$art_c = $art_objncjlzttc$art_obj.length; $art_ibafbsqyhwe$art_i < $art_clnutxo$art_c; $art_ibafbsqyhwe$art_i++) {
                var province = $art_objncjlzttc$art_obj[$art_ibafbsqyhwe$art_i];
                $p += '<div mxv class="_zs_gallerybE clearfix" id="' + $e(viewId) + '_province_wrapper_' + $e(province.id) + '"><label mxv class="_zs_gallerybH" for="' + $e(viewId) + '_province_' + $e(province.id) + '"><input mx-change="' + $viewId + '__d({typeIndex:' + $e(typeIndex) + ',province:' + $e(province.id) + '})" type="checkbox" id="' + $e(viewId) + '_province_' + $e(province.id) + '" ';
                if (province.checked) {
                    ;
                    $p += ' checked="true" ';
                }
                ;
                $p += '/><span class="_zs_gallerybF ';
                if (province.highlight) {
                    ;
                    $p += ' _zs_gallerybG ';
                }
                ;
                $p += '">' + $e(province.name) + '</span></label>';
                if (province.hasCity && (province.count > 0)) {
                    ;
                    $p += '<span mxa="_zs_galleryV:h" class="_zs_gallerybI">(' + $e(province.count) + ')</span>';
                }
                ;
                $p += ' ';
                if (province.hasCity) {
                    ;
                    $p += '<i class="mc-iconfont _zs_gallerybJ" mx-click="' + $viewId + '__a({province:' + $e(province.id) + '})">&#xe692;</i>';
                }
                ;
                $p += '<div mxv style="display: ' + $e((province.hasCity && (province.id == showProvinceId)) ? 'block' : 'none') + ';" class="_zs_gallerybK clearfix">';
                for (var $art_iglpnotn$art_i = 0, $art_objcsphvjvofhu$art_obj = province.cities, $art_cgwamyjh$art_c = $art_objcsphvjvofhu$art_obj.length; $art_iglpnotn$art_i < $art_cgwamyjh$art_c; $art_iglpnotn$art_i++) {
                    var city = $art_objcsphvjvofhu$art_obj[$art_iglpnotn$art_i];
                    $p += '<label mxv for="' + $e(viewId) + '_city_' + $e(city.id) + '" class="_zs_gallerybL"><input mx-change="' + $viewId + '__d({typeIndex:' + $e(typeIndex) + ',province:' + $e(province.id) + ',city:' + $e(city.id) + '})" id="' + $e(viewId) + '_city_' + $e(city.id) + '" type="checkbox" ';
                    if (city.checked) {
                        ;
                        $p += ' checked="true" ';
                    }
                    ;
                    $p += '/><span class="_zs_gallerybF ';
                    if (city.highlight) {
                        ;
                        $p += ' _zs_gallerybG ';
                    }
                    ;
                    $p += '">' + $e(city.name) + '</span></label>';
                }
                ;
                $p += '</div></div>';
            }
            ;
            $p += '</div>';
            if (area.name) {
                ;
                $p += '</div>';
            }
            ;
            $p += ' ';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += '</div></div>';
} ; return $p; },
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
                    that['___'](province, selected, cityVisible);
                    commonAllChecked_1 = commonAllChecked_1 && province.checked;
                });
            });
            lastProvinces.forEach(function (province) {
                that['___'](province, selected, cityVisible);
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
                    that['___'](province, selected, cityVisible);
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
    '__a<click>': function (event) {
        event.preventDefault();
        var that = this;
        var province = event.params.province;
        that.updater.set({
            showProvinceId: province
        }).digest();
    },
    '__b<click>': function (event) {
        this.updater.digest({
            curTab: event.params.curTab
        });
    },
    '__c<change>': function (event) {
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
    '__d<change>': function (event) {
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
        that.updater.set({
            types: types
        }).digest();
    },
    '___': function (province, selected, cityVisible) {
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
    '__e<keyup>': function (event) {
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
            var labelNode = showNode.find('._zs_gallerybH'), expandNode = showNode.find('._zs_gallerybJ'), citiesNode = showNode.find('._zs_gallerybK');
            var target = event.target;
            if (!Magix.inside(target, labelNode[0]) &&
                !Magix.inside(target, expandNode[0]) &&
                !Magix.inside(target, citiesNode[0])) {
                that.updater.set({
                    showProvinceId: -1
                }).digest();
            }
        }
    },
    val: function (full) {
        var that = this;
        var types = that.updater.get('types'), cityVisible = that.updater.get('cityVisible');
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