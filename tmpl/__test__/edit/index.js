let Magix = require('magix');
let Base = require('./theme');
let $ = require('$');
Magix.applyStyle('@theme.less');

module.exports = Base.extend({
    tmpl: '@index.html',
    init(e){
        this.initTheme();

        let list = [{
            key: '--line-height',
            text: '12',
            tip: '123'
        },
        {
            key: '--font-size',
            text: '12',
            tip: '123'
        },
        {
            key: '--input-height',
            text: '12',
            tip: '123'
        },
        {
            key: '--input-small-height',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-brand',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-brand-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-brand-vs',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-brand-light',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-brand-opacity',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-brand-text',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-brand-text-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-border',
            text: '12',
            tip: '123'
        },
        {
            key: '--border-radius',
            text: '12',
            tip: '123'
        },
        {
            key: '--border-highlight',
            text: '12',
            tip: '123'
        },
        {
            key: '--border-highlight-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-border-radius',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-brand',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-brand-gradient',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-brand-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-brand-gradient-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-brand-text',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-brand-text-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-text',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-text-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-border',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-border-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-bg',
            text: '12',
            tip: '123'
        },
        {
            key: '--btn-bg-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-warn',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-red',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-orange',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-green',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-blue',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-disabled',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-bg',
            text: '12',
            tip: '123'
        },
        {
            key: '--color-bg-hover',
            text: '12',
            tip: '123'
        },
        {
            key: '--duration',
            text: '12',
            tip: '123'
        },
        {
            key: '--app-brand',
            text: '12',
            tip: '123'
        },
        {
            key: '--app-brand-gradient',
            text: '12',
            tip: '123'
        },
        {
            key: '--app-nav-bg',
            text: '12',
            tip: '123'
        },
        {
            key: '--app-bg',
            text: '12',
            tip: '123'
        }]

        let root = getComputedStyle(document.documentElement);
        let itemWidth = root.getPropertyValue('--edit-theme-width').trim();
        this.updater.set({
            custom: '#51a300',
            cur: 2,
            itemWidth: +itemWidth.replace('px', ''),
            list
        })
    },
    render() {
        this.updater.digest();
    },
    'selectTheme<click>'(event){
        let cur = event.params.cur;
        this.updater.digest({
            cur
        })
    },
    'changeColor<change>'(event){
        this.updater.digest({
            cur: 3
        })
    }
});