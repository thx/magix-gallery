import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as I18n from '../mx-medusa/util';
import * as Fns from './mixin';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    mixins: [Fns],
    init(extra) {
        this.viewOptions = extra;
        this.updater.set({
            ...extra.data,
            keyword: '',
            text: {
                search: I18n['dropdown.search'],
                empty: I18n['empty.text'],
                submit: I18n['dialog.submit'],
                cancel: I18n['dialog.cancel'],
            }
        })

        this.on('destroy', () => {
            ['@{search.delay.timer}', '@{delay.hover.timer}'].forEach(timerKey => {
                if (this[timerKey]) {
                    clearTimeout(this[timerKey]);
                }
            });
        });
    },

    render() {
        this.updater.digest();

        let viewOptions = this.viewOptions;
        if (viewOptions.prepare) {
            viewOptions.prepare();
        }
    },

    '@{select}<mouseover>'(e) {
        e.stopPropagation();
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        clearTimeout(this['@{delay.hover.timer}']);
        this['@{delay.hover.timer}'] = setTimeout(this.wrapAsync(() => {
            let { selectedValues, valueKey, groups } = this.updater.get();
            let { gIndex, iIndex } = e.params;
            let list = groups[gIndex];
            let item = list[iIndex];

            // 置空当前列hover态
            list.forEach(i => {
                i.hover = false;
            })
            item.hover = true;

            // hover展开子项时处理子项
            // 否则只更新hover态
            groups = groups.slice(0, gIndex + 1);
            if (item.children && item.children.length > 0) {
                // hover有子节点
                // 1. 恢复选中态
                // 2. 置空hover态
                item.children.forEach(c => {
                    c.hover = false;
                    c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
                })

                groups.push(item.children);
            }

            this.updater.digest({
                groups
            })
        }), 100);
    },

    /**
    * hover展示
    *      叶子节点：需要点击事件，选中叶子节点
    *      非叶子：不需要点击事件 / 需要点击事件，选中该节点
    */
    '@{select}<click>'(e) {
        e.stopPropagation();
        let { valueKey, groups, leafOnly } = this.updater.get();
        let { gIndex, iIndex } = e.params;
        let list = groups[gIndex];
        let item = list[iIndex];

        if (!item.children || !item.children.length || (!leafOnly && item.children.length)) {
            // 可选中的节点
            // 1. 选中叶子节点
            // 2. hover展开，非叶子节点也可选中
            let selectedValue = item[valueKey];
            let result = this['@{single.cal}'](selectedValue);
            let viewOptions = this.viewOptions;
            if (viewOptions.submit) {
                viewOptions.submit(result);
            }
        }
    },

    /**
     * 展开时候单次搜索
     */
    '@{fn.search}'() {
        let that = this;
        let { list, map, selectedValue, keyword, textKey, valueKey, parentKey } = that.updater.get();

        if (!keyword) {
            let result = that['@{single.cal}'](selectedValue);
            return {
                allHide: false,
                ...result,
            };
        } else {
            let linkGap = `_${that.id}_`,
                hoverSearchVs = [], // 命中的第一个选项
                searchShowMap = {};
            let _end = (item) => {
                if ((item._search_text.indexOf(keyword) > -1) && (hoverSearchVs.length == 0)) {
                    hoverSearchVs = item._search_value.split(linkGap);
                }

                if (item.children && item.children.length) {
                    item.children.forEach(child => {
                        Magix.mix(child, {
                            _search_text: [item._search_text, child[textKey]].join(linkGap),
                            _search_value: [item._search_value, child[valueKey]].join(linkGap),
                        });
                        _end(child);
                    })
                } else {
                    // 叶子节点
                    if (item._search_text.indexOf(keyword) > -1) {
                        item._search_value.split(linkGap).forEach(v => {
                            searchShowMap[v] = true;
                        })
                    }
                }
            };
            list.forEach(item => {
                Magix.mix(item, {
                    _search_text: item[textKey] + '',
                    _search_value: item[valueKey] + '',
                });
                _end(item);
            });

            let allHide = true,
                groups = [];
            if (hoverSearchVs.length > 0) {
                let _loop = (v) => {
                    let i = map[v];
                    if (i[parentKey] === '' || i[parentKey] === undefined || i[parentKey] === null) {
                        // 根节点
                        list.forEach(s => {
                            s.hover = false;
                            s.hide = !searchShowMap[s[valueKey]];
                            allHide = allHide && s.hide;
                        })
                        i.hover = true;
                        groups.unshift(list);
                    } else {
                        let siblings = map[i[parentKey]].children;
                        siblings.forEach(s => {
                            s.hover = false;
                            s.hide = !searchShowMap[s[valueKey]];
                        })
                        i.hover = true;
                        groups.unshift(siblings);
                        _loop(i[parentKey]);
                    }
                }
                _loop(hoverSearchVs[hoverSearchVs.length - 1]);
            } else {
                // 无匹配项
                allHide = true;
                groups = [list];
            }

            return {
                allHide,
                groups,
            }
        }
    },

    '@{search}<change>'(e) {
        e.stopPropagation();

        let that = this;
        let val = $.trim(e.eventTarget.value);
        that.updater.set({
            keyword: val
        });

        clearTimeout(that['@{search.delay.timer}']);
        that['@{search.delay.timer}'] = setTimeout(that.wrapAsync(() => {
            if (val != that['@{last.value}']) {
                that['@{last.value}'] = val;
                let result = that['@{fn.search}']();
                that.updater.digest(result);
            }
        }), 250);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },

    /**
    * 多选取消
    */
    '@{cancel}<click>'(e) {
        let viewOptions = this.viewOptions;
        if (viewOptions.cancel) {
            viewOptions.cancel();
        }
    },
});

