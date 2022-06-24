/**
 * size
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@44.html',
    render() {
        this.updater.digest({
            list: [{
                value: 'small',
                text: '紧凑型'
            }, {
                value: 'normal',
                text: '常规尺寸'
            }, {
                value: 'large',
                text: '宽松型'
            }],
            num: 6,
            line: 10
        });
    },
    'add<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line + 1
        });
    }
});