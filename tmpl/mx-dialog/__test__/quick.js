let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@quick.html',
    init(extra) {
        this.updater.set({
            viewId: this.id,
            readonly: extra.readonly,
            num: 4,
            line: 20,
            index: 1
        })
    },
    render() {
        this.updater.digest();
    },
    'add<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line + 1
        });
    },
    'remove<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line - 1
        });
    },
    'changeIndex<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: +index + 1
        });
    },
    check() {
        return new Promise((resolve) => {
            resolve({
                ok: true
            })
        })
    }
});
