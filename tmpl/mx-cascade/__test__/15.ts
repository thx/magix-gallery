import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@15.html',
    render() {
        this.updater.digest({
            adcList: [{
                name: '选项1',
                code: 1,
                subComponentList: [{
                    name: '选项1_1',
                    code: 11,
                }, {
                    name: '选项1_2',
                    code: 12,
                }]
            }, {
                name: '选项2',
                code: 2
            }, {
                name: '选项3',
                code: 3,
                subComponentList: [{
                    name: '选项3_1',
                    code: 31,
                }, {
                    name: '选项3_2',
                    code: 32,
                }]
            }],
            selected1: 31,
            selected2: 31,
        });
    }
});