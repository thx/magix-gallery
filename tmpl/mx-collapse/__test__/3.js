let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        let that = this;
        let list = [{
            title: '笑一笑，十年少',
            content: '1、岁月磨平了你的棱角，其实就是你被生活盘了。<br/>2、你不是真的胖，只是女娲捏土造你的时候土用多了。<br/>3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。'
        }, {
            expand: true,
            title: '是幽默的深刻，还是深刻的幽默',
            view: '@./content'
        }, {
            title: '冷段一组，凉意浓',
            content: '1、过夜的叫酒店，喝酒的却叫夜店。<br/>2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。<br/>3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。'
        }]
        that.updater.digest({
            list
        });
    }
});