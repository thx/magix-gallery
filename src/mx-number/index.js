/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-number/index',["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-number_index_",".__mx-number_index_-wrapper {\n  padding: 0;\n  position: relative;\n}\n.__mx-number_index_-ipt {\n  width: 100%;\n  border: none;\n  height: 100%;\n  padding: 6px 9px;\n  background-color: transparent;\n  color: #333;\n  display: block;\n}\n.__mx-number_index_-up,\n.__mx-number_index_-down {\n  width: 25px;\n  height: 50%;\n  position: absolute;\n  right: 1px;\n  border: 2px solid #fff;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.__mx-number_index_-up:hover,\n.__mx-number_index_-down:hover {\n  background-color: #f0f0f0;\n}\n.__mx-number_index_-up {\n  top: 1px;\n}\n.__mx-number_index_-down {\n  bottom: 1px;\n}\n.__mx-number_index_-arrow:after {\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-left: 5px solid rgba(0, 0, 0, 0);\n  border-right: 5px solid rgba(0, 0, 0, 0);\n  content: '';\n  display: block;\n  margin: auto;\n}\n.__mx-number_index_-down:after {\n  border-top: 5px solid #ccc;\n}\n.__mx-number_index_-up:after {\n  border-bottom: 5px solid #ccc;\n}\n.__mx-number_index_-notallowed {\n  background-color: #fbfbfb;\n}\n.__mx-number_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-number_index_-notallowed .__mx-number_index_-up,\n.__mx-number_index_-notallowed .__mx-number_index_-down {\n  cursor: not-allowed;\n  border-color: transparent;\n}\n.__mx-number_index_-notallowed .__mx-number_index_-up:hover,\n.__mx-number_index_-notallowed .__mx-number_index_-down:hover {\n  background-color: transparent;\n}\n.__mx-number_index_-notallowed .__mx-number_index_-up:hover:after {\n  border-bottom-color: #ccc;\n}\n.__mx-number_index_-notallowed .__mx-number_index_-down:hover:after {\n  border-top-color: #ccc;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<input mx-guid=\"g0\u001f\" class=\"__mx-number_index_-ipt\" mx-focusin=\"\u001f\u001e@{active}()\" mx-focusout=\"\u001f\u001e@{deactive}()\" value=\"<%=$$.value%>\" mx-change=\"\u001f\u001e@{num.check}()\" mx-keydown=\"\u001f\u001e@{press.check}()\" <%if($$.disabled){%> disabled<%}%> autocomplete=\"off\"><span class=\"__mx-number_index_-up __mx-number_index_-arrow __mx-style_index_-unselectable\" mx-click=\"\u001f\u001e@{num.change}({i:true})\" mx-mousedown=\"\u001f\u001e@{fast.start}({i:true})\" mx-contextmenu=\"\u001f\u001e@{prevent}()\"></span><span class=\"__mx-number_index_-down __mx-number_index_-arrow __mx-style_index_-unselectable\" mx-click=\"\u001f\u001e@{num.change}()\" mx-mousedown=\"\u001f\u001e@{fast.start}()\" mx-contextmenu=\"\u001f\u001e@{prevent}()\"></span>","subs":[{"keys":["value","disabled"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.value%>\" mx-change=\"\u001f\u001e@{num.check}()\" mx-keydown=\"\u001f\u001e@{press.check}()\" <%if($$.disabled){%> disabled<%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-change"},{"n":"mx-keydown"},{"n":"disabled","b":1,"p":1}]}],"file":"mx-number/index.html"},
    init(extra) {
        let me = this;
        me.assign(extra);
        let node = $('#' + me.id);
        node.addClass('__mx-style_index_-input __mx-number_index_-wrapper');
        me['@{owner.node}'] = node;
    },
    assign(ops) {
        let me = this;
        me['@{value}'] = +ops.value || '';
        me['@{step}'] = +ops.step || 1;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{max}'] = Magix.has(ops, 'max') ? +ops.max : Number.MAX_VALUE;
        me['@{min}'] = Magix.has(ops, 'min') ? +ops.min : -Number.MAX_VALUE;
        me['@{ratio}'] = +ops.ratio || 10;
        let s = me['@{step}'] + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['@{tail.length}'] = i;
        return true;
    },
    render() {
        let me = this;
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('__mx-number_index_-notallowed');
        me.updater.digest({
            value: me['@{value}'],
            disabled: me['@{disabled}']
        });
        me['@{ctrl.input}'] = me['@{owner.node}'].find('input');
    },
    val(v) {
        v = +v;
        let me = this;
        if (v || v === 0) {
            let max = me['@{max}'];
            let min = me['@{min}'];
            let step = me['@{step}'];
            if (v > max) {
                v = max;
            }
            else if (v < min) {
                v = min;
            }
            if (v !== me['@{value}']) {
                v = Math.round(v / step) * step;
                v = v.toFixed(me['@{tail.length}']);
                me['@{ctrl.input}'].val(v);
                v = +v;
                me['@{owner.node}'].prop('value', me['@{value}'] = v).trigger({
                    type: 'input',
                    value: v
                });
            }
        }
        return me['@{value}'];
    },
    '@{num.change}'(increase, enlarge) {
        let me = this;
        let value = me['@{value}'];
        if (value === '')
            value = 0; //for init
        let step = me['@{step}'];
        let c = value;
        if (enlarge)
            step *= me['@{ratio}'];
        if (increase) {
            c += step;
        }
        else {
            c -= step;
        }
        me.val(c);
    },
    '@{cursor.show}'() {
        let me = this;
        let ipt = me['@{ctrl.input}'][0];
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '@{simulator.active}'() {
        let me = this;
        me['@{owner.node}'].addClass('__mx-style_index_-input-focus');
        if (!Magix.has(me, '@{last.value}')) {
            me['@{last.value}'] = me['@{value}'];
        }
    },
    '@{num.check}<change>'(e) {
        e.stopPropagation();
        let target = e.eventTarget;
        let value = target.value;
        let me = this;
        if (value === '') {
            target.value = me['@{value}'] = '';
            me['@{owner.node}'].prop('value', '');
            return;
        }
        let v = parseFloat(value);
        if (v || v === 0) {
            me.val(v);
        }
        v = me['@{value}'];
        if (v || v === 0) {
            v = v.toFixed(me['@{tail.length}']);
        }
        else {
            v = '';
        }
        target.value = v;
    },
    '@{active}<focusin>'() {
        this['@{simulator.active}']();
    },
    '@{deactive}<focusout>'() {
        let me = this;
        if (!me['@{ui.keep.active}']) {
            me['@{owner.node}'].removeClass('__mx-style_index_-input-focus');
            if (me['@{last.value}'] != me['@{value}']) {
                me['@{owner.node}'].trigger({
                    type: 'change',
                    value: me['@{value}']
                });
            }
            delete me['@{last.value}'];
        }
    },
    '@{num.change}<click>'(e) {
        let me = this;
        if (!me['@{disabled}'] && !me['@{fast.change.start}']) {
            me['@{num.change}'](e.params.i, e.shiftKey);
            me['@{cursor.show}']();
        }
    },
    '@{fast.start}<mousedown>'(e) {
        let me = this;
        if (!me['@{disabled}']) {
            me['@{ui.keep.active}'] = true;
            me['@{simulator.active}']();
            me['@{long.tap.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{interval.timer}'] = setInterval(me.wrapAsync(() => {
                    me['@{fast.change.start}'] = true;
                    me['@{num.change}'](e.params.i);
                    me['@{cursor.show}']();
                }), 50);
            }), 300);
        }
    },
    '@{press.check}<keydown>'(e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            let me = this;
            if (!me['@{disabled}']) {
                let target = e.eventTarget;
                let value = target.value;
                if (value === '') {
                    me['@{value}'] = '';
                }
                else {
                    let v = parseFloat(value);
                    if (v || v === 0) {
                        if (v != me['@{value}']) {
                            me['@{value}'] = v;
                        }
                    }
                }
                me['@{num.change}'](e.keyCode == 38, e.shiftKey);
            }
        }
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    },
    '$doc<mouseup>'() {
        let me = this;
        clearTimeout(me['@{long.tap.timer}']);
        clearInterval(me['@{interval.timer}']);
        delete me['@{ui.keep.active}'];
        setTimeout(me.wrapAsync(() => {
            delete me['@{fast.change.start}'];
        }), 0);
    }
});

});