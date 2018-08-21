let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@cross.html',
    render() {
        let content = [
            '1. 使用magix提供的vframe功能，允许项目间类似iframe那样引用对方的view。',
            '2. 可将复杂的项目进行拆分成n个子项目进行维护。',
            '3. 被加载项目使用加载项目的组件及品牌色。'
        ].join('<br/>');
        this.updater.digest({
            content
        });
    }
});