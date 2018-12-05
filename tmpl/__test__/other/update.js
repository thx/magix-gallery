let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@update.less');

module.exports = Magix.View.extend({
    tmpl: '@update.html',
    render() {
        let list = [{
            ver: '3.10.8',
            time: '2018-21-12',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'Avatar 组件增加',
                    subs: [
                        'Avatar 组件增加',
                        'Avatar 组件增加',
                        'Avatar 组件增加'
                    ]
                }, {
                    title: 'Avatar 组件增加'
                }, {
                    title: 'Avatar 组件增加'
                }]
            }, {
                type: 'add',
                subs: [{
                    title: 'Avatar 组件增加',
                    subs: [
                        'Avatar 组件增加',
                        'Avatar 组件增加',
                        'Avatar 组件增加'
                    ]
                }, {
                    title: 'Avatar 组件增加',
                    subs: [
                        'Avatar 组件增加',
                        'Avatar 组件增加',
                        'Avatar 组件增加'
                    ]
                }]
            }]
        }]
        this.updater.digest({
            list
        });
    }
});