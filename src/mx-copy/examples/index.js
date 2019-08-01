let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'copy-node',
            desc: '需要复制的节点id',
            type: 'string',
            def: ''
        }, {
            key: 'copy-text',
            desc: '不需要显示复制内容时可直接在 mx-copy 上配置 copy-text',
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
    }
});