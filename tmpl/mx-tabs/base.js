let Magix = require('magix');

module.exports = Magix.View.extend({
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
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        let textKey = data.textKey || 'text';
        let valueKey = data.valueKey || 'value';

        let list;
        try {
            list = (new Function('return ' + data.list))();
        } catch (e) {
            list = data.list
        }
        list = list || [];
        list = list.map((item) => {
            return {
                text: item[textKey],
                value: item[valueKey],
                tag: item.tag,
                tips: item.tips
            }
        })

        let selected = data.selected || (list[0] || {})['value'];
        that['@{data.list}'] = list;
        that['@{data.selected}'] = selected;

        // 展示类型：（兼容老的写法，不建议配置）
        //     border
        //     box
        that['@{display.type}'] = data.type || 'border';
        that['@{display.disabled}'] = (/^true$/i).test(data.disabled) || false;

        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            viewId: that.id,
            type: that['@{display.type}'],
            disabled: that['@{display.disabled}'],
            list: that['@{data.list}'],
            selected: that['@{data.selected}'],
            left: 0,
            width: 0
        });

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
    '@{select}<click>' (e) {
        let that = this;
        let item = e.params.item;
        let value = item.value;
        if (that['@{data.selected}'] == value) {
            return;
        }

        that['@{data.selected}'] = value;
        that.updater.set({
            selected: value,
            hover: value
        }).digest()

        let event = $.Event('change', {
            item: item,
            value: value,
            text: item.text,
            selected: value
        });
        that['@{owner.node}'].trigger(event);

    }
});