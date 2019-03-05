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
            keyword: (data.keyword || ''),
            text: {
                search: I18n['dropdown.search'],
                select: I18n['select.all'],
                unselect: I18n['unselect.all'],
                submit: I18n['dialog.submit'],
                cancel: I18n['dialog.cancel']
            }
        })
    },
    render() {
        let me = this;
        let keyword = me.updater.get('keyword');
        me['@{fn.search}'](me['@{last.value}'] = keyword, (parents) => {
            me.updater.digest({
                parents
            });
        });
    },
    /**
     * 单选
     */
    '@{select}<click>'(e) {
        let me = this;
        let viewOptions = me.viewOptions;
        if(viewOptions.submit){
            viewOptions.submit({
                keyword: me.updater.get('keyword'),
                selectedItems: [e.params.item]
            });
        }
    },

    /**
     * 批量，确定
     */
    '@{submit}<click>'(e) {
        let me = this;
        let viewOptions = me.viewOptions;
        if(viewOptions.submit){
            viewOptions.submit({
                keyword: me.updater.get('keyword'),
                selectedItems: []
            });
        }
    },

    /**
     * 批量，取消
     */
    '@{cancel}<click>'(e){
        let viewOptions = this.viewOptions;
        if(viewOptions.cancel){
            viewOptions.cancel();
        }
    },

    '@{fn.search}'(val, callback) {
        let me = this;
        let data = me.updater.get();
        let parents = data.parents;

        if (!val) {
            parents.forEach(group => {
                group.hide = false;
                group.list.forEach(item => {
                    item.hide = false;
                })
            })
        }else{
            let lowVal = (val + '').toLocaleLowerCase();
            parents.forEach(group => {
                let allHide = true;
                group.list.forEach(item => {
                    let lowText = (item.text + '').toLocaleLowerCase();
                    item.hide = (lowText.indexOf(lowVal) < 0);
                    allHide = allHide && item.hide;
                })
                group.hide = allHide;
            })
        }

        callback(parents);
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
                me['@{fn.search}'](me['@{last.value}'] = val, (parents) => {
                    me.updater.digest({
                        parents
                    });
                });
            }
        }), 300);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});