let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@93.html',
    render() {
        let h = +this['@{get.css.var}']('--input-height').replace('px', '');
        this.updater.digest({
            viewId: this.id,
            h,
            list: [{
                title: '步骤一',
                subTitle: '简略说明',
                gap: 24
            }, {
                title: '步骤二',
                subTitle: '简略说明',
                gap: 24 + h + 24
            }, {
                title: '步骤三',
                subTitle: '简略说明',
            }]
        });
    }
});