let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');
module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            tagContent: '<i class="mc-iconfont">&#xe601;</i>'
        });
    },
    'test<click>'(event) {
        // debugger
    }
});