let Magix = require('magix');
let Base = require('__test__/example');
let Vframe = Magix.Vframe;
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let list = [{
            value: 1,
            pValue: '',
            text: '计划1'
        }, {
            value: 2,
            pValue: '',
            text: '计划2'
        }, {
            value: 11,
            pValue: 1,
            text: '单元1-1'
        }, {
            value: 12,
            pValue: 1,
            text: '单元1-2'
        }, {
            value: 21,
            pValue: 2,
            text: '单元2-1'
        }, {
            value: 22,
            pValue: 2,
            text: '单元2-2'
        }]

        this.updater.digest({
            list,
            selectedValues: [],
            selectedItems: []
        });
    },
    'get<click>'(event) {
        let that = this;
        let tree = Vframe.get(that.id + '_tree');
        let { values, items } = tree.invoke('getBottom');

        this.updater.digest({
            selectedValues: values,
            selectedItems: items
        })
    }
});