import Magix from 'magix';
import Base from './index';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@brand.html',
    render() {
        this.updater.digest({
            list1: [
                '--color-brand', '--color-brand-gradient', '--color-brand-text',
                '--color-brand-hover', '--color-brand-hover-gradient', '--color-brand-text-hover',
            ],
            list2: [
                '--color-brand', '--color-brand-vs',
            ],
            list3: [
                '--color-brand', '--color-brand-opacity', '--color-brand-light',
            ]
        });
    }
});