/**
 * 盒状分组
 */
let Magix = require('magix');
let Base = require('@./base');
Magix.applyStyle('@index.less');

let ClassNames = {
    solid: '@index.less:solid-box',
    hollow: '@index.less:hollow-box'
}
module.exports = Base.extend({
    tmpl: '@box.html',
    render() {
        let mode = this.updater.get('mode');
        this.updater.digest({
            boxClass: ClassNames[mode]
        });
    }
});