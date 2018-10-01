let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        let list = [{
            value: 1,
            text: '单品推广计划1',
            subs: [{
                value: 11,
                text: '单品推广计划1_单元1'
            }, {
                value: 12,
                text: '单品推广计划1_单元2'
            }]
        }, {
            value: 2,
            text: '单品推广计划2',
            subs: [{
                value: 21,
                text: '单品推广计划2_单元1'
            }, {
                value: 22,
                text: '单品推广计划2_单元2'
            }]
        }]
        this.updater.digest({
            list
        });
    }
});