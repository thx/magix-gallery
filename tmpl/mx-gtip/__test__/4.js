let Magix = require('magix');
let Base = require('__test__/example');
let GTip = require('@../index');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
    mixins: [GTip],
    render() {
        this.updater.digest();
    },
    'show<click>'(){
        this.gview('@./custom', {
            type: 'pass',
            singleton: false,
            styles: {
                width: 'auto',
                top: '80px',
                right: '40px',
                left: 'auto',
                borderRadius: '8px'
            }
        });
    }
});