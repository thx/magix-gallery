let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@empty.html',
    init(e){
        let white = (e.bg === 'white');
        this.updater.set({
            white,
            content: e.content || '暂无内容'
        });
    },
    render() {
        this.updater.digest();
    }
});