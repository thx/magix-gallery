import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@dialog.html',
    init(e) {
        let sortable = e.sortable,
            sortableGroup = e.sortableGroup,
            defaults = e.defaults || [],
            selected = e.selected || [],
            parents = e.parents || [],
            list = e.list || [],
            lineNumber = e.lineNumber; // 每行多少个指标

        let selectedList = [];
        selected.forEach(value => {
            for (let i = 0; i < list.length; i++) {
                let f = list[i];
                if (f.value + '' === value + '') {
                    // 按照指标的配置顺序
                    f.checked = true;
                    selectedList.push(f);
                    break;
                }
            }
        })

        let groups = [], selectedGroups = [];
        if (parents.length > 0) {
            // 有分组
            let groupMap = {};
            parents.forEach((g, groupIndex) => {
                groupMap[g.value] = groupMap[g.value] || {
                    text: g.text,
                    index: groupIndex,
                    list: [],
                }
                let pList = [];
                list.forEach(f => {
                    if (f.pValue == g.value) {
                        pList.push(f);
                    }
                });
                if (pList.length > 0) {
                    groups.push({
                        ...g,
                        list: pList,
                    });
                }
            })

            if (sortableGroup) {
                // 支持分组的按照分组显示
                selectedList.forEach(f => {
                    if (groupMap[f.pValue]) {
                        groupMap[f.pValue].list.push(f);
                    }
                });
                selectedGroups = Object.values(groupMap).sort((a, b) => (a['index'] - b['index']));
            } else {
                selectedGroups = [{
                    list: selectedList,
                }];
            }
        } else {
            // 无分组
            let num = Math.ceil(list.length / lineNumber);
            for (let i = 0; i < num; i++) {
                groups.push({
                    list: list.slice(i * lineNumber, (i + 1) * lineNumber)
                });
            };

            selectedGroups = [{
                list: selectedList,
            }];
        }

        this.updater.set({
            defaults,
            searchName: '',
            width: `calc((100% - 8px * ${lineNumber + 1}) / ${lineNumber})`,
            hasParent: (parents.length > 0),
            list,
            groups,
            selectedGroups,
            sortable,
            sortableGroup,
            max: e.max,
            min: e.min,
        })
        this.viewOptions = e;
    },

    render() {
        this.syncParents();
    },

    /**
     * 单个操作
     */
    'toggle<change>'(e) {
        this.toggle(e.params, e.target.checked);
        this.syncParents();
    },

    toggle({ value, text }, checked) {
        let { groups, selectedGroups, sortable, sortableGroup } = this.updater.get();
        let groupIndex, selectedList = [];
        groups.forEach((g, i) => {
            g.list.forEach(f => {
                if (f.value == value) {
                    f.checked = checked;
                    groupIndex = i;
                }

                if (f.checked) {
                    selectedList.push(f);
                }
            })
        })

        if (checked) {
            // 选择
            if (sortable) {
                // 可排序的时候在最后添加
                selectedGroups[sortableGroup ? groupIndex : (selectedGroups.length - 1)].list.push({
                    value: value,
                    text: text
                })
            } else {
                // 不可选择时按照列表顺序
                selectedGroups = [{
                    list: selectedList,
                }]
            }
        } else {
            // 移除
            for (let i = 0; i < selectedGroups.length; i++) {
                for (let j = 0; j < selectedGroups[i].list.length; j++) {
                    if (selectedGroups[i].list[j].value == value) {
                        selectedGroups[i].list.splice(j, 1);
                        break;
                    }
                }
            }
        }

        this.updater.set({
            groups,
            selectedGroups,
        });
    },

    'toggleParent<change>'(e) {
        let that = this;
        let checked = e.target.checked;
        let { groupIndex } = e.params;
        let { groups, selectedCount, max } = that.updater.get();

        if (checked) {
            // 选中
            groups[groupIndex].list.forEach(f => {
                if (!f.disabled && !f.checked && (max == 0 || (max > 0 && selectedCount < max))) {
                    selectedCount++;
                    that.toggle(f, checked);
                }
            })
        } else {
            // 删除
            groups[groupIndex].list.forEach(f => {
                if (!f.disabled) {
                    that.toggle(f, checked);
                }
            })
        }
        that.syncParents();
    },

    /**
     * 恢复默认设置
     * 清空
     */
    'reset<click>'(e) {
        // 默认指标        
        let { defaults, list, groups, } = this.updater.get();

        let selectedMap = {};
        if (!e.params.clear) {
            selectedMap = Magix.toMap(defaults);
        }

        list.forEach(f => {
            if (!f.disabled) {
                f.checked = !!selectedMap[f.value];
            }
        });

        let selectedGroups = [];
        groups.forEach(g => {
            let selectedList = [];
            g.list.forEach(f => {
                if (f.checked) {
                    selectedList.push(f);
                }
            });
            selectedGroups.push({
                text: g.text,
                list: selectedList,
            })
        });
        this.updater.set({
            list,
            selectedGroups,
        });
        this.syncParents();
    },

    /**
     * 重新排序
     */
    'drag<dragfinish>'(e) {
        let map = {};
        let drags = document.querySelectorAll('#' + this.id + ' .@index.less:drag');
        for (let i = 0, len = drags.length; i < len; i++) {
            let attrs = drags[i].attributes;
            let groupIndex = +attrs['data-parent-index'].value;
            map[groupIndex] = map[groupIndex] || {
                text: attrs['data-parent-text'].value || '',
                list: [],
            }
            map[groupIndex].list.push({
                value: attrs['data-value'].value,
                text: attrs['data-text'].value
            })
        };
        this.updater.digest({
            selectedGroups: Object.values(map),
        });
    },

    /**
     * 计算组状态
     */
    syncParents() {
        let { groups, selectedGroups } = this.updater.get();
        groups.forEach(g => {
            let len = g.list.length;
            let dc = 0,  // 分组内禁用count
                dsc = 0, // 分组内禁用且选中
                sc = 0; // 分组内选中个数
            g.list.forEach(f => {
                if (f.disabled) {
                    dc++;
                    if (f.checked) {
                        dsc++;
                    }
                }
                if (f.checked) {
                    sc++;
                }
            })

            // 全部禁用
            g.disabled = (dc > 0 && dc == len);

            // 是否包含禁选选中
            if (dsc > 0) {
                // 部分选中
                g.indeterminate = (sc > 0 && sc < len);

                // 全选
                g.checked = (sc > 0 && sc == len);
            } else {
                // 部分选中
                g.indeterminate = (sc > 0 && sc < (len - dc));

                // 全选
                g.checked = (sc > 0 && sc == (len - dc));
            }
        });

        let selectedCount = 0;
        selectedGroups.forEach(g => {
            g.list.forEach(f => {
                selectedCount++;
            })
        })

        this.updater.digest({
            groups,
            selectedCount,
        })
    },

    'stop<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },

    /**
     * 仅搜索二级指标
     */
    'search<keydown>'(event) {
        if (event.keyCode !== 13) {
            return;
        };

        event.preventDefault();
        let searchName = event.target.value;
        let { groups } = this.updater.get();
        groups.forEach(g => {
            g.list.forEach(f => {
                if (searchName) {
                    let v = f.value + '',
                        t = f.text + '';
                    f.highlight = (v.indexOf(searchName) > -1 || t.indexOf(searchName) > -1);
                } else {
                    f.highlight = false;
                }
            })
        });
        this.updater.digest({
            searchName,
            groups,
        })
    },

    check() {
        let { selectedGroups, min, max } = this.updater.get();
        let selected = [];
        selectedGroups.forEach(g => {
            g.list.forEach(f => {
                selected.push(f.value);
            })
        })

        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            let len = selected.length;
            resolve({
                ok: ((len >= min) && (max == 0 || (max > 0 && len <= max))),
                msg: `请至少选择&nbsp;${min}&nbsp;个指标${(max > 0) ? ('，至多选择&nbsp;' + max + '&nbsp;个指标') : ''}`,
                data: {
                    selected
                }
            })
        })
    }
});
