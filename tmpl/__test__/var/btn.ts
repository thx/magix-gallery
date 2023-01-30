import Magix from 'magix';
import Base from './index';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@btn.html',
    render() {
        // -- 占位符
        this.updater.digest({
            list1: [
                '--btn-brand', '--btn-brand-gradient', '--btn-brand-text', '--',
                '--btn-brand-hover', '--btn-brand-gradient-hover', '--btn-brand-text-hover', '--'
            ],
            list2: [
                '--btn-border', '--btn-bg', '--btn-text', '--',
                '--btn-border-hover', '--btn-bg-hover', '--btn-text-hover', '--'
            ],
            list3: [
                '--btn-h-gap', '--btn-min-width', '--btn-font-size', '--btn-border-radius',
                '--btn-small-h-gap', '--btn-small-min-width', '--btn-small-font-size', '--btn-small-border-radius',
                '--btn-large-h-gap', '--btn-large-min-width', '--btn-large-font-size', '--btn-large-border-radius',
            ]
        });
    }
});