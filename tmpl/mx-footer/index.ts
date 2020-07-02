/**
 * 版权信息：https://yuque.antfin-inc.com/fe-p2/sg5kfn/gxm1ua
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

        // 简易模式
        let simple = (extra.mode === 'simple');

        // 对齐方式
        let textAlign = extra.textAlign || 'left';
        // 为保证各bp保持一致，对齐方式进行收敛
        // 极简版居中对齐，其他左对齐 https://aone.alibaba-inc.com/req/26450063
        textAlign = simple ? 'center' : 'left';

        this.updater.set({
            bizCode: extra.bizCode,
            type: extra.type,
            needProducts: (extra.products + '' === 'true'),// 是否需要产品线信息
            simple,
            width,
            textAlign
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
        let { type, bizCode, needProducts, simple } = that.updater.get();

        $.getJSON('//g.alicdn.com/mm/bp-source/lib/codes.json', (data) => {
            let href = window.location.href;
            // 上方
            //      products：上方竖版关联外链（默认复用顶部header的，如果有单独bizCode定义的则用bizCode定义的）
            //      qrcodes 二维码
            // 下方
            //      bottoms 下方横版的外链数据
            let { qrcodes, bottoms, domains, bizCodes } = data.footer;
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

            for (let k in domains) {
                // reg=true：校验域名
                // reg=false：直接匹配
                let reg = new RegExp(`/${k}\.(com|net|cn)/i`);
                if (domains[k].reg && reg.test(href)) {
                    type = k;
                }
            }

            // 下方链接的拼接
            let configs = bizCodes[bizCode] || domains[type] || domains['alimama'];
            if (needProducts && configs.products && configs.products.length) {
                products = [];
                configs.products.forEach(item => {
                    item.seconds.forEach(sec => {
                        if (!sec.text) {
                            sec.text = item.text;
                        }
                    })
                    products = products.concat(item.seconds);
                })
            }

            let { links = [], copyrights = [], imgs = [] } = configs.bottoms || domains['alimama'].bottoms;
            if (simple) {
                // 简单默认不显示相关产品链接
                bottoms = bottoms.slice(0, 1);
            }
            bottoms[0] = bottoms[0].concat(links);
            bottoms.push(copyrights, imgs);
            that.updater.digest({
                logo: configs.logo,
                products,
                qrcodes: configs.qrcodes || qrcodes,
                bottoms
            });
        });
    }
});
