let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@desc.html',
    render() {
        let options = [{
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: 'list[0].value'
        }, {
            key: 'readonly',
            desc: '是否只读，状态显示',
            type: 'boolean',
            def: 'false'
        }]

        this.updater.digest({
            options
        });
    }
});