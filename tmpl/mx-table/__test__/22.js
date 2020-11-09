let Magix = require('magix');
let Base = require('__test__/example');
let Sort = require('@../sort');

module.exports = Base.extend({
    tmpl: '@22.html',
    mixins: [Sort],
    init(extra){
        this.updater.set({
            selected: extra.selected
        })
        this.observeLocation(['orderField', 'orderBy']);
    },
    render() {
        let that = this;

        let groups = [{
            name: '数字（忽略无值行）',
            fields: [{
                name: '数字列1',
                key: 'field1'
            }, {
                name: '数字列2',
                key: 'field2'
            }]
        }, {
            name: '字符串排序（忽略无值行 + 忽略大小写）',
            fields: [{
                name: '英文',
                key: 'field3'
            }, {
                name: '中文',
                key: 'field4'
            }]
        }]
        let len = 0;
        groups.forEach(group => {
            len += group.fields.length;
        })

        let list = [{
            fixed1: '1_1',
            fixed2: '1_2',
            fixed3: '1_3',
            field1: 9000,
            field2: 3000,
            field3: 'Abc',
            field4: '中文'
        },{
            fixed1: '2_1',
            fixed2: '2_2',
            fixed3: '2_3',
            field1: 9001,
            field2: undefined,
            field3: 'dsas',
            field4: '测试'
        },{
            fixed1: '3_1',
            fixed2: '3_2',
            fixed3: '3_3',
            field1: 9004,
            field2: 2990,
            field3: 'acc',
            field4: ''
        },{
            fixed1: '4_1',
            fixed2: '4_2',
            fixed3: '4_3',
            field1: null,
            field2: 3010,
            field3: 'GSBa',
            field4: '你好'
        },{
            fixed1: '5_1',
            fixed2: '5_2',
            fixed3: '5_3',
            field1: 9051,
            field2: 3000,
            field3: '',
            field4: '随机'
        }]

        setTimeout(() => {
            that.updater.digest({
                list: that.sort(list),
                groups,
                len,
                format: (val) => {
                    if (!val) {
                        return '-';
                    }
                    return val;
                }
            });
        }, 1000)
    }
});