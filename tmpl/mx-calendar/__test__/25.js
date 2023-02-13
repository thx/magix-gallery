let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@25.html',
    render() {
        let today = this['@{date.format}'](this['@{date.day}']());
        this.updater.digest({
            start: '',
            end: '',
            vs: '',
            params: {
                startDate: today,
                endDate: today,
            }
        });
    },
    'test<click>'(e) {
        // this.isValid();
        // let { params } = this.updater.get();
    }
});