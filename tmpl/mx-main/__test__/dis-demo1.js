let Magix = require('magix');
let $ = require('$');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@dis-demo1.html',
    render() {
        this.updater.digest({
            
        });
    }
});