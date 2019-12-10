let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            custom: {
                list: [{
                    name: '消耗',
                    key: 'charge',
                    type: 'double'
                }, {
                    name: '展现量',
                    key: 'adPv',
                    type: 'integer'
                }, {
                    name: '点击量',
                    key: 'click',
                    type: 'integer'
                }, {
                    name: '点击率',
                    key: 'ctr',
                    type: 'percent'
                }]
            }
        });
    }
});