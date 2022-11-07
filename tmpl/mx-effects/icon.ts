/**
 * 打标组件
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@icon.less');

export default View.extend({
    tmpl: '@icon.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra, configs) {
        this.updater.snapshot();

        // 优先级自定义色值color > 预置类型type
        let color = extra.color,
            colorText,
            mode = extra.mode || this['@{get.css.var}']('--effects-tag-mode', 'solid'),
            type = extra.type || 'common';

        if (!color) {
            // 未自定义颜色的时候
            switch (type) {
                case 'common':
                    switch (mode) {
                        case 'solid': // 实心
                        case 'solid-square':
                            color = '#F0F2F5';
                            colorText = '#999999';
                            break;

                        case 'hollow': // 空心
                        case 'hollow-square':
                            color = '#cccccc';
                            colorText = '#999999';
                            break;

                        case 'opacity': // 透明度底色
                        case 'opacity-square':
                            color = '#999999';
                            break;

                        case 'dot': // 圆点
                            color = '#cccccc';
                            break;
                    }
                    break;

                case 'dark':
                    switch (mode) {
                        case 'solid':
                        case 'solid-square':
                            color = '#999999';
                            colorText = '#ffffff';
                            break;

                        case 'hollow':
                        case 'hollow-square':
                            color = '#999999';
                            colorText = '#666666';
                            break;

                        case 'opacity':
                        case 'opacity-square':
                            color = '#666666';
                            break;

                        case 'dot':
                            color = '#999999';
                            break;
                    }
                    break;

                case 'white':
                    switch (mode) {
                        case 'solid':
                        case 'solid-square':
                            color = '#ffffff';
                            colorText = '#333333';
                            break;

                        case 'hollow':
                        case 'hollow-square':
                        case 'opacity':
                        case 'opacity-square':
                        case 'dot':
                            color = '#ffffff';
                            break;
                    }
                    break;

                case 'highlight':
                    color = this['@{get.css.var}']('--color-brand');
                    break;

                case 'error':
                    color = this['@{get.css.var}']('--color-red');
                    break;

                case 'warn':
                    color = this['@{get.css.var}']('--color-warn');
                    break;

                case 'pass':
                    color = this['@{get.css.var}']('--color-green');
                    break;

                case 'stress':
                    color = this['@{get.css.var}']('--color-blue');
                    break;
            }
        }

        let styles = [];
        switch (mode) {
            case 'solid': // 实心
            case 'solid-square':
                styles.push(
                    `background-color: ${color}`,
                    `border: 1px solid ${color}`,
                    `color: ${(extra.colorText || colorText || '#ffffff')}`
                )
                break;

            case 'hollow': // 空心
            case 'hollow-square':
                styles.push(
                    `background-color: transparent`,
                    `border: 1px solid ${color}`,
                    `color: ${(extra.colorText || colorText || color)}`
                )
                break;

            case 'opacity':
            case 'opacity-square':
                let regs = color.match(/^var\((.+)\)/);
                if (regs && regs.length > 0) {
                    color = this['@{get.css.var}'](regs[1]);
                }

                let result = this['@{color.to.rgb}'](color);
                styles.push(
                    `background-color: rgba(${result.r}, ${result.g}, ${result.b}, 0.1)`,
                    `border: 0 none`,
                    `color: ${(extra.colorText || colorText || color)}`
                )
                break;
        }

        // 展示内容
        let content = '';
        if (configs && configs.node) {
            // attr change
            // 此时取owner.innerHTML为button
            content = extra.content || configs.node.innerHTML || '';
        } else {
            // 首次渲染
            let owner = document.getElementById(this.id);
            content = extra.content || owner.innerHTML || '';
        }

        let posOffset = extra.posOffset || {};
        let posOffsetTop = +posOffset.top || 0;
        let posOffsetLeft = +posOffset.left || 0;

        // 自带后缀打标icon
        switch (extra.icon) {
            case 'arrow-up':
                content += '<i class="mc-iconfont @icon.less:icon-suffix">&#xe67e;</i>';
                break;

            case 'arrow-down':
                content += '<i class="mc-iconfont @icon.less:icon-suffix">&#xe67d;</i>';
                break;
        }

        // 自带前缀打标icon
        switch (extra.prefixIcon) {
            case 'lock':
                content = '<i class="mx-iconfont @icon.less:icon-prefix">&#xe69b;</i>' + content;
                break;

            case 'unlock':
                content = '<i class="mx-iconfont @icon.less:icon-prefix">&#xe69c;</i>' + content;
                break;
        }

        if ((/^-?\d+$/).test(content) && content.length <= 2 && !extra.icon) {
            // 数值两个字符以内特殊处理样式
            styles.push('padding: 0 2px;');
        }

        this.updater.set({
            posOffsetTop,
            posOffsetLeft,
            mode,
            content,
            color,
            styles: styles.join(';'),
            tipWidth: extra.tipWidth || 200,
            tipPlacement: extra.tipPlacement || 'bottom',
            tipAlign: extra.tipAlign || 'center',
            tipView: extra.tipView,
            tipData: extra.tipData || {},
            tip: extra.tip || '',
            disabled: extra.disabled + '' === 'true',
        })

        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});
