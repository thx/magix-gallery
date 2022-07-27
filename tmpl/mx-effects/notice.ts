/**
 * 提示公告组件
 * 交互规范见 https://done.alibaba-inc.com/file/1vGU0dwwS3oq/TSmfRXHpbSi4AOOh/preview?m=SPECS&aid=303FEA10-5A72-4815-813F-1AFFA80D1FF8&pageId=1866EAD4-4968-43C5-BF15-5DBD75C5D7B8
 */
import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@notice.less');

export default View.extend({
    tmpl: '@notice.html',
    init(extra) {
        let that = this;

        let color = extra.color,
            border = (extra.border + '' === 'true'),  // 默认无边框 false
            radius = (extra.radius + '' === 'true'),  // 默认无圆角 false
            icon = (extra.icon + '' !== 'false'),  // 默认有提示icon true
            closable = (extra.closable + '' === 'true'),// 默认无关闭按钮 false
            type = extra.type || 'highlight',
            textAlign = extra.textAlign || 'left';  // 默认左对齐

        let styles = [];
        if (border) {
            // 有边框的情况下一定有圆角
            radius = true;
            styles.push(
                'border-width: 1px',
                'border-style: solid'
            )
        }
        if (radius) {
            styles.push('border-radius: var(--border-radius)');
        }

        // 优先级自定义色值color > 预置类型type
        let colorBg, colorBorder, colorIcon, colorText, iconText = '&#xe728;';
        if (!color) {
            // 未自定义颜色的时候
            let key;
            switch (type) {
                case 'highlight':
                    key = '--color-brand';
                    iconText = '&#xe728;';
                    break;

                case 'stress':
                    key = '--color-blue';
                    iconText = '&#xe728;';
                    break;

                case 'error':
                    key = '--color-red';
                    iconText = '&#xe727;';
                    break;

                case 'warn':
                    key = '--color-warn';
                    iconText = '&#xe72a;';
                    break;

                case 'pass':
                    key = '--color-green';
                    iconText = '&#xe729;';
                    break;
            }
            color = that['@{get.css.var}'](key, '#385ACC');
        }
        if (color) {
            // 主体颜色，背景加透明度
            let result = that['@{color.to.rgb}'](color);
            colorBg = `rgba(${result.r}, ${result.g}, ${result.b}, 0.1)`;
            colorBorder = color;
            colorIcon = color;
        }
        colorBg = extra.colorBg || colorBg;
        colorBorder = extra.colorBorder || colorBorder;
        colorIcon = extra.colorIcon || colorIcon;
        colorText = extra.colorText || '#666';
        iconText = extra.iconText || `<i class="mc-iconfont" style="color: ${colorIcon};">${iconText}</i>`
        styles.push(
            'background-color:' + colorBg,
            'border-color:' + colorBorder,
            'color:' + colorText,
            'text-align:' + textAlign
        )
        let el = document.getElementById(that.id) || {};
        let content = extra.content || el.innerHTML;

        let list = [], sticky = true;
        if (type == 'fault') {
            // 重大故障类提示
            let textFn = (t) => {
                // 需求：https://aone.alibaba-inc.com/req/39222764
                let placeholder = `${that.id}a_placeholder${that.id}`,
                    as = [],
                    ar = /<a[^>]*href=[ '"]([^"]*)[' "][^>]*>(.*?)<\/a>/g;
                t = (t + '').replace(ar, (...argus) => {
                    let at = document.createElement('div');
                    at.innerHTML = argus[2];
                    as.push(`<a href="${argus[1]}" target="_blank" class="color-brand" data-spm-click="gostr=/alimama_bp.4.1;locaid=df51da979">${at.innerText}</a>`);
                    return placeholder;
                })

                let s = document.createElement('div');
                s.innerHTML = t;
                let i = 0;
                let ss = s.innerText.replace(new RegExp(placeholder, 'g'), (...argus) => {
                    i++;
                    return as[i - 1];
                });
                return ss;
            }
            (extra.contentList || []).forEach(item => {
                if (item.text) {
                    list.push({
                        text: item.text,
                        textFn: textFn(item.text),
                    });
                }
            });
            if (list.length == 0 && content) {
                list.push({
                    text: content,
                    textFn: textFn(content),
                })
            }
            sticky = extra.sticky + '' !== 'false';
        }

        that.updater.set({
            show: true,
            sticky,
            list,
            listIndex: 0,
            content,
            styles: styles.join(';'),
            closable,
            colorIcon,
            img: extra.img,
            icon,
            iconText
        })
    },

    render() {
        let that = this;
        that.updater.digest();

        let wrapper = $(`#${that.id} .@notice.less:fault`);
        if (wrapper && wrapper.length > 0 && that.updater.get('sticky')) {
            // 严重故障吸顶处理，相对window定位
            let scrollFn = () => {
                let { left: wrapperLeft, top: wrapperTop } = wrapper.offset();
                let wrapperWidth = wrapper.outerWidth(),
                    wrapperHeight = wrapper.outerHeight();
                if ($(window).scrollTop() <= wrapperTop) {
                    that.updater.digest({
                        listStyles: [
                            'position: absolute',
                            'top: 0',
                            'left: 0',
                            'z-index: inherit',
                            'width: 100%',
                            'height: 100%',
                        ].join(';')
                    })
                } else {
                    that.updater.digest({
                        listStyles: [
                            'position: fixed',
                            'top: 0',
                            'z-index: 99999',
                            `left: ${wrapperLeft}px`,
                            `width: ${wrapperWidth}px`,
                            `height: ${wrapperHeight}px`,
                        ].join(';')
                    })
                }
            }
            if (!that['@{init.notice.scroll}']) {
                that['@{init.notice.scroll}'] = true;
                let scrollName = `scroll.notice.${that.id}`;
                $(window).off(scrollName, scrollFn).on(scrollName, scrollFn);
                that.on('destroy', () => {
                    $(window).off(scrollName, scrollFn);
                });
            }
            scrollFn();
        }
    },
    '@{close}<click>'(event) {
        this.updater.digest({
            show: false
        })
    },
    '@{change.index}<change>'(event) {
        this.updater.digest({
            listIndex: +event.page - 1
        })
    }
});
