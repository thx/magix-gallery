let Magix = require('magix');
let Base = require('./base');
let $ = require('$');
let Util = require('@./util');
Magix.applyStyle('@notice.less');

let ClassNames = {
    common: '@notice.less:common',
    error: '@notice.less:error',
    warn: '@notice.less:warn',
    highlight: '@notice.less:highlight',
    border: '@notice.less:border',
    notice: '@notice.less:notice'
}

module.exports = Base.extend({
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
            type = extra.type || 'common';

        if (border) {
            classNames.push(ClassNames.border);
        }
        if (!color) {
            if (type && ClassNames[type]) {
                classNames.push(ClassNames[type]);
            }
        } else {
            let result = Util.hexToRgb(color);
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
    }
});