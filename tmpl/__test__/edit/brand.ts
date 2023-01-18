import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@base.html',
    init(e) {
        let list = [{
            text: '默认态品牌色，支持渐变',
            value: '--color-brand',
        }, {
            text: '默认态品牌渐变色',
            value: '--color-brand-gradient',
        }, {
            text: '默认态品牌色区块文案色',
            value: '--color-brand-text',
        }, {
            text: 'hover态品牌色，支持渐变',
            value: '--color-brand-hover',
        }, {
            text: 'hover态品牌渐变色',
            value: '--color-brand-hover-gradient',
        }, {
            text: 'hover态品牌色区块文案色',
            value: '--color-brand-text-hover',
        }, {
            text: '品牌对比色',
            value: '--color-brand-vs',
        }, {
            text: '品牌透明度辅助色',
            value: '--color-brand-opacity',
        }, {
            text: '',
            value: '--color-brand-light',
        }];
    },
    render() {
        this.updater.digest();
    }
});