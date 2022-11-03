import Magix from 'magix';
import * as View from '../../mx-util/view';

export default View.extend({
    initTheme() {
        let themes = [{
            key: 'feeds',
            text: '深蓝色版',
            colors: {
                // 品牌色
                '--color-brand': '#385ACC',
                '--color-brand-gradient': '#5d56dd',
                '--color-brand-hover': '#28449F',
                '--color-brand-hover-gradient': '#28449F',
                '--color-brand-opacity': '#eff2fb',
                '--color-brand-light': '#d7def6',
                '--color-brand-text': '#ffffff',
                '--color-brand-text-hover': '#ffffff',
                '--color-brand-vs': '#f7664d',

                // 品牌按钮颜色
                '--btn-brand': '#385ACC',
                '--btn-brand-gradient': '#5d56dd',
                '--btn-brand-text': '#ffffff',
                '--btn-brand-hover': '#28449F',
                '--btn-brand-gradient-hover': '#28449F',
                '--btn-brand-text-hover': '#ffffff',

                // 次要按钮
                '--btn-border': '#637ba5',
                '--btn-bg': '#f3f5fc',
                '--btn-text': '#333',
                '--btn-border-hover': '#637ba5',
                '--btn-bg-hover': '#e7eaf4',
                '--btn-text-hover': '#333',
            }
        }, {
            key: 'subway',
            text: '橙色版',
            colors: {
                // 品牌色
                '--color-brand': '#ff7000',
                '--color-brand-gradient': '#ff7000',
                '--color-brand-hover': '#e07800',
                '--color-brand-hover-gradient': '#e07800',
                '--color-brand-opacity': '#fff3e9',
                '--color-brand-light': '#ffe6d6',
                '--color-brand-text': '#ffffff',
                '--color-brand-text-hover': '#ffffff',
                '--color-brand-vs': '#91b514',

                // 品牌按钮颜色
                '--btn-brand': '#ff7000',
                '--btn-brand-gradient': '#ff7000',
                '--btn-brand-text': '#ffffff',
                '--btn-brand-hover': '#e07800',
                '--btn-brand-gradient-hover': '#e07800',
                '--btn-brand-text-hover': '#ffffff',

                // 次要按钮
                '--btn-border': '#9095a1',
                '--btn-bg': '#ffffff',
                '--btn-text': '#333',
                '--btn-border-hover': '#666666',
                '--btn-bg-hover': '#f5f5f5',
                '--btn-text-hover': '#333',
            }
        }];
        themes.forEach(t => {
            t.colors = Magix.mix(this['@{get.base}'](t.colors), t.colors);
        });

        return new Promise(resolve => {
            resolve({
                themes
            })
        })
    },

    '@{get.base}'(base) {
        base = base || {};
        let brand = base['--color-brand'];
        let rgb = this['@{color.to.rgb}'](brand);
        let r = rgb.r, g = rgb.g, b = rgb.b;

        // 品牌色关联
        let brandHover = base['--color-brand-hover'] || this['@{color.to.hex}'](this['@{color.shade}'](brand, 0.1)),
            brandLight = base['--color-brand-light'] || this['@{color.to.hex}']({ r, g, b, alpha: 0.2 }),
            brandOpacity = base['--color-brand-opacity'] || this['@{color.to.hex}']({ r, g, b, alpha: 0.1 }),
            brandText = base['--color-brand-text'] || '#ffffff';

        var brandGradient = base['--color-brand-gradient'] || brand,
            brandGradientHover = base['--color-brand-hover-gradient'] || brandHover,
            brandTextHover = base['--btn-brand-text-hover'] || brandText;

        return {
            // 品牌色
            '--color-brand': brand,
            '--color-brand-gradient': brandGradient,
            '--color-brand-hover': brandHover,
            '--color-brand-hover-gradient': brandGradientHover,
            '--color-brand-opacity': brandOpacity,
            '--color-brand-light': brandLight,
            '--color-brand-text': brandText,
            '--color-brand-text-hover': brandTextHover,
            '--color-brand-vs': base['--color-brand-vs'] || '#14c9ce',

            /* 按钮尺寸相关 */
            '--btn-border-radius': base['--btn-border-radius'] || '4px',

            /* 品牌按钮颜色 */
            '--btn-brand': base['--btn-brand'] || brand,
            '--btn-brand-gradient': base['--btn-brand-gradient'] || brandGradient,
            '--btn-brand-text': base['--btn-brand-text'] || brandText,
            '--btn-brand-hover': base['--btn-brand-hover'] || brandHover,
            '--btn-brand-gradient-hover': base['--btn-brand-gradient-hover'] || brandGradientHover,
            '--btn-brand-text-hover': base['--btn-brand-text-hover'] || brandTextHover,

            /*次要按钮*/
            '--btn-border': base['--btn-border'] || brand,
            '--btn-bg': base['--btn-bg'] || brandOpacity,
            '--btn-text': base['--btn-text'] || '#333333',
            '--btn-border-hover': base['--btn-border-hover'] || brand,
            '--btn-bg-hover': base['--btn-bg-hover'] || brandLight,
            '--btn-text-hover': base['--btn-text-hover'] || '#333333',

            // 字体相关参数，输入或下拉框高度
            '--line-height': base['--line-height'] || '1.5',
            '--font-size': base['--font-size'] || '12px',

            // 背景色
            '--color-bg': base['--color-bg'] || '#f5f5f5',

            // 边框
            '--color-border': base['--color-border'] || '#e6e6e6',
            '--border-radius': base['--border-radius'] || '4px',

            // trigger边框，背景色
            '--bg-highlight': base['--bg-highlight'] || '#ffffff',
            '--border-highlight': base['--border-highlight'] || '#9095A1',
            '--border-highlight-shadow': base['--border-highlight-shadow'] || 'none',
            '--bg-highlight-hover': base['--bg-highlight-hover'] || '#ffffff',
            '--border-highlight-hover': base['--border-highlight-hover'] || brand,
            '--border-highlight-shadow-hover': base['--border-highlight-shadow-hover'] || 'none',
            '--bg-highlight-active': base['--bg-highlight-active'] || '#ffffff',
            '--border-highlight-active': base['--border-highlight-active'] || brand,
            '--border-highlight-shadow-active': base['--border-highlight-shadow-active'] || 'none',

            // 提示颜色
            '--color-warn': base['--color-warn'] || '#ffb400',
            '--color-red': base['--color-red'] || '#d52112',
            '--color-green': base['--color-green'] || '#30ab66',
            '--color-blue': base['--color-blue'] || '#4d7fff',

            // 项目相关颜色
            '--app-nav-bg': base['--app-nav-bg'] || '#303a58',
            '--app-bg': base['--app-bg'] || '#e8ebf2',
        }
    }
});