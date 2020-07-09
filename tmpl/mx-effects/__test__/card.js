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
    titleTagText: '标题旁打标文案，采用默认样式，底色品牌色透明度0.8，选填',
    tip: '说明，必填',
    img: '图片地址，必填',
    imgTag: '图片上打标图片，选填',
    imgTagText: '图片上打标文案，采用默认样式，底色品牌色透明度0.8，选填',
    btn: '按钮显示文案，选填',
    link: '卡片跳转链接，选填',
    outer: '是否外链跳转，true/false',
    highlight: '某个卡片默认高亮，true/false',
    quotaes: [{
        value: '指标',
        text: '指标说明'
    }],
    quotaeTip: 'quotaes.length = []时的补充说明文案',
    btns: [{ 
        btn: '按钮显示文案',
        link: '按钮跳转链接',
        outer: '是否外链跳转，true/false'
    }],
    links: [{
        title: '显示文案',
        link: '跳转链接，选填',
        outer: '是否外链跳转，true/false'
    }]
}]
</pre>
<div class="nowrap">其他说明：</div>
<div class="nowrap">link：配置链接点击卡片可跳转，点击卡片往外抛出事件，出参为当前对象</div>
<div class="nowrap">quotaes：仅在mode=carousel-common-quota / flat-common-quota 下生效</div>
<div class="nowrap">btns：多按钮配置，仅在mode=carousel-btns-list / flat-btns-list 下生效</div>
<div class="nowrap">links：多链接配置，仅在mode=carousel-links-list / flat-links-list 下生效</div>`,
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
9. carousel-logo-list：logo图文卡片轮播
10. flat-logo-list：logo图文卡片平铺
11. carousel-btns-list：多按钮图文卡片轮播
12. flat-btns-list：多按钮图文卡片平铺
13. carousel-links-list：多外链图文卡片轮播
14. flat-links-list：多外链图文卡片平铺
</pre>`,
            type: 'string',
            def: 'carousel-common-list'
        }, {
            key: 'line-number',
            desc: '每行卡片个数',
            type: 'number',
            def: '3'
        }, {
            key: 'title-line-number',
            desc: '卡片上标题可见行数',
            type: 'number',
            def: '1'
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
            },{
                key: 'btn',
                desc: 'mode = carousel-btns-list / flat-btns-list 才有，当前点击的按钮完整对象',
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