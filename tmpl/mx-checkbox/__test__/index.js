let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            options: [{
                key: 'view-checked',
                desc: '是否选中',
                type: 'boolean',
                def: 'false'
            },{
                key: 'view-disabled',
                desc: '是否禁用',
                type: 'boolean',
                def: 'false'
            },{
                key: 'view-indeterminate',
                desc: '是否部分选中',
                type: 'boolean',
                def: 'false'
            }]
        });
    }
});