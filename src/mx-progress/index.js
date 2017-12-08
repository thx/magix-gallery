/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-progress/index',["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-progress_index_",".__mx-progress_index_-as-input {\n  height: 32px;\n  cursor: default;\n  line-height: 32px;\n  display: inline-block;\n}\n.__mx-progress_index_-rail {\n  height: 4px;\n  background: #eaeaea;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px;\n  top: -2px;\n}\n.__mx-progress_index_-tracker {\n  height: 4px;\n  background: #f96447;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 2px;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n}\n.__mx-progress_index_-pointer-label {\n  position: absolute;\n  font-size: 9px;\n  pointer-events: none;\n  top: -15px;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n  line-height: normal;\n}\n.__mx-progress_index_-notallowed {\n  cursor: not-allowed;\n}\n.__mx-progress_index_-notallowed .__mx-progress_index_-rail {\n  background-color: #fbfbfb;\n}\n.__mx-progress_index_-notallowed .__mx-progress_index_-tracker {\n  background-color: #eaeaea;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-progress_index_-rail\" mx-contextmenu=\"\u001f\u001e@{prevent}()\" style=\"width:<%=$$.width%>px\"><div class=\"__mx-progress_index_-tracker\"></div><div class=\"__mx-progress_index_-pointer-label\"></div></div>","subs":[{"keys":["width"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"style=\"width:<%=$$.width%>px\"","attrs":[{"n":"style"}]}],"file":"mx-progress/index.html"},
    init(extra) {
        let me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me['@{owner.node}'].addClass('__mx-progress_index_-as-input');
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        me['@{width}'] = +ops.width || 340;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{value}'] = +ops.value || 0;
        me['@{fixed}'] = +ops.fixed || 0;
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            width: me['@{width}']
        });
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('__mx-progress_index_-notallowed');
        me.val(me['@{value}']);
    },
    val(v) {
        let me = this;
        let nv = +v;
        if (nv || nv === 0) {
            if (nv < 0)
                nv = 0;
            else if (nv > 1)
                nv = 1;
            let rail = me['@{owner.node}'].find('.__mx-progress_index_-rail');
            let rWidth = rail.width();
            let left = rWidth * nv;
            let tracker = me['@{owner.node}'].find('.__mx-progress_index_-tracker');
            tracker.width(left);
            let indicator = me['@{owner.node}'].find('.__mx-progress_index_-pointer-label');
            let text = (nv * 100).toFixed(me['@{fixed}']) + '%';
            indicator.html(text);
            let w = indicator.width();
            left -= w / 2;
            if (left < 0)
                left = 0;
            else if (left > (rWidth - w))
                left = rWidth - w;
            indicator.css({
                left
            });
            me['@{value}'] = nv;
        }
        return me['@{value}'];
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});

});