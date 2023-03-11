import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Dialog from '../mx-dialog/index';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@icon.html',
    mixins: [Dialog],
    init(e) {
        this.updater.set({
            icon: '<i class="mx-iconfont">&#xe70f;</i>',
        })
        this.assign(e);
    },
    assign(e) {
        this.updater.snapshot();
        this['@{owner.node}'] = $('#' + this.id);

        let list = [], parents = [], defaults = [];
        let textKey = e.textKey || 'text',
            valueKey = e.valueKey || 'value',
            parentKey = e.parentKey || 'pValue';
        list = (e.list || []).map(item => {
            // 默认选择
            if (item.default + '' === 'true') {
                defaults.push(item[valueKey]);
            }

            return {
                ...item,
                text: item[textKey],
                value: item[valueKey],
                pValue: item[parentKey],
            }
        });

        parents = (e.parents || []).map(item => {
            return {
                ...item,
                text: item[textKey],
                value: item[valueKey],
            }
        });

        // 多选：已选中数据 数组 or 字符串
        let selected = [];
        if ($.isArray(e.selected)) {
            // 数组，保留初始数据状态，双向绑定原样返回
            this['@{bak.type}'] = 'array';
            selected = e.selected.map(v => v + '');
        } else {
            // 字符串
            selected = (e.selected === undefined || e.selected === null) ? [] : (e.selected + '').split(',');
        }

        // 可选指标上限 max，历史配置指标为limit
        let max = +e.max || +e.limit || 0;

        // 最少选择下限，至少要选择一个才可提交
        let min = +e.min || 1;

        // 是否可排序，默认true
        let sortable = (e.sortable + '' !== 'false');

        // 可排序且有分组的情况下，是否只能组内排序
        let sortableGroup = (e.sortableGroup + '' === 'true');

        // lineNumber：每行个数，默认情况下
        let lineNumber = +e.lineNumber || 4;

        this.updater.set({
            disabled: (e.disabled + '' === 'true'), // 是否禁用
            data: {
                list,
                parents,
                defaults,
                selected,
                sortable,
                sortableGroup,
                lineNumber,
                max,
                min,
                tip: e.tip || ''
            }
        })

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{fire}']();
    },

    '@{fire}'(fire) {
        let { selected } = this.updater.get('data');
        let val;
        if (this['@{bak.type}'] == 'array') {
            // 初始化为数组
            val = selected;
        } else {
            // 初始化为字符串
            val = selected.join(',');
        }

        this['@{owner.node}'].val(val);
        if (fire) {
            this['@{owner.node}'].trigger({
                type: 'change',
                selected: val,
                items: []
            });
        }
    },

    'show<click>'(e) {
        e.preventDefault();

        let that = this;
        let viewOptions = $.extend(true, {}, that.updater.get('data'));
        Magix.mix(viewOptions, {
            callback: (data) => {
                that.updater.digest({
                    data,
                });
                that['@{fire}'](true);
            }
        });

        that.mxModal('@./dialog', viewOptions, {
            width: 1000,
            header: {
                title: '选择数据字段',
                tip: viewOptions.tip,
            },
        });
    },
});

