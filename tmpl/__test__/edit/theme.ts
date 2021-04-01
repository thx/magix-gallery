import Magix from 'magix';
import * as $ from '$';
import * as View from '../../mx-util/view';

export = View.extend({
    initTheme() {
        let that = this;
        let themes = [{
            key: 'feeds',
            text: '超级推荐',
            colors: {
                '--color-brand': '#385ACC',
                '--color-brand-hover': '#28449F',
                '--color-brand-vs': '#f7664d',
                '--color-brand-light': '#d7def6',
                '--color-brand-opacity': '#eff2fb',

                '--btn-brand': '#385ACC',
                '--btn-brand-hover': '#28449F',
                '--btn-brand-text': '#ffffff',
                '--btn-brand-text-hover': '#ffffff',
                '--btn-text': '#333',
                '--btn-text-hover': '#333',
                '--btn-border': '#637ba5',
                '--btn-border-hover': '#637ba5',
                '--btn-bg': '#f3f5fc',
                '--btn-bg-hover': '#e7eaf4',

                '--app-brand': '#385ACC',
                '--app-brand-gradient': '#5d56dd',
            }
        }, {
            key: 'zuanshi',
            text: '智钻',
            colors: {
                '--color-brand': '#4d7fff',
                '--color-brand-hover': '#4470e0',
                '--color-brand-vs': '#14c9ce',
                '--color-brand-light': '#dfe8ff',
                '--color-brand-opacity': '#edf2ff',

                '--btn-brand': '#4d7fff',
                '--btn-brand-hover': '#4470e0',
                '--btn-brand-text': '#ffffff',
                '--btn-brand-text-hover': '#ffffff',
                '--btn-text': '#333',
                '--btn-text-hover': '#333',
                '--btn-border': '#4d7fff',
                '--btn-border-hover': '#4d7fff',
                '--btn-bg': '#edf2ff',
                '--btn-bg-hover': '#dfe8ff',

                '--app-brand': '#4d7fff',
                '--app-brand-gradient': '#4d7fff',
            }
        }, {
            key: 'subway',
            text: '直通车',
            colors: {
                '--color-brand': '#ff7000',
                '--color-brand-hover': '#e07800',
                '--color-brand-vs': '#91b514',
                '--color-brand-light': '#ffe6d6',
                '--color-brand-opacity': '#fff3e9',

                '--btn-brand': '#ff7000',
                '--btn-brand-hover': '#e07800',
                '--btn-brand-text': '#ffffff',
                '--btn-brand-text-hover': '#ffffff',
                '--btn-text': '#333',
                '--btn-text-hover': '#333',
                '--btn-border': '#9095a1',
                '--btn-border-hover': '#666666',
                '--btn-bg': '#ffffff',
                '--btn-bg-hover': '#f5f5f5',

                '--app-brand': '#FF7000',
                '--app-brand-gradient': '#FF7000',
            }
        }, {
            key: 'live',
            text: '超级直播',
            colors: {
                '--color-brand': '#FF2467',
                '--color-brand-hover': '#E51453',
                '--color-brand-vs': '#f7664d',
                '--color-brand-light': '#FFEFEF',
                '--color-brand-opacity': '#FFF9F9',

                '--btn-brand': '#FF1E88',
                '--btn-brand-hover': '#FF2467',
                '--btn-brand-text': '#ffffff',
                '--btn-brand-text-hover': '#ffffff',
                '--btn-text': '#333',
                '--btn-text-hover': '#333',
                '--btn-border': '#C2C3C9',
                '--btn-border-hover': '#C2C3C9',
                '--btn-bg': '#f9f9f9',
                '--btn-bg-hover': '#f9f9f9',

                '--app-brand': '#FF1E88',
                '--app-brand-gradient': '#FF2851',
            }
        }];
        themes.forEach(t => {
            t.colors = Magix.mix(that['@{get.base}'](t.colors), t.colors);
        })
        this.updater.set({
            themes
        })
        this['@{owner.node}'] = $('#' + this.id);
    },

    '@{get.base}'(base) {
        base = base || {};
        let brand = base['--color-brand'];
        let rgb = this['@{color.to.rgb}'](brand);
        let r = rgb.r, g = rgb.g, b = rgb.b;
        let brandHover = base['--color-brand-hover'] || this['@{color.to.hex}'](this['@{color.shade}'](brand, 0.1)),
            brandVs = base['--color-brand-vs'] || '#14c9ce',
            brandLight = base['--color-brand-light'] || this['@{color.to.hex}']({
                r, g, b, alpha: 0.2
            }),
            brandOpacity = base['--color-brand-opacity'] || this['@{color.to.hex}']({
                r, g, b, alpha: 0.1
            }),
            brandText = base['--color-brand-text'] || '#ffffff';

        return {
            // 品牌色
            '--color-brand': brand,
            '--color-brand-hover': brandHover,
            '--color-brand-vs': brandVs,
            '--color-brand-light': brandLight,
            '--color-brand-opacity': brandOpacity,

            // 品牌按钮颜色
            '--btn-brand': brand,
            '--btn-brand-hover': brandHover,
            '--btn-brand-text': brandText,
            '--btn-brand-text-hover': brandText,
            '--btn-text': '#333333',
            '--btn-text-hover': '#333333',
            '--btn-border': brand,
            '--btn-border-hover': brand,
            '--btn-bg': brandOpacity,
            '--btn-bg-hover': brandLight,

            // 项目相关颜色
            '--app-brand': brand,
            '--app-brand-gradient': brandHover,

            // 字体相关参数，输入或下拉框高度
            '--line-height': '1.5',
            '--font-size': '12px',
            '--input-height': '32px',
            '--input-small-height': '26px',

            // 边框 
            '--color-border': '#e6e6e6',
            '--border-radius': '4px',
            '--border-highlight': '#9095A1',
            '--border-highlight-hover': '#677088',

            // 提示颜色
            '--color-warn': '#ffb400',
            '--color-red': '#d52112',
            '--color-green': '#30ab66',

            // 背景色 
            '--color-bg': '#f5f5f5',
            '--color-bg-hover': '#eee',

            // 动画
            '--duration': '0.25s',
        }
    }
});