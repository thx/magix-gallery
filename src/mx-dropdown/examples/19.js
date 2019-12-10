let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@19.html',
    render() {
        this.updater.digest();
    },
    'change<change>'(event){
        // event.value：string
        // event.text：string
        // event.values：array
        // event.texts：array
        // event.selected：string|array（初始化selected为什么类型就是什么，默认string）
    }
});