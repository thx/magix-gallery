/**
 * 底边线tab切换
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(data) {
        let that = this;
        that.updater.snapshot();

        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        let textKey = data.textKey || 'text',
            valueKey = data.valueKey || 'value';

        let originList;
        try {
            originList = (new Function('return ' + data.list))();
        } catch (e) {
            originList = data.list;
        }
        let list = (originList || []).map((item) => {
            return {
                ...item,
                text: item[textKey],
                value: item[valueKey]
            }
        });

        let selected = data.selected || (list[0] || {})['value'];

        // 展示类型
        //    border 底边线跑马灯
        //    shrink 底边线收缩
        let mode = data.mode, allowModeMap = { border: true, shrink: true };
        if (!allowModeMap[mode]) {
            mode = that['@{get.css.var}']('--mx-tab-mode', 'border');
        }

        // pipeline导航特有字段
        let color = data.color || '#FF0036';
        let colorGradient = data.colorGradient || color;

        that.updater.set({
            mode,
            list,
            selected,
            left: 0,
            width: 0,
            color,
            colorGradient
        });

        // 双向绑定
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{sync.line}'](this.updater.get('selected'));
    },

    '@{sync.line}'(hover) {
        let that = this;
        that['@{data.hover}'] = hover;
        let node = $('#' + that.id + '_' + hover);
        if (!node || !node.length) {
            that.updater.digest();
            return;
        }
        let nodeOffsetLeft = node.offset().left;
        let owner = node.parent();
        let ownerOffsetLeft = owner.offset().left;
        let left = nodeOffsetLeft - ownerOffsetLeft;
        let width = node.outerWidth();
        that.updater.digest({
            left,
            width
        })
    },

    '@{over}<mouseover>'(e) {
        this['@{sync.line}'](e.params.value);
    },

    /**
     * 恢复到选中项
     */
    '@{out}<mouseout>'(e) {
        let { selected } = this.updater.get();
        this['@{sync.line}'](selected);
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