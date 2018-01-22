/*
ver:2.0.3
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let Vframe = Magix.Vframe;
Magix.applyStyle('@index.less');
let ActiveInstance = null;
let CSSNames = {
    left: '@index.less:toleft',
    right: '@index.less:toright'
};
let ListToTree = (list, id, pId) => {
    let map = {},
        listMap = {},
        rootList = [];
    for (let i = 0, max = list.length; i < max; i++) {
        let one = Magix.mix({}, list[i]);
        map[one[id]] = one;
        if (listMap[one[id]]) {
            one.children = listMap[one[id]];
        }
        if (Magix.has(one, pId) && one[pId] !== '') {
            if (map[one[pId]]) {
                let c = map[one[pId]].children || (map[one[pId]].children = []);
                c.push(one);
            } else {
                if (!listMap[one[pId]]) listMap[one[pId]] = [one];
                else listMap[one[pId]].push(one);
            }
        } else {
            rootList.push(one);
        }
    }
    return { list: rootList, map };
};
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me.assign(extra);
        me['@{context.menu}'] = extra['@{context.menu}'];
        me['@{context.event}'] = extra['@{context.event}'];
        me['@{fn.picked}'] = extra.picked;
        if (!me['@{parent.node}']) {
            Monitor['@{setup}']();
            me.on('destroy', () => {
                Monitor['@{remove}'](me);
                Monitor['@{teardown}']();
                if (me['@{context.menu}']) {
                    $('#' + me.id).remove();
                }
            });
        } else {
            me.on('destroy', () => {
                $('#' + me.id).remove();
            });
        }
    },
    assign(ops) {
        let me = this;
        let width = ops.width || 340;
        let valueKey = ops.valueKey || 'id';
        let parentKey = ops.parentKey || 'pId';
        let textKey = ops.textKey || 'text';
        let parentNode = ops['@{parent.node}'];
        if (!parentNode) {
            let temp = ListToTree(ops.list, valueKey, parentKey);
            me['@{list.map}'] = temp.map;
            me['@{list}'] = temp.list;
        } else {
            me['@{list.map}'] = ops['@{list.map}'];
            me['@{list}'] = ops.list;
        }
        me['@{parent.node}'] = parentNode;
        me['@{width}'] = width;
        me['@{value.key}'] = valueKey;
        me['@{parent.key}'] = parentKey;
        me['@{text.key}'] = textKey;
        me['@{parent.id}'] = ops.pId;
        me['@{root.panel}'] = ops['@{root.panel}'];
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id,
            contextMenu: me['@{context.menu}'],
            isChild: me['@{parent.node}'],
            list: me['@{list}'],
            width: me['@{width}'],
            valueKey: me['@{value.key}'],
            textKey: me['@{text.key}']
        });
        if (me['@{context.menu}']) {
            me['@{show}'](me['@{context.event}']);
        }
    },
    '@{inside}'(node) {
        let me = this;
        let inside = Magix.inside(node, me.id);
        if (!inside) {
            let children = me.owner.children();
            for (let c of children) {
                let child = Vframe.get(c);
                if (child) {
                    inside = child.invoke('@{inside}', [node]);
                    if (inside) break;
                }
            }
        }
        return inside;
    },
    '@{show}'(e, refNode) {
        let me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = 1;
            let node = $('#' + me.id + ' div');
            let doc = $(document);
            let left = -1,
                top = -1,
                dock = 'right';
            let width = node.outerWidth();
            let height = node.outerHeight(),
                refWidth = 0,
                refHeight = 0;
            if (refNode) {
                let offset = refNode.offset();
                refWidth = refNode.outerWidth();
                refHeight = refNode.outerHeight();
                left = offset.left + refWidth;
                top = offset.top;
            } else {
                left = e.pageX;
                top = e.pageY;
            }
            if ((left + width) > doc.width()) {
                left = left - width - refWidth;
                dock = 'left';
                if (left < 0) left = 0;
            }
            if ((top + height) > doc.height()) {
                top -= height;
                top += refHeight;
                if (top < 0) top = 0;
            }
            if (refNode) {
                if (dock == 'right') {
                    left -= 10;
                } else {
                    left += 10;
                }
            }
            let root = me['@{root.panel}'] || me;
            if (ActiveInstance != root) ActiveInstance = root;
            if (me['@{parent.node}']) {
                node.css({
                    left: left,
                    top: top
                }).addClass(CSSNames[dock]);
            } else {
                node.css({
                    left: left,
                    top: top
                });
            }
            if (!root['@{monitor.added}']) {
                root['@{monitor.added}'] = 1;
                Monitor['@{add}'](root);
            }
        }
    },
    '@{hide}'() {
        let me = this;
        let children = me.owner.children();
        for (let i = children.length - 1; i >= 0; i--) {
            let child = Vframe.get(children[i]);
            if (child) child.invoke('@{hide}');
        }
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            let node = $('#' + me.id + ' div');
            if (me['@{parent.node}']) {
                node.removeClass(CSSNames.left).removeClass(CSSNames.right);
                node.css({
                    left: -100000
                });
                me['@{parent.node}'].removeClass('@index.less:over');
            } else {
                if (me['@{context.menu}']) {
                    node.css({
                        left: -10000
                    });
                }
                delete me['@{monitor.added}'];
                Monitor['@{remove}'](me);
            }
        }
    },
    '@{stop.hide.child}'(id) {
        clearTimeout(this['@{timer.}' + id]);
    },
    '@{show.child}'(node, id, children) {
        let me = this;
        me['@{stimer.}' + id] = setTimeout(me.wrapAsync(() => {
            let nid = me.id + '_menu_' + id;
            let vf = Vframe.get(nid);
            if (!vf) {
                $('body').append('<div id="' + nid + '" />');
                vf = me.owner.mountVframe(nid, '@moduleId', {
                    '@{parent.node}': $('#' + me.id + '_' + id),
                    width: me['@{width}'],
                    valueKey: me['@{value.key}'],
                    textKey: me['@{text.key}'],
                    parentKey: me['@{parent.key}'],
                    list: children,
                    pId: id,
                    '@{root.panel}': me['@{root.panel}'] || me,
                    '@{list.map}': me['@{list.map}']
                });
            }
            vf.invoke('@{show}', [null, node], true);
        }), 250);
    },
    '@{hide.child}'(id) {
        let me = this;
        let nid = me.id + '_menu_' + id;
        let vf = Vframe.get(nid);
        if (vf) {
            me['@{timer.}' + id] = setTimeout(me.wrapAsync(() => {
                vf.invoke('@{hide}');
            }), 50);
        }
    },
    '@{hover}<mouseover,mouseout>'(e) {
        let me = this;
        let flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            let node = $(e.eventTarget);
            node[e.type == 'mouseout' ? 'removeClass' : 'addClass']('@index.less:over');
            let id = e.params.id;
            me['@{hide.child}'](me['@{last.id}']);
            if (e.type == 'mouseover') {
                let map = me['@{list.map}'];
                let children = map[id].children;
                if (children) {
                    me['@{stop.hide.child}'](id);
                    me['@{show.child}'](node, id, children);
                    me['@{last.id}'] = id;
                }
            } else {
                clearTimeout(me['@{stimer.}' + id]);
            }
        }
    },
    '@{over}<mouseover>'(e) {
        let me = this;
        let flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            if (!me['@{parent.node}'] && ActiveInstance != me) {
                if (ActiveInstance) {
                    ActiveInstance['@{hide}']();
                }
            }
            if (me['@{parent.node}']) {
                $(me['@{parent.node}']).addClass('@index.less:over');
                me.owner.parent().invoke('@{stop.hide.child}', [me['@{parent.id}']]);
            }
        }
    },
    '@{select}<click>'(e) {
        let me = this;
        let root = me['@{root.panel}'] || me;
        let node = $('#' + root.id);
        let data = {
            type: 'pick',
            item: me['@{list.map}'][e.params.id]
        };
        node.trigger(data);
        root['@{hide}']();
        let fn = me['@{fn.picked}'];
        if (fn) {
            fn(data.item);
        }
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
}, {
        show(view, e, ops) {
            let node = e.eventTarget;
            if (!node.id) {
                node.id = Magix.guid();
            }
            let id = 'ctx_' + node.id;
            let vf = Magix.Vframe.get(id);
            if (vf) {
                vf.invoke('@{show}', [e]);
            } else {
                $('body').append('<div id="' + id + '" />');
                ops = ops || {};
                Magix.mix(ops, {
                    '@{context.menu}': 1,
                    '@{context.event}': e
                });
                vf = view.owner.mountVframe(id, '@moduleId', ops);
            }
        }
    });