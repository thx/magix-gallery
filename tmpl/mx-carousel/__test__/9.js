let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@1.less');

module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            list: ['var(--color-brand)', 'var(--color-brand-vs)', 'var(--color-warn)'],
            active: 1
        });
    },
    'next<click>'(e) {
        let carousel = Magix.Vframe.get(`${this.id}_carousel`);
        carousel.invoke('next');
    },
    'prev<click>'(e) {
        let carousel = Magix.Vframe.get(`${this.id}_carousel`);
        carousel.invoke('prev');
    }
});