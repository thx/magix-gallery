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
            type: extra.bizCode || extra.type || '', //展示类型，默认根据域名校验
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
        let { type, needProducts, simple } = that.updater.get();

        $.getJSON('//g.alicdn.com/mm/bp-source/lib/index.json', (data) => {
            let href = window.location.href;
            // 上方
            //      products：上方竖版关联外链（默认复用顶部header的，如果有单独bizCode定义的则用bizCode定义的）
            //      qrcode 二维码
            // 下方
            //      groups 下方横版的外链数据
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
            if ($.isEmptyObject(diffs[type])) {
                type = 'alimama';
            }

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

            // 下方链接的拼接
            let { links = [], copyrights = [], imgs = [] } = diffs[type];
            if (simple) {
                // 简单默认不显示相关产品链接
                groups = groups.slice(0, 1);
            }
            groups[0] = groups[0].concat(links);
            groups.push(copyrights, imgs);

            that.updater.digest({
                products,
                qrcode,
                groups
            });
        });
    }
});
