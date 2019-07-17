let Magix = require('magix');
let Base = require('./theme');
let $ = require('$');
Magix.applyStyle('@theme.less');

module.exports = Base.extend({
    tmpl: '@logo.html',
    init(e){
        this.updater.set({
            info: {
                showBtns: true,
                color: e.color
            }
        });
        this.initTheme();
    },
    render() {
        this.updater.digest();
    },
    'selectTheme<click>'(event) {
        let key = event.params.key;
        let themes = this.updater.get('themes');
        let cur = {};
        for (let i = 0; i < themes.length; i++) {
            if(themes[i].key == key){
                cur = themes[i];
                break;
            }
        }

        this['@{owner.node}'].trigger($.Event('change', {
            colors: cur.colors
        }));
    },

    'selectColor<change>'(event) {
        event.stopPropagation();
        let brand = event.color;
        let colors = this['@{get.base}']({
            '--color-brand': brand
        })
        this['@{owner.node}'].trigger($.Event('change', {
            brand,
            colors
        }));
    }
});