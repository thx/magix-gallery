/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let ListToTree = (list, id, pId) => {
    id = id || 'id';
    pId = pId || 'pId';
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
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.$extra = extra;
    },
    render: function () {
        let me = this;
        let ops = me.$extra;
        let info = ListToTree(ops.list, ops.valueKey, ops.parentKey);
        me.updater.digest({
            id: me.id,
            valueKey: ops.valueKey || 'id',
            parentKey: ops.parentKey || 'pId',
            textKey: ops.textKey || 'text',
            list: info.list
        });
    }
});