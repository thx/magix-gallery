let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@41.html',
    render() {
        let list = [];
        for (let j = 0; j < 2; j++) {
            list.push({
                title: `卡片${j}`,
                tip: '报告洞察每个环节的消费者触达效率，同时提供了相应的优化建议，有效挖掘市场机会。',
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png'
            })
        }

        this.updater.digest({
            list,
            selected: {},
            viewId: this.id
        });
    },
    'select<select>'(e) {
        this.updater.digest({
            selected: e.item
        })
    }
});