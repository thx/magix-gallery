let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@notice.less');

let ClassNames = {
    error: '@notice.less:error',
    warn: '@notice.less:warn',
    highlight: '@notice.less:highlight',
    border: '@notice.less:border',
    notice: '@notice.less:notice'
}

module.exports = Magix.View.extend({
    tmpl: '@notice.html',
    init(extra) {
        // 默认左对齐
        let textAlign = extra.textAlign || 'left';

        let classNames = [ClassNames.notice];
        // 如果用户自定义了色值以自定义色值为准
        let color = extra.color,
            rgba,
            styles = [],
            border = (extra.border + '' === 'true'),
            icon  = !(extra.icon + '' === 'false'),
            type = extra.type;

        if (border) {
            classNames.push(ClassNames.border);
        }
        if (!color) {
            if (type && ClassNames[type]) {
                classNames.push(ClassNames[type]);
            }
        } else {
            let result = this.hexToRgb(color);
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
    },

    hexToRgb(hex) {
        if (!hex) {
            return null;
        }
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
});