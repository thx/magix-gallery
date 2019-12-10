/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/edit/theme",["magix","../../mx-util/view"],(require,exports,module)=>{
/*magix_1,View*/

"use strict";
var magix_1 = require("magix");
var View = require("../../mx-util/view");
module.exports = View.extend({
    initTheme: function () {
        var that = this;
        var themes = [{
                key: 'zuanshi',
                text: '智钻',
                colors: {
                    '--color-brand': '#4d7fff',
                    '--color-brand-hover': '#4470e0',
                    '--color-brand-vs': '#14c9ce',
                    '--color-brand-light': '#dfe8ff',
                    '--color-brand-opacity': '#edf2ff'
                },
                styles: 'background-color: #4d7fff;'
            }, {
                key: 'subway',
                text: '直通车',
                colors: {
                    '--color-brand': '#ff831b',
                    '--color-brand-hover': '#f07a19',
                    '--color-brand-vs': '#91b514',
                    '--color-brand-light': '#ffe6d6',
                    '--color-brand-opacity': '#fff3e9'
                },
                styles: 'background-color: #ff831b;'
            }, {
                key: 'feeds',
                text: '超级推荐',
                colors: {
                    '--color-brand': '#385ACC',
                    '--color-brand-hover': '#2e4aa7',
                    '--color-brand-vs': '#f7664d',
                    '--color-brand-light': '#d7def6',
                    '--color-brand-opacity': '#eff2fb',
                    '--border-highlight': '#9095A1',
                    '--border-highlight-hover': '#677088',
                    '--btn-brand': '#385ACC',
                    '--btn-brand-gradient': '#5C55DD',
                    '--btn-brand-hover': '#28449F',
                    '--btn-brand-gradient-hover': '#4741AD',
                    '--btn-border': '#637ba5',
                    '--btn-border-hover': '#637ba5',
                    '--btn-bg': '#f3f5fc',
                    '--btn-bg-hover': '#e7eaf4',
                    '--color-bg': '#f5f5f6',
                    '--app-brand': '#385ACC',
                    '--app-brand-gradient': '#5C55DD'
                },
                styles: 'background-color: #385ACC; background-image: linear-gradient(to right, #385ACC, #5C55DD);'
            }];
        themes.forEach(function (t) {
            t.colors = magix_1["default"].mix(that['@{get.base}'](t.colors), t.colors);
        });
        this.updater.set({
            themes: themes
        });
        this['@{owner.node}'] = $('#' + this.id);
    },
    '@{get.base}': function (base) {
        base = base || {};
        var fontSize = base['--font-size'] || 12, borderRadius = base['--border-radius'] || '4px';
        var brand = base['--color-brand'];
        var rgb = this['@{color.to.rgb}'](brand);
        var r = rgb.r, g = rgb.g, b = rgb.b;
        var brandHover = base['--color-brand-hover'] || this['@{color.to.hex}'](this['@{color.shade}'](brand, 0.1)), brandVs = base['--color-brand-vs'] || '#14c9ce', brandLight = base['--color-brand-light'] || this['@{color.to.hex}']({
            r: r, g: g, b: b, alpha: 0.2
        }), brandOpacity = base['--color-brand-opacity'] || this['@{color.to.hex}']({
            r: r, g: g, b: b, alpha: 0.1
        }), brandText = base['--color-brand-text'] || '#ffffff';
        return {
            //字体相关参数，输入或下拉框高度
            '--line-height': '1.5',
            '--font-size': fontSize + "px",
            '--input-height': (fontSize + 20) + "px",
            '--input-small-height': (fontSize + 14) + "px",
            // 品牌色
            '--color-brand': brand,
            '--color-brand-hover': brandHover,
            '--color-brand-vs': brandVs,
            '--color-brand-light': brandLight,
            '--color-brand-opacity': brandOpacity,
            '--color-brand-text': brandText,
            '--color-brand-text-hover': brandText,
            //边框
            '--color-border': '#e6e6e6',
            '--border-radius': borderRadius,
            '--border-highlight': '#e6e6e6',
            '--border-highlight-hover': '#cccccc',
            // 品牌按钮颜色，支持渐变
            '--btn-border-radius': borderRadius,
            '--btn-brand': brand,
            '--btn-brand-gradient': brand,
            '--btn-brand-hover': brandHover,
            '--btn-brand-gradient-hover': brandHover,
            '--btn-brand-text': brandText,
            '--btn-brand-text-hover': brandText,
            '--btn-text': '#333333',
            '--btn-text-hover': '#333333',
            '--btn-border': brand,
            '--btn-border-hover': brand,
            '--btn-bg': brandOpacity,
            '--btn-bg-hover': brandLight,
            // 提示颜色
            '--color-warn': '#ffb400',
            '--color-red': '#d52112',
            '--color-orange': '#ff5500',
            '--color-green': '#30ab66',
            '--color-blue': '#4d7fff',
            '--color-disabled': '#eeeeee',
            //背景色
            '--color-bg': '#fafafa',
            '--color-bg-hover': '#eeeeee',
            // 动画
            '--duration': '0.25s',
            // 项目相关颜色
            '--app-brand': brand,
            '--app-brand-gradient': brand,
            '--app-nav-bg': '#303a58',
            '--app-bg': '#e8ebf2'
        };
    }
});

});