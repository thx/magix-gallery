/**
 * empty
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@36.html',
    render() {
        this.updater.digest({
            line: 5,
            num: 5,
            index: 1,
            params: {
                total: 100,
                page: 1,
                size: 5
            }
        });
    },
    'clear<click>'(e) {
        this.updater.digest({
            line: 0
        })
    },
    'reset<click>'(e) {
        this.updater.digest({
            line: 5
        })
    },
    'changeIndex<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: +index + 1
        });
    },
    'changePage<change>'(e) {
        let { params } = this.updater.get();
        this.updater.digest({
            params: Magix.mix(params, {
                size: e.size,
                page: e.page
            })
        })
    }
});