let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'copy-node',
            desc: '需要复制的节点id',
            type: 'string',
            def: ''
        }]

        let events = [{
            type: 'success',
            desc: '复制成功触发',
            params: [{
                key: '-',
                desc: '-',
                type: '-'
            }]
        }, {
            type: 'error',
            desc: '复制失败触发',
            params: [{
                key: '-',
                desc: '-',
                type: '-'
            }]
        }]

        this.updater.digest({
            options,
            events
        });
    },
    'done2<success>'(e) {
        this.updater.digest({
            success: true
        })
    }
});