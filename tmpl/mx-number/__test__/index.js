let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'num',
            desc: '当前展示数值，只挑取其中的数值进行处理',
            type: 'string',
            def: ''
        }, {
            key: 'delay',
            desc: '整体延迟多少ms开始动画，单位毫秒',
            type: 'number',
            def: '400'
        }, {
            key: 'duration',
            desc: '动画持续多少ms，单位毫秒',
            type: 'number',
            def: '400'
        }, {
            key: 'number-delay',
            desc: '单个数字延迟多少ms开始动画，单位毫秒。举例：<ul style="list-style: square inside;"><li>数字123，delay=200ms，duration=400ms，number-delay=20ms，则数字1延迟200ms开始动画400ms，数字2延迟220ms开始动画400ms，数字1延迟240ms开始动画400ms</li><li>数字123，delay=200ms，duration=400ms，number-delay= -20ms，则数字1延迟200ms开始动画400ms，数字2延迟180ms开始动画400ms，数字1延迟160ms开始动画400ms</li></ul>',
            type: 'number',
            def: '0'
        }, {
            key: 'font-size',
            desc: '字体大小，单位px',
            type: 'number',
            def: '32'
        }, {
            key: 'line-height',
            desc: '行高，默认=font-size，可自定义，单位px',
            type: 'number',
            def: '32'
        }, {
            key: 'color',
            desc: '文字颜色',
            type: 'string',
            def: '#333333'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});