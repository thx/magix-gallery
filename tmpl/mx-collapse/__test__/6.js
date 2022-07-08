let Magix = require('magix');
let Base = require('__test__/example');
let Dialog = require('@../../mx-dialog/index');

module.exports = Base.extend({
    tmpl: '@6.html',
    mixins: [Dialog],
    render() {
        this.updater.digest({
            list: [{
                expand: true,
                title: '笑一笑，十年少',
                content: '1、岁月磨平了你的棱角，其实就是你被生活盘了。<br/>2、你不是真的胖，只是女娲捏土造你的时候土用多了。<br/>3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。',
                opers: [{
                    text: '删除',
                    value: 'delete'
                }, {
                    text: '编辑',
                    value: 'edit'
                }]
            }, {
                title: '是幽默的深刻，还是深刻的幽默',
                content: '1、人生，总有不得不走的回头路：比如出门上班走到楼下才发现没带手机。<br/>2、为什么经常看见妻子吊打小三，却很少看见丈夫痛殴奸夫？因为小三一般比妻子瘦弱，而奸夫一般比较丈夫健硕。<br/>3、怕开宝马的同学认出没戴头盔骑摩托车的你，真的想多了。人家工作、购物、居注娱乐去的地方，走的是和你一条线吗？',
                opers: [{
                    text: '<i class="mc-iconfont color-6 color-h-3">&#xe731;</i>',
                    value: 'delete'
                }]
            }, {
                title: '冷段一组，凉意浓',
                content: '1、过夜的叫酒店，喝酒的却叫夜店。<br/>2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。<br/>3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。'
            }],
            expands: []
        });
    },
    'change<change>'(event) {
        this.updater.digest({
            expands: event.expands
        })
    },
    'edit<edit>'(event) {
        let { item, operationItem } = event;
        this.alert('提示', `
            <div class="mb16">操作行：${item.title}</div>
            <div>操作功能点：${operationItem.text}</div>
        `);
    }
});