import Magix from 'magix';
import Base from './index';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@trigger.html',
    render() {
        // -- 占位符
        this.updater.digest({
            list1: [
                '--input-v-gap', '--input-h-gap', '--input-min-width', '--input-height',
                '--input-font-size', '--border-radius', '--', '--',
                '--input-small-v-gap', '--input-small-h-gap', '--input-small-min-width', '--input-small-height',
                '--input-small-font-size', '--border-small-radius', '--', '--',
                '--input-large-v-gap', '--input-large-h-gap', '--input-large-min-width', '--input-large-height',
                '--input-large-font-size', '--border-large-radius', '--', '--',
            ],
            list2: [
                '--input-gap-border', '--', '--', '--',
                '--bg-highlight', '--border-highlight', '--', '--',
                '--bg-highlight-hover', '--border-highlight-hover', '--', '--',
                '--bg-highlight-active', '--border-highlight-active', '--', '--',
            ],
            list3: [
                '--output-offset', '--output-item-height', '--', '--',
                '--output-v-gap', '--output-h-gap', '--output-border-radius', '--',
                '--output-small-v-gap', '--output-small-h-gap', '--output-small-border-radius', '--',
                '--output-large-v-gap', '--output-large-h-gap', '--output-large-border-radius', '--',
            ]
        });
    }
});