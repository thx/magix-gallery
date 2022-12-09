let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@12.html',
    render() {
        this.updater.digest({
            selected: 'radio2',
            radioes: ['radio1', 'radio2', 'radio3']
        });
    }
});