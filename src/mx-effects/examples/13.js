let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@13.html',
    render() {
        this.updater.digest({
            icon1: '<i class="mc-iconfont">&#xe635;</i>',
            icon2: '<i class="mc-iconfont">&#xe60c;</i>'
        });
    }
});