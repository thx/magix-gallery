let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@27.html',
    render() {
        this.updater.digest({
            name1: '',
            name2: '',
            name3: '4',
            name4: '4',
            name5: '4',
            name6: '4',
            name7: '4',
            name8: '4',
        });
        this.isValid({
            scrollIntoView: false
        });
    }
});