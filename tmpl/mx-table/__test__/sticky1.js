let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');
Magix.applyStyle('@sticky1.less');

module.exports = Base.extend({
    tmpl: '@sticky1.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            line: 10,
            list1: [{
                code: 1,
                width: 68,
                def: 68,
                min: 50,
                max: 120
            }, {
                code: 2,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }, {
                code: 3,
                width: 280,
                def: 280,
                min: 160,
                max: 320
            }, {
                code: 4,
                width: 120,
                def: 120,
                min: 90,
                max: 200
            }],
            list2: [{
                code: 1,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }, {
                code: 2,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }, {
                code: 3,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }, {
                code: 4,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }, {
                code: 5,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }, {
                code: 6,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }, {
                code: 7,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }, {
                code: 8,
                width: 120,
                def: 120,
                min: 100,
                max: 200
            }]
        });
    },
    'reset<click>'(e) {
        let data = this.updater.get();
        [1, 2].forEach(key => {
            data[`list${key}`].forEach(item => {
                item.width = item.def;
            })
        })
        this.updater.digest(data);
    },
    'dragstart<mousedown>'(downEvent) {
        downEvent.preventDefault();

        let that = this;
        let data = that.updater.get();
        let { type, index } = downEvent.params;
        let { min, max } = data[`list${type}`][index];

        let node = $(downEvent.target);
        let th = node.closest('th');
        let { left: offsetLeft } = th.offset();
        let startX = downEvent.pageX - offsetLeft;

        $(document.body).off('mousemove.table.drag')
            .on('mousemove.table.drag', function (moveEvent) {
                moveEvent.preventDefault();
                that.updater.set({
                    draging: true
                })

                let diffX = moveEvent.pageX - offsetLeft;
                let endX;
                if (diffX > startX) {
                    // 向右
                    endX = Math.min(diffX, max);
                } else {
                    // 向左
                    endX = Math.max(diffX, min);
                }

                node.css({
                    border: '4px solid var(--color-brand)',
                    left: endX - 8
                })
            });

        $(document.body).off('mouseup.table.dragend')
            .on('mouseup.table.dragend', function (upEvent) {
                upEvent.preventDefault();
                $(document.body).off('mousemove.table.drag');

                let left = node.css('left').replace('px', '');
                Magix.mix(data[`list${type}`][index], {
                    width: (+left) + 8,
                    hover: false
                })
                that.updater.digest({
                    draging: false,
                    [`list${type}`]: data[`list${type}`]
                });
                $(document.body).off('mouseup.table.dragend');
            });
    },

    'showAnchor<mouseover>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        let that = this;
        clearTimeout(that.hoverTimeout);
        clearTimeout(that.hideTimeout);
        let { draging } = that.updater.get();
        if (draging) {
            return;
        }

        that.hoverTimeout = setTimeout(() => {
            let data = that.updater.get();
            let { type, index } = event.params;
            [1, 2].forEach(key => {
                data[`list${key}`].forEach((item, i) => {
                    item.hover = (type == key) && (index == i);
                });
            });

            that.updater.digest(data);
        }, 200);
    },

    'hideAnchor<mouseout>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        let that = this;
        clearTimeout(that.hoverTimeout);
        clearTimeout(that.hideTimeout);
        let { draging } = that.updater.get();
        if (draging) {
            return;
        }

        that.hideTimeout = setTimeout(() => {
            let data = that.updater.get();
            let { type, index } = event.params;
            data[`list${type}`][index].hover = false;

            that.updater.digest(data);
        }, 100)
    }
});