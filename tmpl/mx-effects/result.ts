import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@result.less');

export default View.extend({
    tmpl: '@result.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        let direction = extra.direction;
        if (['horizontal', 'vertical'].indexOf(direction) < 0) {
            direction = 'vertical';
        }

        // 默认品牌按钮
        let color = '--color-brand',
            icon = '&#xe67b;';

        // 默认图片
        let img;

        switch (extra.type) {
            case 'error':
                color = '--color-red';
                icon = '&#xe676;';
                break;

            case 'warn':
                color = '--color-warn';
                icon = '&#xe679;';
                break;

            case 'pass':
                color = '--color-green';
                icon = '&#xe67a;';
                break;

            case 'stress':
                color = '--color-blue';
                icon = '&#xe67b;';
                break;

            case 'success-zan':
                img = 'https://img.alicdn.com/imgextra/i4/O1CN01BLlhyA2ACzpksebUi_!!6000000008168-2-tps-240-244.png';
                break;

            case 'success-ok':
                img = 'https://img.alicdn.com/imgextra/i1/O1CN015tV2se1I5DrAycK9R_!!6000000000841-2-tps-240-267.png';
                break;

            case 'success-highfive':
                img = 'https://img.alicdn.com/imgextra/i3/O1CN01tpqGpy1JzqROWNjV7_!!6000000001100-2-tps-240-252.png';
                break;

            case 'success-shakehands':
                img = 'https://img.alicdn.com/imgextra/i3/O1CN011NwGmO1wQpAgmb5yP_!!6000000006303-2-tps-240-240.png';
                break;

            case 'success-cheer':
                img = 'https://img.alicdn.com/imgextra/i4/O1CN01Ck38Qy1dDZ0Bq2RP1_!!6000000003702-2-tps-240-240.png';
                break;

            case 'success-cooperation':
                img = 'https://img.alicdn.com/imgextra/i3/O1CN011NwGmO1wQpAgmb5yP_!!6000000006303-2-tps-240-240.png';
                break;

            case 'success-trumpet':
                img = 'https://img.alicdn.com/imgextra/i1/O1CN01jaC48T1RzrNVVS6Ui_!!6000000002183-2-tps-239-241.png';
                break;

            case 'error-permission':
                img = 'https://img.alicdn.com/imgextra/i3/O1CN01NOcNRu1kjoCJdXpRn_!!6000000004720-2-tps-251-249.png';
                break;

            case 'error-disconnect':
                img = 'https://img.alicdn.com/imgextra/i1/O1CN01khgKSq1GfkD4OeAfh_!!6000000000650-2-tps-240-240.png';
                break;

            case 'error-load':
                img = 'https://img.alicdn.com/imgextra/i3/O1CN010xHFhm1JxYSc8W6Xl_!!6000000001095-2-tps-239-240.png';
                break;

            case 'error-empty':
                img = 'https://img.alicdn.com/imgextra/i4/O1CN01sF8JVM1WOpR39EohQ_!!6000000002779-2-tps-251-259.png';
                break;

            case 'error-todo':
                img = 'https://img.alicdn.com/imgextra/i4/O1CN01PJNhPP1mMZKcHwlA5_!!6000000004940-2-tps-240-240.png';
                break;
        }
        let colorResult = that['@{color.to.rgb}'](that['@{get.css.var}'](color));

        // btns = [{
        //     text: '显示文案', 
        //     mode: 'primary', // 按钮样式
        //     link: '外链地址',
        //     outer: true
        //     callback: (params) => {
        //         // 回调方法
        //     }
        // }]
        let btns = [];
        (extra.btns || []).forEach(btn => {
            if (btn.text) {
                Magix.mix(btn, {
                    mode: btn.mode || (btn.brand + '' === 'true' ? 'primary' : 'secondary'),
                    outer: btn.outer + '' !== 'false' // 默认外链打开
                })
                btns.push(btn);
            }
        })

        this.updater.set({
            ...colorResult,
            direction,
            img: extra.img || img,
            icon,
            content: extra.content,
            tip: extra.tip,
            btns,
        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{click}<click>'(e) {
        let { index } = e.params;
        let { btns } = this.updater.get();
        let btn = btns[index];
        if (btn && btn.callback) {
            btn.callback();
        }
    }
});
