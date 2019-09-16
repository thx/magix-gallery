let Magix = require('magix');
let $ = require('$');
let CSSVarUtil = require('@../mx-util/css-var');

module.exports = Magix.View.extend({
    tmpl: '@icon.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        // 如果用户自定义了色值以自定义色值为准
        let color = extra.color,
            colorText,
            mode = extra.mode || 'solid',
            type = extra.type || 'common';

        if (!color) {
            // 未自定义颜色的时候
            let key;
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
                color = CSSVarUtil.get(key, '#4d7fff');
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