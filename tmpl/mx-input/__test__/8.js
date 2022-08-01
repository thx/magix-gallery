let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@8.html',
    mixins: [Form, Validator],
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
            searchValue3: 'campaign',
            value3: '',
        });
    }
});