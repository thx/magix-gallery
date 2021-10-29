let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let rows = [{
            key: 'width',
            desc: '容器宽度',
            type: 'number',
            def: 'auto'
        }, {
            key: 'height',
            desc: '容器高度',
            type: 'number',
            def: 'auto'
        }, {
            key: 'direction',
            desc: '主轴方向(flex项目的排列方向)，可选值：<br/>row：主轴为水平方向，起点在左端<br/>column：主轴为垂直方向，起点在上沿',
            type: 'string',
            def: 'row'
        }, {
            key: 'justify',
            desc: '主轴对齐方式，可选值：<br/>1. left（默认值）：左对齐<br/>2. right：右对齐<br/>3. center：居中<br/>4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。<br/>5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。',
            type: 'string',
            def: 'left'
        }, {
            key: 'align',
            desc: '交叉轴对齐方式，可选值：<br/>1. stretch（默认值）：如果项目未设置高度或者设为 auto，将占满整个容器的高度<br/>2. top：交叉轴的起点对齐<br/>3. bottom：交叉轴的终点对齐<br/>4. center：交叉轴的中点对齐',
            type: 'string',
            def: 'stretch'
        }, {
            key: 'gutter',
            desc: 'flex项目的间隔距离<br/>direction=row：margin-right<br/>direction=column：margin-bottom',
            type: 'number',
            def: '0'
        }]

        let cols = [{
            key: 'flex',
            desc: 'flex: flex-grow, flex-shrink 和 flex-basis',
            type: 'string',
            def: '1'
        }, {
            key: 'width',
            desc: '指定项目固定宽度，优先级 width > flex',
            type: 'number',
            def: ''
        }, {
            key: 'height',
            desc: '项目高度',
            type: 'number',
            def: ''
        }]

        this.updater.digest({
            rows,
            cols,
            viewId: this.id
        });
    }
});