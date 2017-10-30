/*
ver:1.3.4
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@scoped.style');
Magix.applyStyle('@all.scss');
module.exports = Magix.View.extend({
    tmpl: '@all.html',
    init() {
        this.observeLocation({
            path: true
        });
        this.owner.on('created', () => {
            $('pre').each((i, it) => {
                if (!it.rendered) {
                    it.rendered = true;
                    hljs.highlightBlock(it);
                }
            });
        });
    },
    render() {
        let me = this;
        let loc = Magix.Router.parse();
        let view = loc.path;
        view = view.slice(1);
        if (view == 'list') {
            view = '__test__/list';
        } else {
            let i = view.indexOf('/');
            view = view.slice(0, i) + '/__test__' + view.slice(i);
        }
        me.updater.digest({
            view: view
        });
    }
});
'@./list.js';
'@../mx-calendar/__test__/index.js';
'@../mx-calendar/__test__/datepicker.js';
'@../mx-calendar/__test__/rangepicker.js';
'@../mx-checkbox/__test__/linkage.js';
'@../mx-checkbox/__test__/storestate.js';
'@../mx-color/__test__/index.js';
'@../mx-copy/__test__/index.js';
'@../mx-dragselect/__test__/index.js';
'@../mx-dragsort/__test__/index.js';
'@../mx-day/__test__/index.js';
'@../mx-dialog/__test__/index.js';
'@../mx-dropdown/__test__/index.js';
'@../mx-effect/__test__/index.js';
'@../mx-form/__test__/index.js';
'@../mx-form/__test__/sub.js';
'@../mx-form/__test__/sub1.js';
'@../mx-gtip/__test__/index.js';
'@../mx-linkage/__test__/index.js';
'@../mx-loading/__test__/mask.js';
'@../mx-menu/__test__/index.js';
'@../mx-hour/__test__/index.js';
'@../mx-number/__test__/index.js';
'@../mx-pagination/__test__/index.js';
'@../mx-popconfirm/__test__/index.js';
'@../mx-popmenu/__test__/index.js';
'@../mx-popover/__test__/index.js';
'@../mx-progress/__test__/index.js';
'@../mx-slider/__test__/index.js';
'@../mx-slider/__test__/range.js';
'@../mx-suggest/__test__/index.js';
'@../mx-table/__test__/index.js';
'@../mx-taginput/__test__/index.js';
'@../mx-time/__test__/index.js';
'@../mx-time/__test__/picker.js';
'@../mx-tree/__test__/index.js';
'@../mx-uploader/__test__/index.js';