let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@19.html',
    render() {
        let list = [];
        for (let i = 1; i < 4; i++) {
            list.push({
                value: i,
                text: `模块${i}`,
            })
        }

        this.updater.digest({
            list,
            selected: list[0].value
        });
    },

    /**
     * 切换tab
     */
    'changeTab<change>'(e) {
        this.updater.digest({
            list: e.list,
            selected: e.selected
        })
    },

    /**
     * 新增tab逻辑
     */
    'addTab<add>'(e) {
        let { list } = this.updater.get();
        let max = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].value > max) {
                max = list[i].value;
            }
        };
        max = max + 1;
        list.push({
            value: max,
            text: `模块${max}`,
        });
        this.updater.digest({
            list
        })
    }
});