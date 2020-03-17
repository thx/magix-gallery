let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@43.html',
    render() {
        let list = [];
        for (let j = 0; j < 3; j++) {
            list.push({
                title: `消费者洞察报告${j}`,
                tip: '报告洞察每个环节的消费者触达效率，同时提供了相应的优化建议，有效挖掘市场机会。',
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true
            })
        }
        list[0].highlight = true;
        this.updater.digest({
            list,
            viewId: this.id
        });
    }
});