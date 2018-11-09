let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@progress.html',
    render() {
        let options = [{
            key: 'type',
            desc: [
                '进度条类型',
                'line：条型',
                'degree：刻度型'
            ].join('<br>'),
            type: 'string',
            def: 'line'
        }, {
            key: 'num',
            desc: '当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数',
            type: 'number',
            def: ''
        }, {
            key: 'color',
            desc: '自定义颜色，#4d7fff 或者 rgb(77, 127, 255)',
            type: 'string',
            def: '品牌色'
        }]

        let lineOptions = [{
            key: 'text-placement',
            desc: '数值位置，只在type=line时生效<br/>可选：left，right，top，bottom',
            type: 'string',
            def: 'top'
        }]
        
        let circleOptions = [{
            key: 'width',
            desc: '圆形直径',
            type: 'number',
            def: '120'
        }, {
            key: 'border',
            desc: '圆形边宽',
            type: 'number',
            def: '8'
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            lineOptions,
            circleOptions,
            type: 'a'
        });
    }
});