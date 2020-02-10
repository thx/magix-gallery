let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            id: 19
        });
    },
    'change<click>'(e){
        this.updater.digest({
            id: e.params.id
        })
    }
});