/**
 * 盒状分组
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@box.less');

export default View.extend({
    tmpl: '@box.html',
    init(extra) {
        this.assign(extra);
    },
    assign(data) {
        let that = this;
        that.updater.snapshot();

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (data.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');

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
                color: disabled ? '#cccccc' : (item.color || ''),
                text: item[textKey],
                value: item[valueKey]
            }
        });

        let selected = data.selected || (list[0] || {})['value'];

        // box 类型
        //   hollow 空心（默认）
        //   spliter 分割线
        let mode = data.mode, allowModeMap = { hollow: true, spliter: true, vertical: true };
        if (!allowModeMap[mode]) {
            mode = that['@{get.css.var}']('--mx-tab-box-mode', 'hollow');
        }
        let classNames = 'names@box.less[hollow-box,spliter-box,vertical-box]';

        that.updater.set({
            mode,
            boxClass: classNames[`${mode}-box`],
            disabled,
            list,
            selected,
        });

        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
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