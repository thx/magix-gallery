let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@mixins.html',
    render() {
        let options = [{
            key: 'refresh',
            desc: '数据变化是否需要更新view，调用view.digest',
            type: 'boolean',
            def: 'false',
        }, {
            key: 'currency',
            desc: `<pre>金额
currency: true
currency: [true, '自定义提示']<pre>`,
            type: '',
            def: '',
        }, {
            key: 'url',
            desc: `<pre>合法链接
url: true
url: [true, '自定义提示']<pre>`,
            type: '',
            def: '',
        }, {
            key: 'english',
            desc: `<pre>英文
english: true
english: [true, '自定义提示']<pre>`,
            type: '',
            def: '',
        }, {
            key: 'email',
            desc: `<pre>邮箱校验
email: true
email: [true, '自定义提示（可选）', ['domain（指定邮箱，可选）', ...domains]]</pre>`,
            type: '',
            def: '',
        }, {
            key: 'chinese',
            desc: `<pre>中文
chinese: true
chinese: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'mobile',
            desc: `<pre>手机号码
mobile: true
mobile: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'landline',
            desc: `<pre>固定电话
landline: true
landline: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'phone',
            desc: `<pre>手机号码 or 固定电话
phone: true
phone: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'number',
            desc: `<pre>是否为数字
number: true
number: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'pattern',
            desc: `<pre>正则
pattern: ^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$
pattern: ['^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$', '自定义错误提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'required',
            desc: `<pre>必填
required: true
required: [true, '必选']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'trim',
            desc: `<pre>不能有空格
trim: true
trim: [true, '不能包含空格']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'int',
            desc: `<pre>整数
int: true
int: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'posint',
            desc: `<pre>正整数
posint: true
posint: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'negint',
            desc: `<pre>负整数
negint: true
negint: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'length',
            desc: `<pre>字个数范围
length: [2, 8]</pre>`,
            type: '',
            def: '',
        }, {
            key: 'minlength',
            desc: `<pre>最少多少个字
minlength: 2
minlength: [2, '自定义提示文案']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'maxlength',
            desc: `<pre>最多多少个字
maxlength: 8
maxlength: [8, '自定义提示文案']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'blength',
            desc: `<pre>字符个数范围，一个汉字两个字符
blength: [2, 8]</pre>`,
            type: '',
            def: '',
        }, {
            key: 'bminlength',
            desc: `<pre>最少多少个字符，一个汉字两个字符
bminlength: 2
bminlength: [2, '自定义提示文案']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'bmaxlength',
            desc: `<pre>最多多少个字符，一个汉字两个字符
bmaxlength: 8
bmaxlength: [8, '自定义提示文案']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'unequalto',
            desc: `<pre>与某些节点内容不一致
unequalto: 'id1,id2'
unequalto: ['id1,id2', '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'equalto',
            desc: `<pre>与某个节点内容一致
equalto: id
equalto: [id, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'morethan',
            desc: `<pre>数值大于某个节点
morethan: id
morethan: [id, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'lessthan',
            desc: `<pre>数值小于某个节点
lessthan: id
lessthan: [id, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'inranges',
            desc: `<pre>数字范围内异常：命中范围的属于异常，范围之外的正确
inranges: [
    ['(,2)', '&lt;2'],
    ['[2, 3]', '2 &lt;= x &lt;= 3'],
    ['(3, 5]', '3 &lt; x &lt;= 5'],
    ['(5,)', '&gt;5']
]</pre>`,
            type: '',
            def: '',
        }, {
            key: 'range',
            desc: `<pre>数字范围外，包含边界，a &lt;= x &lt;= b
range: [a, b] 
range: [a, b, '自定义提示文案（可选）']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'rangeborder',
            desc: `<pre>数字范围外，不包含边界，a &lt; x &lt; b
rangeborder: [a, b]，  
rangeborder: [a, b, '自定义提示文案（可选）']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'min',
            desc: `<pre>大于等于某个数字，a &lt;= x
min: a
min: [a, '自定义提示文案']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'minborder',
            desc: `<pre>大于某个数字，a，a &lt; x
minborder: a
minborder: [a, '自定义提示文案']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'max',
            desc: `<pre>小于等于某个数字，x &lt;= b
max: b
max: [b, '自定义提示文案']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'maxborder',
            desc: `<pre>小于某个数字，x &lt; b
maxborder: b
maxborder: [b, '自定义提示文案']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'union',
            desc: `<pre>当前校验配置多个校验规则时，是交的逻辑
如果需要按照或的逻辑则可使用此配置
union: {
    min: [2, '自定义提示文案']
}</pre>`,
            type: '',
            def: '',
        }, {
            key: 'json',
            desc: `<pre>是否为合法json
json: true
json: [true, '自定义提示']</pre>`,
            type: '',
            def: '',
        }, {
            key: 'placement',
            desc: '信息展示位置，可配置right，bottom',
            type: 'string',
            def: 'bottom',
        }, {
            key: 'style',
            desc: '信息展现样式，可选纯文案（text），盒状样式（box），icon样式（icon）',
            type: 'string',
            def: 'text',
        }, {
            key: 'warn',
            desc: `<pre>警告类信息，对象
必然是在valid=true的前提下才会有，以上所有配置项均可配置
<span class="color-warn">显示为黄色警告提示</span>
warn: {
    style: 'text',
    min: [2, 自定义提示文案]
}</pre>`,
            type: '',
            def: '',
        }, {
            key: 'pass',
            desc: `<pre>通过类信息，对象
必然是在valid=true的前提下才会有，以上所有配置项均可配置
<span class="color-green">显示为绿色通过提示</span>
warn: {
    style: 'text',
    min: [2, 自定义提示文案]
}</pre>`,
            type: '',
            def: '',
        }, {
            key: 'highlight',
            desc: `<pre>品牌色高亮强调信息，对象
必然是在valid=true的前提下才会有，以上所有配置项均可配置
<span class="color-brand">显示为品牌色通过提示</span>
warn: {
    style: 'text',
    min: [2, 自定义提示文案]
}</pre>`,
            type: '',
            def: '',
        }];

        this.updater.digest({
            viewId: this.id,
            options,
        });
    }
});