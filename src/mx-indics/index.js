let Magix = require('magix');
let $ = require('$');
let Dialog = require('@../mx-dialog/index'); //mixins dialog
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    init(e) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();

        this.assign(e);
    },
    assign(e) {
        let that = this;
        let altered = that.updater.altered();

        let textKey = e.textKey || 'text',
            valueKey = e.valueKey || 'value',
            parentKey = e.parentKey || 'pValue';
        let fields = [];
        (e.fields || []).forEach(item => {
            fields.push({
                text: item[textKey],
                value: item[valueKey],
                pValue: item[parentKey],
                tip: item.tip || ''
            })
        })

        let parents = [];
        (e.parents || []).forEach(item => {
            parents.push({
                text: item[textKey],
                value: item[valueKey]
            })
        })


        let customs = (e.customs || []).map(v => {
            return '' + v;
        });
        let defaults = (e.defaults || []).map(v => {
            return '' + v;
        });
        // 当自定义为空时，默认为defaults
        if (customs.length == 0) {
            customs = defaults;
        }

        // 可选指标上限
        let limit = +e.limit || 0;

        // 是否可排序
        let sortable = (e.sortable + '' === 'true');

        // lineNumber：每行个数，默认情况下
        // 可排序：一行四个
        // 不可排序：一行五个
        let lineNumber = e.lineNumber || (sortable ? 4 : 5);

        // 1 默认
        // 2 自定义
        let type = (e.custom + '' === 'true') ? 2 : 1;
        let map = {
            1: {
                label: '默认数据',
                list: defaults
            },
            2: {
                label: '自定义数据',
                list: customs
            }
        }

        this.updater.set({
            parents,
            fields,
            sortable,
            lineNumber,
            limit,
            map,
            type
        })

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();
    },

    'toggleDefault<click>'(e) {
        let that = this;

        let type = that.updater.get('type');
        if (type == 1) {
            type = 2;
        } else {
            type = 1;
        }
        that.updater.digest({
            type
        });
        that['@{fire}']('btn-switch');
    },
    '@{fire}'(triggerType) {
        let that = this;
        let type = that.updater.get('type'),
            map = that.updater.get('map');
        $('#' + that.id).trigger({
            type: 'change',
            triggerType,
            defaults: map[1].list,
            custom: (type == 2), //是否为自定义指标
            customs: map[2].list
        });
    },

    /**
     * 开浮层编辑了就是自定义数据了 
     */
    'show<click>'(e) {
        e.preventDefault();

        let that = this;
        let updater = that.updater;
        let sortable = updater.get('sortable');

        let viewOptions = $.extend(true, {}, updater.get());
        viewOptions.selected = viewOptions.map[viewOptions.type].list;
        viewOptions.callback = (d) => {
            let map = updater.get('map');
            let type = 2;
            map[type]['list'] = d.selected;
            that.updater.digest({
                type,
                map
            });
            that['@{fire}']('dialog-setting');
        };
        that.mxModal('@./dialog', viewOptions, {
            width: 1000,
            closable: false,
            card: false
        });
    }
});