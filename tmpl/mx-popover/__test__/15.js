let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@15.html',
    render() {
        this.updater.digest({
            auto: false, //控制节点展开
            top: '',
            left: ''
        });
    },
    'enter<mouseover>' (event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        let node = $(event.eventTarget);
        let offset = node.offset();

        this.updater.digest({
            auto: true,
            top: offset.top,
            left: offset.left + 220
        })
    }
});