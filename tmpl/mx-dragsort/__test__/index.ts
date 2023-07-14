import Magix, { Router } from 'magix';
Magix.applyStyle('@index.less');

export default Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'view-vertical',
            desc: '是否可以垂直拖动',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'view-horizonal',
            desc: '是否可以水平拖动	',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'view-selector',
            desc: '用于拖动的元素选择器，默认子节点',
            type: 'string',
            def: ''
        }]

        let events = [{
            type: 'dragbegin',
            desc: '开始拖动时触发',
            params: [{
                key: 'dragNode',
                desc: '拖动节点',
                type: 'HTMLElement'
            }, {
                key: 'dragZone',
                desc: '拖动节点所在的容器',
                type: 'HTMLElement'
            }]
        }, {
            type: 'dragfinish',
            desc: '结束拖动时触发',
            params: [{
                key: 'dragNode',
                desc: '拖动节点',
                type: 'HTMLElement'
            }, {
                key: 'dragZone',
                desc: '拖动节点所在的容器',
                type: 'HTMLElement'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});