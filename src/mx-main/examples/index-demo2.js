let Magix = require('magix');
let $ = require('$');
let Base = require('examples/example');

module.exports = Base.extend({
    tmpl: '@index-demo2.html',
    render() {
        this.updater.digest({
            
        });
    }
});