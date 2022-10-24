let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@12.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open1<click>'(event) {
        this.mxDialog('@./demo', {}, {
            target: `#${this.id}_test`
        });
    },
    'open2<click>'(event) {
        this.mxDialog('@./demo', {}, {
            target: event.target,
            offset: {
                left: 100,
                top: -20
            }
        });
    }
});