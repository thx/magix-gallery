let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@desc.html',
    render() {
        // {
        //     key: 'sticky-interval',
        //     desc: 'sticky == true && scroll-wrapper == window时生效<br/>吸顶预留间隔，筛选项也需要吸顶的场景下用到',
        //     type: 'number',
        //     def: '0'
        // }

        let options = [{
            key: 'sticky',
            desc: '是否需要表头吸顶功能',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'sticky-end',
            desc: '表头吸顶时，是否结束滚动时显示吸顶，滚动时隐藏吸顶<br/>建议配置为true，避免滚动太快吸顶显示错位',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'scroll-wrapper',
            desc: '自定义滚动节点id',
            type: 'string',
            def: 'window'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});