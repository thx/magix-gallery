/**
 * 提示公告组件
 */
import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@notice.less');

export default View.extend({
    tmpl: '@notice.html',
    init(extra) {
        let color = extra.color,
            border = (extra.border + '' === 'true'),  // 默认无边框 false
            radius = (extra.radius + '' === 'true'),  // 默认无圆角 false
            icon = !(extra.icon + '' === 'false'),  // 默认有提示icon true
            closable = (extra.closable + '' === 'true'),// 默认无关闭按钮 false
            type = extra.type || 'common',
            textAlign = extra.textAlign || 'left';  // 默认左对齐

        let styles = [];
        if (border) {
            // 有边框的情况下一定有圆角
            radius = true;
            styles.push(
                'border-width: 1px',
                'border-style: solid'
            )
        }
        if (radius) {
            styles.push('border-radius: var(--border-radius)');
        }

        // 优先级自定义色值color > 预置类型type
        let colorBg, colorBorder, colorIcon, colorText;
        if (!color) {
            // 未自定义颜色的时候
            let key;
            switch (type) {
                case 'common':
                    colorBg = this['@{get.css.var}']('--color-bg', '#fafafa');
                    colorBorder = this['@{get.css.var}']('--color-border', '#e6e6e6');
                    colorIcon = '#cccccc';
                    break;
                case 'highlight':
                    key = '--color-brand';
                    break;
                case 'error':
                    key = '--color-red';
                    break;
                case 'warn':
                    key = '--color-warn';
                    break;
                case 'pass':
                    key = '--color-green';
                    break;
            }
            if (key) {
                color = this['@{get.css.var}'](key, '#4d7fff');
            }
        }
        if (color) {
            // 主体颜色，背景加透明度
            let result = this['@{color.to.rgb}'](color);
            colorBg = `rgba(${result.r}, ${result.g}, ${result.b}, 0.1)`;
            colorBorder = color;
            colorIcon = color;
        }
        colorBg = extra.colorBg || colorBg;
        colorBorder = extra.colorBorder || colorBorder;
        colorIcon = extra.colorIcon || colorIcon;
        colorText = extra.colorText || '#666';
        styles.push(
            'background-color:' + colorBg,
            'border-color:' + colorBorder,
            'color:' + colorText,
            'text-align:' + textAlign
        )
        let el = document.getElementById(this.id) || {}
        this.updater.set({
            show: true,
            content: extra.content || el.innerHTML || '提示内容',
            styles: styles.join(';'),
            colorIcon,
            icon,
            closable
        })
    },

    render() {
        this.updater.digest();
    },
    'close<click>'(event) {
        this.updater.digest({
            show: false
        })
    }
});
