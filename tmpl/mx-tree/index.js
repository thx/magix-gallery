let Magix = require('magix');
let Vframe = Magix.Vframe;
let Util = require('@./util');
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
        let info = Util.listToTree(ops.list, valueKey, parentKey, close);

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
        this.loop((vf) => {
            vf.invoke('setValues', [bottomValues]);
        });
    },

    getBottomValues() {
        let bottomValues = [];
        this.loop((vf) => {
            let result = vf.invoke('getValues');
            bottomValues = bottomValues.concat(result);
        })
        return bottomValues;
    },

    getBottomItems() {
        let bottomItems = [];
        this.loop((vf) => {
            let result = vf.invoke('getItems');
            bottomItems = bottomItems.concat(result);
        })
        return bottomItems;
    },

    loop(fn){
        let me = this;
        let children = me.owner.children();
        let _loop = (children) => {
            for (let c of children) {
                let vf = Vframe.get(c);
                fn(vf);

                let cc = vf.children();
                if (cc && (cc.length > 0)) {
                    _loop(cc);
                } 
            }
        }
        _loop(children);
    }
});