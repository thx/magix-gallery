/**
 * 地域选择
 * options
 *      city 城市是否可选
 *      selected 当前选中的城市 id
 *
 * method
 * val 获取选中值
 */
let Magix = require('magix');
let Data = require('@./data');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;

        //初始化时保存一份当前数据的快照
        that.updater.snapshot();

        that.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        let selected = (extra.selected || []).map(id => {
            return +id;
        });
        let cityVisible = (/^true$/i).test(extra.city);
        // tab切换展示
        let isTab = (extra.type == 'tab');

        var data = $.extend(true, [], (extra.data || [])),
            types = [];
        if (data.length == 0) {
            let commonAreas = $.extend(true, [], Data.commonAreas),
                commonAllChecked = true,
                lastProvinces = $.extend(true, [], Data.lastProvinces),
                lastAllChecked = true;
            commonAreas.forEach(area => {
                area.provinces.forEach(province => {
                    that['@{init.province}'](province, selected, cityVisible);
                    commonAllChecked = commonAllChecked && province.checked;
                })
            })

            lastProvinces.forEach(province => {
                that['@{init.province}'](province, selected, cityVisible);
                lastAllChecked = lastAllChecked && province.checked;
            })

            types = [{
                name: '常用地域',
                id: 'more',
                half: true,
                checked: commonAllChecked,
                groups: [commonAreas.splice(0, 7), commonAreas]
            }, {
                name: '非常用地域',
                id: 'less',
                checked: lastAllChecked,
                groups: [
                    [{
                        provinces: lastProvinces
                    }]
                ]
            }]
        } else {
            // 自定义数据
            types = data.map((item, index) => {
                let allChecked = true;
                let provinces = item.provinces;
                provinces.forEach(province => {
                    that['@{init.province}'](province, selected, cityVisible);
                    allChecked = allChecked && province.checked;
                })

                return {
                    name: item.name,
                    id: index,
                    checked: allChecked,
                    groups: [
                        [{
                            provinces: item.provinces
                        }]
                    ]
                }
            })
        }

        that.updater.set({
            viewId: that.id,
            showProvinceId: -1,
            cityVisible: cityVisible,
            placeholder: '省份' + (cityVisible ? '/城市' : ''),
            types,
            selected,
            isTab,
            curTab: types[0].id
        })

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
    render() {
        this.updater.digest({});
    },
    '@{toggleCity}<click>'(event) {
        event.preventDefault();
        let that = this;
        let province = event.params.province,
            oldProvince = that.updater.get('showProvinceId');
        if(province == oldProvince){
            that.updater.digest({
                showProvinceId: -1
            });
        }else{
            that.updater.digest({
                showProvinceId: province
            });
        }
    },
    '@{changeTab}<click>'(event){
        this.updater.digest({
            curTab: event.params.curTab
        })
    },
    '@{changeAll}<change>'(event) {
        let that = this;
        let target = event.target;
        let checked = target.checked;

        let types = that.updater.get('types');
        let type = types[event.params.typeIndex];
        type.checked = checked;
        type.groups.forEach(group => {
            group.forEach(area => {
                area.provinces.forEach(province => {
                    let cities = province.cities;
                    province.checked = checked;
                    cities.forEach(city => {
                        city.checked = checked;
                    })

                    province.count = checked ? cities.length : 0;
                })
            })
        })

        var d = {
            types: types
        }
        if(that.updater.get('isTab')){
            d.curTab = type.id;
        }
        that.updater.digest(d);
    },
    '@{changeOne}<change>'(event) {
        let that = this;
        let target = event.target;
        let checked = target.checked;

        let eventParams = event.params;
        let typeIndex = eventParams.typeIndex,
            provinceId = eventParams.province,
            cityId = eventParams.city;
        let types = that.updater.get('types');

        let allChecked = true;
        types[typeIndex].groups.forEach(group => {
            group.forEach(area => {
                area.provinces.forEach(province => {
                    if (province.id == provinceId) {
                        let cities = province.cities;

                        if (cityId) {
                            // 选择城市
                            let count = 0;
                            cities.forEach(city => {
                                if (city.id == cityId) {
                                    city.checked = checked;
                                }
                                if (city.checked) {
                                    count++;
                                }
                            })
                            province.checked = (count > 0) && (count == cities.length);
                            province.count = count;
                        } else {
                            // 选择省
                            province.checked = checked;
                            province.count = checked ? cities.length : 0;
                            cities.forEach(city => {
                                city.checked = checked;
                            })
                        }
                    }
                    allChecked = allChecked && province.checked;
                })
            })
        })
        types[typeIndex].checked = allChecked;
        that.updater.digest({
            types: types
        });
    },
    '@{init.province}'(province, selected, cityVisible) {
        // province 省的id被选中了，则其全部城市id不传
        // for example 1 = (2 + 3 + ... + 18)
        province.checked = ($.inArray(+province.id, selected) > -1);

        let count = 0;
        province.cities = province.cities || [];
        province.cities.forEach(city => {
            if (province.checked) {
                city.checked = true;
            } else {
                city.checked = ($.inArray(+city.id, selected) > -1);
            }
            if (city.checked) {
                count++;
            }
        })

        province.count = count;

        province.hasCity = (province.cities.length > 0) && cityVisible;
    },

    '@{search}<keyup>'(event) {
        if (event.keyCode !== 13) {
            return;
        }
        let that = this;
        let searchName = event.target.value;

        let updater = that.updater;
        let types = updater.get('types'),
            cityVisible = updater.get('cityVisible');

        let provinceId, isCity = false;
        let highlightTypeId = updater.get('curTab');
        types.forEach(type => {
            let typeHighlight = false;
            type.groups.forEach(group => {
                group.forEach(area => {
                    area.provinces.forEach(province => {
                        province.highlight = false;
                        if (province.name == searchName) {
                            provinceId = province.id;
                            province.highlight = true;
                            highlightTypeId = type.id;
                        }
                        if (cityVisible) {
                            let cities = province.cities;
                            cities.forEach(city => {
                                city.highlight = false;
                                if (city.name == searchName) {
                                    provinceId = province.id;
                                    isCity = true;
                                    city.highlight = true;
                                    highlightTypeId = type.id;
                                }
                            })
                        }
                    })
                })
            })


        })

        updater.digest({
            curTab: highlightTypeId,
            types: types,
            showProvinceId: isCity ? provinceId : -1
        });
    },

    '$doc<click>'(event) {
        let that = this;
        let showProvinceId = that.updater.get('showProvinceId');
        if (showProvinceId > 0) {
            let showNode = $('#' + that.id + '_province_wrapper_' + showProvinceId);
            let labelNode = showNode.find('.@index.less:province-label'),
                expandNode = showNode.find('.@index.less:province-arrow'),
                citiesNode = showNode.find('.@index.less:cities');
            let target = event.target;
            if (!Magix.inside(target, labelNode[0]) &&
                !Magix.inside(target, expandNode[0]) &&
                !Magix.inside(target, citiesNode[0])) {
                that.updater.digest({
                    showProvinceId: -1
                });
            }
        }
    },

    val(full) {
        let that = this;
        let { types, cityVisible } = that.updater.get();
        let selected = [];
        let all = [];
        types.forEach(type => {
            type.groups.forEach(group => {
                group.forEach(area => {
                    area.provinces.forEach(province => {
                        if (province.checked) {
                            selected.push(province.id);
                            all.push(province);
                        } else {
                            if (cityVisible) {
                                province.cities.forEach(city => {
                                    if (city.checked) {
                                        selected.push(city.id);
                                        all.push(city);
                                    }
                                })
                            }
                        }
                    })
                })
            })
        })
        if(full){
            return $.extend(true, [], all);
        }else{
            return selected;
        }
    },

    getSelected() {
        return this.val(true);
    }
});