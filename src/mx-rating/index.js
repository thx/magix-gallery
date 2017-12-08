/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-rating/index',["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-rating_index_",".__mx-rating_index_-star {\n  color: #999;\n  font-size: 20px;\n  padding: 0 1px;\n}\n.__mx-rating_index_-active {\n  color: #f96447;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"1\u001d","subs":[{"keys":["number","value","readonly"],"path":"#\u001f","tmpl":"<%for(var i=0;i<$$.number;i++){%><i class=\"__mx-style_index_-mc-iconfont __mx-rating_index_-star<%if(i<$$.value){%> __mx-rating_index_-active<%}%><%if(!$$.readonly){%> __mx-style_index_-cp<%}%>\" mx-mouseover=\"\u001f\u001e@{hover}({i:<%!i%>})\" mx-mouseout=\"\u001f\u001e@{hover}()\" mx-click=\"\u001f\u001e@{setValue}({i:<%!i%>})\">&#xe60f;</i><%}%>","s":"1\u001d"}],"file":"mx-rating/index.html"},
    init(extra) {
        let me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        me['@{number}'] = ops.number | 0 || 5;
        me['@{value}'] = ops.value | 0 || 0;
        me['@{readonly}'] = (ops.readonly + '') === 'true';
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            readonly: me['@{readonly}'],
            value: me['@{value}'],
            number: me['@{number}']
        });
    },
    '@{hover}<mouseover,mouseout>'(e) {
        let me = this;
        if (me['@{readonly}'])
            return;
        clearTimeout(me['@{delay.timer}']);
        me['@{delay.timer}'] = setTimeout(me.wrapAsync(() => {
            let value = e.params.i + 1;
            me.updater.digest({
                value: e.type == 'mouseout' ? me['@{value}'] : value
            });
            if (e.type == 'mouseover') {
                me['@{owner.node}'].trigger({
                    type: 'itemover',
                    value
                });
            }
            else {
                me['@{owner.node}'].trigger({
                    type: 'itemout',
                    value: me['@{value}']
                });
            }
        }), 0);
    },
    '@{setValue}<click>'(e) {
        let me = this;
        if (me['@{readonly}'])
            return;
        let last = me['@{value}'];
        let value = e.params.i + 1;
        if (value != last) {
            me['@{value}'] = value;
            me['@{owner.node}'].prop({ value }).trigger({
                type: 'change',
                value
            });
        }
    }
});

});