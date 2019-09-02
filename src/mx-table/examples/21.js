let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@21.html',
    render() {
        this.updater.digest({
            selected: 22
        });
    },
    'change<change>'(e){
        let that = this;
        setTimeout(() => {
            that.updater.digest({
                selected: e.value
            })
        })
    }
});