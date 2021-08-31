let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@17.html',
    render() {
        this.updater.digest({
            icon: '<i class="mc-iconfont">&#xe601;</i>',
            selected: 2
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});