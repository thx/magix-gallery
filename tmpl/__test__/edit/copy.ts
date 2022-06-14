import Magix from 'magix';
Magix.applyStyle('@copy.less');

export default Base.extend({
    tmpl: '@copy.html',
    init(options) {
        this.updater.set(options);
        let colors = options.colors;

        let list1 = [],
            list2 = [];
        for (let key in colors) {
            let value = colors[key];
            list1.push(`${key.replace('--', '@')}: ${value};`);
            list2.push(`${key}: ${value};`);
        }
        this.updater.set({
            viewId: this.id,
            height: window.innerHeight - 220,
            tip1: list1.join('<br />'),
            tip2: list2.join('<br />')
        })
    },
    render() {
        this.updater.digest();
    },
    'done<success>'(e) {
        let index = e.params.index;
        this.updater.digest({
            [`success${index}`]: true
        })
    }
});