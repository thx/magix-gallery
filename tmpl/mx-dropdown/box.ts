import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@box.less');

export default View.extend({
    tmpl: '@box.html',
    init(ops) {
        this.assign(ops);
    },
    assign(ops) {
        let that = this;
        that.updater.snapshot();

        // 多选还是单选
        let multiple = (ops.multiple + '' === 'true');

        // 整体禁用
        let disabled = (ops.disabled + '' === 'true');

        let textKey = ops.textKey || 'text',
            valueKey = ops.valueKey || 'value';
        let list = (ops.list || []).map(item => {
            return {
                ...item,
                text: item[textKey],
                value: item[valueKey],
            }
        })

        // 已选中数据
        let selected = [];
        if ($.isArray(ops.selected)) {
            // 数组，保留初始数据状态，双向绑定原样返回
            that['@{bak.type}'] = 'array';
            selected = ops.selected;
        } else {
            // 字符串
            selected = (ops.selected === undefined || ops.selected === null) ? [] : (ops.selected + '').split(',');
        }

        that.updater.set({
            disabled,
            multiple,
            list,
            selected,
        });

        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selected);

        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    '@{select}<click>'(e) {
        this['@{select}'](e.params.item);
    },

    '@{select}'(item) {
        let that = this;
        let value = item.value;
        let { selected } = that.updater.get();
        if (selected == value) {
            return;
        }

        let event = $.Event('change', {
            item: item,
            value: value,
            text: item.text,
            selected: value
        });
        that['@{owner.node}'].trigger(event);
        if (!event.isDefaultPrevented()) {
            // 支持外部同步校验，event.preventDefault()
            that.updater.digest({
                selected: value,
                hover: value
            })
            that['@{owner.node}'].val(value);
        }
    }
});
