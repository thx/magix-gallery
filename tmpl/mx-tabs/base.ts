import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';

export default View.extend({
    init(extra) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();

        //该处是否可以由magix自动调用
        this.assign(extra);
    },
    assign(data) {
        let that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        let altered = that.updater.altered();

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (data.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');

        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        let textKey = data.textKey || 'text';
        let valueKey = data.valueKey || 'value';

        let originList;
        try {
            originList = (new Function('return ' + data.list))();
        } catch (e) {
            originList = data.list;
        }
        let list = (originList || []).map((item) => {
            return {
                ...item,
                color: disabled ? '#cccccc' : (item.color || ''),
                text: item[textKey],
                value: item[valueKey]
            }
        });

        let selected = data.selected || (list[0] || {})['value'];

        // box 类型
        //     solid 实心
        //     hollow 空心
        let mode = data.mode || 'hollow';

        // 锚点导航特有字段
        let anchorLogo = data.anchorLogo || '',
            anchorWidth = data.anchorWidth || '',
            anchorRightView = data.anchorRightView,
            anchorRightData = data.anchorRightData || {};

        // pipeline导航特有字段
        let color = data.color || '#FF0036';
        let colorGradient = data.colorGradient || color;

        that['@{owner.node}'] = $('#' + that.id);

        that.updater.set({
            mode,
            disabled,
            list,
            selected,
            left: 0,
            width: 0,
            anchorLogo,
            anchorWidth,
            anchorRightView,
            anchorRightData,
            color,
            colorGradient
        });
        that['@{owner.node}'].val(selected);

        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }

        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }

        //如果数据没变化,则告诉magix当前view不用更新
        return false;
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