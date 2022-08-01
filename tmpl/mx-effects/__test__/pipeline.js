let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@pipeline.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
list = [{
    title: '第一行描述信息',
    subTitle: '第二行描述信息',
    tip: '标题旁小问号提示',
    icon: '标题旁小图标',
    startTime, '时间区间开始时间',
    endTime: '时间区间结束时间'
}]
</pre>`,
            type: 'array',
            def: '数据格式'
        }, {
            key: 'selected',
            desc: '当前选中项',
            type: 'number',
            def: '选中态的index索引，0开始'
        }, {
            key: 'img',
            desc: '图片地址',
            type: 'string',
            def: ''
        }, {
            key: 'color',
            desc: '主色',
            type: 'string',
            def: '#FF0036'
        }];

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});