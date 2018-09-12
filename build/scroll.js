//#exclude = define
define('scroll', ['magix', '$'], (require, exports, module) => {
    let Magix = require('magix');
    let $ = require('$');
    let { Router, Vframe } = Magix;
    let checkVframes = (vId, changed, ref) => {
        if (!ref) ref = {};
        let vf = Vframe.get(vId);
        let list = vf.invoke('@{get.scroll.list}');
        if (list && list.length) {
            for (let [node, params] of list) {
                let exist = false;
                for (let e of params) {
                    if (changed[e]) {
                        exist = true;
                        break;
                    }
                }
                if (exist) {
                    let offset = $(/*'#' + vf.id + ' ' +*/ node).offset();
                    if (offset) {
                        window.scrollTo(offset.left + 10, offset.top + 10);
                        ref['@{page.scrolled}'] = true;
                        break;
                    }
                }
            }
        }
        if (!ref['@{page.scrolled}']) {
            let children = vf.children();
            for (let c of children) {
                if (!ref['@{page.scrolled}']) {
                    checkVframes(c, changed, ref);
                }
            }
        }
    };
    Router.on('changed', e => {
        if (!e.force) {
            let vId = Magix.config('rootId');
            checkVframes(vId, e.params);
        }
    });
    Magix.View.merge({
        ctor() {
            this['@{scroll.list}'] = [];
        },
        '@{get.scroll.list}'() {
            return this['@{scroll.list}'];
        },
        scrollIfNeed(node, params) {
            this['@{scroll.list}'].push([node, params]);
        }
    });
});