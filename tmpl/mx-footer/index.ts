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

        // 设备信息
        let devInfo = that['@{get.dev.info}']();

        $.getJSON('//g.alicdn.com/mm/bp-source/lib/code.json', (data) => {
            let href = window.location.href;
            // 上方
            //      products：上方竖版关联外链（默认复用顶部header的，如果有单独bizCode定义的则用bizCode定义的）
            //      qrcode 妈妈二维码
            //      qncode 千牛二维码
            // 下方
            //      bottoms 下方横版的外链数据
            let { bottoms, domains, bizCodes } = data.footer;
            for (let k in domains) {
                // reg=true：校验域名
                // reg=false：直接匹配
                let reg = new RegExp(`${k}\.(com|net|cn)`, 'i');
                if (domains[k].reg && reg.test(href)) {
                    type = k;
                }
            };

            // 指定产品线信息 or 域名匹配信息
            let configs = bizCodes[bizCode] || domains[type] || domains['alimama'];

            // 产品线信息
            let products = [];
            if (needProducts) {
                let ps = (configs.products && configs.products.length) ? configs.products : data.products;
                ps.forEach(g => {
                    g.seconds.forEach(s => {
                        if (!s.text) {
                            s.text = g.text;
                        }
                    })
                    products = products.concat(g.seconds);
                })
                products.forEach(p => {
                    // 无线默认收起子产品详情
                    p.show = (devInfo.pad || devInfo.phone) ? false : true;
                })
            }

            // 相关链接信息
            let { links = [], copyrights = [], imgs = [] } = configs.bottoms || domains['alimama'].bottoms;
            if (simple) {
                // 简单默认不显示相关产品链接
                bottoms = bottoms.slice(0, 1);
            }
            bottoms[0] = bottoms[0].concat(links);

            // 必须显示的信息
            // copyrights 版权信息
            // imgs 备号
            copyrights.forEach(item => {
                item.required = true;
            })
            imgs.forEach(item => {
                item.required = true;
            })
            bottoms.push(copyrights, imgs);

            let qrcodes = [];
            ['qrcode', 'qncode'].forEach(key => {
                let q = configs[key] || data.footer[key];
                if (q && q.img) {
                    qrcodes.push(q);
                }
            })

            that.updater.digest({
                logo: configs.logo,
                products,
                qrcodes,
                bottoms,
                devInfo
            });
        });
    },

    /**
     * 无线展开收起，同一时间只允许展开一个
     */
    'toggle<click>'(e) {
        let { products } = this.updater.get();
        let index = e.params.index;
        for (let i = 0; i < products.length; i++) {
            if (index == i) {
                products[i].show = !products[i].show;
            } else {
                products[i].show = false;
            }
        }
        this.updater.digest({
            products
        })
    }
});
