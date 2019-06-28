/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/content",["magix","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,I18n*/

var Magix = require("magix");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dropdown_index_","._zs_gallery_mx-dropdown_index_-dropdown-menu-group {\n  min-width: 600px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-group-item {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-group-wrapper {\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper {\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 18px;\n  padding-right: 18px;\n  line-height: 16px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper {\n  float: left;\n  padding-right: 20px;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper._zs_gallery_mx-dropdown_index_-has-group {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', searchbox = $$.searchbox, text = $$.text, keyword = $$.keyword, multiple = $$.multiple, spm = $$.spm, allHide = $$.allHide, height = $$.height, parents = $$.parents, hasGroups = $$.hasGroups; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if searchbox';
    ;
    $expr = '<%if (searchbox) {%>';
    if (searchbox) {
        ;
        $p += '<div mxv mxa="_zs_gallerybg:_" class="mx-output-search"><div mxv mxa="_zs_gallerybg:a" class="search-box" style="width: 100%;"><i mxs="_zs_gallerybg:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
        $line = 6;
        $art = '=text.search';
        ;
        $p += ($expr = '<%=text.search%>', $e(text.search)) + '" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" value="';
        $line = 12;
        $art = '=keyword';
        ;
        $p += ($expr = '<%=keyword%>', $e(keyword)) + '"/></div></div>';
        $line = 15;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 16;
    $art = 'if multiple';
    ;
    $expr = '<%if (multiple) {%>';
    if (multiple) {
        ;
        $p += '<div mxa="_zs_gallerybg:b" class="_zs_gallery_mx-dropdown_index_-oper-wrapper _zs_gallery_mx-dropdown_index_-has-group clearfix"><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="' + $viewId + '@{checkAll}({checked:true})" data-spm-click="';
        $line = 18;
        $art = '=spm';
        ;
        $p += ($expr = '<%=spm%>', $e(spm)) + 'a">';
        $line = 18;
        $art = '=text.select';
        ;
        $p += ($expr = '<%=text.select%>', $e(text.select)) + '</a><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="' + $viewId + '@{checkAll}({checked:false})" data-spm-click="';
        $line = 19;
        $art = '=spm';
        ;
        $p += ($expr = '<%=spm%>', $e(spm)) + 'ua">';
        $line = 19;
        $art = '=text.unselect';
        ;
        $p += ($expr = '<%=text.unselect%>', $e(text.unselect)) + '</a></div>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 22;
    $art = 'if !allHide';
    ;
    $expr = '<%if (!allHide) {%>';
    if (!allHide) {
        ;
        $p += '<ul mxv class="mx-output-list" style="max-height:';
        $line = 23;
        $art = '=height';
        ;
        $p += ($expr = '<%=height%>', $e(height)) + 'px;">';
        $line = 24;
        $art = 'each parents as parent parentIndex';
        ;
        $expr = '<%for (var parentIndex = 0, $art_cfcpjtzo$art_c = parents.length; parentIndex < $art_cfcpjtzo$art_c; parentIndex++) {        var parent = parents[parentIndex]%>';
        for (var parentIndex = 0, $art_cfcpjtzo$art_c = parents.length; parentIndex < $art_cfcpjtzo$art_c; parentIndex++) {
            var parent = parents[parentIndex];
            $p += ' ';
            $line = 25;
            $art = 'if !parent.hide';
            ;
            $expr = '<%if (!parent.hide) {%>';
            if (!parent.hide) {
                ;
                $p += ' ';
                $line = 26;
                $art = 'if hasGroups';
                ;
                $expr = '<%if (hasGroups) {%>';
                if (hasGroups) {
                    ;
                    $p += '<li class="mx-output-header" title="';
                    $line = 27;
                    $art = '=parent.text';
                    ;
                    $p += ($expr = '<%=parent.text%>', $e(parent.text)) + '">';
                    $line = 27;
                    $art = '=parent.text';
                    ;
                    $p += ($expr = '<%=parent.text%>', $e(parent.text)) + '</li>';
                    $line = 28;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 29;
                $art = 'each parent.list as item itemIndex';
                ;
                $expr = '<%for (var itemIndex = 0, $art_objmxdymeqo$art_obj = parent.list, $art_cngjickgvj$art_c = $art_objmxdymeqo$art_obj.length; itemIndex < $art_cngjickgvj$art_c; itemIndex++) {                var item = $art_objmxdymeqo$art_obj[itemIndex]%>';
                for (var itemIndex = 0, $art_objmxdymeqo$art_obj = parent.list, $art_cngjickgvj$art_c = $art_objmxdymeqo$art_obj.length; itemIndex < $art_cngjickgvj$art_c; itemIndex++) {
                    var item = $art_objmxdymeqo$art_obj[itemIndex];
                    $p += ' ';
                    $line = 30;
                    $art = 'if !item.hide';
                    ;
                    $expr = '<%if (!item.hide) {%>';
                    if (!item.hide) {
                        ;
                        $p += '<li mxv class="mx-output-item" title="';
                        $line = 31;
                        $art = '=item.text';
                        ;
                        $p += ($expr = '<%=item.text%>', $e(item.text)) + '">';
                        $line = 32;
                        $art = 'if multiple';
                        ;
                        $expr = '<%if (multiple) {%>';
                        if (multiple) {
                            ;
                            $p += '<label mxv class="mx-output-link ';
                            $line = 33;
                            $art = 'if item.disabled';
                            ;
                            $expr = '<%if (item.disabled) {%>';
                            if (item.disabled) {
                                ;
                                $p += ' mx-output-link-disabled ';
                                $line = 33;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += '"><input type="checkbox" class="checkbox" ';
                            $line = 35;
                            $art = 'if item.selected';
                            ;
                            $expr = '<%if (item.selected) {%>';
                            if (item.selected) {
                                ;
                                $p += ' checked="true" ';
                                $line = 35;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += ' ';
                            $line = 36;
                            $art = 'if item.disabled';
                            ;
                            $expr = '<%if (item.disabled) {%>';
                            if (item.disabled) {
                                ;
                                $p += ' disabled="true" ';
                                $line = 36;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += ' mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{check}({parentIndex:\'';
                            $line = 38;
                            $art = '=parentIndex';
                            ;
                            $p += ($expr = '<%=$eq(parentIndex)%>', $e($eq(parentIndex))) + '\',itemIndex:\'';
                            $line = 38;
                            $art = '=itemIndex';
                            ;
                            $p += ($expr = '<%=$eq(itemIndex)%>', $e($eq(itemIndex))) + '\'})" data-spm-click="';
                            $line = 39;
                            $art = '=spm';
                            ;
                            $p += ($expr = '<%=spm%>', $e(spm)) + '"/>';
                            $line = 40;
                            $art = '=item.text';
                            ;
                            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label>';
                            $line = 42;
                            $art = 'else';
                            ;
                            $expr = '<%}                    else {%>';
                        }
                        else {
                            ;
                            $p += '<span class="mx-output-link ';
                            $line = 43;
                            $art = 'if item.selected';
                            ;
                            $expr = '<%if (item.selected) {%>';
                            if (item.selected) {
                                ;
                                $p += ' mx-output-link-active ';
                                $line = 43;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += ' ';
                            $line = 43;
                            $art = 'if item.disabled';
                            ;
                            $expr = '<%if (item.disabled) {%>';
                            if (item.disabled) {
                                ;
                                $p += ' mx-output-link-disabled ';
                                $line = 43;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += '" ';
                            $line = 44;
                            $art = 'if !item.disabled';
                            ;
                            $expr = '<%if (!item.disabled) {%>';
                            if (!item.disabled) {
                                ;
                                $p += ' mx-click="' + $viewId + '@{select}({item:\'';
                                $line = 44;
                                $art = '@item';
                                ;
                                $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" data-spm-click="';
                                $line = 44;
                                $art = '=spm';
                                ;
                                $p += ($expr = '<%=spm%>', $e(spm)) + '" ';
                                $line = 44;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += '>';
                            $line = 45;
                            $art = '=item.text';
                            ;
                            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</span>';
                            $line = 47;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += '</li>';
                        $line = 49;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' ';
                    $line = 50;
                    $art = '/each';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 51;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 52;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $line = 54;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxa="_zs_gallerybg:c" class="text-center color-9 pt20 pb20">';
        $line = 55;
        $art = '=text.empty';
        ;
        $p += ($expr = '<%=text.empty%>', $e(text.empty)) + '</div>';
        $line = 56;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 57;
    $art = 'if multiple';
    ;
    $expr = '<%if (multiple) {%>';
    if (multiple) {
        ;
        $p += '<div mxa="_zs_gallerybg:d" class="mx-output-footer"><a mxa="_zs_gallerybg:e" href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="' + $viewId + '@{submit}()">';
        $line = 59;
        $art = '=text.submit';
        ;
        $p += ($expr = '<%=text.submit%>', $e(text.submit)) + '</a><a mxa="_zs_gallerybg:f" href="javascript:;" class="btn btn-small" mx-click="' + $viewId + '@{cancel}()">';
        $line = 60;
        $art = '=text.cancel';
        ;
        $p += ($expr = '<%=text.cancel%>', $e(text.cancel)) + '</a></div>';
        $line = 62;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/content.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.viewOptions = e;
        var data = e.data;
        var parents = $.extend(true, [], data.parents);
        var selectedValues = (data.selectedItems || []).map(function (item) {
            return (item.value + '');
        });
        parents.forEach(function (parent) {
            parent.list.forEach(function (item) {
                item.selected = (selectedValues.indexOf(item.value + '') > -1);
            });
        });
        this.updater.set({
            parents: parents,
            hasGroups: data.hasGroups,
            searchbox: data.searchbox,
            multiple: data.multiple,
            spm: data.spm,
            height: data.height,
            keyword: (data.keyword || ''),
            text: {
                search: I18n['dropdown.search'],
                select: I18n['select.all'],
                unselect: I18n['unselect.all'],
                submit: I18n['dialog.submit'],
                cancel: I18n['dialog.cancel'],
                empty: I18n['empty.text']
            }
        });
    },
    render: function () {
        var me = this;
        var keyword = me.updater.get('keyword');
        me['@{fn.search}'](me['@{last.value}'] = keyword, function (result) {
            me.updater.digest(result);
        });
    },
    /**
     * 单选
     */
    '@{select}<click>': function (e) {
        var me = this;
        var viewOptions = me.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit({
                keyword: me.updater.get('keyword'),
                selectedItems: [e.params.item]
            });
        }
    },
    '@{checkAll}<click>': function (e) {
        var checked = e.params.checked;
        var parents = this.updater.get('parents');
        parents.forEach(function (parent) {
            parent.list.forEach(function (item) {
                if (!item.disabled) {
                    item.selected = checked;
                }
            });
        });
        this.updater.digest({
            parents: parents
        });
    },
    '@{check}<change>': function (e) {
        var parentIndex = e.params.parentIndex, itemIndex = e.params.itemIndex;
        var parents = this.updater.get('parents');
        parents[parentIndex].list[itemIndex].selected = !parents[parentIndex].list[itemIndex].selected;
        this.updater.digest({
            parents: parents
        });
    },
    /**
     * 批量，确定
     */
    '@{submit}<click>': function (e) {
        var me = this;
        var viewOptions = me.viewOptions;
        var _a = me.updater.get(), parents = _a.parents, keyword = _a.keyword;
        var selectedItems = [];
        parents.forEach(function (parent) {
            parent.list.forEach(function (item) {
                if (item.selected) {
                    selectedItems.push(item);
                }
            });
        });
        if (viewOptions.submit) {
            viewOptions.submit({
                keyword: keyword,
                selectedItems: selectedItems
            });
        }
    },
    /**
     * 批量，取消
     */
    '@{cancel}<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.cancel) {
            viewOptions.cancel();
        }
    },
    '@{fn.search}': function (val, callback) {
        var me = this;
        var data = me.updater.get();
        var parents = data.parents;
        var allHide;
        if (!val) {
            allHide = false;
            parents.forEach(function (parent) {
                parent.hide = false;
                parent.list.forEach(function (item) {
                    item.hide = false;
                });
            });
        }
        else {
            allHide = true;
            var lowVal_1 = (val + '').toLocaleLowerCase();
            parents.forEach(function (parent) {
                var groupHide = true;
                parent.list.forEach(function (item) {
                    var lowText = (item.text + '').toLocaleLowerCase();
                    item.hide = (lowText.indexOf(lowVal_1) < 0);
                    groupHide = groupHide && item.hide;
                });
                parent.hide = groupHide;
                allHide = allHide && groupHide;
            });
        }
        callback({
            parents: parents,
            allHide: allHide
        });
    },
    '@{search}<keyup,paste>': function (e) {
        var me = this;
        clearTimeout(me['@{search.delay.timer}']);
        var val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, function (result) {
                    me.updater.digest(result);
                });
            }
        }), 250);
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});