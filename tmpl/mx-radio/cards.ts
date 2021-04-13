/**
 * 单选卡片 https://done.alibaba-inc.com/file/BfeHD00VvQXv/SJDvcfm5NxOygPFO/preview
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@cards.less');

export default View.extend({
    tmpl: '@cards.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        let list = $.extend(true, [], extra.list || []);
        let selected = extra.selected || '';

        // 是否有标签
        let hasTags = false;
        list.forEach(item => {
            item.tags = item.tags || [];
            if (item.tags.length > 0) {
                hasTags = true;
            }

            // 统一处理成子选项的形式
            item.subs = item.subs || [];
            if (item.subs.length <= 1) {
                item.subs = [{
                    text: item.text,
                    value: item.value,
                    tip: item.tip
                }]
            }
            item.subs.forEach(sub => {
                sub.selected = (sub.value == selected);
                if (sub.selected) {
                    item.selected = true;
                }
            })
        })

        // 展示尺寸
        // normal：正常尺寸，默认宽度288
        // small：小尺寸，默认宽度216
        let mode = extra.mode || 'small';
        let width;
        switch (mode) {
            case 'small':
                width = +extra.width || 216;
                break;

            case 'normal':
                width = +extra.width || 288;
                break;
        }

        // 默认两行文案长度
        let textLines = +extra.textLines || 2;

        // hover的显示样式
        // common 背景为品牌色透明度
        // brand 背景为品牌色
        let hoverType = extra.hoverType || 'common';

        this.updater.set({
            mode,
            hoverType,
            textLines,
            width,
            list,
            selected,
            hasTags,
        });

        this['@{owner.node}'] = $(`#${this.id}`);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{fire}']();
    },

    '@{select}<click>'(e) {
        e.stopPropagation();

        let item = e.params.item;
        if (item.disabled) {
            return;
        }

        let { list } = this.updater.get();
        let selected = '';

        this.updater.digest({
            selected: item.value
        })
        this['@{fire}'](true);
    },

    /**
     * 双向绑定处理
     */
    '@{fire}'(fire) {
        let { selected } = this.updater.get();
        this['@{owner.node}'].val(selected);
        if (fire) {
            this['@{owner.node}'].trigger({
                type: 'change',
                selected
            })
        }
    }
});
