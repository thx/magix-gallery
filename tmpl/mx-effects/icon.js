let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@icon.less');

let ClassNames = {
    solid: '@icon.less:solid-icon',
    hollow: '@icon.less:hollow-icon',
    common: '@icon.less:common',
    error: '@icon.less:error',
    warn: '@icon.less:warn',
    highlight: '@icon.less:highlight',
}

module.exports = Magix.View.extend({
    tmpl: '@icon.html',
    init(extra) {
        // 如果用户自定义了色值以自定义色值为准
        let color = extra.color,
            styles = [],
            mode = extra.mode || 'solid',
            type = extra.type || 'common';
        let classNames = [];
        if(ClassNames[mode]){
            classNames.push(ClassNames[mode]);
        }
        if(ClassNames[type]){
            classNames.push(ClassNames[type]);
        }
        
        // 自定义颜色
        if (color) {
            switch (mode) {
                case 'solid':
                    styles.push(
                        'background-color:' + color
                    )
                    break;
                case 'hollow':
                    styles.push(
                        'color:' + color,
                        'border: 1px solid ' + color
                    )
                    break;
            }
        }
        this.updater.set({
            content: extra.content || 'icon',
            classNames: classNames.join(' '),
            styles: styles.join(';'),
            tip: extra.tip || ''
        })
    },
    render() {
        this.updater.digest();
    }
});