import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@16.html',
    render() {
        this.updater.digest({
            items: [{
                name: '选项1',
                code: 1,
            }, {
                name: '选项1_1',
                code: 1,
            }],
            adcList: [{
                name: '选项1',
                code: 1,
                subComponentList: [{
                    name: '选项1_1',
                    code: 1,
                }, {
                    name: '选项1_2',
                    code: 2,
                }]
            }, {
                name: '选项2',
                code: 2,
                subComponentList: [{
                    name: '选项2_1',
                    code: 1,
                }, {
                    name: '选项2_2',
                    code: 2,
                }]
            }],
        });
    }
});