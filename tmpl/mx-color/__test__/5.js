let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let list1 = [
            '#3BD0D8',
            '#3E3EFF',
            '#FFC13A',
            '#FF831B'
        ];

        let list2 = [
            { text: '浅蓝色', value: '#3BD0D8' },
            { text: '蓝色', value: '#3E3EFF' },
            { text: '柠檬黄', value: '#FFC13A' },
            { text: '橙色', value: '#FF831B' },
        ];

        this.updater.digest({
            color1: list1[0],
            list1,
            color2: list2[0].value,
            list2,
        });
    },
    'changeColor<change>'(e) {
        this.updater.digest({
            [`color${e.params.index}`]: e.color,
        });
    }
});