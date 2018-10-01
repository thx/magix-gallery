let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        let list = [{
            name: '单品推广计划1',
            list: [{
                id: 11,
                name: '单品推广计划1_单元1'
            }, {
                id: 12,
                name: '单品推广计划1_单元2'
            }]
        }, {
            name: '单品推广计划2',
            list: [{
                id: 21,
                name: '单品推广计划2_单元1'
            }, {
                id: 22,
                name: '单品推广计划2_单元2'
            }]
        }]
        this.updater.digest({
            list
        });
    }
});