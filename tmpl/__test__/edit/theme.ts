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
                '--color-brand-hover': '#28449F',
                '--color-brand-vs': '#f7664d',
                '--color-brand-light': '#d7def6',
                '--color-brand-opacity': '#eff2fb',
                '--color-brand-text': '#ffffff',
                '--color-brand-text-hover': '#ffffff',

                // 品牌按钮颜色
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

                // 项目相关颜色
                '--app-brand': '#385ACC',
                '--app-brand-gradient': '#5d56dd',

                // hover边框色为品牌色 
                '--border-highlight-hover': '#385ACC',

                // hover背景色为brand-opacity
                '--color-bg-hover': '#eff2fb',
            }
        }, {
            key: 'subway',
            text: '橙色版',
            colors: {
                // 品牌色
                '--color-brand': '#ff7000',
                '--color-brand-hover': '#e07800',
                '--color-brand-vs': '#91b514',
                '--color-brand-light': '#ffe6d6',
                '--color-brand-opacity': '#fff3e9',
                '--color-brand-text': '#ffffff',
                '--color-brand-text-hover': '#ffffff',

                // 品牌按钮颜色
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

                // 项目相关颜色
                '--app-brand': '#FF7000',
                '--app-brand-gradient': '#FF7000',

                // hover边框色为品牌色 
                '--border-highlight-hover': '#FF7000',

                // hover背景色为brand-opacity
                '--color-bg-hover': '#fff3e9',
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
            // 字体相关参数，输入或下拉框高度
            '--font-family': 'Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif',
            '--line-height': '1.5',
            '--font-size': '12px',
            '--input-height': '32px',
            '--input-small-height': '26px',

            // 品牌色
            '--color-brand': brand,
            '--color-brand-hover': brandHover,
            '--color-brand-vs': brandVs,
            '--color-brand-light': brandLight,
            '--color-brand-opacity': brandOpacity,
            '--color-brand-text': '#ffffff',
            '--color-brand-text-hover': '#ffffff',

            // 品牌按钮颜色
            '--btn-border-radius': '4px',
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
            '--app-nav-bg': '#303a58',
            '--app-bg': '#e8ebf2',

            // 最小宽度定义
            '--app-min-width': '1420px',

            // 边框 
            '--color-border': '#e6e6e6',
            '--border-radius': '4px',
            '--border-highlight': '#9095A1',
            '--border-highlight-hover': brand,

            // 提示颜色
            '--color-warn': '#ffb400',
            '--color-red': '#d52112',
            '--color-green': '#30ab66',
            '--color-blue': '#4d7fff',

            // 背景色 
            '--color-bg': '#f5f5f5',
            '--color-bg-hover': brandOpacity,

            // 动画
            '--duration': '0.2s',
        }
    }
});