let Magix = require('magix');
let $ = require('$');
let Util = require('@../mx-color/util');
Magix.applyStyle('@notice.less');

module.exports = Magix.View.extend({
    tmpl: '@notice.html',
    init(extra) {
        let root = getComputedStyle(document.documentElement);

        // 如果用户自定义了色值以自定义色值为准
        let color = extra.color,
            styles = [],
            border = (extra.border + '' === 'true'),  // 默认false
            radius = (extra.radius + '' === 'true'),  // 默认false
            icon = !(extra.icon + '' === 'false'),  // 默认true
            closable = (extra.closable + '' === 'true'),// 默认false
            type = extra.type || 'common';

        if (border) {
            radius = true;
            styles.push(
                'border-width: 1px',
                'border-style: solid'
            )
        }
        if (radius) {
            let borderRadius = document.body.style.getPropertyValue('--border-radius') || root.getPropertyValue('--border-radius');
            borderRadius = borderRadius.trim();
            styles.push(`border-radius: ${borderRadius}`);
        }

        let textAlign = extra.textAlign || 'left',  // 默认左对齐
            colorBg,
            colorBorder,
            colorIcon,
            colorText;
        if (!color) {
            // 未自定义颜色的时候
            let key;
            switch (type) {
                case 'common':
                    colorBg = document.body.style.getPropertyValue('--color-bg') || root.getPropertyValue('--color-bg');
                    colorBg = colorBg.trim();
                    colorBorder = document.body.style.getPropertyValue('--color-border') || root.getPropertyValue('--color-border');
                    colorBorder = colorBorder.trim();
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
            }
            if (key) {
                color = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
                color = color.trim();
            }
        }
        if (color) {
            // 主体颜色
            let result = Util.toRgb(color);
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

        this.updater.set({
            show: true,
            content: extra.content || $('#' + this.id).html() || '提示内容',
            styles: styles.join(';'),
            colorIcon,
            icon,
            closable
        })
    },
    render() {
        this.updater.digest();
    }
});