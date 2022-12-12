let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            content1: 2000,
            content2: 2001,
            content3: 2002,
            rules: {
                required: true,
                min: [200, '不小于200'],
            }
        });
    }
});