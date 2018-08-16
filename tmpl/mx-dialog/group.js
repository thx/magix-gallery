let Magix = require('magix');
Magix.applyStyle('@group.less');

module.exports = Magix.View.extend({
    tmpl: '@group.html:updateby[]',
    init(extra) {
        let textKey = extra.textKey || 'text';
        let list = extra.list || [];
        let curIndex = 0,
            hoverIndex = 0;
        this.updater.set({
            contentView: extra.contentView || '',
            list,
            textKey,
            curIndex,
            hoverIndex,
            height: extra.height
        })
    },
    render() {
        this.updater.digest();
    },

    'select<click>'(e) {
        let index = e.params.index;
        this.updater.digest({
            curIndex: index,
            hoverIndex: index
        })

    },
    'over<mouseover>'(e) {
        let index = e.params.index;
        this.updater.digest({
            hoverIndex: index
        })

    },
    'out<mouseout>'(e) {
        let that = this;
        let curIndex = that.updater.get('curIndex');
        that.updater.digest({
            hoverIndex: curIndex
        })
    }
});