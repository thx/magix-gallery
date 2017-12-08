/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dropdown/multiple',["magix","$","../mx-monitor/index"],(require,exports,module)=>{
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
Magix.applyStyle("__mx-dropdown_multiple_",".__mx-dropdown_multiple_-dropdown {\n  outline: 0;\n  position: relative;\n  width: 340px;\n  background-color: #fff;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: middle;\n  height: 32px;\n}\n.__mx-dropdown_multiple_-dropdown:hover {\n  border-color: #ccc;\n}\n.__mx-dropdown_multiple_-dropdown-toggle {\n  color: #333;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0 30px 0 12px;\n  border-radius: 3px;\n}\n.__mx-dropdown_multiple_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.__mx-dropdown_multiple_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-dropdown_multiple_-notallowed .__mx-dropdown_multiple_-dropdown-toggle {\n  cursor: not-allowed;\n}\n.__mx-dropdown_multiple_-arrow {\n  position: absolute;\n  right: 0;\n  top: 2px;\n  font-size: 28px;\n  color: #ccc;\n  -webkit-transition: top 0.3s,-webkit-transform 0.3s;\n  transition: top 0.3s,-webkit-transform 0.3s;\n  transition: transform 0.3s,top 0.3s;\n  transition: transform 0.3s,top 0.3s,-webkit-transform 0.3s;\n}\n.__mx-dropdown_multiple_-open .__mx-dropdown_multiple_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  top: 0;\n}\n.__mx-dropdown_multiple_-open,\n.__mx-dropdown_multiple_-open:hover,\n.__mx-dropdown_multiple_-dropdown:focus {\n  border-color: #f96447;\n}\n.__mx-dropdown_multiple_-dropdown-toggle-label {\n  height: 30px;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.__mx-dropdown_multiple_-dropdown-toggle-label-ph {\n  color: #999;\n}\n.__mx-dropdown_multiple_-dropdown-menu-wrapper {\n  position: absolute;\n  top: 100%;\n  left: -1px;\n  width: 350px;\n  margin-top: 5px;\n  border-radius: 4px;\n  z-index: 300;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-dropdown_multiple_-open .__mx-dropdown_multiple_-dropdown-menu-wrapper {\n  display: block;\n}\n.__mx-dropdown_multiple_-dropdown-menu {\n  overflow: auto;\n  max-height: 192px;\n  padding: 4px 0;\n}\n.__mx-dropdown_multiple_-searchbox {\n  display: block;\n  width: 100%;\n  padding: 9px 9px 4px 9px;\n}\n.__mx-dropdown_multiple_-searchbox-wrapper {\n  padding: 0;\n  width: 100%;\n}\n.__mx-dropdown_multiple_-search-icon {\n  color: #ccc;\n  position: absolute;\n  left: 15px;\n  top: 18px;\n}\n.__mx-dropdown_multiple_-search-input {\n  padding-left: 28px;\n  width: 100%;\n  height: 28px;\n  line-height: 28px;\n}\n.__mx-dropdown_multiple_-dropdown-header {\n  padding: 5px;\n  color: #999;\n  display: block;\n  cursor: default;\n}\n.__mx-dropdown_multiple_-dropdown-item {\n  padding: 3px 4px;\n}\n.__mx-dropdown_multiple_-item-link {\n  cursor: pointer;\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 6px;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n}\n.__mx-dropdown_multiple_-s-item {\n  width: 32%;\n  float: left;\n  margin-left: 2px;\n  margin-bottom: 2px;\n}\n.__mx-dropdown_multiple_-s-item-link {\n  cursor: pointer;\n  color: #666;\n  display: block;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-dropdown_multiple_-item-link:hover,\n.__mx-dropdown_multiple_-s-item-link:hover {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-dropdown_multiple_-active,\n.__mx-dropdown_multiple_-active:hover,\n.__mx-dropdown_multiple_-active:active,\n.__mx-dropdown_multiple_-active:focus {\n  color: #fff;\n  background-color: #f96447;\n}\n.__mx-dropdown_multiple_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 0 10px;\n  padding: 10px 0;\n}\n.__mx-dropdown_multiple_-splitter {\n  border-left: 1px solid #e6e6e6;\n}\n");
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
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-dropdown_multiple_-dropdown-toggle\" mx-click=\"\u001f\u001e@{toggle}()\" title=\"<%=$$.selectedText%>\"><span mx-guid=\"g1\u001f\" class=\"__mx-dropdown_multiple_-dropdown-toggle-label<%if($$.phLabel){%> __mx-dropdown_multiple_-dropdown-toggle-label-ph<%}%>\">2\u001d</span><span class=\"__mx-style_index_-mc-iconfont __mx-dropdown_multiple_-arrow\">&#xe692;</span></div><div mx-guid=\"g2\u001f\" class=\"__mx-dropdown_multiple_-dropdown-menu-wrapper\">3\u001d</div>","subs":[{"keys":["selectedText"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"title=\"<%=$$.selectedText%>\"","attrs":[{"n":"title","p":1}]},{"keys":["phLabel","selectedText"],"path":"span[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.selectedText%>","s":"2\u001d","attr":"class=\"__mx-dropdown_multiple_-dropdown-toggle-label<%if($$.phLabel){%> __mx-dropdown_multiple_-dropdown-toggle-label-ph<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["rList","searchbox"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%if($$.rList){%> <%if($$.searchbox){%><div class=\"__mx-dropdown_multiple_-searchbox\"><label class=\"__mx-dropdown_multiple_-searchbox-wrapper\"><span class=\"__mx-style_index_-mc-iconfont __mx-dropdown_multiple_-search-icon\">&#xe608;</span><input mx-keyup=\"\u001f\u001e@{search}()\" mx-paste=\"\u001f\u001e@{search}()\" mx-change=\"\u001f\u001e@{stop}()\" mx-focusin=\"\u001f\u001e@{stop}()\" mx-focusout=\"\u001f\u001e@{stop}()\" placeholder=\"搜索关键词\" class=\"__mx-style_index_-input __mx-dropdown_multiple_-search-input\"></label></div><%}%><ul mx-guid=\"g3\u001f\" class=\"__mx-dropdown_multiple_-dropdown-menu\" id=\"list_<%=$$.viewId%>\">4\u001d</ul><div class=\"__mx-dropdown_multiple_-footer __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\"><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001e@{hide}({enter:true})\">确定</button><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-ml5\" mx-click=\"\u001f\u001e@{hide}()\">取消</button></div><div class=\"__mx-style_index_-fl __mx-style_index_-ml10 __mx-dropdown_multiple_-splitter __mx-style_index_-pl10\"><button type=\"button\" class=\"__mx-style_index_-btn\" mx-click=\"\u001f\u001e@{checkAll}()\">全选/不选</button><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-ml5\" mx-click=\"\u001f\u001e@{invertCheck}()\">反选</button></div></div><%}%>","s":"3\u001d"},{"keys":["selected","list","textKey","valueKey","emptyText"],"path":"ul[mx-guid=\"g3\u001f\"]","pKeys":["rList","searchbox"],"tmpl":"<%var keys=$$.selected.split(','),text=void 0,value=void 0;%> <%for(var i=0;i<$$.list.length;i++){%> <%var item=$$.list[i];%> <%if(item&&item.group){%><li class=\"__mx-dropdown_multiple_-dropdown-header __mx-style_index_-ellipsis\" title=\"<%=item[$$.textKey]%>\"><%=item[$$.textKey]%></li><%}else{%> <%if($$.textKey&&$$.valueKey){%> <%text=item[$$.textKey];value=item[$$.valueKey]%> <%}else{%> <%text=item;value=item;%> <%}%> <%if($$.emptyText===value&&i===0){%> <%value='';item='';%> <%}%> <%var equal=$$.inArray(value+'',keys)>-1%> <%if(value===''){%><li title=\"<%=text%>\" class=\"__mx-dropdown_multiple_-dropdown-item\"><span class=\"__mx-dropdown_multiple_-item-link __mx-style_index_-ellipsis <%if(equal){%> __mx-dropdown_multiple_-active<%}%>\" mx-click=\"\u001f\u001e@{select}({item:'<%@item%>'})\"><%=text%></span></li><%}else{%><li class=\"__mx-dropdown_multiple_-dropdown-item __mx-style_index_-clearfix\"><ul><%for(;i<$$.list.length;i++){%> <%item=$$.list[i]%> <%if(item&&item.group){%> <%i--;%> <%break;%> <%}%> <%if($$.textKey&&$$.valueKey){%> <%text=item[$$.textKey];value=item[$$.valueKey]%> <%}else{%> <%text=item;value=item;%> <%}%> <%var equal_1=$$.inArray(value+'',keys)>-1%><li class=\"__mx-dropdown_multiple_-s-item\"><span class=\"__mx-dropdown_multiple_-s-item-link __mx-style_index_-ellipsis<%if(equal_1){%> __mx-dropdown_multiple_-active<%}%>\" mx-click=\"\u001f\u001e@{select}({item:'<%@item%>'})\"><%=text%></span></li><%}%></ul></li><%}%> <%}%> <%}%>","s":"4\u001d"}],"file":"mx-dropdown/multiple.html"},
    init(extra) {
        let me = this;
        Monitor['@{setup}']();
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        node.addClass('__mx-dropdown_multiple_-dropdown');
        node.on('keydown', e => {
            if (e.keyCode == 13) {
                me['@{toggle}<click>']();
            }
        });
        me.on('destroy', () => {
            node.off('keydown');
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id,
            inArray: $.inArray
        });
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
        me['@{disabled}'] = (ops.disabled + '') === 'true';
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
                    map[''] = emptyText;
                }
            }
        }
        me['@{selected}'] = selected;
        me['@{list.map}'] = map;
        me.updater.set({ list });
        return true;
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id);
    },
    render() {
        let me = this;
        let node = me['@{owner.node}'];
        node[me['@{disabled}'] ? 'addClass' : 'removeClass']('__mx-dropdown_multiple_-notallowed').prop('tabindex', me['@{ui.disabled}'] ? -1 : 0);
        me['@{updateSelected}'](me['@{selected}']);
    },
    '@{hide}'(ignoreBak) {
        let me = this;
        if (me['@{owner.node}'].hasClass('__mx-dropdown_multiple_-open')) {
            let data = me.updater.get();
            if (Magix.has(me, '@{bakSelected}')) {
                let fired = ignoreBak && data.selected !== me['@{bakSelected}'];
                if (ignoreBak) {
                    me['@{updateSelected}'](data.selected);
                }
                else {
                    me['@{updateSelected}'](me['@{bakSelected}']);
                }
                if (fired) {
                    me['@{owner.node}'].val(data.selected).trigger({
                        type: 'change',
                        keys: {
                            text: data.textKey,
                            value: data.valueKey
                        },
                        values: (data.selected + '').split(',')
                    });
                }
                delete me['@{bakSelected}'];
            }
            me['@{owner.node}'].removeClass('__mx-dropdown_multiple_-open').trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{owner.node}'].hasClass('__mx-dropdown_multiple_-open')) {
            let r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['@{owner.node}'].addClass('__mx-dropdown_multiple_-open').trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.__mx-dropdown_multiple_-active');
            let pos = active.position();
            if (pos) {
                let height = listNode.height();
                let stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    let top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor['@{add}'](me);
        }
    },
    '@{getText}'(keys, textKey) {
        let me = this;
        let map = me['@{list.map}'];
        let text = [];
        for (let key of keys) {
            let entity = map[key] || {};
            if (textKey) {
                text.push(entity[textKey]);
            }
            else {
                text.push(key || entity);
            }
        }
        return text;
    },
    '@{updateSelected}'(selected) {
        let me = this;
        selected = selected || '';
        selected += '';
        let textKey = me['@{textKey}'] || '';
        let valueKey = me['@{valueKey}'] || '';
        let parts = selected.split(',');
        let selectedText = '';
        let list = me['@{list}'];
        if (parts.length) {
            selectedText = me['@{getText}'](parts, textKey);
        }
        else {
            selected = list[0];
            selectedText = list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
                selectedText = selected[textKey];
            }
        }
        me.updater.digest({
            textKey,
            valueKey,
            emptyText: me['@{emptyText}'],
            searchbox: me['@{ui.searchbox}'],
            phLabel: selected === '',
            selected: me['@{selected}'] = selected,
            selectedText: selectedText
        });
        me['@{owner.node}'].val(selected);
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
    '@{toggle}<click>'() {
        let me = this;
        let node = me['@{owner.node}'];
        if (node.hasClass('__mx-dropdown_multiple_-open')) {
            me['@{hide}']();
        }
        else if (!node.hasClass('__mx-dropdown_multiple_-notallowed')) {
            me['@{show}']();
        }
    },
    '@{search}<keyup,paste>'(e) {
        let me = this;
        clearTimeout(me['@{search.delay.timer}']);
        let val = $.trim(e.eventTarget.value);
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, (list) => {
                    me.updater.digest({
                        list
                    });
                });
            }
        }), 300);
    },
    '@{select}<click>'(e) {
        let me = this;
        let item = e.params.item;
        let updater = me.updater;
        let data = updater.get();
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = data.selected;
        }
        let valueKey = me['@{valueKey}'];
        let textKey = me['@{textKey}'];
        let selected = item;
        let selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        let keys = [''];
        if (selected) {
            keys = data.selected.split(',');
        }
        let idx = $.inArray('', keys);
        if (idx > -1) {
            keys.splice(idx, 1);
        }
        idx = $.inArray(selected + '', keys);
        if (idx == -1) {
            keys.push(selected);
        }
        else {
            keys.splice(idx, 1);
        }
        if (!keys.length) {
            if (data.emptyText) {
                keys = [''];
            }
        }
        selected = keys.join(',');
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },
    '@{hide}<click>'(e) {
        this['@{hide}'](e.params.enter);
    },
    '@{checkAll}<click>'() {
        let me = this;
        let selected = me['@{selected}'];
        let list = me['@{list}'];
        let valueKey = me['@{valueKey}'];
        let updater = me.updater;
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = selected;
        }
        if (selected) {
            selected = '';
        }
        else {
            selected = '';
            for (let i = me['@{emptyText}'] ? 1 : 0, e; i < list.length; i++) {
                e = list[i];
                if (valueKey) {
                    if (!e.group) {
                        selected += e[valueKey] + ',';
                    }
                }
                else {
                    selected += e + ',';
                }
            }
            selected = selected.slice(0, -1);
        }
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    },
    '@{invertCheck}<click>'() {
        let me = this;
        let selected = me['@{selected}'];
        let list = me['@{list}'];
        let valueKey = me['@{valueKey}'];
        let updater = me.updater;
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = selected;
        }
        let oldSelected = selected.split(',');
        selected = '';
        for (let i = me['@{emptyText}'] ? 1 : 0, e; i < list.length; i++) {
            e = list[i];
            if (valueKey) {
                if (!e.group && $.inArray(e[valueKey] + '', oldSelected) == -1) {
                    selected += e[valueKey] + ',';
                }
            }
            else if ($.inArray(e + '', oldSelected) == -1) {
                selected += e + ',';
            }
        }
        selected = selected.slice(0, -1);
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    }
});

});