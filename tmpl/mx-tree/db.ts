import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
const Vframe = Magix.Vframe;
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@db.html',
    init(extra) {
        let { data, closeMap, highlightMap = {}, valueKey, bottomMap } = extra;
        data.children.forEach(item => {
            let val = item[valueKey];
            item.close = closeMap[val];
            item.highlight = highlightMap[val];
            item.selected = bottomMap[item[valueKey]];
        })

        this.updater.set(extra);
    },
    render() {
        this.updater.digest();
        this['@{checkParentState}'](this.id);
    },

    '@{checkParentState}'() {
        let me = this;
        let { data, viewId } = me.updater.get();
        let parent = me.owner.parent();
        if (parent) {
            let hasChecked, hasUnchecked;
            $('#' + viewId + ' input[name="' + viewId + '"]').each((i, n) => {
                if (n.indeterminate) {
                    hasChecked = hasUnchecked = true;
                } else if (n.checked) {
                    hasChecked = true;
                } else {
                    hasUnchecked = true;
                }
            });

            let state = 1;
            if (hasChecked && hasUnchecked) {
                state = 3;
            } else if (hasChecked) {
                state = 2;
            }

            // 更新父view数据状态
            data.selected = (state == 2);

            let node = $(`#cb_${viewId}`);
            if (state === 3) {
                node.prop('indeterminate', true);
            } else {
                node.prop('indeterminate', false);
                node.prop('checked', state == 2);
            }
            parent.invoke('@{checkParentState}');
        }
    },

    '@{check}<change>'(e) {
        let me = this;
        let index = e.params.index,
            selected = e.eventTarget.checked;
        let { data, bottomMap, valueKey } = me.updater.get();
        data.children.forEach((item, i) => {
            if (index == i) {
                let _loop = (c) => {
                    if (c.children && c.children.length) {
                        c.children.forEach(cc => {
                            _loop(cc);
                        })
                    } else {
                        // 叶子节点
                        bottomMap[c[valueKey]] = selected;
                    }
                    c.selected = selected;
                }
                _loop(item);
                item.selected = selected;
            }
        })
        me.updater.digest({
            bottomMap,
            data
        })
        me['@{checkParentState}'](me.id);
    },
    /**
     * 展开收起
     */
    '@{toggle}<click>'(e) {
        e.stopPropagation();
        let index = e.params.index;
        let { data, closeMap, valueKey } = this.updater.get();
        data.children[index].close = !data.children[index].close;
        let value = data.children[index][valueKey];
        closeMap[value] = data.children[index].close;
        this.updater.digest({
            data,
            closeMap
        })
    }
});