let Magix = require('magix');
let Base = require('__test__/example');
let Sub = require('@../sub');

module.exports = Base.extend({
    tmpl: '@25.html',
    mixins: [Sub],
    render() {
        this.updater.digest();
    }
});
