let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../../mx-loading/index');

module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [Loading],
    render() {
        this.updater.digest();
    },
    'show<click>'(e){
        let that = this;
        that.showLoading();

        setTimeout(() => {
            that.hideLoading();
        }, 3000);
    }
});