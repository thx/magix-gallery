let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'width',
            desc: '宽度',
            type: 'number',
            def: '780，设置了宽度的时候最小宽度也是780'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: '00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100'
        }, {
            key: 'half',
            desc: '是否以半小时为选择间隔',
            type: 'boolean',
            def: 'false，默认一小时为间隔'
        }]

        this.updater.digest({
            options
        });
    }
});