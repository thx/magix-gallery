let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@21.html',
    render() {
        this.updater.digest({
            configs: {
                min: this['@{date.format}'](this['@{date.day}'](-10)),
                max: this['@{date.format}'](this['@{date.day}'](10)),
                selected: this['@{date.format}'](this['@{date.day}'](2)),
            }
        });
    },
    'change<change>'(e) {
        let configs = this.updater.get('configs');
        this.updater.digest({
            configs: Magix.mix(configs, {
                selected: e.selected,
            })
        })
    }
});