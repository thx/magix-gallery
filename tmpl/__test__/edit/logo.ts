import Magix from 'magix';
import Base from './theme';
import * as $ from '$';
Magix.applyStyle('@logo.less');

export default Base.extend({
    tmpl: '@logo.html',
    init(e) {
        this.updater.set({
            outers: [{
                key: 'integral',
                text: 'B类设计语言体系 - 老版样式组件',
                img: 'https://img.alicdn.com/imgextra/i4/O1CN01r8xjmx1d4rS1ol1SD_!!6000000003683-2-tps-264-48.png',
                link: '#!/all/revision/update2019'
            }, {
                key: 'fusion',
                text: '适配Fusion Design',
                img: 'https://dailyfusion.alicdn.com/images/OmkCCmo17m52.png',
                link: '#!/all/revision/qianniu'
            }],
            info: {
                showBtns: true,
                color: e.color
            }
        });
        this['@{owner.node}'] = $('#' + this.id);
    },
    async render() {
        let d = await this.initTheme();
        this.updater.digest(d);
    },
    'selectTheme<click>'(event) {
        let key = event.params.key;
        let themes = this.updater.get('themes');
        let cur = {};
        for (let i = 0; i < themes.length; i++) {
            if (themes[i].key == key) {
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