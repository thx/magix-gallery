let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@theme.less');

module.exports = Magix.View.extend({
    tmpl: '@theme.html',
    render() {
        this.updater.digest();
    },
    theme(){
        let feeds = {
            '--color-brand': '#385ACC',
            '--color-brand-hover': '#2e4aa7',
            '--color-brand-vs': '#f7664d',
            '--color-brand-light': 'd7def6',
            '--color-brand-opacity': '#eff2fb',
            '--border-highlight': '#9095A1',
            '--border-highlight-hover': '#677088',
            '--btn-brand': '#385ACC',
            '--btn-brand-gradient': '#5C55DD',
            '--btn-brand-hover': '#28449F',
            '--btn-brand-gradient-hover': '#4741AD',
            '--btn-text': '#333',
            '--btn-text-hover': '#333',
            '--btn-border': '#637ba5',
            '--btn-border-hover': '#637ba5',
            '--btn-bg': '#f3f5fc',
            '--btn-bg-hover': '#e7eaf4',
            '--color-red': '#d52112',
            '--color-green': '#30ab66',
            '--color-bg': '#f5f5f5',
            '--app-brand': '#385ACC',
            '--app-brand-gradient': '#5C55DD'
        }
        let subway = {
            '--color-brand': '#ff831b',
            '--color-brand-hover': '#df7315',
            '--color-brand-vs': '#91b514',
            '--color-brand-light': '#ffe6d5',
            '--color-brand-opacity': '#fff3e9',
            '--btn-brand': '#ff831b',
            '--btn-brand-gradient': '#ff831b',
            '--btn-brand-hover': '#df7315',
            '--btn-brand-gradient-hover': '#df7315',
            '--app-brand': '#ff831b',
            '--app-brand-gradient': '#ff831b'
        }
    }
});