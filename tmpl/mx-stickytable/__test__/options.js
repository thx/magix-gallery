let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@options.html',
    init(extra) {
        let options = [{
            key: 'empty-text',
            desc: '空状态文案<br/>当列表内容为空时，自动显示该空状态文案',
            type: 'string',
            def: ''
        }, {
            key: 'left-col-sticky',
            desc: '左侧分栏固定列数',
            type: 'number',
            def: '0'
        }, {
            key: 'right-col-sticky',
            desc: '右侧分栏固定列数',
            type: 'number',
            def: '0'
        }, {
            key: 'thead-sticky',
            desc: '表头是否需要吸顶功能，默认不吸顶',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'thead-sticky-wrapper',
            desc: '相对滚动的节点，表头吸顶和左右分栏时模拟滚动条的相对滚动容器<br/>不设置时：相对于window滚动进行定位，表头和模拟滚动条在window的可视范围内<br/>设置指定容器时：相对指定容器滚动进行定位，表头和模拟滚动条保持在指定容器可视范围内',
            type: 'sizzle',
            def: ''
        }, {
            key: 'filter-wrapper',
            desc: '联动吸顶的筛选项容器节点<br/>目前只支持thead-sticky=true且相对window吸顶时生效',
            type: 'sizzle',
            def: ''
        }]

        let filters = extra.filters || [];
        if (filters.length > 0) {
            for (let i = 0; i < options.length; i++) {
                if (filters.indexOf(options[i].key) < 0) {
                    options.splice(i--, 1);
                }
            }
        }
        this.updater.set({
            viewId: this.id,
            options
        });
    },
    render() {
        this.updater.digest();
    }
});