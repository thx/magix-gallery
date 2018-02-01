/*
ver:2.0.4
*/
let Magix = require('magix');
let Mustache = require('../mx-mustache/index');
let $ = require('$');
module.exports = Magix.View.extend({
    init(extra) {
        this.assign(extra);
    },
    assign(ops) {
        this['@{mode.simple}'] = ops.mode === 'simple';
    },
    render() {
        let me = this;
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

        $.ajax({
            url: '//mos.m.taobao.com/union/jsonp/footer',
            dataType: 'jsonp',
            jsonp: 'callback',
            cache: true,
            success: me.wrapAsync((resp) => {
                $('#' + me.id).html(Mustache.render(resp.html, {
                    simple: simple,
                    alimama: alimama,
                    taobao: taobao,
                    tanx: tanx
                }));
            })
        });
    }
});