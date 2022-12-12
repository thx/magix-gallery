let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest({
            searchList: [{
                text: '计划',
                value: 'campaign'
            }, {
                text: '单元',
                value: 'adgroup'
            }],
            searchValue1: 'adgroup',
            value1: '',
            searchValue2: 'campaign',
            value2: '',
        });
    },
});