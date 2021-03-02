let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@sub-table.html',
    render() {
        let options = [{
            key: '&lt;tr <span class="color-brand">mx-stickytable-sub-header="true"</span>&gt;&lt;/tr&gt;',
            desc: '配置在tr上属性mx-stickytable-sub-header="true"<br/>标示该行为子组的表头'
        }];

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});