let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let methods1 = [{
            key: 'gmessage(options)',
            desc: `<div>1. options.type：提示类型</div>
<div class="pl20">
    <div>highlight：品牌色图标强调提示（默认值）</div>
    <div>error：红色错误类型提示</div>
    <div>warn：黄色警告类型提示</div>
    <div>pass：绿色通过类型提示</div>
    <div>common：默认黑底透明度提示</div>
</div>
<div>2. options.msg：提示信息</div>
<div>3. options.view：提示内容支持一个自定义view，优先级view&gt;msg</div>
<div>4. options.timeout：自动关闭时间，单位ms，不配置时需要手动关闭</div>`,
        }];

        let methods2 = [{
            key: 'isValid(configs: object)',
            desc: `<div>1. msg（String）：提示信息内容</div>
    <div>2. options（PlainObject），可配参数如下：</div>
    <div class="pl20">
        <div>a. timeout（Number or String）：延时自动关闭，设置的时候timeout后自动关闭，不设置的时候显示关闭按钮手动关闭</div>
        <div>b. type（String）：error：红色错误类型提示；warn：黄色警告类型提示；pass：绿色通过类型提示；highlight：品牌色图标强调提示；common：默认黑底透明度提示</div>
        <div>c. singleton（Boolean）：是否为单实例，默认true，singleton=false的可与其他gtip共存，否则当前view只有一个gtip</div>
        <div>d. styles（PlainObject）：驼峰，直接覆盖样式，默认内容如下：</div>
        <pre>
styles: { 
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%'  
}
        </pre>
    </div>`,
        }, {
            key: 'gview(view [, options])',
            desc: `<div>1. view（ViewPath）：自定义view路径</div>
<div>2. options（PlainObject），可配参数同gtip</div>`,
        }, {
            key: 'gtip(msg [, timeout])',
            desc: `<div>1. msg（String）：提示信息内容</div>
<div>2. timeout（Number or String）：延时自动关闭，设置的时候timeout后自动关闭，不设置的时候显示关闭按钮手动关闭</div>`,
        }];

        this.updater.digest({
            viewId: this.id,
            methods1,
            methods2,
        });
    }
});