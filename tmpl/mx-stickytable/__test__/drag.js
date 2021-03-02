let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@drag.html',
    render() {
        let options = [{
            key: '&lt;tr <span class="color-brand">mx-stickytable-operation="line"</span>&gt;&lt;/tr&gt;',
            desc: '配置在tr上属性mx-stickytable-operation="line"<br/>表示该行为操作行<br/>默认不显示，hover时显示'
        }];

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});