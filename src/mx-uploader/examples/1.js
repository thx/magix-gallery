let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            text: '123132'
        });
    },
    'uploadSuccess<success>'(e) {
        // e.response
    },
    'uploadError<error>'(e) {
        // e.error
    },
    'test<click>'(event){
        this.updater.digest({
            text: '123'
        })
    }
});