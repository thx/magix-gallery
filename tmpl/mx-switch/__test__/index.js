let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'state',
            desc: '当前状态是开还是关，默认关闭',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'disabled',
            desc: '是否禁止操作',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'tip',
            desc: '禁止操作时的补充说明',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            options,
            viewId: this.id
        });
    }
});