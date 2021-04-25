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

        this.on('destroy', () => {
            if (this['@{anim.timer}']) {
                clearTimeout(this['@{anim.timer}']);
            }
        });
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        let list = $.extend(true, [], extra.list || []);
        // 数组or逗号分隔，默认逗号分隔
        this['@{bak.type}'] = (extra.selected instanceof Array) ? 'array' : 'comma';
        let selected = ((extra.selected instanceof Array) ? extra.selected : (extra.selected ? (extra.selected + '').split(',') : [])).map(v => v + '');

        // 是否有标签
        let hasTags = false;
        list.forEach(item => {
            item.selected = selected.indexOf(item.value + '') > -1;
            item.tags = item.tags || [];
            if (item.tags.length > 0) {
                hasTags = true;
            }
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
            hasTags
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

        let that = this;
        let cur = e.params.item;
        if (cur.disabled) {
            return;
        }

        if (!cur.selected) {
            // 取消选择不加动画
            if (that.updater.get('animing')) {
                return;
            };

            // 只记录状态不digest
            let ms = that['@{get.css.var}']('--mx-comp-expand-amin-timer');
            let card = document.querySelector(`#${that.id}_card_${cur.value} .@cards.less:card-label`);
            that.updater.set({ animing: true, animItem: cur })
            card.setAttribute('mx-comp-expand-amin', 'animing');
            that['@{anim.timer}'] = setTimeout(() => {
                card.setAttribute('mx-comp-expand-amin', 'animend');
                that.updater.set({ animing: false })
            }, ms.replace('ms', ''));
        }

        let { list } = that.updater.get();
        let selected = [];
        list.forEach(item => {
            if (item.value == cur.value) {
                item.selected = !item.selected;
            }
            if (item.selected) {
                selected.push(item.value);
            }
        })
        that.updater.digest({
            list,
            selected
        })
        that['@{fire}'](true);
    },

    /**
     * 双向绑定处理
     */
    '@{fire}'(fire) {
        let { selected } = this.updater.get();
        let type = this['@{bak.type}'];
        let val = (type == 'array') ? selected : selected.join(',');
        this['@{owner.node}'].val(val);
        if (fire) {
            this['@{owner.node}'].trigger({
                type: 'change',
                selected: val
            })
        }
    }
});
