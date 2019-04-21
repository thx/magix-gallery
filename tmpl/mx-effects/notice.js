let Magix = require('magix');
let $ = require('$');
let Util = require('@../mx-color/util');
Magix.applyStyle('@notice.less');

let ClassNames = {
    common: '@notice.less:common',
    highlight: '@notice.less:highlight',
    border: '@notice.less:border',
    notice: '@notice.less:notice'
}

module.exports = Magix.View.extend({
    tmpl: '@notice.html',
    init(extra) {
        // 默认左对齐
        let textAlign = extra.textAlign || 'left';

        let classNames = [];

        // 如果用户自定义了色值以自定义色值为准
        let color = extra.color,
            rgba,
            styles = [],
            border = (extra.border + '' === 'true'),
            icon = !(extra.icon + '' === 'false'),
            type = extra.type || 'common';

        if (border) {
            classNames.push(ClassNames.border);
        }
        if (!color) {
            // 未自定义颜色的时候
            if (type == 'common' || type == 'highlight') {
                classNames.push(ClassNames[type]);
            }
            if(type == 'error' || type == 'warn'){
                let root = getComputedStyle(document.documentElement);
                let key = (type == 'error') ? '--color-red' : '--color-warn';
                color = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
                color = color.trim();
            }
        }

        if (color) {
            let result = Util.toRgb(color);
            rgba = `rgba(${result.r}, ${result.g}, ${result.b}, 0.2)`;
            styles.push(
                'color:' + color,
                'background-color:' + rgba
            )
            if (border) {
                styles.push('border-color:' + color);
            }
        }

        this.updater.set({
            content: extra.content || '提示内容',
            classNames: classNames.join(' '),
            textAlign,
            color,
            styles: styles.join(';'),
            icon
        })
    },
    render() {
        this.updater.digest();
    }
});