let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@options.html',
    init(extra) {
        let options = [{
            key: 'left-col-sticky',
            desc: '左侧分栏固定列数',
            type: 'number',
            def: '0'
        }, {
            key: 'right-col-sticky',
            desc: '右侧分栏固定列数',
            type: 'number',
            def: '0'
        }, {
            key: 'thead-sticky',
            desc: '表头是否需要吸顶功能，默认不吸顶',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'thead-sticky-wrapper',
            desc: '相对滚动的节点，表头吸顶和左右分栏时模拟滚动条的相对滚动容器<br/>不设置时：相对于window滚动进行定位，表头和模拟滚动条在window的可视范围内<br/>设置指定容器时：相对指定容器滚动进行定位，表头和模拟滚动条保持在指定容器可视范围内',
            type: 'sizzle',
            def: '#id<br/>.class<br/>...'
        }, {
            key: 'filter-wrapper',
            desc: '联动吸顶的筛选项容器节点<br/>目前只支持thead-sticky=true且相对window吸顶时生效',
            type: 'sizzle',
            def: ''
        }, {
            key: 'linkages',
            desc: '联动checkbox选中的value值，多层级时为叶子节点的值，<br/><span class="color-brand">支持双向绑定</span>，传入数组为数组，传入逗号分隔则逗号分隔，默认逗号分隔',
            type: 'array or string',
            def: ''
        }, {
            key: 'linkages-shift',
            desc: '联动checkbox筛选时，是否支持按住shift键批量选择',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'sort-range',
            desc: '排序可点击范围，默认仅排序icon可点，配置sort-range="all"则整个表头单元格可点击',
            type: 'string',
            def: ''
        }, {
            key: 'sort-action',
            desc: '排序默认反应到地址栏参数orderField和orderBy，可配置sort-action="event"外抛事件，监听事件自行处理即可',
            type: 'string',
            def: ''
        }, {
            key: 'empty-text',
            desc: '空状态文案<br/>当列表内容为空时，自动显示该空状态文案',
            type: 'string',
            def: ''
        }, {
            key: 'empty-data',
            desc: `<pre>复杂空状态提示配置<br/>当列表内容为空时，自动显示该空状态
data: {
    img: '图片地址',
    subTitle: '小标题描述',
    title: '主要文案，限1-2行，12-20字',
    tip: '辅助描述：限1-3行，20-50字',
    link: '外链地址',
    linkText: '外链文案，默认点击查看详情',
    btns: [{
        text: '按钮文案',
        link: '按钮跳转地址',
        outer: 'true or false，是否新页面打开外链'
    }]
}</pre>`,
            type: 'object',
            def: '{}'
        }, {
            key: 'size',
            desc: '展示尺寸<br/>small：小号<br/>normal：正常尺寸<br/>large：大号尺寸',
            type: 'string',
            def: 'normal'
        }, {
            key: 'border-top',
            desc: '表格上边线，默认有，配置border-top="none"取消上边线',
            type: 'string',
            def: ''
        }, {
            key: 'border-bottom',
            desc: '表格下边线，默认有，配置border-bottom="none"取消下边线',
            type: 'string',
            def: ''
        }, {
            key: 'resize-font-size',
            desc: '是否支持开启字体放大功能',
            type: 'boolean',
            def: 'false'
        }]

        let filters = extra.filters || [];
        if (filters.length > 0) {
            for (let i = 0; i < options.length; i++) {
                if (filters.indexOf(options[i].key) < 0) {
                    options.splice(i--, 1);
                }
            }
        }
        this.updater.set({
            viewId: this.id,
            options,
        });
    },
    render() {
        this.updater.digest();
    }
});