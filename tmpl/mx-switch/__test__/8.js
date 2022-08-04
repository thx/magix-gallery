let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        this.updater.digest({
            state: false,
            loading: false
        });
    },
    'change<change>'(e) {
        let state = e.state;
        this.updater.digest({
            state,
            loading: state,
        })

        setTimeout(() => {
            this.updater.digest({
                loading: false,
            })
        }, 4000);
    }
});