/*
ver:2.0.5
*/
let Magix = require('magix');
let Mustache = require('../mx-mustache/index');
let $ = require('$');
module.exports = Magix.View.extend({
    init(extra) {
        this.assign(extra);
        this.on('destroy', () => {
            if (window.MMSiteNav) {
                window.MMSiteNav.destroy();
            }
        });
    },
    assign(ops) {
        this['@{mode.simple}'] = ops.mode === 'simple';
    },
    render() {
        let me = this;
        let simple = me['@{mode.simple}'];
        $.ajax({
            url: '//mos.m.taobao.com/union/jsonp/sitenav',
            dataType: 'jsonp',
            cache: true,
            success: me.wrapAsync((resp) => {
                let sitenav = $('#' + me.id);
                sitenav.html(Mustache.render(resp.html, {
                    simple: simple
                }));
                sitenav = sitenav.find('.alimama-site-nav');
                let scriptSrc = sitenav.attr('data-cdn');
                me['@{insert.script}'](scriptSrc);
            })
        });
    },
    '@{insert.script}'(src) {
        let headNode = document.getElementsByTagName('head')[0];
        let newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = src;
        headNode.appendChild(newScript);
    }
});