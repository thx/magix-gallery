let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
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
            value: 11,
            pValue: 1,
            text: '1-1'
        }, {
            value: 111,
            pValue: 11,
            text: '1-1-1'
        }, {
            value: 1111,
            pValue: 111,
            text: '1-1-1-1'
        }, {
            value: 1112,
            pValue: 111,
            text: '1-1-1-2'
        }, {
            value: 12,
            pValue: 1,
            text: '1-2'
        }, {
            value: 121,
            pValue: 12,
            text: '1-2-1'
        }, {
            value: 122,
            pValue: 12,
            text: '1-2-2'
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
            value: 221,
            pValue: 22,
            text: '2-2-1'
        }, {
            value: 222,
            pValue: 22,
            text: '2-2-2'
        }]

        this.updater.digest({
            list
        });
    }
});