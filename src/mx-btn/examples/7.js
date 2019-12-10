let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest();
    },
    'change<click>'(e){
        let that = this;
        that.updater.digest({
            loading: true
        })
        setTimeout(() => {
            that.updater.digest({
                loading: false
            })
        }, 2000)
    }
});