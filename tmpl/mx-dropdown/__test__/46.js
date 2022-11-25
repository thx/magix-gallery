let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@46.html',
    render() {
        let list = [];
        for (let i = 1; i < 4; i++) {
            list.push({
                text: i,
                value: i
            });
        };

        let v1 = this.getCssVar('--input-small-min-width'),
            v2 = this.getCssVar('--input-min-width'),
            v3 = this.getCssVar('--input-large-min-width');
        this.updater.digest({
            list,
            selected: 1,
            v1,
            v2,
            v3,
        });
    }
});