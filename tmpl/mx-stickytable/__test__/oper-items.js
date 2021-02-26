let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@oper-items.html',
    render() {
        let options = [{
            key: '&lt;td <span class="color-brand">mx-stickytable-operation="item"</span>&gt;&lt;/td&gt;',
            desc: '配置在td上属性mx-stickytable-operation="item"<br/>表示该单元格为同一行的操作项<br/>默认不显示，hover时显示'
        }];

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});