/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/index",[],(require,exports,module)=>{
/**/

// let Magix = require('magix');
// let $ = require('$');
// Magix.applyStyle('@index.less');
// module.exports = Magix.View.extend({
//     tmpl: '@index.html',
//     init(e) {
//         this.updater.set({
//             selectedKeys: e.selected,
//             isDefault: this.isDefault(e.selected || [])
//         })
//         this.viewOptions = e;
//     },
//     render() {
//         this.updater.digest();
//     },
//     isDefault(selectedKeys) {
//         let defaults = Fields.getDefaults();
//         let isDefault = (selectedKeys.length == defaults.length);
//         if (isDefault) {
//             isDefault = defaults.some(item => {
//                 return $.inArray(item.key, selectedKeys) > -1;
//             })
//         }
//         return isDefault;
//     },
//     'toggleDefault<click>' (e) {
//         let that = this;
//         let isDefault = e.params.isDefault;
//         let pageKey = that.viewOptions.pageKey;
//         let selectedKeys = [];
//         if (isDefault) {
//             // 切换为自定义
//             selectedKeys = Fields.getMemberConfig(pageKey);
//         } else {
//             // 切换为默认值
//             selectedKeys = Fields.getDefaultKeys();
//         }
//         // 保存用户设置
//         if (pageKey) {
//             Fields.setMemberConfig(pageKey, selectedKeys);
//         }
//         $('#' + that.id).trigger({
//             type: 'change',
//             selected: selectedKeys
//         });
//         that.updater.set({
//             selectedKeys: selectedKeys,
//             isDefault: !isDefault
//         }).digest();
//     },
//     'show<click>' (e) {
//         e.preventDefault();
//         let that = this;
//         let selectedKeys = that.updater.get('selectedKeys');
//         let viewOptions = this.viewOptions;
//         let sortable = (/^true$/i).test(viewOptions.sortable);
//         let gap = sortable ? 3 : 2;
//         let dialogOptions = {
//             width: 220 * gap,
//             height: 612,
//             closable: false,
//             modal: true
//         };
//         that.mxDialog('@../report/setting-dialog', {
//             selected: selectedKeys,
//             pageKey: viewOptions.pageKey,
//             limit: viewOptions.limit || 0,
//             sortable: sortable,
//             callback: (newSelectedKeys) => {
//                 that.updater.set({
//                     selectedKeys: newSelectedKeys,
//                     isDefault: that.isDefault(newSelectedKeys)
//                 }).digest();
//                 $('#' + that.id).trigger({
//                     type: 'change',
//                     selected: newSelectedKeys
//                 });
//             }
//         }, dialogOptions);
//     }
// });

});