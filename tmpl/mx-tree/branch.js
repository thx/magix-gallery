/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
'ref@./index.less';
let Magix = require('magix');
let $ = require('$');
let Vframe = Magix.Vframe;
module.exports = Magix.View.extend({
    tmpl: '@branch.html:const[id]',
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
            } else if (n.checked) {
                hasChecked = true;
            } else {
                hasUnchecked = true;
            }
        });
        if (hasChecked && hasUnchecked) {
            return 3;
        } else if (hasChecked) {
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
            } else {
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
        } else {
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