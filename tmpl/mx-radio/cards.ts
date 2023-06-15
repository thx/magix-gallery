/**
 * 单选卡片 https://done.alibaba-inc.com/file/BfeHD00VvQXv/SJDvcfm5NxOygPFO/preview
 */
import Magix, { Vframe } from 'magix';
import * as $ from '$';
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

        // 展示尺寸
        // normal：正常尺寸
        // small：小尺寸 48
        // xsmall：极小尺寸 32
        // vertical：垂直布局
        let mode = (['normal', 'small', 'xsmall', 'vertical'].indexOf(extra.mode) > -1) ? extra.mode : 'small';

        // 默认两行文案长度，支持0
        let textLines = isNaN(+extra.textLines) ? 2 : +extra.textLines;

        // hover的显示样式（common 背景为品牌色透明度 | brand 背景为品牌色）
        let hoverType = extra.hoverType || 'common';

        // 是否显示radio（不支持子项的隐藏）
        let hideRadio = (extra.hideRadio + '' === 'true');

        if (hoverType == 'brand' && !hideRadio) {
            // 带radio，无radio的样式转换成无radio样式 @善妍
            hideRadio = true;
        }

        // radio得name
        let radioName = extra.radioName || `${this.id}_radioes`;

        // 宽度设置
        let defWidth;
        switch (mode) {
            case 'small':
                defWidth = (hideRadio ? 'var(--mx-checkbox-card-hide-icon-small-width, 240px)' : 'var(--mx-checkbox-card-small-width, 240px)');
                break;

            case 'normal':
                defWidth = (hideRadio ? 'var(--mx-checkbox-card-hide-icon-width, 276px)' : 'var(--mx-checkbox-card-width, 336px)');
                break;
        }
        let reg = /^[0-9]*$/;
        let width = reg.test(extra.width) ? (extra.width + 'px') : (extra.width || defWidth);
        if (mode == 'vertical') {
            // 垂直样式宽度固定
            width = '112px';
        }

        // 整体是否禁用，默认false
        let disabled = extra.disabled + '' === 'true';

        // selected = 0的情况
        let selected = '';
        if (extra.hasOwnProperty('selected')) {
            selected = extra.selected;
        }

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
                    detail: item.properties?.tip,
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
        list.forEach((item, index) => {
            let tags = (item.tags || []).map(tag => {
                if ($.isPlainObject(tag)) {
                    return tag;
                } else {
                    return {
                        text: tag
                    }
                }
            });

            Magix.mix(item, {
                selected: false,
                tag: item.tag || '', // 右上角打标
                tagColor: item.tagColor || 'var(--color-red)',
                tags,
                disabled: disabled || (item.disabled + '' === 'true') || false // 整体禁用 > 单个禁用
            });

            // 打标样式
            if (item.tags.length > 0) {
                hasTags = true;
            }

            // 统一处理成子选项的形式
            item.subs = item.subs || [];
            if (item.subs.length <= 1) {
                item.subs = [{
                    [textKey]: item[textKey],
                    [valueKey]: item[valueKey]
                }]
            }
            item.subs.forEach(sub => {
                // 0 undefined null '' 等异常情况
                sub.selected = (sub[valueKey] + '' === selected + '');
                if (sub.selected) {
                    item.selected = true;
                }
            })
        });

        // 每行的卡片个数 优先级 > width
        let lineNumber = +extra.lineNumber || 0;
        // 是否支持轮播
        let lineCarousel = extra.lineCarousel + '' === 'true';
        // lineCarouselGap历史配置
        let lineCarouselH = +extra.lineCarouselHGap || +extra.lineCarouselGap || 0;
        let lineCarouselV = +extra.lineCarouselVGap || 0;

        let lineWidth = (lineNumber > 0) ? `calc((100% - var(--mx-checkbox-card-gap, 16px) * ${(lineNumber - 1)}) / ${lineNumber})` : '';
        let groups = [];
        if (lineNumber > 0) {
            let line = Math.ceil(list.length / lineNumber);
            for (let i = 0; i < line; i++) {
                groups.push({
                    list: list.slice(i * lineNumber, (i + 1) * lineNumber)
                });
            };
        } else {
            groups = [{
                list,
            }]
        }

        this.updater.set({
            mode,
            hoverType,
            textLines,
            width,
            lineNumber,
            lineWidth,
            lineCarousel,
            lineCarouselH,
            lineCarouselV,
            groups,
            list,
            textKey,
            valueKey,
            tipKey,
            selected,
            hasTags,
            hideRadio,
            radioName,
            firstIndex: -1,
        });

        this['@{owner.node}'] = $(`#${this.id}`);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{fire}']();

        // 样式处理
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
        // 父节点
        let cur = e.params.item;
        if (cur.disabled || that.updater.get('animing')) {
            return;
        }

        let { valueKey } = that.updater.get();

        // 只记录状态不digest
        let card = document.querySelector(`[data-card="${that.id}_card_${cur[valueKey]}"] .@cards.less:card-label`);
        that.updater.set({ animing: true })
        card.setAttribute('mx-comp-expand-amin', 'animing');
        that['@{anim.timer}'] = setTimeout(() => {
            card.setAttribute('mx-comp-expand-amin', 'animend');
            that.updater.set({ animing: false })
        }, that['@{get.css.time.var}']('--mx-comp-expand-amin-timer'));

        let { list } = that.updater.get();
        let selected = '';
        list.forEach(item => {
            item.selected = (item[valueKey] + '' === cur[valueKey] + '');
            item.subs.forEach((sub, subIndex) => {
                // 默认选中第一个
                sub.selected = item.selected && (subIndex == 0);
                if (sub.selected) {
                    selected = sub[valueKey];
                }
            })
        });
        let oldSelected = that.updater.get('selected');
        that.updater.digest({
            list,
            selected
        })
        that['@{fire}'](oldSelected + '' !== selected + '');
    },

    /**
     * 子项选择
     */
    '@{select.sub}<click>'(e) {
        e.stopPropagation();

        let that = this;
        let { item: cur, sub: curSub } = e.params;
        if (cur.disabled || that.updater.get('animing')) {
            return;
        }

        let { valueKey } = that.updater.get();

        // 只记录状态不digest
        let card = document.querySelector(`[data-card="${that.id}_card_${cur[valueKey]}"] .@cards.less:card-label`);
        that.updater.set({ animing: true })
        card.setAttribute('mx-comp-expand-amin', 'animing');
        that['@{anim.timer}'] = setTimeout(() => {
            card.setAttribute('mx-comp-expand-amin', 'animend');
            that.updater.set({ animing: false })
        }, 300);

        let { list } = that.updater.get();
        list.forEach(item => {
            item.selected = (item[valueKey] + '' === cur[valueKey] + '');
            item.subs.forEach(sub => {
                sub.selected = (item.selected && (sub[valueKey] + '' === curSub[valueKey] + ''));
            })
        })

        let oldSelected = that.updater.get('selected');
        that.updater.digest({
            list,
            selected: curSub[valueKey],
        })
        that['@{fire}'](oldSelected + '' !== curSub[valueKey] + '');
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

            let { radioName } = this.updater.get();
            let cardComps = $(`[mx-view*="mx-radio/cards"][mx-view*="radioName=${radioName}"]`);
            for (let i = 0; i < cardComps.length; i++) {
                if (cardComps[i].id !== this.id) {
                    // 同name组件
                    let vf = Vframe.get(cardComps[i].id);
                    if (vf) {
                        vf.invoke('@{sync.name}', [selected]);
                    }
                }
            }
        }
    },

    /**
     * 同名不同mx-radio.cards更新同步
     */
    '@{sync.name}'(selected) {
        let { list, valueKey } = this.updater.get();
        list.forEach(item => {
            item.selected = false;
            item.subs.forEach(sub => {
                // 0 undefined null '' 等异常情况
                sub.selected = (sub[valueKey] + '' === selected + '');
                if (sub.selected) {
                    item.selected = true;
                }
            })
        })

        this.updater.digest({
            list,
            selected,
        })
    },

    '@{change.carousel}<change>'(e) {
        e.stopPropagation();
        this.updater.set({
            lineActive: e.active,
        })
    }
});
