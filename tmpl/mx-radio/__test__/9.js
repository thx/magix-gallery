let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        let data = {};
        let group = 3, num = 3;
        for (let i = 1; i < num + 1; i++) {
            for (let j = 0; j < group; j++) {
                data[`list${j + 1}`] = data[`list${j + 1}`] || [];
                data[`list${j + 1}`].push({
                    text: `选项文案${num * j + i}`,
                    value: num * j + i,
                    tip: '选项说明选项说明选项说明选项说明选项说明',
                    icon: '<i class="mc-iconfont">&#xe621;</i>',
                })
            }
        }
        this.updater.digest({
            ...data,
            selected: data.list1[0].value,
            viewId: this.id,
        });
    }
});