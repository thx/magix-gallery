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

        let items = [{
            key: 'td上的key：mx-stickytable-operation',
            desc: '同一行的操作项',
            type: 'string',
            def: 'items'
        }, {
            key: 'tr上的key：mx-stickytable-operation',
            desc: '单独成行的操作项',
            type: 'string',
            def: 'line'
        }, {
            key: 'th上的key：mx-stickytable-th',
            desc: '表头分组的组别',
            type: 'string',
            def: 'group'
        }, {
            key: 'th上的key：mx-stickytable-th',
            desc: '表头分组的子项',
            type: 'string',
            def: 'sub'
        }, {
            key: 'th内的key：mx-stickytable-th',
            desc: '内部文案',
            type: 'string',
            def: 'text'
        }, {
            key: 'th内的key：mx-stickytable-th',
            desc: '内部文案+指标排序',
            type: 'string',
            def: 'sort'
        }]

        let options = [{
            key: 'empty-text',
            desc: '空状态文案',
            type: 'string',
            def: ''
        }, {
            key: 'left-col-sticky',
            desc: '左分栏'
        }, {
            key: 'right-col-sticky',
            desc: '右分栏'
        }, {
            key: 'thead-sticky',
            desc: '表头是否需要吸顶功能'
        }, {
            key: 'thead-sticky-wrapper',
            desc: '相对滚动的容器，表头吸顶和左右分栏时左右滚动条的相对滚动位置'
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            items
        });
    }
});