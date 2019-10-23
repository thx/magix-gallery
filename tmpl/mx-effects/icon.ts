/**
 * 打标组件
 */
import Magix from 'magix';
import * as View from '../mx-util/view';

export default View.extend({
    tmpl: '@icon.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        // 优先级自定义色值color > 预置类型type
        let color = extra.color,
            colorText,
            mode = extra.mode || 'solid',
            type = extra.type || 'common';

        if (!color) {
            // 未自定义颜色的时候
            switch (type) {
                case 'common':
                    switch (mode) {
                        case 'solid': // 实心
                            color = '#cccccc';
                            colorText = '#ffffff';
                            break;
                        case 'hollow': // 空心
                            color = '#cccccc';
                            colorText = '#999999';
                            break;
                    }
                    break;
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
            }
        }

        let styles = [];
        switch (mode) {
            case 'solid': // 实心
                styles.push(
                    `background-color: ${color}`,
                    `border: 1px solid ${color}`,
                    `color: ${(colorText || extra.colorText || '#ffffff')}`
                )
                break;
            case 'hollow': // 空心
                styles.push(
                    `background-color: transparent`,
                    `border: 1px solid ${color}`,
                    `color: ${(colorText || extra.colorText || color)}`
                )
                break;
        }
        this.updater.set({
            content: extra.content || '打标',
            styles: styles.join(';'),
            tip: extra.tip || ''
        })

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();
    }
});
