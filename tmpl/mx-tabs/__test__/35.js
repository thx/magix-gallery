let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@35.html',
    render() {
        let list = [{
            value: 1,
            text: '模块1'
        }, {
            value: 2,
            text: '模块2'
        }, {
            value: 3,
            text: '模块3'
        }, {
            value: 4,
            text: '模块4'
        }];

        this.updater.digest({
            list,
            selected: list[0].value
        });
    },

    'changeTab<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});