let Magix = require('magix');
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@content.html',
    init(e) {
        this.viewOptions = e;

        let data = e.data;
        let parents = $.extend(true, [], data.parents);
        let selectedValues = (data.selectedItems || []).map(item => {
            return (item.value + '');
        })
        parents.forEach(parent => {
            parent.list.forEach(item => {
                item.selected = (selectedValues.indexOf(item.value + '') > -1);
            })
        })
        this.updater.set({
            parents,
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
        })
    },
    render() {
        let me = this;
        let keyword = me.updater.get('keyword');
        me['@{fn.search}'](me['@{last.value}'] = keyword, (result) => {
            me.updater.digest(result);
        });
    },
    /**
     * 单选
     */
    '@{select}<click>'(e) {
        let me = this;
        let viewOptions = me.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit({
                keyword: me.updater.get('keyword'),
                selectedItems: [e.params.item]
            });
        }
    },

    '@{checkAll}<click>'(e) {
        let checked = e.params.checked;

        let parents = this.updater.get('parents');
        parents.forEach(parent => {
            parent.list.forEach(item => {
                if(!item.disabled){
                    item.selected = checked;
                }
            })
        })
        this.updater.digest({
            parents
        })
    },

    '@{check}<change>'(e) {
        let parentIndex = e.params.parentIndex,
            itemIndex = e.params.itemIndex;
        let parents = this.updater.get('parents');
        parents[parentIndex].list[itemIndex].selected = !parents[parentIndex].list[itemIndex].selected;
        this.updater.digest({
            parents
        })
    },

    /**
     * 批量，确定
     */
    '@{submit}<click>'(e) {
        let me = this;
        let viewOptions = me.viewOptions;

        let { parents, keyword } = me.updater.get();
        let selectedItems = [];
        parents.forEach(parent => {
            parent.list.forEach(item => {
                if (item.selected) {
                    selectedItems.push(item);
                }
            })
        })
        if (viewOptions.submit) {
            viewOptions.submit({
                keyword,
                selectedItems
            });
        }
    },

    /**
     * 批量，取消
     */
    '@{cancel}<click>'(e) {
        let viewOptions = this.viewOptions;
        if (viewOptions.cancel) {
            viewOptions.cancel();
        }
    },

    '@{fn.search}'(val, callback) {
        let me = this;
        let data = me.updater.get();
        let parents = data.parents;

        let allHide;
        if (!val) {
            allHide = false;
            parents.forEach(parent => {
                parent.hide = false;
                parent.list.forEach(item => {
                    item.hide = false;
                })
            })
        } else {
            allHide = true;
            let lowVal = (val + '').toLocaleLowerCase();
            parents.forEach(parent => {
                let groupHide = true;
                parent.list.forEach(item => {
                    let lowText = (item.text + '').toLocaleLowerCase();
                    item.hide = (lowText.indexOf(lowVal) < 0);
                    groupHide = groupHide && item.hide;
                })
                parent.hide = groupHide;
                allHide = allHide && groupHide;
            })
        }

        callback({
            parents,
            allHide
        });
    },

    '@{search}<keyup,paste>'(e) {
        let me = this;
        clearTimeout(me['@{search.delay.timer}']);
        let val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, (result) => {
                    me.updater.digest(result);
                });
            }
        }), 250);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});