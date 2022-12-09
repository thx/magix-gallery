let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let list = [{
            value: 1,
            pValue: '',
            text: 1
        }, {
            value: 11,
            pValue: 1,
            text: 11
        }, {
            value: 111,
            pValue: 11,
            text: 111
        }, {
            value: 1111,
            pValue: 111,
            text: 1111
        }, {
            value: 1112,
            pValue: 111,
            text: 1112
        }, {
            value: 112,
            pValue: 11,
            text: 112
        }, {
            value: 12,
            pValue: 1,
            text: 12
        }, {
            value: 2,
            pValue: '',
            text: 2
        }, {
            value: 21,
            pValue: 2,
            text: 21
        }, {
            value: 22,
            pValue: 2,
            text: 22
        }, {
            value: 3,
            pValue: '',
            text: 3
        }]

        this.updater.digest({
            list,
            values: [21]
        });
    },
    'clear<click>'(e) {
        this.updater.digest({
            values: []
        })
    }
});