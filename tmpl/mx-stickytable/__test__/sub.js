let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@sub.html',
    render() {
        let options = [{
            key: `<pre>&lt;mx-stickytable.sub
    value="parentValue" 
    expand="true"&gt;
&lt;/mx-stickytable.sub&gt;</pre>`,
            desc: 'mx-stickytable.sub标识展开收起的trigger<br/>value为trigger唯一标识，expand为展开还是收起状态<div class="color-red">注意value和expand作为属性，外部digest变更是不生效的</div>'
        }, {
            key: '&lt;tr <span class="color-brand">mx-stickytable-sub-parent="parentValue"</span>&gt;&lt;/tr&gt;',
            desc: '配置在tr上属性mx-stickytable-sub-parent="parentValue"<br/>值指向mx-stickytable.sub，表示该行跟展开收起按钮关联'
        }, {
            key: '&lt;td <span class="color-brand">mx-stickytable-sub-mask="true"</span>&gt;&lt;/td&gt;',
            desc: '配置在td上属性mx-stickytable-sub-mask="true"<br/>收起行开始单元格的遮罩样式<br/><img src="https://img.alicdn.com/imgextra/i2/O1CN01QPVZBo1PzjwHFkjsw_!!6000000001912-0-tps-1517-560.jpg" />'
        }, {
            key: 'subs-expand-icon',
            desc: '展开icon，默认<i class="mc-iconfont">&#xe653;</i>'
        }, {
            key: 'subs-close-icon',
            desc: '收起icon，默认<i class="mc-iconfont">&#xe652;</i>'
        }];
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});