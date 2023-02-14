import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@54.html',
    render() {
        let fields = [{
            value: 'entity',
            text: '主体信息',
            ladderWidth: 'entity',
        }, {
            value: 'launchTime',
            text: '投放日期',
            ladderWidth: 'large-info',
        }, {
            value: 'budget',
            text: '预算',
            ladderWidth: 'info',
        }, {
            value: 'reportField2',
            text: '二字',
            ladderWidth: 'report',
        }, {
            value: 'reportField3',
            text: '三汉字',
            ladderWidth: 'report',
        }, {
            value: 'reportField4',
            text: '四个汉字',
            ladderWidth: 'report',
        }, {
            value: 'reportField5',
            text: '一二三四五',
            ladderWidth: 'report',
        }, {
            value: 'reportField6',
            text: '一二三四五六',
            ladderWidth: 'report',
        }, {
            value: 'reportField7',
            text: '一二三四五六七',
            ladderWidth: 'report',
        }, {
            value: 'reportField8',
            text: '一二三四五六七八',
            ladderWidth: 'report',
        }];

        this.updater.digest({
            fields,
            line: 4,
        });
    },
    /**
     * 自由列宽
     */
    'drag<dragfinish>'(e) {
        let items = e.items;
        let { fields } = this.updater.get();
        fields.forEach(field => {
            if (items[field.value]) {
                field.width = items[field.value];
            }
        })
        this.updater.digest({
            fields,
        })
    },
    /**
     * 重置自由列宽
     */
    'reset<click>'(e) {
        let { fields } = this.updater.get();
        fields.forEach(field => {
            delete field.width;
        })
        this.updater.digest({
            fields,
        })
    }
});