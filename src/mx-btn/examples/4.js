let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest();
    },
    'test<click>'(e){
        console.log('click')
    }
});