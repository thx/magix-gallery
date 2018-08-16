let Magix = require('magix');
let Vframe = Magix.Vframe;
let ListToTree = (list, id, pId, close) => {
    let map = {},
        listMap = {},
        rootList = [];
    for (let i = 0, max = list.length; i < max; i++) {
        let one = Magix.mix({}, list[i]);
        one.close = close;
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
    return {
        list: rootList,
        map
    };
};
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        this['@{extra}'] = extra;
    },
    render: function() {
        let me = this;
        let ops = me['@{extra}'];
        let readOnly = (ops.readOnly + '') === 'true';
        let hasLine = (ops.hasLine + '') === 'true';
        let valueKey = ops.valueKey || 'value';
        let textKey = ops.textKey || 'text';
        let parentKey = ops.parentKey || 'pValue';
        // 是否需要全选功能，默认关闭
        let needAll = (ops.needAll + '') === 'true';
        // 是否可展开收起，默认false
        let needExpand = (ops.needExpand + '') === 'true';
        // 可展开收起的时候，默认false
        let close = (ops.close + '') === 'true';
        let info = ListToTree(ops.list, valueKey, parentKey, close);

        let list;
        if (needAll) {
            let all = {};
            all[valueKey] = 'all';
            all[textKey] = '全选';
            all.isAll = true;
            all.children = info.list;
            all.close = close;
            list = [all];
        } else {
            list = info.list
        }
        me.updater.digest({
            viewId: me.id,
            valueKey,
            textKey,
            list,
            readOnly,
            hasLine,
            needExpand
        });

        let bottomValues = ops.bottomValues || [];
        if (bottomValues.length > 0) {
            me.setBottomValues(bottomValues);
        }
    },
    setBottomValues(bottomValues) {
        this.getBottom((vf) => {
            vf.invoke('setValues', [bottomValues]);
        })
    },
    getBottomValues() {
        let me = this;

        let bottomValues = [];
        me.getBottom((vf) => {
            let result = vf.invoke('getValues');
            bottomValues = bottomValues.concat(result);
        })

        return bottomValues;
    },
    getBottom(callback){
        let me = this;
        let children = me.owner.children();

        let loop = (children) => {
            for (let c of children) {
                let vf = Vframe.get(c);
                let cc = vf.children();
                if (cc && (cc.length > 0)) {
                    loop(cc);
                } else {
                    if(callback){
                        callback(vf);
                    }
                }
            }
        }
        loop(children);
    }
});