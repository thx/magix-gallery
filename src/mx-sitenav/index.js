/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-sitenav/index",["magix","../mx-mustache/index","$"],(require,exports,module)=>{
/*Magix,Mustache,$*/

/*
ver:2.0.6
*/
var Magix = require("magix");
var Mustache = require("../mx-mustache/index");
var $ = require("$");
module.exports = Magix.View.extend({
    init: function (extra) {
        this.assign(extra);
        this.on('destroy', function () {
            if (window.MMSiteNav) {
                window.MMSiteNav.destroy();
            }
        });
    },
    assign: function (ops) {
        this['@{mode.simple}'] = ops.mode === 'simple';
    },
    render: function () {
        var me = this;
        var simple = me['@{mode.simple}'];
        $.ajax({
            url: '//mos.m.taobao.com/union/jsonp/sitenav',
            dataType: 'jsonp',
            cache: true,
            success: me.wrapAsync(function (resp) {
                var sitenav = $('#' + me.id);
                sitenav.html(Mustache.render(resp.html, {
                    simple: simple
                }));
                sitenav = sitenav.find('.alimama-site-nav');
                var scriptSrc = sitenav.attr('data-cdn');
                me['@{insert.script}'](scriptSrc);
            })
        });
    },
    '@{insert.script}': function (src) {
        var headNode = document.getElementsByTagName('head')[0];
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = src;
        headNode.appendChild(newScript);
    }
});

});