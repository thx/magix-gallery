let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            state: true
        });
    },
    'toggle<change>' (event) {
        // event.state 当前开还是关
        this.updater.digest({
            state: event.state
        });
    },
    'change<click>'(event){
        let state = this.updater.get('state');
        this.updater.digest({
            state: !state
        });
    }
});