let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let list = [];
        for (let i = 1; i < 5; i++) {
            list.push({
                value: i,
                text: `选项${i}`
            })
        }

        this.updater.digest({
            viewId: this.id,
            list,
            selected1: '',
            selected3: ''
        });
    },

    'check<click>'(e) {
        let result = this.isValid();
    }
});