let Magix = require('magix');
let Base = require('@./base');

module.exports = Base.extend({
    render() {
        this.updater.digest({
            second: true
        });
    }
});