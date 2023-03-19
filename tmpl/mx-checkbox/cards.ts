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

        // 整体是否禁用，默认false
        let disabled = extra.disabled + '' === 'true';

        // 数组or逗号分隔，默认逗号分隔
        this['@{bak.type}'] = (extra.selected instanceof Array) ? 'array' : 'comma';
        let selected = ((extra.selected instanceof Array) ? extra.selected : (extra.selected ? (extra.selected + '').split(',') : [])).map(v => v + '');

        let list = [];
        if (extra.adcList && extra.adcList.length > 0) {
            // adc树结构
            // {
            //     code: "对应value",
            //     name: "对应text",
            //     description: "提示信息，对应tip",
            //     properties: {
            //         icon: '可选，右侧图标',
            //         tag: '卡片整体右上角打标',
            //         tags: '可选，卡片内打标，["打标1", "打标2"]',
            //     }
            // }
            list = extra.adcList.map(item => {
                return {
                    ...item,
                    value: item.code,
                    text: item.name,
                    tip: item.description,
                    icon: item.properties?.icon,
                    tag: item.properties?.tag,
                    tags: item.properties?.tags || [],
                    disabled: item.properties?.disabled + '' === 'true',
                }
            })
        } else {
            list = JSON.parse(JSON.stringify(extra.list || []));
        }

        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value',
            tipKey = extra.tipKey || 'tip';

        // 是否有标签
        let hasTags = false;
        list.forEach(item => {
            Magix.mix(item, {
                disabled: disabled || (item.disabled + '' === 'true') || false, // 整体禁用 > 单个禁用
                selected: selected.indexOf(item[valueKey] + '') > -1,
                tags: item.tags || [],
                tag: item.tag || '', // 右上角打标
                tagColor: item.tagColor || 'var(--color-red)',
            });

            if (item.tags.length > 0) {
                hasTags = true;
            }
        })

        // 展示尺寸
        // normal：正常尺寸
        // small：小尺寸
        let mode = (['normal', 'small'].indexOf(extra.mode) > -1) ? extra.mode : 'small';

        // 默认两行文案长度，支持0
        let textLines = isNaN(+extra.textLines) ? 2 : +extra.textLines;

        // hover的显示样式（common 背景为品牌色透明度 | brand 背景为品牌色）
        let hoverType = extra.hoverType || 'common';
        // 样式收敛，取消品牌色背景 @善妍
        hoverType = 'common';

        let defWidth;
        switch (mode) {
            case 'small':
                defWidth = 'var(--mx-checkbox-card-small-width, 240px)';
                break;

            case 'normal':
                defWidth = 'var(--mx-checkbox-card-width, 336px)';
                break;
        }
        let reg = /^[0-9]*$/;
        let width = reg.test(extra.width) ? (extra.width + 'px') : (extra.width || defWidth);

        this.updater.set({
            mode,
            hoverType,
            textLines,
            width,
            list,
            textKey,
            valueKey,
            tipKey,
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

        let cards = this['@{owner.node}'].find('[data-card]');
        let firstIndex = cards.length;
        if (firstIndex > 0) {
            let firstTop = $(cards[0]).offset().top;
            for (let i = 1; i < cards.length; i++) {
                let card = $(cards[i]);
                if (card.offset().top > firstTop) {
                    firstIndex = i - 1;
                    break;
                }
            }
            this.updater.digest({
                firstIndex,
            })
        }
    },

    '@{select}<click>'(e) {
        e.stopPropagation();

        let that = this;
        let cur = e.params.item;
        if (cur.disabled) {
            return;
        }

        let { valueKey, list } = that.updater.get();
        if (!cur.selected) {
            // 取消选择不加动画
            if (that.updater.get('animing')) {
                return;
            };

            // 只记录状态不digest
            let card = document.querySelector(`[data-card="${that.id}_card_${cur[valueKey]}"] .@cards.less:card-label`);
            that.updater.set({ animing: true, animItem: cur })
            card.setAttribute('mx-comp-expand-amin', 'animing');
            that['@{anim.timer}'] = setTimeout(() => {
                card.setAttribute('mx-comp-expand-amin', 'animend');
                that.updater.set({ animing: false })
            }, that['@{get.css.time.var}']('--mx-comp-expand-amin-timer'));
        }

        let selected = [];
        list.forEach(item => {
            if (item[valueKey] == cur[valueKey]) {
                item.selected = !item.selected;
            }
            if (item.selected) {
                selected.push(item[valueKey]);
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
