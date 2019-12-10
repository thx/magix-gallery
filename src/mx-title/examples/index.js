let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'content',
            desc: '标题内容',
            type: 'string'
        }, {
            key: 'tip',
            desc: '提示内容',
            type: 'string'
        }]
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});