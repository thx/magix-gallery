/*
ver:1.3.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let DD = require('../mx-dragdrop/index');
let Runner = require('../mx-runner/index');
let $ = require('$');
Magix.applyStyle('@index.less');
let AreaId = Magix.guid('area_');
let Win = $(window);
let Doc = $(document);
let SCROLL_OFFSET = 20;
let SCROLL_STEP = 7;
let SCROLL_INTERVAL = 30;
let UI = {
    '@{start}'() {
        let node = $('#' + AreaId);
        if (!node.length) {
            node = $('<div id="' + AreaId + '" class="@index.less:area" />').appendTo('body');
        }
    },
    '@{update}'(x, y, width, height) {
        let node = $('#' + AreaId);
        node.css({
            left: x,
            top: y,
            width,
            height
        });
    },
    '@{end}'() {
        let node = $('#' + AreaId);
        node.css({
            left: -1e5
        });
    }
};
let rectIntersect = (rect1, rect2) => {
    let half1Width = rect1.width / 2,
        half1Height = rect1.height / 2,
        half2Width = rect2.width / 2,
        half2Height = rect2.height / 2,
        cen1 = {
            x: rect1.x + half1Width,
            y: rect1.y + half1Height
        },
        cen2 = {
            x: rect2.x + half2Width,
            y: rect2.y + half2Height
        };

    return Math.abs(cen2.x - cen1.x) <= half1Width + half2Width &&
        Math.abs(cen2.y - cen1.y) <= half1Height + half2Height;
};
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        let oNode = $('#' + me.id);
        oNode.on('mousedown', e => {
            e.preventDefault();
            me['@{drag.start}'](e);
        });
        oNode.on('click', e => {
            if (!me['@{has.moved}']) {
                let node = me['@{findDirectChild}'](e.target);
                if (node) {
                    oNode.trigger({
                        type: 'change',
                        action: 'add',
                        mode: 'click',
                        node
                    });
                }
            }
            delete me['@{has.moved}'];
        });
        me.on('destroy', () => {
            oNode.off('mousedown click');
        });
        me['@{sub.selector}'] = extra.selector;
        me['@{owner.node}'] = oNode;
    },
    '@{findDirectChild}'(node) {
        let me = this,
            result = null,
            zone = me['@{owner.node}'][0];
        while (zone != node) {
            if (node.parentNode == zone) {
                result = node;
                break;
            } else {
                node = node.parentNode;
            }
        }
        if (result && me['@{sub.selector}']) {
            if (!$.find.matchesSelector(result, me['@{sub.selector}'])) {
                result = null;
            }
        }
        return result;
    },
    '@{collectRects}'() {
        let me = this;
        let children = me['@{sub.selector}'] ? me['@{owner.node}'].find(me['@{sub.selector}']) : me['@{owner.node}'].children();
        let rects = [], count = 0;
        for (let c of children) {
            let $c = $(c);
            let offset = $c.offset();
            rects.push({
                id: count++,
                c: c,
                x: offset.left,
                y: offset.top,
                width: $c.width(),
                height: $c.height()
            });
        }
        return rects;
    },
    '@{area.change}'(e) {
        let me = this;
        let newPos = {
            x: e.pageX,
            y: e.pageY
        };
        let range = me['@{drag.range}'];
        if (newPos.x < range.x) {
            newPos.x = range.x;
        } else if (newPos.x > range.x + range.width) {
            newPos.x = range.x + range.width;
        }
        if (newPos.y < range.y) {
            newPos.y = range.y;
        } else if (newPos.y > range.y + range.height) {
            newPos.y = range.y + range.height;
        }
        let oldPos = me['@{drag.info}'];
        let x = Math.min(newPos.x, oldPos.x);
        let y = Math.min(newPos.y, oldPos.y);
        let width = Math.abs(newPos.x - oldPos.x);
        let height = Math.abs(newPos.y - oldPos.y);
        UI['@{update}'](x, y, width, height);
        let rects = me['@{sub.nodes.rect}'];
        let area = {
            x, y, width, height
        };
        let map = me['@{temp.map}'];
        for (let rect of rects) {
            if (rectIntersect(area, rect)) {
                if (map[rect.id] !== 1) {
                    map[rect.id] = 1;
                    me['@{owner.node}'].trigger({
                        type: 'change',
                        action: 'add',
                        mode: 'drag',
                        node: rect.c
                    });
                }
            } else if (map[rect.id] === 1) {
                delete map[rect.id];
                me['@{owner.node}'].trigger({
                    type: 'change',
                    action: 'remove',
                    mode: 'drag',
                    node: rect.c
                });
            }
        }
    },
    '@{drag.start}'(e) {
        if (e.which === 1) {
            let me = this;
            me['@{drag.info}'] = {
                x: e.pageX,
                y: e.pageY
            };
            let node = me['@{owner.node}'];
            let offset = node.offset();
            me['@{drag.range}'] = {
                x: offset.left,
                y: offset.top,
                width: node.width(),
                height: node.height()
            };
            me['@{temp.map}'] = {};
            UI['@{start}']();
            node.trigger('dragbegin');
            DD.begin(e.target, e => {
                me['@{drag.move}'](e);
            }, e => {
                me['@{drag.end}'](e);
            });
        }
    },
    '@{drag.move}'(e) {
        let me = this;
        if (!me['@{has.moved}']) {
            let last = me['@{drag.info}'];
            if (Math.abs(e.pageX - last.x) > 5 || Math.abs(e.pageY - last.y) > 5) {
                me['@{has.moved}'] = true;
            }
        }
        if (me['@{has.moved}']) {
            if (!me['@{sub.nodes.rect}']) {
                me['@{sub.nodes.rect}'] = me['@{collectRects}']();
            }
            me['@{move.event}'] = e;
            me['@{start.win.scroll}']();
            me['@{area.change}'](e);
        }
    },
    '@{drag.end}'() {
        let me = this;
        me['@{stop.win.scroll}']();
        UI['@{end}']();
        delete me['@{move.event}'];
        delete me['@{drag.info}'];
        delete me['@{drag.range}'];
        delete me['@{sub.nodes.rect}'];
        delete me['@{temp.map}'];
        //delete me['@{has.moved}'];
        me['@{owner.node}'].trigger('dragfinish');
    },
    '@{start.win.scroll}'() {
        let me = this;
        if (!me['@{fn.win.scroll}']) {
            me['@{fn.win.scroll}'] = () => {
                let tx = 0,
                    ty = 0,
                    e = me['@{move.event}'];
                let scrollTop = Win.scrollTop();
                let winHeight = Win.height();
                let maxHeight = Doc.height();
                let maxWidth = Doc.width();
                let winWidth = Win.width();
                let scrollLeft = Win.scrollLeft();
                if (e.pageX - scrollLeft < SCROLL_OFFSET &&
                    scrollLeft > 0) {
                    tx = -Math.min(SCROLL_STEP, scrollLeft);
                } else if (scrollLeft + winWidth - e.pageX < SCROLL_OFFSET &&
                    scrollLeft + winWidth < maxWidth) {
                    tx = Math.min(SCROLL_STEP, maxWidth - winWidth - scrollLeft);
                }
                if (e.pageY - scrollTop < SCROLL_OFFSET &&
                    scrollTop > 0) {
                    ty = -Math.min(SCROLL_STEP, scrollTop);
                } else if (scrollTop + winHeight - e.pageY < SCROLL_OFFSET &&
                    scrollTop + winHeight < maxHeight) {
                    ty = Math.min(SCROLL_STEP, maxHeight - winHeight - scrollTop);
                }
                if (tx || ty) {
                    e.pageX += tx;
                    e.pageY += ty;
                    me['@{area.change}'](e);
                    window.scrollBy(tx, ty);
                }
            };
            Runner['@{task.add}'](SCROLL_INTERVAL, me['@{fn.win.scroll}']);
        }
    },
    '@{stop.win.scroll}'() {
        let me = this;
        if (me['@{fn.win.scroll}']) {
            Runner['@{task.remove}'](me['@{fn.win.scroll}']);
            delete me['@{fn.win.scroll}'];
        }
    }
});