let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'box-width',
            desc: '单格宽度',
            type: 'number',
            def: `<pre>
1. 选择一小时的场景默认 32px
2. 选择半小时的场景默认 18px
</pre>`
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
            viewId: this.id,
            options
        });
    }
});