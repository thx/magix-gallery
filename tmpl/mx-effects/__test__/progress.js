let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@progress.html',
    render() {
        let options = [{
            key: 'mode',
            desc: '页脚类型，简单版（simple）还是复杂版本',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            options
        });
    }
});