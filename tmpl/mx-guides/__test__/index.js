let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'size',
            desc: 'loading尺寸 ',
            type: 'number',
            def: 60
        }, {
            key: 'mode',
            desc: [
                '可选动画类型',
                'circle-spinner',
                'three-bounce',
                'rectangle',
                'double-bounce',
                'square',
                'cubes',
                'pulse',
                'dots'
            ].join('<br>'),
            type: 'string',
            def: 'circle-spinner'
        }, {
            key: 'type',
            desc: [
                '展示类型',
                'brand：品牌色',
                'grey：灰色'
            ].join('<br>'),
            type: 'string',
            def: 'grey'
        }, {
            key: 'color',
            desc: '自定义颜色',
            type: 'hex格式色号',
            def: ''
        }];

        let events = [];

        this.updater.digest({
            viewId: this.id,
            options,
            events,
        });
    }
});