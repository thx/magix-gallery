let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@dropdown.html',
    render() {
        let options = [{
            key: 'opers',
            desc: `<pre>可选操作项列表：
[{
    value: '状态值',
    text: '状态文案',
    confirmTitle: '该操作项的二次确认标题',
    confirmContent: '该操作项的二次确认内容',
    icon: 'iconfont图标，如&lt;i class="mc-iconfont"&gt;&#38;&#35;xe67f;&lt;/i&gt;',
    color: '图标显示颜色'
}]
</pre>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'selected',
            desc: '当前操作项选中值',
            type: 'string',
            def: 'opers[0].value'
        }, {
            key: 'info',
            desc: `<pre>额外的提示信息：
{
    value: '状态值',
    text: '状态文案',
    icon: 'iconfont图标，如&lt;i class="mc-iconfont"&gt;&#38;&#35;xe67f;&lt;/i&gt;',
    color: '图标显示颜色',
    tip: '提示信息内容',
    tipView: '自定义提示view'
    tipData: '传入自定义提示tipView的data'
}
</pre>`,
            type: 'object',
            def: '{}'
        }];

        let path = Magix.Router.parse().path;
        if (path.indexOf('/status/index') > -1) {
            options.push({
                key: 'mode',
                desc: '展示样式<br/>icon：纯icon样式<br/>text：包含文案展示',
                type: 'string',
                def: 'icon'
            });
        }

        this.updater.digest({
            viewId: this.id,
            events: [{
                type: 'change',
                desc: '切换操作项的时候触发',
                params: [{
                    key: 'status',
                    desc: '当前选中操作项完整对象',
                    type: 'object'
                }]
            }],
            options
        });
    }
});