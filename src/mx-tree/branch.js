/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-tree/branch',["magix","$","./branch"],(require,exports,module)=>{
/*Magix,$*/
require("./branch");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */

let Magix = require('magix');
let $ = require('$');
let Vframe = Magix.Vframe;
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul mx-guid=\"g0\u001f\">1\u001d</ul>","subs":[{"keys":["list","fromTop","valueKey","textKey"],"path":"ul[mx-guid=\"g0\u001f\"]","tmpl":"<%for(var i=0,br;i<$$.list.length;i++){%> <%br=$$.list[i]%><li class=\"__mx-tree_index_-li<%if(!i&&$$.fromTop){%> __mx-tree_index_-top-li-first<%}%><%if(i==$$.list.length-1){%> __mx-tree_index_-li-last<%}%>\"><div class=\"__mx-tree_index_-icon<%if(br.children){%> __mx-style_index_-cp<%}%>\" <%if(br.children){%> mx-click=\"\u001f\u001e@{toggle}({id:'<%=$eq(br[$$.valueKey])%>'})\" <%}%>><%if(br.children){%><span class=\"__mx-tree_index_-ricon\">+</span><%}%></div><div class=\"__mx-tree_index_-name\"><label class=\"__mx-tree_index_-p0\"><input class=\"__mx-style_index_-checkbox __mx-tree_index_-b-cb __mx-style_index_-fl\" type=\"checkbox\" mx-change=\"\u001f\u001e@{check}()\" id=\"cb_<%=$$.id%>_<%=br[$$.valueKey]%>\" value=\"<%=br[$$.valueKey]%>\" name=\"<%=$$.id%>\"><span class=\"__mx-style_index_-ib __mx-tree_index_-b-text __mx-style_index_-fl\"><%=br[$$.textKey]%></span></label></div><%if(br.children){%><div id=\"<%=$$.id%>_<%=br[$$.valueKey]%>\" class=\"__mx-tree_index_-indent __mx-style_index_-none\" mx-view=\"mx-tree/branch?textKey=<%!$eu($$.textKey)%>&valueKey=<%!$eu($$.valueKey)%>&list=<%@br.children%>\"></div><%}%></li><%}%>","s":"1\u001d"}],"file":"mx-tree/branch.html"},
    init(extra) {
        let me = this;
        me.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest({
            id: me.id
        });
    },
    '@{getCheckedState}'() {
        let me = this;
        let id = me.id;
        let hasChecked, hasUnchecked;
        $('#' + id + ' input[name="' + id + '"]').each((i, n) => {
            if (n.indeterminate) {
                hasChecked = hasUnchecked = true;
            }
            else if (n.checked) {
                hasChecked = true;
            }
            else {
                hasUnchecked = true;
            }
        });
        if (hasChecked && hasUnchecked) {
            return 3;
        }
        else if (hasChecked) {
            return 2;
        }
        return 1;
    },
    '@{checkParentState}'(key) {
        let me = this;
        let parent = me.owner.parent();
        let state = 0;
        if (parent) {
            let children = parent.children();
            for (let c of children) {
                let vf = Vframe.get(c);
                if (vf) {
                    state |= vf.invoke('@{getCheckedState}');
                }
            }
            let node = $('#cb_' + key);
            if (state === 3) {
                node.prop('indeterminate', true);
            }
            else {
                node.prop('indeterminate', false);
                node.prop('checked', state == 2);
            }
            parent.invoke('@{checkParentState}', [parent.id]);
        }
    },
    '@{checkAll}'(state) {
        let me = this;
        let id = me.id;
        $('#' + id + ' input[name="' + id + '"]')
            .prop('indeterminate', false)
            .prop('checked', state);
        let owner = me.owner;
        let children = owner.children();
        for (let c of children) {
            let vf = Vframe.get(c);
            if (vf) {
                vf.invoke('@{checkAll}', [state]);
            }
        }
    },
    '@{toggle}<click>'(e) {
        let node = $('#' + this.id + '_' + e.params.id);
        let current = $(e.eventTarget).find('span');
        let val = $.trim(current.html());
        if (val == '+') {
            node.slideDown();
            current.html('-');
        }
        else {
            node.slideUp();
            current.html('+');
        }
    },
    '@{check}<change>'(e) {
        let me = this;
        let vf = Vframe.get(me.id + '_' + e.eventTarget.value);
        if (vf) {
            vf.invoke('@{checkAll}', [e.eventTarget.checked]);
        }
        me['@{checkParentState}'](me.id);
    }
});

});