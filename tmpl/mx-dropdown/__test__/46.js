let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@46.html',
    render() {
        this.updater.digest({
            list: [1, 2, 3]
        });

        setTimeout(() => {
            this.updater.digest({
                list: [1, 2, 3, 4, 5, 6]
            });
        }, 3000)
    }
});