let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@29.html',
    render() {
        let viewId = this.id;
        let list = [{
            value: 1,
        }, {
            value: 2,
        }, {
            value: 3,
        }, {
            value: 4,
        }, {
            value: 5,
        }, {
            value: 6,
        }, {
            value: 7,
        }, {
            value: 8,
        }];
        this.updater.digest({
            viewId,
            selected: {
                value1: '一二三四五六七八',
                value2: '一二三四五六七八九十',
                value3: '一二三四五六七八九十一二',
                value4: '一二三四五六七八九十一二三四',
                value5: '一二三四五六七八九十一二三四五六',
                value6: '一二三四五六七八九十一二三四五六七八',
                value7: '一二三四五六七八九十一二三四五六七八九十',
                value8: '一二三四五六七八九十一二三四五六七八九十一二',
            },
            list,
        });


        for (let i = 0; i < list.length; i++) {
            let node = document.getElementById(`${viewId}_input_${list[i].value}`);
            Magix.mix(list[i], {
                width: node.clientWidth + 'px',
            })
        }
        this.updater.digest({
            list,
        });
    }

});