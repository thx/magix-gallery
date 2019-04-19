let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            tip: `<div class="clearfix">
            <div class="fl">123</div>
            <div class="fl">234</div>
        </div>`
        });
    }
});