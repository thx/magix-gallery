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
        }
        if (num > count) {
            num = count;
        }

        // 特殊样式
        // icon=number：数字版
        let icon = e.icon || '<i class="mc-iconfont">&#xe60f;</i>';
        if (icon === 'number') {
            // 数字版只支持整数
            num = Math.ceil(num);
        }

        this.updater.set({
            infos: e.infos || [],
            starWidth: +e.width || 24,
            num,
            hoverNum: num,
            count,
            operational: (e.operational + '' === 'true'), //是否可操作
            color: e.color || 'var(--color-brand)',
            colorGradient: e.colorGradient || '',
            icon,
        });

        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest({
            hoverIndex: -1  //hover高亮动画
        });

        // 双向绑定
        let { num } = this.updater.get();
        this['@{owner.node}'].val(num);
    },

    '@{select}<click>'(event) {
        event.preventDefault();
        event.stopPropagation();

        let num = +event.params.index + 1;
        this.updater.digest({
            num,
            hoverNum: num
        })

        this['@{owner.node}'].val(num).trigger({
            type: 'change',
            num,
        });
    },

    '@{out}<mouseout>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        let { num } = this.updater.get();
        this.updater.digest({
            hoverIndex: -1,
            hoverNum: num
        })
    },

    '@{over}<mouseover>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        let hoverIndex = +event.params.index;
        this.updater.digest({
            hoverIndex,
            hoverNum: (hoverIndex + 1)
        })
    }
});