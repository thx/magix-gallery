/**
 * 地域选择
 * options
 *      city 城市是否可选
 *      selected 当前选中的城市 id
 *
 * method
 * val 获取选中值
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Data from './data';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.updater.set({
            showProvinceId: -1,
        })
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        // selected：入参[1,2]，出参[{id: 1}, {id: 2}]完成对象，导致不可实现双向绑定，对外不透出该api里，兼容历史逻辑
        // values：入参出参[1,2]
        let selectedMap = {};
        if (extra.values && extra.values.length) {
            extra.values.map(id => {
                selectedMap[id] = true;
            });
        } else {
            (extra.selected || []).map(id => {
                selectedMap[id] = true;
            });
        }

        // 可选到城市还是省份
        let cityVisible = (/^true$/i).test(extra.city);

        // tab切换展示
        let isTab = (extra.type == 'tab');

        // 单行显示多少个
        let lineNumber = +extra.lineNumber || 6;

        var adcList = extra.adcList || [],
            data = JSON.parse(JSON.stringify(extra.data || [])),
            types = [],
            filters = [], curFilter = that.updater.get('curFilter');
        if (adcList.length == 0 && data.length == 0) {
            // 组件内置数据
            // 从外部传入按首字母选择和按地理区选择的可选地域
            that['@{config.data}'] = Object.assign(Data, (extra.filterDataMap || {}));
            if ((extra.letterGroups && extra.letterGroups.length > 0) || (extra.lastProvinces && extra.lastProvinces.length > 0)) {
                // 外部配置的字母分组letterGroups 
                // [{
                //     name: "A",
                //     provinces: [{
                //         id,
                //         name
                //         cities: [{
                //              id,
                //              name
                //         }]
                //     }]
                // }]

                // 外部配置的非常用地域lastProvinces  
                // [{  
                //     id, // 省份
                //     name,
                //     cities: [{
                //          id,
                //          name
                //     }]
                // }]
                if (extra.letterGroups && extra.letterGroups.length > 0) {
                    let commonAreas = JSON.parse(JSON.stringify(extra.letterGroups)),
                        commonAllChecked = true,
                        commonAllCount = 0;
                    commonAreas.forEach(area => {
                        area.provinces.forEach(province => {
                            that['@{init.province}'](province, selectedMap, cityVisible);
                            commonAllChecked = commonAllChecked && province.checked;
                            if (province.checked || province.count > 0) {
                                commonAllCount++;
                            }
                        })
                    })
                    types.push({
                        name: '常用地域',
                        id: 'usemore',
                        half: true,
                        checked: commonAllChecked,
                        count: commonAllCount,
                        groups: [commonAreas.splice(0, Math.ceil(commonAreas.length / 2)), commonAreas],
                    });
                }

                if (extra.lastProvinces && extra.lastProvinces.length > 0) {
                    let lastProvinces = JSON.parse(JSON.stringify(extra.lastProvinces)),
                        lastAllChecked = true,
                        lastAllCount = 0;
                    lastProvinces.forEach(province => {
                        that['@{init.province}'](province, selectedMap, cityVisible);
                        lastAllChecked = lastAllChecked && province.checked;
                        if (province.checked || province.count > 0) {
                            lastAllCount++;
                        }
                    })
                    types.push({
                        name: '非常用地域',
                        id: 'useless',
                        checked: lastAllChecked,
                        count: lastAllCount,
                        groups: [
                            [{
                                provinces: lastProvinces
                            }]
                        ]
                    })
                }
            } else {
                filters = [{
                    value: 'firstLetterTypes',
                    text: '按首字母选择'
                }, {
                    value: 'areaTypes',
                    text: '按地理区选择'
                }];
                if (!Magix.toMap(filters, 'value')[curFilter]) {
                    curFilter = filters[0].value;
                }
                types = that['@{init.filter}'](curFilter, selectedMap, cityVisible);
            }
        } else {
            if (adcList.length > 0) {
                that['@{config.data}'] = {};
                let letterMaps = {}, areaMaps = {};
            } else {
                // 历史参数配置
                // 自定义数据，数据格式：
                // [{
                //     id, 
                //     name, 
                //     cities: [{
                //         id, 
                //         name
                //     }, {...}]
                // }]
                types = data.map((item, index) => {
                    let allChecked = true, allCount = 0;
                    let provinces = item.provinces;
                    provinces.forEach(province => {
                        that['@{init.province}'](province, selectedMap, cityVisible);
                        allChecked = allChecked && province.checked;
                        allCount = allCount + province.count;
                    })

                    return {
                        name: item.name,
                        id: index,
                        checked: allChecked,
                        count: allCount,
                        groups: [
                            [{
                                provinces: item.provinces
                            }]
                        ]
                    }
                })
            }
        }

        let { curTab } = that.updater.get();
        if (!Magix.toMap(types, 'id')[curTab]) {
            curTab = types[0]?.id;
        }

        let mode = extra.mode || '';

        that['@{owner.node}'] = $(`#${that.id}`);
        that.updater.set({
            mode,
            lineNumber,
            cityVisible,
            placeholder: '省份' + (cityVisible ? '/城市' : ''),
            selectedMap,
            types,
            isTab,
            curTab,
            filters,
            curFilter,
        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    /**
     * 同一份数据不同分组形式
     */
    '@{init.filter}'(curFilter, selectedMap, cityVisible) {
        let types = JSON.parse(JSON.stringify(this['@{config.data}'][curFilter]));
        types.forEach(type => {
            let allChecked = true, allCount = 0;

            type.groups.forEach(group => {
                group.forEach(area => {
                    area.provinces.forEach((province, pi) => {
                        this['@{init.province}'](province, selectedMap, cityVisible);
                        allChecked = allChecked && province['checked'];
                        allCount = allCount + province['count'];
                    })

                })
            })

            Magix.mix(type, {
                checked: allChecked,
                count: allCount,
            })
        });

        return types;
    },

    '@{init.province}'(province, selectedMap, cityVisible) {
        // province 省的id被选中了，则其全部城市id不传
        // for example 1 = (2 + 3 + ... + 18)
        province.checked = !!selectedMap[province.id];

        let count = 0;
        province.cities = province.cities || [];
        province.cities.forEach(city => {
            if (province.checked) {
                city.checked = true;
            } else {
                city.checked = !!selectedMap[city.id];
            }
            if (city.checked) {
                count++;
            }
        })

        province.count = count;
        province.hasCity = (province.cities.length > 0) && cityVisible;
    },

    render() {
        this.updater.digest();
    },

    '@{toggleCity}<click>'(event) {
        event.preventDefault();

        let that = this;
        let province = event.params.province,
            oldProvince = that.updater.get('showProvinceId');

        if (province == oldProvince) {
            that.updater.digest({
                showProvinceId: -1
            });
        } else {
            that.updater.digest({
                showProvinceId: province
            });
        }
    },

    /**
     * 同一份数据不同分组形式
     */
    '@{changeFilter}<change>'(event) {
        event.stopPropagation();

        let that = this;
        let curFilter = event.selected;
        let { selectedMap, cityVisible } = that.updater.get();
        let types = that['@{init.filter}'](curFilter, selectedMap, cityVisible);
        that.updater.digest({
            curFilter,
            types,
        })
    },

    '@{changeTab}<click>'(event) {
        event.stopPropagation();

        this.updater.digest({
            curTab: event.params.curTab
        })
    },
    '@{changeAll}<change>'(event) {
        event.stopPropagation();

        let that = this;
        let allChecked = event.target.checked,
            allCount = 0;

        let { types, isTab } = that.updater.get();
        let type = types[event.params.typeIndex];
        type.groups.forEach(group => {
            group.forEach(area => {
                area.provinces.forEach(province => {
                    let cities = province.cities;
                    cities.forEach(city => {
                        city.checked = allChecked;
                    })

                    province.checked = allChecked;
                    province.count = allChecked ? cities.length : 0;
                    if (province.checked || province.count > 0) {
                        allCount++;
                    }
                })
            })
        });
        type.checked = allChecked;
        type.count = allCount;

        var d = {
            types: types
        }
        if (isTab) {
            Magix.mix(d, {
                curTab: type.id
            })
        }
        that.updater.set(d);
        that['@{fire}']();
    },

    '@{changeOne}<change>'(event) {
        event.stopPropagation();
        let that = this;
        let checked = event.target.checked;
        let { typeIndex, province: provinceId, city: cityId } = event.params;
        let { types } = that.updater.get();

        let allChecked = true, allCount = 0;
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
                            cities.forEach(city => {
                                city.checked = checked;
                            })
                            province.checked = checked;
                            province.count = checked ? cities.length : 0;
                        }
                    }
                    allChecked = allChecked && province.checked;
                    if (province.checked || province.count > 0) {
                        allCount++;
                    }
                })
            })
        })
        Magix.mix(types[typeIndex], {
            checked: allChecked,
            count: allCount,
        })
        that.updater.set({ types });
        that['@{fire}']();
    },

    '@{fire}'() {
        let selected = this.getSelected();
        let values = [], selectedMap = {};
        selected.forEach(item => {
            values.push(item.id);
            selectedMap[item.id] = true;
        })
        this.updater.digest({ selectedMap });
        this['@{owner.node}'].trigger({
            type: 'change',
            selected,
            items: selected,
            values,
        })
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },

    '@{search}<keydown>'(event) {
        if (event.keyCode !== 13) {
            return;
        }
        event.preventDefault();
        let that = this;
        let searchName = event.target.value;
        let updater = that.updater;
        let { types, cityVisible, curTab: highlightTypeId } = updater.get();

        let provinceId, isCity = false;
        types.forEach(type => {
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
        });

        // 简单深拷贝
        return full ? JSON.parse(JSON.stringify(all)) : selected;
    },

    getSelected() {
        return this.val(true);
    }
});