let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'state',
            desc: '当前状态是开还是关，默认关闭',
            type: 'boolean',
            def: 'false'
        }]

        this.updater.digest({
            options,
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