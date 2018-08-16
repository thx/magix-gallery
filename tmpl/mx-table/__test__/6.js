let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let that = this;
        let list = [];

        let itemFn = (key) => {
            return {
                expand: false,
                fixed1: 'fixed1-' + key,
                fixed2: 'fixed2-' + key,
                fixed3: 'fixed3-' + key,
                content1: 'content1-' + key,
                content2: 'content2-' + key,
                content3: 'content3-' + key,
                content4: 'content4-' + key,
                content5: 'content5-' + key,
                content6: 'content6-' + key,
                content7: 'content7-' + key,
                content8: 'content8-' + key,
                content9: 'content9-' + key,
            }
        }
        for (var i = 1; i < 4; i++) {
            let item = itemFn(i);
            item.subs = [];
            for (let j = 1; j < 3; j++) {
                item.subs.push(itemFn(i + '-' + j));
            }
            list.push(item);
        }
        // 默认展开第一个
        list[0].expand = true;

        let groups = [{
            name: '组1',
            fields: [1, 2]
        }, {
            name: '组2',
            fields: [3, 4, 5, 6]
        }, {
            name: '组3',
            fields: [7, 8, 9]
        }]

        // 计算colspan
        let len = 0;
        groups.forEach(group => {
            len += group.fields.length;
        })

        that.updater.digest({
            groups,
            len,
            list
        });
    },

    /**
     * 展开收起
     */
    'toggle<click>' (e) {
        let that = this;
        let index = e.params.index,
            list = that.updater.get('list');
        list[index].expand = !list[index].expand;
        that.updater.digest({
            list
        })
    },

    /**
     * 修改数据
     */
    'change<click>' (e) {
        let that = this;
        let index = e.params.index,
            list = that.updater.get('list');
        list[index].fixed1 = Magix.guid();
        that.updater.digest({
            list
        })
    },

    'delete<click>' (e) {
        let that = this;
        let index = e.params.index,
            list = that.updater.get('list');
        list.splice(index, 1);
        that.updater.digest({
            list
        })
    }
});