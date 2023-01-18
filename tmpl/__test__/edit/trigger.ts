import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@trigger.html',
    init(e) {
        let list = [
            {
                text: '',
                value: '--input-v-gap',
            },
            {
                text: '',
                value: '--input-h-gap',
            },
            {
                text: '',
                value: '--input-min-width',
            },
            {
                text: '',
                value: '--input-height',
            },
            {
                text: '',
                value: '--input-font-size',
            },
            {
                text: '',
                value: '--border-radius',
            },
            {
                text: '',
                value: '--input-small-v-gap',
            },
            {
                text: '',
                value: '--input-small-h-gap',
            },
            {
                text: '',
                value: '--input-small-min-width',
            },
            {
                text: '',
                value: '--input-small-height',
            },
            {
                text: '',
                value: '--input-small-font-size',
            },
            {
                text: '',
                value: '--border-small-radius',
            },
            {
                text: '',
                value: '--input-large-v-gap',
            },
            {
                text: '',
                value: '--input-large-h-gap',
            },
            {
                text: '',
                value: '--input-large-min-width',
            },
            {
                text: '',
                value: '--input-large-height',
            },
            {
                text: '',
                value: '--input-large-font-size',
            },
            {
                text: '',
                value: '--border-large-radius',
            },
            {
                text: '',
                value: '--input-gap-border',
            },
            {
                text: '',
                value: '--bg-highlight',
            },
            {
                text: '',
                value: '--border-highlight',
            },
            {
                text: '',
                value: '--bg-highlight-hover',
            },
            {
                text: '',
                value: '--border-highlight-hover',
            },
            {
                text: '',
                value: '--bg-highlight-active',
            },
            {
                text: '',
                value: '--border-highlight-active',
            },
            {
                text: '',
                value: '--output-v-gap',
            },
            {
                text: '',
                value: '--output-h-gap',
            },
            {
                text: '',
                value: '--output-border-radius',
            },
            {
                text: '',
                value: '--output-offset',
            },
            {
                text: '',
                value: '--output-item-height',
            },
            {
                text: '',
                value: '--output-small-v-gap',
            },
            {
                text: '',
                value: '--output-small-h-gap',
            },
            {
                text: '',
                value: '--output-small-border-radius',
            },
            {
                text: '',
                value: '--output-large-v-gap',
            },
            {
                text: '',
                value: '--output-large-h-gap',
            },
            {
                text: '',
                value: '--output-large-border-radius',
            }
        ];
    },
    render() {
        this.updater.digest();
    }
});