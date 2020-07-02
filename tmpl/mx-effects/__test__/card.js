let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@card.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>卡片数据，格式如下：
[{
    title: '标题，必填',
    titleTag: '标题旁打标图片，选填',
    tip: '说明，必填',
    img: '图片地址，必填',
    imgTag: '图片上打标图片，选填',
    btn: '按钮显示文案，选填，整张卡片可点',
    link: '卡片跳转链接，选填，整张卡片可点',
    outer: '是否外链跳转，true/false',
    highlight: '某个卡片默认高亮，true/false',
    quotaes: [{
        value: '指标',
        text: '指标说明'
    }]
}]

其他说明：
link：配置链接点击卡片可跳转，任何情况下点击卡片往外抛出事件，出参为当前对象
quotaes：仅在mode=carousel-common-quota / flat-common-quota 下生效
</pre>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'mode',
            desc: `<pre>展现形式，可选值如下：
1. carousel-common-list：大卡片图文链接轮播
2. carousel-small-list：小卡片图文链接轮播
3. carousel-common-quota：大卡片图文指标轮播
4. flat-common-list：大卡片图文链接平铺
5. flat-small-list：小卡片图文链接平铺
6. flat-common-quota：大卡片图文指标平铺
7. carousel-icon-list：icon图文卡片轮播
8. flat-icon-list：icon图文卡片平铺
</pre>`,
            type: 'string',
            def: 'carousel-common-list'
        }, {
            key: 'line-number',
            desc: '每行卡片个数',
            type: 'number',
            def: '3'
        }, {
            key: 'tip-line-number',
            desc: '卡片上提示信息可见行数',
            type: 'number',
            def: '2'
        }, {
            key: 'text-align',
            desc: '对齐方式，可选left，right和center，默认left',
            type: 'string',
            def: 'left'
        }, {
            key: 'autoplay',
            desc: '轮播情况下，是否自动播放，自动播放时鼠标hover暂停播放，移出恢复播放',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'interval',
            desc: '轮播情况下，播放间隔，单位毫秒',
            type: 'number',
            def: '5000'
        }]

        let events = [{
            type: 'select',
            desc: '点击某一个卡片时触发',
            params: [{
                key: 'item',
                desc: '当前点击卡片完整实体对象',
                type: 'object'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});