/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dropdown/index',["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("__mx-dropdown_index_",".__mx-dropdown_index_-dropdown {\n  outline: 0;\n  position: relative;\n  width: 340px;\n  background-color: #fff;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: middle;\n  height: 32px;\n}\n.__mx-dropdown_index_-dropdown:hover {\n  border-color: #ccc;\n}\n.__mx-dropdown_index_-dropdown-toggle {\n  color: #333;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0 30px 0 12px;\n}\n.__mx-dropdown_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.__mx-dropdown_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-dropdown_index_-notallowed .__mx-dropdown_index_-dropdown-toggle {\n  cursor: not-allowed;\n}\n.__mx-dropdown_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 2px;\n  font-size: 28px;\n  color: #ccc;\n  -webkit-transition: top 0.3s,-webkit-transform 0.3s;\n  transition: top 0.3s,-webkit-transform 0.3s;\n  transition: transform 0.3s,top 0.3s;\n  transition: transform 0.3s,top 0.3s,-webkit-transform 0.3s;\n}\n.__mx-dropdown_index_-open .__mx-dropdown_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  top: 0;\n}\n.__mx-dropdown_index_-open,\n.__mx-dropdown_index_-open:hover,\n.__mx-dropdown_index_-dropdown:focus {\n  border-color: #f96447;\n}\n.__mx-dropdown_index_-dropdown-toggle-label {\n  height: 30px;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.__mx-dropdown_index_-dropdown-toggle-label-ph {\n  color: #999;\n}\n.__mx-dropdown_index_-dropdown-menu-wrapper {\n  position: absolute;\n  top: 100%;\n  left: -1px;\n  right: -1px;\n  margin-top: 5px;\n  border-radius: 4px;\n  z-index: 300;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-dropdown_index_-open .__mx-dropdown_index_-dropdown-menu-wrapper {\n  display: block;\n}\n.__mx-dropdown_index_-dropdown-menu {\n  overflow: auto;\n  max-height: 196px;\n  padding: 4px 0;\n}\n.__mx-dropdown_index_-searchbox {\n  display: block;\n  width: 100%;\n  padding: 9px 9px 4px 9px;\n}\n.__mx-dropdown_index_-searchbox-wrapper {\n  padding: 0;\n  width: 100%;\n}\n.__mx-dropdown_index_-search-icon {\n  color: #ccc;\n  position: absolute;\n  left: 15px;\n  top: 16px;\n}\n.__mx-dropdown_index_-search-input {\n  padding-left: 28px;\n  height: 28px;\n  line-height: 28px;\n  width: 100%;\n}\n.__mx-dropdown_index_-dropdown-header {\n  padding: 5px;\n  color: #999;\n  display: block;\n  cursor: default;\n}\n.__mx-dropdown_index_-dropdown-item {\n  padding: 0 4px;\n  margin: 2px 0;\n}\n.__mx-dropdown_index_-item-link {\n  cursor: pointer;\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-dropdown_index_-item-link:hover {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-dropdown_index_-active,\n.__mx-dropdown_index_-active:hover,\n.__mx-dropdown_index_-active:active,\n.__mx-dropdown_index_-active:focus {\n  color: #fff;\n  background-color: #f96447;\n}\n");
let AssignIf = (view, key, ops, cfg, src) => {
    if (!view[key] || Magix.has(ops, cfg)) {
        let v = ops[cfg] || '';
        if (!src) {
            v += '';
        }
        view[key] = v;
    }
    return view[key];
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-dropdown_index_-dropdown-toggle\" mx-click=\"\u001f\u001e@{toggle}()\" title=\"<%=$$.selectedText%>\"><span mx-guid=\"g1\u001f\" class=\"__mx-dropdown_index_-dropdown-toggle-label<%if($$.selected===''){%> __mx-dropdown_index_-dropdown-toggle-label-ph<%}%>\">2\u001d</span><span class=\"__mx-style_index_-mc-iconfont __mx-dropdown_index_-arrow\">&#xe692;</span></div><div mx-guid=\"g2\u001f\" class=\"__mx-dropdown_index_-dropdown-menu-wrapper\">3\u001d</div>","subs":[{"keys":["selectedText"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"title=\"<%=$$.selectedText%>\"","attrs":[{"n":"title","p":1}]},{"keys":["selected","selectedText"],"path":"span[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.selectedText%>","s":"2\u001d","attr":"class=\"__mx-dropdown_index_-dropdown-toggle-label<%if($$.selected===''){%> __mx-dropdown_index_-dropdown-toggle-label-ph<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["rList","searchbox"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%if($$.rList){%> <%if($$.searchbox){%><div class=\"__mx-dropdown_index_-searchbox\"><label class=\"__mx-dropdown_index_-searchbox-wrapper\"><span class=\"__mx-style_index_-mc-iconfont __mx-dropdown_index_-search-icon\">&#xe608;</span><input placeholder=\"搜索关键词\" mx-keyup=\"\u001f\u001e@{search}()\" mx-paste=\"\u001f\u001e@{search}()\" mx-change=\"\u001f\u001e@{stop}()\" mx-focusin=\"\u001f\u001e@{stop}()\" mx-focusout=\"\u001f\u001e@{stop}()\" class=\"__mx-style_index_-input __mx-dropdown_index_-search-input\"></label></div><%}%><ul mx-guid=\"g3\u001f\" class=\"__mx-dropdown_index_-dropdown-menu\" id=\"list_<%=$$.viewId%>\">4\u001d</ul><%}%>","s":"3\u001d"},{"keys":["list","textKey","valueKey","selected"],"path":"ul[mx-guid=\"g3\u001f\"]","pKeys":["rList","searchbox"],"tmpl":"<%var text=void 0,value=void 0%> <%for(var _i=0,list_1=$$.list;_i<list_1.length;_i++){var item=list_1[_i];%> <%if($$.textKey&&$$.valueKey){%> <%text=item[$$.textKey];value=item[$$.valueKey]%> <%}else{%> <%text=item;value=item;%> <%}%> <%if(item&&item.group){%><li class=\"__mx-dropdown_index_-dropdown-header __mx-style_index_-ellipsis\" title=\"<%=item[$$.textKey]%>\"><%=item[$$.textKey]%></li><%}else{%><li title=\"<%=text%>\" class=\"__mx-dropdown_index_-dropdown-item\"><%var equal=(value+'')===($$.selected+'')%><span class=\"__mx-dropdown_index_-item-link __mx-style_index_-ellipsis<%if(equal){%> __mx-dropdown_index_-active<%}%>\" mx-click=\"\u001f\u001e@{select}({item:'<%@item%>'})\"><%=text%></span></li><%}%> <%}%>","s":"4\u001d"}],"file":"mx-dropdown/index.html"},
    init(extra) {
        let me = this;
        Monitor['@{setup}']();
        let node = $('#' + me.id);
        node.addClass('__mx-dropdown_index_-dropdown');
        node.on('keydown', e => {
            if (e.keyCode == 13) {
                me['@{toggle}<click>']();
            } /*else if (e.keyCode == 40) {//down arrow
                e.preventDefault();
            } else if (e.keyCode == 38) {//up arrow
                e.preventDefault();
            }*/
        });
        me.on('destroy', () => {
            node.off('keydown');
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id
        });
        me['@{owner.node}'] = node;
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        AssignIf(me, '@{list}', ops, 'list', 1);
        let selected = AssignIf(me, '@{selected}', ops, 'selected');
        let textKey = AssignIf(me, '@{textKey}', ops, 'textKey');
        let valueKey = AssignIf(me, '@{valueKey}', ops, 'valueKey');
        let emptyText = AssignIf(me, '@{emptyText}', ops, 'emptyText');
        me['@{ui.searchbox}'] = (ops.searchbox + '') === 'true';
        me['@{ui.disabled}'] = (ops.disabled + '') === 'true';
        if (!me['@{list}']) {
            let node = me['@{owner.node}'];
            let list = [];
            let group;
            node.children().each((idx, item) => {
                item = $(item);
                group = item.attr('group') == 'true';
                list.push({
                    group: group,
                    text: item.text(),
                    value: group ? Magix.guid() : item.attr('value')
                });
            });
            textKey = me['@{textKey}'] = 'text';
            valueKey = me['@{valueKey}'] = 'value';
            me['@{list}'] = list;
        }
        let list = me['@{list}'];
        let map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (textKey && valueKey) {
                if (!map['']) {
                    let temp = {};
                    temp[textKey] = emptyText;
                    temp[valueKey] = '';
                    list.unshift(temp);
                    map[''] = temp;
                }
            }
            else {
                if (!map[emptyText]) {
                    list.unshift(emptyText);
                    map[emptyText] = emptyText;
                }
            }
        }
        if (!selected && emptyText && !(textKey || valueKey)) {
            selected = emptyText;
        }
        if (!selected || !map[selected]) {
            selected = map[selected] || list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        me['@{selected}'] = selected;
        me['@{selected.text}'] = textKey && valueKey ? map[selected][textKey] : selected;
        return true;
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },
    render() {
        let me = this;
        let node = me['@{owner.node}'];
        node[me['@{ui.disabled}'] ? 'addClass' : 'removeClass']('__mx-dropdown_index_-notallowed').prop('tabindex', me['@{ui.disabled}'] ? -1 : 0);
        me['@{ui.update}'](true);
    },
    '@{hide}'() {
        let me = this;
        if (me['@{owner.node}'].hasClass('__mx-dropdown_index_-open')) {
            me['@{owner.node}'].removeClass('__mx-dropdown_index_-open').trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{owner.node}'].hasClass('__mx-dropdown_index_-open')) {
            let r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['@{owner.node}'].addClass('__mx-dropdown_index_-open').trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.__mx-dropdown_index_-active');
            let pos = active.position();
            let height = listNode.height();
            let stop = listNode.prop('scrollTop');
            if (pos.top < 0 || pos.top > height) {
                let top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['@{add}'](me);
        }
    },
    '@{ui.update}'(ignoreFireEvent) {
        let me = this;
        let selected = me['@{selected}'];
        me.updater.digest({
            textKey: me['@{textKey}'],
            valueKey: me['@{valueKey}'],
            selected,
            searchbox: me['@{ui.searchbox}'],
            selectedText: me['@{selected.text}'],
            list: me['@{list}'].slice()
        });
        me['@{owner.node}'].val(selected);
        if (!ignoreFireEvent) {
            me['@{fire.event}'](selected);
        }
    },
    '@{fn.search}'(val, callback) {
        let me = this;
        clearTimeout(me['@{search.timer}']);
        let srcList = me['@{list}'];
        let newList = [];
        let index = 0;
        let max = srcList.length;
        let textKey = me['@{textKey}'];
        let valueKey = me['@{valueKey}'];
        if (!val) {
            callback(srcList);
            return;
        }
        let go = () => {
            if (index < max) {
                let end = Math.min(index + 400, max);
                for (let i = index, li, text, value; i < end; i++) {
                    li = srcList[i];
                    text = li;
                    value = li;
                    if (textKey && valueKey) {
                        text = li[textKey];
                        value = li[valueKey];
                    }
                    if ((text + '').indexOf(val) >= 0 || (value + '').indexOf(val) >= 0) {
                        newList.push(li);
                    }
                }
                index = end;
                me['@{search.timer}'] = setTimeout(me.wrapAsync(go), 20);
            }
            else {
                callback(newList);
            }
        };
        go();
    },
    '@{fire.event}'(item, compare) {
        let me = this;
        let updater = me.updater;
        let valueKey = me['@{valueKey}'];
        let textKey = me['@{textKey}'];
        let lastSelected = me['@{selected}'];
        let selected = item;
        let selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        if (!compare || lastSelected !== selected) {
            updater.set({
                selected: me['@{selected}'] = selected
            });
            let event = $.Event('change', {
                item: item,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: valueKey ? item[valueKey] : item,
                text: textKey ? item[textKey] : item
            });
            me['@{owner.node}'].val(valueKey ? item[valueKey] : item).trigger(event);
            if (!event.isDefaultPrevented()) {
                updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
            }
            else {
                updater.set({
                    selected: lastSelected
                });
            }
        }
    },
    '@{toggle}<click>'() {
        let me = this;
        let node = me['@{owner.node}'];
        if (node.hasClass('__mx-dropdown_index_-open')) {
            me['@{hide}']();
        }
        else if (!node.hasClass('__mx-dropdown_index_-notallowed')) {
            me['@{show}']();
        }
    },
    '@{search}<keyup,paste>'(e) {
        let me = this;
        e.stopPropagation();
        clearTimeout(me['@{search.delay.timer}']);
        let val = $.trim(e.eventTarget.value);
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if (val != me.$lVal) {
                me['@{fn.search}'](me.$lVal = val, list => {
                    me.updater.digest({
                        list
                    });
                });
            }
        }), 300);
    },
    '@{select}<click>'(e) {
        let me = this;
        me['@{fire.event}'](e.params.item, true);
        me['@{hide}']();
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});

});