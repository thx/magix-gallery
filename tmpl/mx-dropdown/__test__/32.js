let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@32.html',
    render() {
        let that = this;
        that.updater.digest({
            checker: (selected) => {
                return new Promise(resolve => {
                    resolve((selected.length > 2) ? '最多选择两个' : '');
                })
            }
        });
    }
});