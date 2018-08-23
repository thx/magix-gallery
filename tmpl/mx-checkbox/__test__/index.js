let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        this.updater.digest({
            options: [{
                key: 'mx-checked',
                desc: '是否选中，&lt;mx-checkbox mx-checked/&gt;'
            },{
                key: 'mx-disabled',
                desc: '是否禁用，&lt;mx-checkbox mx-disabled/&gt;'
            },{
                key: 'mx-indeterminate',
                desc: '是否部分选中，&lt;mx-checkbox mx-indeterminate/&gt;'
            }]
        });
    }
});