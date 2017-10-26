/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popover/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("y",".em{border-radius:4px;padding:0;-webkit-box-shadow:0 6px 8px rgba(51,51,51,.08);box-shadow:0 6px 8px rgba(51,51,51,.08);position:absolute;border:1px solid rgba(0,0,0,.1);display:none;max-width:276px;background-color:#fff}.en{line-height:22px;padding:9px 14px}");
var Active;
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"en\"><%!$$.content%></div>","subs":[]},
    init: function (extra) {
        var me = this;
        me['_I'] = extra.placement || 'right';
        me['_J'] = extra.align;
        me['_cR'] = extra.content || '';
        me['_cW'] = extra.width | 0;
        me.on('destroy', function () {
            me['_h'].off('mouseenter mouseleave');
            if (me['_cV']) {
                me['_cV'].off('mouseenter mouseleave').remove();
            }
        });
    },
    render: function () {
        var me = this;
        me.endUpdate();
        var node = $('#' + me.id);
        me['_h'] = node;
        node.hover(function () {
            me['_cX']();
            me['_cY'] = setTimeout(me.wrapAsync(function () {
                me['_e'](); //等待内容显示
            }), 100);
        }, function () {
            clearTimeout(me['_cY']);
            me['_a']();
        });
    },
    '_cX': function () {
        var me = this;
        if (!me['_cV']) {
            var id = 'popover_' + me.id;
            me['_h'].after('<div class="em" id="' + id + '" />');
            me.updater.to(id);
            me.updater.digest({
                content: me['_cR']
            });
            me['_cV'] = $('#' + id);
            if (me['_cW']) {
                me['_cV'].css({
                    'max-width': me['_cW'],
                    width: me['_cW']
                });
            }
            me['_cV'].hover(function () {
                clearTimeout(me['_cY']);
            }, function () {
                me['_a']();
            });
        }
    },
    content: function (body) {
        var me = this;
        if (!body) {
            return me['_cR'];
        }
        if (!me['_cV']) {
            me['_cR'] = body;
        }
        else {
            me['_cR'] = body;
            me.updater.digest({
                content: body
            });
        }
    },
    '_e': function () {
        var me = this;
        if (Active && Active != me) {
            Active['_cZ']();
        }
        Active = me;
        clearTimeout(me['_cY']);
        var rNode = me['_cV'];
        var oNode = me['_h'];
        var offset = oNode.offset();
        var width = oNode.outerWidth();
        var height = oNode.outerHeight();
        rNode.css({
            display: 'block'
        });
        var rWidth = rNode.outerWidth();
        var rHeight = rNode.outerHeight();
        var left, top;
        switch (me['_I']) {
            case 'top':
                left = offset.left - (rWidth - width) / 2;
                top = offset.top - rHeight - 10;
                break;
            case 'right':
                left = offset.left + width + 10;
                top = offset.top - (rHeight - height) / 2;
                break;
            case 'bottom':
                left = offset.left - (rWidth - width) / 2;
                top = offset.top + height + 10;
                break;
            case 'left':
                left = offset.left - rWidth - 10;
                top = offset.top - (rHeight - height) / 2;
                break;
        }
        switch (me['_J']) {
            case 'top':
                top = offset.top;
                break;
            case 'left':
                left = offset.left;
                break;
            case 'right':
                left = offset.left - rWidth + width;
                break;
            case 'bottom':
                top = offset.top - rHeight + height;
                break;
        }
        rNode.offset({
            left: left,
            top: top
        });
    },
    '_a': function () {
        var me = this;
        clearTimeout(me['_cY']);
        me['_cY'] = setTimeout(me.wrapAsync(function () {
            me['_cV'].css({
                display: 'none'
            });
        }), 50);
    },
    '_cZ': function () {
        var me = this;
        clearTimeout(me['_cY']);
        me['_cV'].css({
            display: 'none'
        });
    }
});

});