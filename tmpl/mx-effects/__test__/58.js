let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@58.html',
    render() {
        this.updater.digest({
            test: true,
            list: [{
                tip: '1星：非常不满意' 
            }, {

            }, {
                tip: '3星：一般'
            }, {

            }, {
                tip: '5星：非常满意'
            }]
        });
    }
});