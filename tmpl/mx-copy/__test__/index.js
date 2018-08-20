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
        this.updater.digest({
            options
        });
    },
    'done2<success>'(e) {
        this.updater.digest({
            success: true
        })
    }
});