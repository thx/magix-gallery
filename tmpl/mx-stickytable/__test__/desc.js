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
            desc: 'items',
            type: 'string',
            def: 'items'
        },{
            key: 'tr上的key：mx-stickytable-operation',
            desc: 'line',
            type: 'string',
            def: 'line'
        },{
            key: 'th上的key：mx-stickytable-th',
            desc: 'group',
            type: 'string',
            def: 'group'
        },{
            key: 'th上的key：mx-stickytable-th',
            desc: 'sub',
            type: 'string',
            def: 'sub'
        }]

        let options = [{
            key: 'empty-text',
            desc: '空状态文案',
            type: 'string',
            def: ''
        }, {
            key: 'left-col-sticky'
        }, {
            key: 'right-col-sticky'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});