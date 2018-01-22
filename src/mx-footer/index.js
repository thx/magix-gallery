/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/index",["magix","../mx-mustache/index","$"],(require,exports,module)=>{
/*Magix,Mustache,$*/

/*
ver:2.0.1
*/
var Magix = require("magix");
var Mustache = require("../mx-mustache/index");
var $ = require("$");
module.exports = Magix.View.extend({
    init: function (extra) {
        this.assign(extra);
    },
    assign: function (ops) {
        this['__cP'] = ops.mode === 'simple';
    },
    render: function () {
        var me = this;
        var simple = me['__cP'];
        var alimamaReg = /alimama\.(com|net)/i;
        var tanxReg = /tanx\.(com|net)/i;
        var taobaoReg = /taobao\.(com|net)/i;
        var alimama, taobao, tanx;
        if (alimamaReg.test(window.location.href)) {
            alimama = true;
        }
        else if (taobaoReg.test(window.location.href)) {
            taobao = true;
        }
        else if (tanxReg.test(window.location.href)) {
            tanx = true;
        }
        else {
            alimama = true;
        }
        $.ajax({
            url: '//mos.m.taobao.com/union/jsonp/footer',
            dataType: 'jsonp',
            jsonp: 'callback',
            cache: true,
            success: me.wrapAsync(function (resp) {
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

});