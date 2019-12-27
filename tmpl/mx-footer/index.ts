/**
 * https://yuque.antfin-inc.com/fe-p2/sg5kfn/gxm1ua
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        // 宽度范围修正
        let width = extra.width || 1000;
        let maxWidth = window.innerWidth;
        if (+width > maxWidth) {
            width = maxWidth;
        }

        let year = (new Date()).getFullYear();

        this.updater.set({
            type: extra.bizCode || extra.type || '', //展示类型，默认根据域名校验
            needProducts: (extra.products + '' === 'true'),// 是否需要产品线信息
            simple: (extra.mode === 'simple'), // 简易模式
            width,
            textAlign: extra.textAlign || 'left'
        });

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        let that = this;
        let { type, needProducts, simple } = that.updater.get();

        $.getJSON('//g.alicdn.com/mm/bp-source/lib/index.json', (data) => {
            let href = window.location.href;
            let { diffs, groups, qrcode } = data.footer;

            if (!type) {
                for (let k in diffs) {
                    // reg=true：校验域名
                    // reg=false：直接匹配
                    let reg = new RegExp(`/${k}\.(com|net|cn)/i`);
                    if (diffs[k].reg && reg.test(href)) {
                        type = k;
                    }
                }
            }
            let { links = [], copyrights = [], imgs = [] } = diffs[type || 'alimama'];
            if (simple) {
                // 简单默认不显示相关产品链接
                groups = groups.slice(0, 1);
            }
            groups[0] = groups[0].concat(links);
            groups.push(copyrights, imgs);

            let products = [];
            if (needProducts) {
                data.products.forEach(item => {
                    item.seconds.forEach(sec => {
                        if (!sec.text) {
                            sec.text = item.text;
                        }
                    })
                    products = products.concat(item.seconds);
                })
            }
            that.updater.digest({
                products,
                groups,
                qrcode
            });
        });
    }
});
