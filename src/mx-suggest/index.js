/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-suggest/index',["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:1.3.8
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("__mx-suggest_index_",".__mx-suggest_index_-suggest {\n  position: absolute;\n  border: 1px solid #e6e6e6;\n  font-size: 14px;\n  max-height: 260px;\n  overflow: auto;\n  list-style: none;\n  border-radius: 4px;\n  background-color: #fff;\n  display: none;\n  z-index: 10;\n  padding: 3px 0;\n  line-height: 1.8;\n}\n.__mx-suggest_index_-item {\n  padding: 0 4px;\n  cursor: pointer;\n  margin: 2px 0;\n}\n.__mx-suggest_index_-item-link {\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 6px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-suggest_index_-item-link:hover,\n.__mx-suggest_index_-item-link:focus,\n.__mx-suggest_index_-item-link:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-suggest_index_-active {\n  color: #333;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: 0;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul mx-guid=\"g0\u001f\" class=\"__mx-suggest_index_-suggest __mx-style_index_-unselectable\" style=\"width:<%=$$.width%>px\" mx-mouseout=\"\u001f\u001e@{out}()\" mx-mousemove=\"\u001f\u001e@{move}()\" mx-contextmenu=\"\u001f\u001e@{stop}()\">1\u001d</ul>","subs":[{"keys":["width","rList","list","textKey","viewId"],"path":"ul[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.rList){%> <%for(var i=0,one;i<$$.list.length;i++){%> <%one=$$.list[i]%><li class=\"__mx-suggest_index_-item\" title=\"<%=$$.textKey?one[$$.textKey]:one%>\"><a href=\"#\" class=\"__mx-suggest_index_-item-link __mx-style_index_-ellipsis\" data-idx=\"<%!i%>\" mx-click=\"\u001f\u001e@{pick}({item:'<%@one%>'})\" id=\"sg_<%!$$.viewId%>_<%!i%>\"><%=$$.textKey?one[$$.textKey]:one%></a></li><%}%> <%}%>","s":"1\u001d","attr":"style=\"width:<%=$$.width%>px\"","attrs":[{"n":"style"}],"mask":"21111"}],"file":"mx-suggest/index.html"},
    init(extra) {
        let me = this;
        me['@{data.list}'] = extra.list || [];
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            me['@{owner.node}'].off('keyup paste input', me['@{fn.watch}'])
                .off('focus', me['@{fn.show}']);
            $('#suggest_' + me.id).remove();
        });
        me.updater.set({
            viewId: me.id,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['@{ui.select.index}'] = -1;
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'suggest_' + this.id);
    },
    update(list, ignore) {
        let me = this;
        if (!ignore) {
            me['@{data.list}'] = list;
        }
        me['@{ui.select.index}'] = -1;
        me.updater.digest({
            list: me['@{data.source.list}'] = list
        });
        if (me['@{relate.node}']) {
            if (!list || !list.length) {
                me['@{relate.node}'].removeClass('__mx-suggest_index_-suggest');
            }
            else {
                me['@{relate.node}'].addClass('__mx-suggest_index_-suggest');
            }
        }
    },
    render() {
        let me = this;
        let oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;
        oNode.on('focus', me['@{fn.show}'] = $.proxy(me['@{show}'], me))
            .on('keyup paste input', me['@{fn.watch}'] = $.proxy(me['@{filter}'], me));
        let id = 'suggest_' + me.id;
        $('<div />').attr('id', id).insertAfter(oNode);
        me.updater.to(id);
        me.updater.set({
            width: oNode.outerWidth()
        });
        me.update(me['@{data.list}']);
        me['@{relate.node}'] = $('#' + id + ' ul');
        if (!me['@{data.list}'] || !me['@{data.list}'].length) {
            me['@{relate.node}'].removeClass('__mx-suggest_index_-suggest');
        }
    },
    '@{filter}'(e) {
        let me = this;
        if (!me['@{ui.show}'])
            me['@{show}']();
        let slist = me['@{data.source.list}'];
        if (e.keyCode == 40) {
            me['@{normal}']();
            me['@{ui.select.index}']++;
            if (me['@{ui.select.index}'] >= slist.length) {
                me['@{ui.select.index}'] = 0;
            }
            me['@{highlight}']();
        }
        else if (e.keyCode == 38) {
            me['@{normal}']();
            me['@{ui.select.index}']--;
            if (me['@{ui.select.index}'] < 0) {
                me['@{ui.select.index}'] = slist.length - 1;
            }
            me['@{highlight}']();
        }
        else if (e.keyCode == 13) {
            if (me['@{ui.select.index}'] > -1 && me['@{ui.select.index}'] < me['@{data.source.list}'].length) {
                let item = me['@{data.source.list}'][me['@{ui.select.index}']];
                me['@{owner.node}'].trigger({
                    type: 'pick',
                    item: item
                });
                let textKey = me.updater.get('textKey');
                if (textKey) {
                    item = item[textKey];
                }
                me['@{owner.node}'].val(item).trigger('change');
                me['@{filter}']({
                    target: me['@{owner.node}'][0]
                });
                me['@{normal}']();
                me['@{ui.select.index}'] = -1;
                me['@{hide}']();
            }
        }
        else {
            let val = $.trim(e.target.value);
            if (val != me['@{temp.value}']) {
                me['@{temp.value}'] = val;
                if (val) {
                    let arr = [];
                    let list = me['@{data.list}'].slice();
                    let key = me.updater.get('textKey');
                    let text;
                    for (let i = 0, one; i < list.length; i++) {
                        one = list[i];
                        text = key ? one[key] : one;
                        if ((text + '').indexOf(val) >= 0) {
                            arr.push(one);
                        }
                    }
                    me.update(arr, true);
                }
                else {
                    me.update(me['@{data.list}'], true);
                }
            }
        }
    },
    '@{show}'() {
        let me = this;
        let updater = me.updater;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            let rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor['@{add}'](me);
            let offset = me['@{owner.node}'].position();
            me['@{relate.node}'].css({
                display: 'block',
                left: offset.left + me.$offsetLeft,
                top: offset.top + me['@{owner.node}'].outerHeight() + 5
            });
            me['@{owner.node}'].trigger('showlist');
        }
    },
    '@{normal}'() {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me['@{ui.select.index}']);
        node.removeClass('__mx-suggest_index_-active');
    },
    '@{highlight}'(ignore) {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me['@{ui.select.index}']);
        node.addClass('__mx-suggest_index_-active');
        if (!ignore && node.length) {
            me['@{temp.ignore}'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            let height = node.outerHeight();
            let scrolled = (me['@{ui.select.index}'] + 1) * height;
            let rNode = me['@{relate.node}'];
            let vHeight = rNode.height();
            let sTop = rNode.prop('scrollTop');
            let items = Math.ceil(vHeight / height);
            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            }
            else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['@{ui.select.index}'] + 2 - items) * height);
            }
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            me['@{relate.node}'].hide();
            me['@{owner.node}'].trigger('hidelist');
        }
    },
    '@{pick}<click>'(e) {
        e.preventDefault();
        let me = this;
        let item = e.params.item;
        me['@{owner.node}'].trigger({
            type: 'pick',
            item: item
        });
        let textKey = me.updater.get('textKey');
        if (textKey) {
            item = item[textKey];
        }
        me['@{owner.node}'].val(item).trigger('change');
        me['@{filter}']({
            target: me['@{owner.node}'][0]
        });
        me['@{hide}']();
    },
    '@{out}<mouseout>'(e) {
        let flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            let me = this;
            me['@{normal}']();
            me['@{ui.select.index}'] = -1;
        }
    },
    '@{move}<mousemove>'(e) {
        let me = this;
        if (me['@{temp.ignore}']) {
            delete me['@{temp.ignore}'];
            return;
        }
        let target = $(e.target);
        if (target.is('li')) {
            let idx = target.data('idx');
            if (idx != me['@{ui.select.index}']) {
                me['@{normal}']();
                me['@{ui.select.index}'] = idx;
                me['@{highlight}'](true);
            }
        }
    },
    '@{stop}<contextmenu>'(e) {
        e.preventDefault();
    }
});

});