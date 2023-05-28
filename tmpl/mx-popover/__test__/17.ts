import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@17.html',
    render() {
        this.updater.digest({
            tip: `第一行文案<br/>第二行文案<br/>第三行文案<br/>第四行文案`,
            custom: {
                list: [{
                    name: '消耗',
                    key: 'charge',
                    type: 'double'
                }, {
                    name: '展现量',
                    key: 'adPv',
                    type: 'integer'
                }, {
                    name: '点击量',
                    key: 'click',
                    type: 'integer'
                }, {
                    name: '点击率',
                    key: 'ctr',
                    type: 'percent'
                }]
            }
        });
    }
});