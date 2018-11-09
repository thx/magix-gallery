let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@anim.less');
let ClassNames = {
    brand: '@anim.less:bg-brand',
    grey: '@anim.less:bg-grey'
}

module.exports = Magix.View.extend({
    tmpl: '@anim.html',
    init(extra) {
        let type = extra.type || 'grey';

        let classNames = [], styles = [];
        if(!extra.color){
            classNames.push(ClassNames[type])
        }else{
            // 自定义颜色
            styles.push('background-color:' + extra.color)
        }
        this.updater.set({
            mode: extra.mode || 'circle-spinner',
            size: extra.size || 60,
            styles: styles.join(';'),
            classNames: classNames.join(' ')
        })
    },
    render() {
        this.updater.digest();
    }
});