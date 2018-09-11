let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            list: [{ id: 1, name: '选择1' }, { id: 2, name: '选择2' }]
        });
    }
});