let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest();
    },
    'change<click>'(e) {
        let width = this.updater.get('width');
        if(!width){
            width = 600;
        }else{
            width = null;
        }
        this.updater.digest({
            width
        });
    }
});