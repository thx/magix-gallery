import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');
Magix.applyStyle('@../mx-radio/index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        let color = extra.color, styles = '';
        if (color) {
            styles = `
                --color-brand: ${color}; 
                --color-brand-hover: ${color};
                --checkbox-border-hover: ${color};
            `;
        }

        that.updater.set({
            styles,
            checked: (extra.checked + '') === 'true',
            disabled: (extra.disabled + '') === 'true',
            indeterminate: (extra.indeterminate + '') === 'true',
            name: extra.name || '',
            value: extra.value || '',
            text: extra.text || '',
            tip: extra.tip || '',
            img: extra.img || '',
            tagContent: extra.tagContent || '',
            tagColor: extra.tagColor || 'var(--color-red)',
        })

        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    /**
     * 外部mx-stickytable里调用
     */
    setData(data) {
        this.updater.digest(data);

        let { disabled } = this.updater.get();
        document.getElementById(this.id).setAttribute('mx-checkbox-disabled', disabled);
    },
    /**
     * 外部mx-stickytable里调用
     */
    getData() {
        return this.updater.get();
    },
    '@{change}<change>'(e) {
        this.updater.digest({
            checked: e.target.checked,
            indeterminate: false
        })
    }
});