let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'mode',
            desc: '页脚类型，简单版（simple）还是复杂版本',
            type: 'string',
            def: ''
        }, {
            key: 'products',
            desc: '是否需要妈妈产品线信息',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'width',
            desc: '产品线信息宽度，products = true时生效',
            type: 'number',
            def: '1000'
        }, {
            key: 'dark',
            desc: '产品线信息深底色白字',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'text-align',
            desc: '对齐方式，可选center | left | right',
            type: 'string',
            def: 'center'
        }, {
            key: 'copyrights',
            desc: '版权信息',
            type: 'array',
            def: `<pre>
1. 阿里妈妈版，域名以alimama.com或者alimama.net结尾
copyrights = [{
    text: '法律声明',
    link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'
}, {
    text: '阿里妈妈版权所有 2007-现在'
}, {
    text: 'ICP证：浙B2-20070195',
    link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
}]

2. 淘宝版，域名以taobao.com或者taobao.net结尾
copyrights = [{
    text: '法律声明',
    link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'
}, {
    text: 'Taobao.com版权所有 2003-现在'
}, {
    text: 'ICP证：浙B2-20080224-1',
    link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
}]

3. tanx版，域名以tanx.com或者tanx.net结尾
copyrights = [{
    text: '隐私权保护',
    link: 'http://tanx.com/web/opt.html'
}, {
    text: 'Tanx.com版权所有'
}, {
    text: '浙ICP备09109183号-10',
    link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
}]

默认为阿里妈妈版，需要定制可直接传入数组替换
</pre>`
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});