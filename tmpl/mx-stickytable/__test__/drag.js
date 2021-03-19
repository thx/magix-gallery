let Magix = require('magix');
Magix.applyStyle('@width.less');

module.exports = Magix.View.extend({
    tmpl: '@drag.html',
    render() {
        let options = [{
            key: `<pre>&lt;mx-stickytable.th-drag 
    value="&#123;&#123;=value&#125;&#125;"
    width="&#123;&#123;=width&#125;&#125;"
    min-width="&#123;&#123;=minWidth&#125;&#125;"
    max-width="&#123;&#123;=maxWidth&#125;&#125;"&gt;
    &lt;mx-stickytable.th-text&gt;字段&lt;/mx-stickytable.th-text&gt;
&lt;/mx-stickytable.th-drag&gt;</pre>`,
            desc: `<pre>需要支持拖动设置列宽的字段，<span class="color-brand">请使用mx-stickytable.th-drag标签替换原生th标签</span>
value：必填，该排序字段的唯一标识
width：必填，当前展示宽度
min-width：选填，可拖动最小宽度，默认80
max-width：选填，可拖动最大宽度，默认800</pre>`
        }];
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});