let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@trigger.html',
    render() {
        this.updater.digest({
            open: false
        });
    },
    'toggle<click>'(){
        let open = this.updater.get('open');
        this.updater.digest({
            open: !open
        })
    }
});