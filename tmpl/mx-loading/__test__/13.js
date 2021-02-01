let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@13.less')

module.exports = Base.extend({
    tmpl: '@13.html',
    render() {

        // 半径，计算周长
        let width = 36, border = 4;
        let r = (width - border) / 2;
        circle1 = Math.PI * r * 2;

        this.updater.digest({
            width,
            border,
            circle1
        });
    }
});