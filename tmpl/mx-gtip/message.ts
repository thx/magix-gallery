/**
 * 全局提示组件
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
let Duration = 200;
Magix.applyStyle('@message.less');

export = View.extend({
    tmpl: '@message.html',
    init(extra) {
        let that = this;
        that.viewOptions = extra;

        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].on('@{add}', (e) => {
            // 追加提示
            that.viewOptions = e;
            let { list } = that.updater.get();
            list.push({
                show: false
            })
            that['@{show}'](list.length - 1);
        })
        that.on('destroy', () => {
            let { list } = that.updater.get();
            for (let i = 0; i < list.length; i++) {
                that['@{clear.timer}'](i);
            }
            that.owner.unmountVframe(that.id);
            that['@{owner.node}'].remove();
        });
    },
    render() {
        let that = this;
        let { list } = that.updater.get();
        list = list || [];
        list.push({
            show: false,
            styleShow: '',
            styleHide: '',
            styles: {}
        })
        that.updater.digest({
            list
        });
        that['@{show}'](list.length - 1);
    },
    '@{show}'(index) {
        let that = this;
        that['@{clear.timer}'](index);

        let { list } = that.updater.get();

        // timeout, 
        // type: 'error：红色错误类型提示；warn：黄色警告类型提示；highlight：品牌色图标强调提示',
        let { displayType = 'common', msg, view, timeout } = that.viewOptions;
        let colorKey, colorBg, colorText, colorIcon;
        switch (displayType) {
            case 'common':
                colorBg = 'rgba(33, 33, 33, .72)';
                colorText = '#ffffff';
                colorIcon = colorIcon || '#ffffff';
                break;
            case 'highlight':
                colorKey = '--color-brand';
                colorText = '#666666';
                break;
            case 'error':
                colorKey = '--color-red';
                colorText = '#666666';
                break;
            case 'warn':
                colorKey = '--color-warn';
                colorText = '#666666';
                break;
            case 'pass':
                colorKey = '--color-green';
                colorText = '#666666';
                break;
        }
        if (colorKey) {
            let color = that['@{get.css.var}'](colorKey, '#4d7fff');
            let result = that['@{color.to.rgb}'](color);
            colorBg = that['@{color.to.hex}']({
                r: result.r,
                g: result.g,
                b: result.b,
                alpha: 0.1
            })
            colorIcon = colorIcon || color;
        }
        Magix.mix(list[index], {
            view,
            msg,
            colorBg,
            colorIcon,
            colorText,
            timeout,
            displayType
        })
        that.updater.digest({
            list
        });

        that['@{dealy.show.timer}'] = that['@{dealy.show.timer}'] || {};
        that['@{dealy.show.timer}'][index] = setTimeout(that.wrapAsync(() => {
            list[index].show = true;
            that.updater.digest({
                list
            });
        }), Duration);
        if (timeout) {
            that['@{custom.hide.timer}'] = that['@{custom.hide.timer}'] || {};
            that['@{custom.hide.timer}'][index] = setTimeout(that.wrapAsync(() => {
                that['@{close}<click>']({
                    params: {
                        index
                    }
                });
            }), timeout);
        }
    },

    '@{close}<click>'(e) {
        let that = this;
        let index = e.params.index;
        let { list } = that.updater.get();
        that['@{clear.timer}'](index);

        that['@{dealy.hide.timer}'] = that['@{dealy.hide.timer}'] || {};
        that['@{dealy.hide.timer}'][index] = setTimeout(that.wrapAsync(() => {
            // 动画
            list[index].show = false;
            that.updater.digest({
                list
            });
        }), Duration);
    },

    '@{clear.timer}'(index) {
        let that = this;

        ['@{custom.hide.timer}', '@{dealy.hide.timer}', '@{dealy.show.timer}'].forEach(key => {
            let timers = that[key] || {};
            if (timers[index]) {
                clearTimeout(timers[index]);
            }
        })
    }
}, {
    /**
     * gview({
     *      view
     *      msg
     *      timeout, 
     *      type
     * })
     */
    gmessage(options) {
        return new Promise(resolve => {
            let cfg = {
                view: options.view,
                msg: options.msg,
                timeout: options.timeout,
                displayType: options.type
            }

            // 只保留一个实例
            let id = `${this.id}_message`;
            let node = $('#' + id);
            if (!node.length) {
                $('body').append(`<div id="${id}" class="@message.less:gmessage"/>`);
                this.owner.mountVframe(id, '@moduleId', cfg);
            } else {
                // 再增加一个
                node.trigger(Magix.mix({
                    type: '@{add}'
                }, cfg));
            }
        })
    }
});



