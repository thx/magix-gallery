let Magix = require('magix');
let $ = require('$');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@index-demo4.html',
    render() {
        this.updater.digest({

        });
    }
});