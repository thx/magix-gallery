/**
 * 全局提示组件
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
let Duration = 200;
Magix.applyStyle('@index.less');

export = View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;
        that.viewOptions = extra;

        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].on('@{add}', (e) => {
            that.viewOptions = e;
            that['@{show}']();
        })
        that.on('destroy', () => {
            that['@{clear.timer}']();
            that.owner.unmountVframe(that.id);
            that['@{owner.node}'].remove();
        });
    },
    render() {
        let that = this;
        that.updater.digest({
            show: false,
            styleShow: '',
            styleHide: '',
            styles: {}
        });
        that['@{show}']();
    },
    '@{show}'(e) {
        let that = this;
        that['@{clear.timer}']();

        // timeout, 
        // type: 'error：红色错误类型提示；warn：黄色警告类型提示；highlight：品牌色图标强调提示',
        // singleton: 单实例，多实例，默认true
        // styles: {} //驼峰，直接覆盖样式
        let { displayType = 'common', styles = {}, msg, timeout } = that.viewOptions;

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
        styles.backgroundColor = styles.backgroundColor || colorBg;
        styles.color = styles.color || colorText;
        styles.top = styles.top || '0px';

        that.updater.digest(Magix.mix({
            msg,
            colorIcon,
            timeout,
            displayType,
            styles
        }, that['@{to.line}'](styles)));

        that['@{dealy.show.timer}'] = setTimeout(that.wrapAsync(() => {
            that.updater.digest({
                show: true
            });
        }), Duration);

        if (timeout) {
            that['@{custom.hide.timer}'] = setTimeout(that.wrapAsync(() => {
                that['@{close}<click>']();
            }), timeout);
        }
    },
    /**
     * 驼峰转换连接线
     */
    '@{to.line}'(styles) {
        let arrShow = [], arrHide = [];
        for (let key in styles) {
            let val = styles[key] + '';
            let name = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            arrShow.push(name + ':' + val);
            arrHide.push(name + ':' + (key == 'top' ? ((+val.replace('px', '') - 32) + 'px') : val));
        }
        return {
            styleShow: arrShow.join(';') + ';',
            styleHide: arrHide.join(';') + ';'
        };
    },
    '@{close}<click>'(e) {
        let that = this;
        that['@{clear.timer}']();

        that['@{dealy.hide.timer}'] = setTimeout(that.wrapAsync(() => {
            that.updater.digest({
                show: false
            });
        }), Duration);
    },
    '@{clear.timer}'() {
        let that = this;
        if (that['@{custom.hide.timer}']) {
            clearTimeout(that['@{custom.hide.timer}']);
        }
        if (that['@{dealy.hide.timer}']) {
            clearTimeout(that['@{dealy.hide.timer}']);
        }
        if (that['@{dealy.show.timer}']) {
            clearTimeout(that['@{dealy.show.timer}']);
        }
    }
}, {
        /**
         * gtip(msg, timeout)
         * gtip(msg, options: {
         *      timeout, 
         *      type: 'error：红色错误类型提示；warn：黄色警告类型提示；highlight：品牌色图标强调提示',
         *      style: {} //驼峰，直接覆盖样式
         *      singleton: 单实例，多实例，默认true
         * })
         */
        gtip(msg, options) {
            let cfg = {
                msg
            };
            if ($.isPlainObject(options)) {
                // gtip(msg, options)
                cfg.displayType = options.type;
                delete options.type;
                Magix.mix(cfg, options);
                // 默认单例
                cfg.singleton = (cfg.singleton + '' !== 'false');
            } else {
                // gtip(msg, timeout)
                Magix.mix(cfg, {
                    timeout: options,
                    singleton: true
                })
            }

            let id;
            if (cfg.singleton) {
                // 只保留一个实例
                id = `${this.id}_guid`;
            } else {
                id = `${this.id}_${Magix.guid('guid_')}`;
            }
            let node = $('#' + id);
            if (!node.length) {
                $('body').append(`<div id="${id}" />`);
                this.owner.mountVframe(id, '@moduleId', cfg);
            } else {
                node.trigger(Magix.mix({
                    type: '@{add}'
                }, cfg));
            }
        }
    });



