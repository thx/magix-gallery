let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@11.html',
    render() {
        let list = [];
        for (let i = 0; i < 4; i++) {
            list.push({
                text: i,
                value: i,
                action: `操作：<a class="color-brand" href="javascript:;" mx-click="add({value: ${i}})">加1</a>`
            })
        }
        this.updater.digest({
            list
        });
    },
    'add<click>'(e) {
        let { value } = e.params;
        let { list } = this.updater.get();
        for (let i = 0; i < list.length; i++) {
            if (list[i].value == value) {
                list[i].text = list[i].text + 1;
                break;
            }
        }
        this.updater.digest({
            list
        })
    }
});