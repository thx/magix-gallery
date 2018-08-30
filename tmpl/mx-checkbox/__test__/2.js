let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            disabled: true,
            checked: true
        });
    },
    'outerChange<click>'() {
        let disabled = this.updater.get('disabled'),
            checked = this.updater.get('checked');
        this.updater.digest({
            disabled: !disabled,
            checked: !checked
        });
    },
    'innerChange<change>'(e){
        this.updater.digest({
            checked: e.target.checked
        })
    }
});