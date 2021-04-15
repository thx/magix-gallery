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
                    value: item.value
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

        // 是否显示radio
        // 不支持子项的隐藏
        let hideRadio = (extra.hideRadio + '' === 'true');

        let gaps = {
            mt: 0, mr: 16, mb: 16, ml: 0
        }
        for (let d in gaps) {
            if (extra.hasOwnProperty(d)) {
                gaps[d] = +extra[d];
            }
        }

        this.updater.set({
            ...gaps,
            mode,
            hoverType,
            textLines,
            width,
            list,
            selected,
            hasTags,
            hideRadio
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

        // 父节点
        let cur = e.params.item;
        if (cur.disabled) {
            return;
        }

        let { list } = this.updater.get();
        let selected = '';
        list.forEach(item => {
            item.selected = (item.value == cur.value);
            item.subs.forEach((sub, subIndex) => {
                // 默认选中第一个
                sub.selected = item.selected && (subIndex == 0);
                if (sub.selected) {
                    selected = sub.value;
                }
            })
        })

        this.updater.digest({
            list,
            selected
        })
        this['@{fire}'](true);
    },

    /**
     * 子项选择
     */
    '@{select.sub}<click>'(e) {
        e.stopPropagation();

        let { item: cur, sub: curSub } = e.params;
        if (cur.disabled) {
            return;
        }

        let { list } = this.updater.get();
        list.forEach(item => {
            item.selected = (item.value == cur.value);
            item.subs.forEach(sub => {
                sub.selected = (item.value == cur.value && sub.value == curSub.value);
            })
        })

        this.updater.digest({
            list,
            selected: curSub.value
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
