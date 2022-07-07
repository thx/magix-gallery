import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        that['@{origin.list}'] = JSON.parse(JSON.stringify(extra.list || []));

        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value',
            linkKey = extra.linkKey || 'link',
            selected = extra.selected || '';
        let selectedIndex = that['@{origin.list}'].length - 1;

        let list = that['@{origin.list}'].map((item, i) => {
            if (item[valueKey] == selected) {
                selectedIndex = i;
            }
            return {
                ...item,
                text: item[textKey],
                value: item[valueKey],
                link: item[linkKey],
            }
        });
        this.updater.set({
            showHomeIcon: extra.showHomeIcon + '' !== 'false', // 默认true
            homeIcon: extra.homeIcon,
            gapIcon: extra.gapIcon || '<i class="mc-iconfont @index.less:icon-gap">&#xe602;</i>',
            list,
            selectedIndex,
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
        let item = e.params.item;
        let { selected } = this.updater.get();
        if (selected == item.value) {
            return;
        }

        let { value, text } = item;
        this['@{fire}']({
            item: item,
            value,
            text,
            selected: value,
        })
    },

    '@{change.dd}<change>'(e) {
        e.stopPropagation();
        let item = e.params.item;

        let { value, text } = item;
        this['@{fire}']({
            item: item,
            value,
            text,
            selected: value,
            [value]: e.selected,
        })
    },

    '@{fire}'(data) {
        let event = $.Event('change', data);
        this['@{owner.node}'].trigger(event);
        if (!event.isDefaultPrevented()) {
            // 支持外部同步校验，event.preventDefault()
            this['@{owner.node}'].val(data.value);

            let originList = this['@{origin.list}'];
            let selectedIndex = originList.length - 1;
            for (let i = 0; i < originList.length; i++) {
                if (originList[i].value == data.value) {
                    selectedIndex = i;
                    break;
                }
            }
            this.updater.digest({
                selectedIndex,
            });
        }
    }
});
