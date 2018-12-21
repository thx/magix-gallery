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
        }, {
            key: 'mode',
            desc: '样式版本，可选带文字版（text），空心（hollow）',
            type: 'string',
            def: 'hollow'
        }]

        let events = [{
            type: 'change',
            desc: '切换开关时触发',
            params: [{
                key: 'state',
                desc: '当前是开或者关',
                type: 'boolean'
            }]
        }]

        this.updater.digest({
            options,
            events,
            viewId: this.id
        });
    }
});