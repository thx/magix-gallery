let Magix = require('magix');
let Vframe = Magix.Vframe;
let Util = require('@./util');
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(ops) {
        let me = this;
        // 保留历史展开收起状态
        me['@{close.map}'] = {};
        me['@{bottom.values}'] = [];
        me['@{owner.node}'] = $('#' + me.id);

        me.updater.snapshot();
        me.assign(ops);
    },
    assign(ops) {
        let me = this;
        let altered = me.updater.altered();

        let readOnly = (ops.readOnly + '') === 'true';
        let hasLine = (ops.hasLine + '') === 'true';
        let valueKey = ops.valueKey || 'value';
        let textKey = ops.textKey || 'text';
        let parentKey = ops.parentKey || 'pValue';
        // 是否需要全选功能，默认关闭
        let needAll = (ops.needAll + '') === 'true';
        // 是否可展开收起，默认false
        let needExpand = (ops.needExpand + '') === 'true';
        // 组织树状结构
        let info = Util.listToTree(ops.list, valueKey, parentKey);

        let list;
        if (needAll) {
            let all = {};
            all[valueKey] = me.id + '_all';
            all[textKey] = I18n['select.all'];
            all.isAll = true;
            all.children = info.list;
            list = [all];
        } else {
            list = info.list
        }

        // 展开收起状态，默认false
        // 切换数据时保留历史展开收起状态
        let close = (ops.close + '') === 'true';
        let map = {};
        let _lp1 = (arr) => {
            arr.forEach(item => {
                map[item[valueKey]] = close;

                if (item.children && item.children.length > 0) {
                    _lp1(item.children);
                }
            })
        }
        _lp1(list);
        me['@{close.map}'] = Magix.mix(map, me['@{close.map}']);
        let _lp2 = (arr) => {
            arr.forEach(item => {
                item.close = me['@{close.map}'][item[valueKey]];

                if (item.children && item.children.length > 0) {
                    _lp2(item.children);
                }
            })
        }
        _lp2(list);

        // 历史选中保留
        me['@{bottom.values}'] = me['@{bottom.values}'].map(val => (val + ''));
        (ops.bottomValues || []).forEach(val => {
            val = val + '';
            if(me['@{bottom.values}'].indexOf(val) < 0){
                me['@{bottom.values}'].push(val);
            }
        })

        me.updater.set({
            viewId: me.id,
            valueKey,
            textKey,
            list,
            readOnly,
            hasLine,
            needExpand,
            closeMap: me['@{close.map}'],
            bottomValues: me['@{bottom.values}']
        });
        me['@{owner.node}'].val(me['@{bottom.values}']);

        if (!altered) {
            altered = me.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            me.updater.snapshot();
            return true;
        }
        return false;
    },

    render: function () {
        this.updater.digest();

        let bottomValues = this.updater.get('bottomValues');
        if (bottomValues.length > 0) {
            this.setBottomValues(bottomValues);
        }
    },

    '@{change}<change>'(e){
        e.stopPropagation();
        let me = this;
        let bottomValues = me.getBottomValues();
        me['@{owner.node}'].val(me['@{bottom.values}'] = bottomValues).trigger($.Event('change', {
            bottomValues
        }));
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

    loop(fn) {
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