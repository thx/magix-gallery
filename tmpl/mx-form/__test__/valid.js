/**
 *  this.isValid({
 *      // 1. 默认null，整个view校验
 *      // 2. 传入element的时候
 *      //    2.1 如果element本身有校验，则只校验该节点
 *      //    2.2 如果element本身无校验，则找该节点下所有的校验项去校验
 *      // 直接选择器
 *      sizzle: null, 
 *      // 历史配置兼容
 *      // 1. 传入字符串，默认为id（这时候传入选择器会判断失误）
 *      // 2. #id，.class格式
 *      // 3. dom
 *      element: null,

 *      // 校验有错误的情况下是否要滚动到错误节点，默认true
 *      scrollIntoView: true,

 *      //是否调用子view校验，children.isValid，默认true
 *      checkSubs: true
 *  })
 */
let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@valid.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});