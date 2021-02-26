let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@thead-group.html',
    render() {
        let options = [{
            key: '&lt;th <span class="color-brand">mx-stickytable-th="group"</span>&gt;&lt;/th&gt;',
            desc: '配置在th上属性mx-stickytable-th="group"<br/>表示该单元格为父级组'
        }, {
            key: '&lt;th <span class="color-brand">mx-stickytable-th="sub"</span>&gt;&lt;/th&gt;',
            desc: '配置在th上属性mx-stickytable-th="sub"<br/>表示该单元格为子级组'
        }, {
            key: `<pre>&lt;th&gt;
    &lt;mx-stickytable.th-text&gt;文案&lt;/mx-stickytable.th-text&gt;
&lt;/th&gt;</pre>`,
            desc: '<span class="color-brand">th内的文案请用mx-stickytable.th-text标签包裹</span><br/>以适用不换行，超出缩略等功能'
        }];

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});