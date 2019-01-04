let Magix = require('magix');
let $ = require('$');
let Vframe = Magix.Vframe;
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@branch.html',
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '@{getCheckedState}'() {
        let me = this;
        let viewId = me.id;
        let hasChecked, hasUnchecked;
        $('#' + viewId + ' input[name="' + viewId + '"]').each((i, n) => {
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
            for (var i = 0; i < children.length; i++) {
                if (children[i] == key) {
                    let vf = Vframe.get(children[i]);
                    if (vf) {
                        state |= vf.invoke('@{getCheckedState}');
                    }
                    break;
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
        let viewId = me.id;
        $('#' + viewId + ' input[name="' + viewId + '"]')
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
    '@{check}<change>'(e) {
        let me = this;
        let vf = Vframe.get(me.id + '_' + e.params.index);
        if (vf) {
            vf.invoke('@{checkAll}', [e.eventTarget.checked]);
        }
        me['@{checkParentState}'](me.id);
    },
    '@{toggle}<click>'(e) {
        e.stopPropagation();
        let node = $(e.eventTarget);
        let index = e.params.index;
        let cName = '@index.less:close';
        let branch = $('#' + this.id + '_' + index);
        branch.toggleClass(cName);
        if (branch.hasClass(cName)) {
            node.html('&#xe65b;');
        } else {
            node.html('&#xe65a;');
        }
    },
    setValues(bottomValues) {
        bottomValues = bottomValues.map(v => {
            return v + '';
        })
        let me = this;
        let viewId = me.id;
        let result = [];
        let nodes = $('#' + viewId + ' input[name="' + viewId + '"]');
        nodes.each((i, n) => {
            if (bottomValues.indexOf(n.value + '') > -1) {
                n.checked = true;
            }
        });
        me['@{checkParentState}'](me.id);
    },
    getValues() {
        return this.get('value');
    },
    getItems() {
        return this.get('item')
    },

    get(type){
        let me = this;
        let viewId = me.id;
        let result = [];

        let list = me.updater.get('list');
        list.forEach((item, index) => {
            let children = item.children || [];
            if (children.length == 0) {
                // 根节点
                let node = $('#cb_' + viewId + '_' + index);
                if (node[0].checked) {
                    if(type == 'item'){
                        // 完整对象
                        result.push(item);
                    }else{
                        // value值
                        result.push(node[0].value);
                    }
                }
            }
        })
        return result;
    }
});