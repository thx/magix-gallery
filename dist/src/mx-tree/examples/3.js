let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
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
            value: 112,
            pValue: 11,
            text: '1-1-2'
        }, {
            value: 1121,
            pValue: 112,
            text: '1-1-2-1'
        }, {
            value: 1122,
            pValue: 112,
            text: '1-1-2-2'
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
        }, {
            value: 231,
            pValue: 23,
            text: '2-3-1'
        }, {
            value: 232,
            pValue: 23,
            text: '2-3-2'
        }]

        this.updater.digest({
            list
        });
    }
});