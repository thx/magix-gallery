let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Vframe = Magix.Vframe;
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@2.html',
    mixins: [Form, Validator],
    render() {
        let list = [{
            value: 1,
            pValue: '',
            text: '1'
        }, {
            value: 2,
            pValue: '',
            text: '2'
        }, {
            value: 3,
            pValue: '',
            text: '3'
        }, {
            value: 11,
            pValue: 1,
            text: '1-1'
        }, {
            value: 12,
            pValue: 1,
            text: '1-2'
        }, {
            value: 21,
            pValue: 2,
            text: '2-1'
        }, {
            value: 211,
            pValue: 21,
            text: '2-1-1'
        }, {
            value: 212,
            pValue: 21,
            text: '2-1-2'
        }, {
            value: 22,
            pValue: 2,
            text: '2-2'
        }, {
            value: 23,
            pValue: 2,
            text: '2-3'
        }]

        this.updater.digest({
            list,
            selected: [211, 23, 3],
            index: 3
        });
    },
    'changeData<click>'(e) {
        let list = this.updater.get('list');
        let index = this.updater.get('index');
        let next = index + 1;
        list.push({
            value: '2' + next,
            pValue: 2,
            text: '2-' + next
        })
        this.updater.digest({
            index: next,
            list
        })
    }
});