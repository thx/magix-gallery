let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');
module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            icon: '<i class="mc-iconfont">&#xe601;</i>'
        });
    },
    'test<click>'(event){
        let disabled = this.updater.get('disabled');
        this.updater.digest({
            disabled: !disabled
        })
    }
});