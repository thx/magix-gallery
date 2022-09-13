let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@56.html',
    render() {
        let al = [{
            code: 1,
            name: 'test',
            properties: {
                parentCode: 1
            }
        }, {
            code: 6,
            name: 'test6',
            properties: {
                parentCode: 1
            }
        }, {
            code: 7,
            name: 'test7',
            properties: {
                parentCode: 1,
                disabled: true,
            }
        }, {
            code: 2,
            name: 'TestABC',
            properties: {
                parentCode: 1,
                disabled: true,
            }
        }, {
            code: 3,
            name: 'Another',
            properties: {
                parentCode: 2
            }
        }, {
            code: 4,
            name: '选项4',
            properties: {
                parentCode: 1
            }
        }, {
            code: 8,
            name: '选项8',
            properties: {
                parentCode: 1
            }
        }, {
            code: 9,
            name: '选项9',
            properties: {
                parentCode: 2
            }
        }, {
            code: 10,
            name: '选项10',
            properties: {
                parentCode: 2
            }
        }, {
            code: 5,
            name: '选项5',
            properties: {
                parentCode: 2
            }
        }, {
            code: 11,
            name: 'test11',
            properties: {
                parentCode: 2
            }
        }, {
            code: 12,
            name: 'test12',
            properties: {
                parentCode: 2
            }
        }];

        // for (let i = 300; i < 400; i++) {
        //     al.push({
        //         code: i,
        //         name: `选项${i}`,
        //         properties: {
        //             parentCode: 2
        //         }
        //     })
        // }

        this.updater.digest({
            selected: 1,
            ap: [{
                code: 1,
                name: '第一组'
            }, {
                code: 2,
                name: '第二组'
            }],
            al,
        });
    }
});