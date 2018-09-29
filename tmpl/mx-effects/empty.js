let Magix = require('magix');
let Base = require('./base');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@empty.html',
    init(e){
        let white = (e.bg === 'white');
        this.updater.set({
            white,
            content: e.content || '暂无内容'
        });
    }
});