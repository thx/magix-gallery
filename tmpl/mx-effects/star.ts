import Magix from 'magix';
import * as View from '../mx-util/view';
import * as $ from '$';
Magix.applyStyle('@star.less');

export default View.extend({
    tmpl: '@star.html',
    init(extra) {
        this.assign(extra);
    },
    assign(e) {
        this['@{owner.node}'] = $(`#${this.id}`);
        this.updater.snapshot();

        // num: 0, 0.5, 1 ... 4, 4.5, 5，
        // 最大值不超过count
        let num = +e.num || 0,
            count = +e.count || 5;  // icon个数
        if (num < 0) {
            num = 0;
        };
        if (num > count) {
            num = count;
        };

        // 特殊样式
        // icon=number：数字版
        let icon = e.icon || '<i class="mc-iconfont">&#xe60f;</i>';
        if (icon === 'number') {
            // 数字版只支持整数
            num = Math.ceil(num);
        }

        // 额外信息展示配置
        let infos = e.infos || [];
        let list = [];
        for (let i = 0; i < count; i++) {
            list.push({
                ...(infos[i] || {}),
                value: i,
            })
        }

        this.updater.set({
            operational: (e.operational + '' === 'true'), //是否可操作
            color: e.color || 'var(--color-brand)',
            colorGradient: e.colorGradient,
            starWidth: +e.width || 24,
            icon,
            num,
            list,
            count,
        });

        let altered = this.updater.altered();
        return altered;
    },

    '@{cal.list}'() {
        let { list, num } = this.updater.get();
        list.forEach((item, i) => {
            Magix.mix(item, {
                width: Math.max(0, (i + 1 < num) ? 100 : ((num - i) * 100)),
            })
        });
        this.updater.digest({
            hoverIndex: -1,
            hoverNum: num,
            list,
        });
    },

    render() {
        this['@{cal.list}']();

        // 双向绑定
        let { num } = this.updater.get();
        this['@{owner.node}'].val(num);
    },

    '@{select}<click>'(event) {
        event.preventDefault();
        event.stopPropagation();

        let num = +event.params.index + 1;
        this.updater.set({
            num,
        });
        this['@{cal.list}']();

        this['@{owner.node}'].val(num).trigger({
            type: 'change',
            num,
        });
    },

    '@{out}<mouseout>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        // 回置数值选中态
        this['@{cal.list}']();
    },

    '@{over}<mouseover>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        let hoverIndex = +event.params.index;
        let { list } = this.updater.get();
        list.forEach((item, i) => {
            Magix.mix(item, {
                width: i <= hoverIndex ? 100 : 0,
            })
        })
        this.updater.digest({
            hoverIndex,
            hoverNum: (hoverIndex + 1),
            list,
        })
    }
});