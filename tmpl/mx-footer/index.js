let Magix = require('magix');
let Mustache = require('@../mx-mustache/index');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(ops) {
        this['@{mode.simple}'] = (ops.mode === 'simple');
        this['@{need.products}'] = (ops.products + '' === 'true');
        this['@{products.width}'] = ops.width || 1184;
        this['@{ui.dark}'] = (ops.dark + '' === 'true');
    },
    render() {
        let me = this;
        let needProducts = me['@{need.products}'];

        let simple = me['@{mode.simple}'];
        let alimamaReg = /alimama\.(com|net)/i;
        let tanxReg = /tanx\.(com|net)/i;
        let taobaoReg = /taobao\.(com|net)/i;
        let alimama, taobao, tanx;
        if (alimamaReg.test(window.location.href)) {
            alimama = true;
        } else if (taobaoReg.test(window.location.href)) {
            taobao = true;
        } else if (tanxReg.test(window.location.href)) {
            tanx = true;
        } else {
            alimama = true;
        }
        let info = {
            simple: simple,
            alimama: alimama,
            taobao: taobao,
            tanx: tanx
        }

        let models = [me.getFooter(info)];
        if (needProducts) {
            models.push(me.getProducts());
        }

        Promise.all(models).then(([footerHtml, products]) => {
            products = products || [];
            me.updater.digest({
                products,
                len: products.length,
                footerHtml,
                width: me['@{products.width}'],
                dark: me['@{ui.dark}']
            })
        });
    },

    getFooter(info) {
        return new Promise((resolve) => {
            $.ajax({
                url: '//mos.m.taobao.com/union/jsonp/footer',
                dataType: 'jsonp',
                jsonp: 'callback',
                cache: true,
                success: function (resp) {
                    resolve(Mustache.render(resp.html, info));
                },
                error: function (xhr) {
                    resolve('');
                }
            });
        })
    },

    getProducts() {
        return new Promise((resolve) => {
            $.ajax({
                url: '//mo.m.taobao.com/zuanshi/jsonp_201805231426009',
                dataType: 'jsonp',
                jsonp: 'callback',
                cache: true,
                success: function (resp, status) {
                    let list = resp.list || [];
                    let products = [];
                    list.forEach(item => {
                        item.seconds.forEach(sec => {
                            if(!sec.title){
                                sec.title = item.title;
                            }
                        })
                        products = products.concat(item.seconds);
                    })
                    resolve(products);
                },
                error: function (xhr) {
                    // 解耦异常
                    resolve([]);
                }
            });
        })
    }

});