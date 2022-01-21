import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
const UncheckedState = 1;
const IndeterminateState = 2;
const CheckedState = 3;
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@db.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let { data, closeMap, highlightMap = {}, valueKey } = extra;
        data.children.forEach(item => {
            let val = item[valueKey];
            item.close = closeMap[val];
            item.highlight = highlightMap[val];
        })

        this.updater.set(extra);
        return true;
    },
    render() {
        this.updater.digest();

        // 部分选中态
        let { data, viewId, mode } = this.updater.get();
        data.children.forEach((item, index) => {
            let node;
            if (mode == 'checkbox') {
                node = $(`#cb_${viewId}_${index}`);
                node.prop('indeterminate', (item.state == IndeterminateState));
            }

            if (item.highlight && node && node[0]) {
                // 滚动到可视范围之内
                if (node[0].scrollIntoViewIfNeeded) {
                    node[0].scrollIntoViewIfNeeded();
                } else if (node[0].scrollIntoView) {
                    node[0].scrollIntoView();
                }
            }
        })
    },

    '@{checkParentState}'() {
        let me = this;
        let { data, viewId } = me.updater.get();
        let parent = me.owner.parent();
        if (parent) {
            let hasChecked = false,
                hasUnchecked = false;
            data.children.forEach(item => {
                if (item.state == IndeterminateState) {
                    hasChecked = hasUnchecked = true;
                } else if (item.state == CheckedState) {
                    hasChecked = true;
                } else {
                    hasUnchecked = true;
                }
            })

            // 更新父view数据状态
            let state = (hasChecked && hasUnchecked) ? IndeterminateState : (hasChecked ? CheckedState : UncheckedState);
            data.state = state;

            let node = $(`#cb_${viewId}`);
            if (state == IndeterminateState) {
                node.prop('indeterminate', true);
            } else {
                node.prop('indeterminate', false);
                node.prop('checked', state == CheckedState);
            }
            parent.invoke('@{checkParentState}');
        }
    },

    '@{check}<change>'(e) {
        let me = this;
        let index = e.params.index,
            selected = e.eventTarget.checked;
        let { data } = me.updater.get();
        data.children.forEach((item, i) => {
            if (index == i) {
                let _loop = (c) => {
                    if (c.children && c.children.length) {
                        c.children.forEach(cc => {
                            _loop(cc);
                        })
                    }

                    c.state = selected ? CheckedState : UncheckedState;
                }
                _loop(item);
            }
        })
        me.updater.digest({
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