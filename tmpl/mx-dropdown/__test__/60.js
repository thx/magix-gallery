let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@60.html',
    render() {
        this.updater.digest({
            list: [{
                text: '10%',
                value: 1,
            }, {
                text: '20%',
                value: 2,
                tag: 'HOT'
            }, {
                text: '30%',
                value: 3,
                tag: 'hover标签提示',
                tagTip: '提示信息'
            }],
            selected: 1,
        });
    }
});