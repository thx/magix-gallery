let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        let list = [1, 2, 3, 4, 5].map(i => {
            return {
                text: '计划' + i,
                subs: [1, 2, 3, 4].map(j => {
                    return {
                        value: i + '' + j,
                        text: '单元' + i + '_' + j
                    }
                })
            }
        });

        this.updater.digest({
            list
        });
    }
});