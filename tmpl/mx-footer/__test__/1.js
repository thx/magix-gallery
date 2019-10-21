let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            list: [{
                text: '居中对齐（默认）',
                value: 'center'
            }, {
                text: '左对齐',
                value: 'left'
            }, {
                text: '右对齐',
                value: 'right'
            }],
            current: 'center'
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            current: e.params.value
        })
    }
});