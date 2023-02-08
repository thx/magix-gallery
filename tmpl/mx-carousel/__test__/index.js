let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'mode',
            desc: [
                '动画播放模式',
                'carousel：跑马灯切换',
                'fade：渐显渐隐'
            ].join('<br>'),
            type: 'string',
            def: 'carousel'
        }, {
            key: 'height',
            desc: '容器高度',
            type: 'number',
            def: 200
        }, {
            key: 'active',
            desc: '默认激活第几帧，第一帧为0',
            type: 'number',
            def: 0
        }, {
            key: 'autoplay',
            desc: '是否自动播放，自动播放时鼠标hover暂停播放，移出恢复播放',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'dots',
            desc: '是否显示缩略点',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'dot-type',
            desc: `<pre>内置轮播点样式
1. line-in-center：轮播内容内部线型点居中显示
2. line-in-left：轮播内容内部线型点居左显示
3. line-in-right：轮播内容内部线型点居右显示
4. line-out-center：轮播内容外部线型点居中显示
5. dot-in-center：轮播内容内部圆形点居中显示
6. dot-in-left：轮播内容内部圆形点居左显示
7. dot-in-right：轮播内容内部圆形点居右显示
8. dot-out-center：轮播内容外部圆形点居中显示
</pre>`,
            type: 'string',
            def: 'dot-in-center'
        }, {
            key: 'dot-vars',
            desc: '轮播点可定义变量，使用css变量格式',
            type: 'object',
            def: `<pre style="width: 340px;">
{
    // 轮播点默认颜色，默认0.4，hover0.8，选中态1
    '--mx-carousel-trigger-color': '#ffffff', 

    // 轮播点显示位置与边界的距离
    '--mx-carousel-trigger-gap': '12px',

    // 线型轮播点宽度
    '--mx-carousel-line-width': '20px',

    // 线型轮播点高度
    '--mx-carousel-line-height': '5px',

    // 线型轮播点距离
    '--mx-carousel-line-gap': '2px',

    // 圆点轮播点大小，点与点的距离=该直径
    '--mx-carousel-dot-size': '12px'
}
</pre>`
        }, {
            key: 'dot-vars-list',
            desc: '数组轮播点可定义变量，使用css变量格式，<br/>支持每帧配置不一样的样式<br/>dot-vars-list = [dot-vars,dot-vars]',
            type: 'object',
            def: `<pre style="width: 340px;">
[{
    // 轮播点默认颜色，默认0.4，hover0.8，选中态1
    '--mx-carousel-trigger-color': '#ffffff', 

    // 轮播点显示位置与边界的距离
    '--mx-carousel-trigger-gap': '12px',

    // 线型轮播点宽度
    '--mx-carousel-line-width': '20px',

    // 线型轮播点高度
    '--mx-carousel-line-height': '5px',

    // 线型轮播点距离
    '--mx-carousel-line-gap': '2px',

    // 圆点轮播点大小，点与点的距离=该直径
    '--mx-carousel-dot-size': '12px'
}]
</pre>`
        }, {
            key: 'triggers',
            desc: '是否显示左右切换箭头，默认不显示，配置显示时hover出现切换箭头',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'prev-trigger',
            desc: '自定义上一帧trigger的id',
            type: 'string',
            def: ''
        }, {
            key: 'next-trigger',
            desc: '自定义下一帧trigger的id',
            type: 'string',
            def: ''
        }, {
            key: 'interval',
            desc: '播放间隔，单位毫秒',
            type: 'number',
            def: '3000'
        }, {
            key: 'timing',
            desc: [
                '定义同transition-timing-function',
                'linear：规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）',
                'ease：规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）',
                'ease-in：规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）',
                'ease-out：规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）',
                'ease-in-out：规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）',
                'cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值'
            ].join('<br>'),
            type: 'string',
            def: 'ease-in-out'
        }, {
            key: 'duration',
            desc: '动画持续时间',
            type: 'string',
            def: '0.5s'
        }, {
            key: 'vertical',
            desc: '是否垂直方向播放',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'mousewheel',
            desc: '垂直方向播放时，是否支持鼠标滚动事件',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'trigger-hook',
            desc: `<pre class="w340">
翻页钩子
triggerHook: (currentIndex, targetIndex) => {
    // currentIndex: 当前页码，从0开始
    // targetIndex: 目标页码，从0开始
    return new Promise((resolve, reject) => {
        if (...) {
            // 禁止翻页
            reject();
        } else {
            // 允许翻页
            resolve();
        }
    })
}
</pre>`,
            type: 'function'
        }];

        let events = [{
            type: 'change',
            desc: '切换展示帧时触发',
            params: [{
                key: 'active',
                desc: '当前第几帧，从0开始',
                type: 'number'
            }]
        }];

        let methods = [{
            key: 'next()',
            desc: `<pre>说明：跳转下一帧

调用示例：
let instance = Vframe.get(id);
instance.invoke('next');</pre>`,
        }, {
            key: 'prev()',
            desc: `<pre>说明：跳转上一帧

调用示例：
let instance = Vframe.get(id);
instance.invoke('prev');</pre>`,
        }, {
            key: 'to(index)',
            desc: `<pre>说明：跳转某一帧，定义同active，从0开始
        
调用示例：
let instance = Vframe.get(id);
instance.invoke('to',[1]);</pre>`,
        }];

        this.updater.digest({
            viewId: this.id,
            options,
            events,
            methods,
        });
    }
});