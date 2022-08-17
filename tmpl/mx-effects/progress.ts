/**
 * 进度条
 * 1. 条形（支持两边对比）  
 * 2. 渐变条形
 * 3. 圆形
 */
import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@progress.less');

export default View.extend({
    tmpl: '@progress.html',
    init(e) {
        this.assign(e);
    },
    assign(e) {
        let that = this;
        that.updater.snapshot();

        let num = +e.num || 0;
        let s = num + '';
        let i = s.indexOf('.');

        // 最多保留两位小数
        i = (i >= 0) ? s.slice(i + 1).length : 0;
        if (i > 2) { i = 2; };

        // 0 ~ 100
        if (num < 0) { num = 0; };
        if (num > 100) { num = 100; };

        // 文案位置
        let placement = e.textPlacement;
        if (['top', 'bottom', 'left', 'right'].indexOf(placement) < 0) {
            placement = 'top';
        }

        // 展示类型
        let type = e.type;
        if ([
            'circle-gap', // 缺口圆环
            'circle', 'circle-error', 'circle-warn', 'circle-pass', 'circle-stress',  // 圆形
            'gradient', // 渐变
            'line', 'error', 'warn', 'pass', 'stress' // 线性品牌色&异常&警告&通过&蓝色强调
        ].indexOf(type) < 0) {
            type = 'line';
        }

        // 圆环缺口度数
        let deg = Math.floor(+e.deg || 90);
        if (deg < 0) {
            deg = 0;
        } else if (deg > 360) {
            deg = 360;
        }

        let width = +e.width || 200;
        let border = +e.border || 6,
            colorList = [],
            color, icon,
            color1, color2, // 渐变色
            circle1, circle2, circle3, circle4; // 圆环数据

        let brandColor = that['@{get.css.var}']('--color-brand', '#385ACC');
        switch (type) {
            case 'circle':
            case 'circle-error':
            case 'circle-warn':
            case 'circle-pass':
            case 'circle-stress':
            case 'circle-gap':
                // 圆形
                width = +e.width || 120;

                let defColor = brandColor;
                if (type == 'circle-error') {
                    type = 'circle';
                    defColor = that['@{get.css.var}']('--color-red');
                    icon = '&#xe676;';
                } else if (type == 'circle-warn') {
                    type = 'circle';
                    defColor = that['@{get.css.var}']('--color-warn');
                    icon = '&#xe679;';
                } else if (type == 'circle-pass') {
                    type = 'circle';
                    defColor = that['@{get.css.var}']('--color-green');
                    icon = '&#xe67a;';
                } else if (type == 'circle-stress') {
                    type = 'circle';
                    defColor = that['@{get.css.var}']('--color-blue');
                    icon = '&#xe67b;';
                }
                color = e.color || defColor;

                // 半径，计算周长
                let r = (width - border) / 2;
                circle1 = Math.PI * r * 2;

                // 展示长度
                circle2 = (num / 100) * circle1;

                // 缺口圆环数据
                circle3 = ((360 - deg) / 360) * circle1;
                circle4 = (num / 100) * circle3;

                // 渐变色组
                let len = (e.colorList || []).length;
                let gap = Math.floor(100 / (len - 1));
                colorList = (e.colorList || []).map((c, i) => {
                    return {
                        color: c,
                        offset: (i == len - 1) ? 100 : (i * gap)
                    }
                })
                break;

            case 'gradient':
                // 渐变，未自定义颜色时适用品牌色
                color = e.color || brandColor;
                let result = that['@{color.to.rgb}'](color);
                color1 = `rgba(${result.r}, ${result.g}, ${result.b}, 0.4)`;
                color2 = `rgba(${result.r}, ${result.g}, ${result.b}, 0.2)`;
                break;

            case 'line':
                color = e.color || brandColor;
                break;

            case 'error':
                type = 'line';
                color = e.color || 'var(--color-red)';
                icon = '&#xe71c;';
                break;

            case 'warn':
                type = 'line';
                color = e.color || 'var(--color-warn)';
                icon = '&#xe719;';
                break;

            case 'pass':
                type = 'line';
                color = e.color || 'var(--color-green)';
                icon = '&#xe71a;';
                break;

            case 'stress':
                type = 'line';
                color = e.color || 'var(--color-blue)';
                icon = '&#xe71b;';
                break;
        }

        // text
        // 不配置或者为空：显示百分比
        // false：不显示文案
        // 其余：自定义文案
        let text = '', originText = e.text + '';
        if (originText === 'false') {
            // 不显示文案
        } else if (originText === '' || originText === 'undefined' || originText === 'null') {
            text = num.toFixed(i) + '%';
        } else {
            text = originText;
        }

        that.updater.set({
            prefix: e.prefix || '',
            placement,
            originNum: num,
            num: num.toFixed(i) + '%',
            numRemain: (100 - num).toFixed(i) + '%',
            icon,
            color,
            colorBg: e.colorBg || 'var(--mx-effects-progress-bg)',
            colorGradient: e.colorGradient || '',
            colorVs: e.colorVs || '',
            colorList,
            color1,
            color2,
            circle1,
            circle2,
            circle3,
            circle4,
            deg,
            type,
            text,
            vs: (e.vs + '' === 'true'), // 是否左右对比
            border,
            width: +width,
            height: +e.height || 0,
            gradient: (type == 'gradient'),
            fontSize: +e.fontSize || 0,
            reload: (e.reload + '' === 'true'),
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{reload}<click>'(e) {
        e.stopPropagation();
        $('#' + this.id).trigger({
            type: 'reload'
        });
    }
});