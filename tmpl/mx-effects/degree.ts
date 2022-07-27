/**
 * 刻度型进度比例
 */
import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@degree.less');

export default View.extend({
    tmpl: '@degree.html',
    init(e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign(e) {
        let that = this;
        that.updater.snapshot();

        // 刻度个数
        let count = +e.count || 10;

        // 显示数值
        let num = +e.num || 0;
        let s = num + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        // 最多保留两位小数
        if (i > 2) {
            i = 2;
        }

        if (num < 0) {
            num = 0;
        }

        if (num > 100) {
            num = 100;
        }

        let degree = Math.round(num * count / 100),
            baseOpacity = e.baseOpacity || 0.08,
            type = e.type || 'highlight',
            color = e.color || '';

        if (!color) {
            // 优先级 color > type
            // 未自定义颜色的时候
            switch (type) {
                case 'highlight':
                    color = 'var(--color-brand)';
                    break;

                case 'error':
                    color = 'var(--color-red)';
                    break;

                case 'warn':
                    color = 'var(--color-warn)';
                    break;

                case 'pass':
                    color = 'var(--color-green)';
                    break;

                case 'stress':
                    color = 'var(--color-blue)';
                    break;
            }
        }

        // num：直接显示数值
        // percent：显示百分比
        let text = e.text || '';

        that.updater.set({
            text,
            num: num.toFixed(i),
            color,
            degree,
            count,
            baseOpacity: +baseOpacity
        });

        let altered = that.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});