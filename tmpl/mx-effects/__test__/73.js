let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@73.html',
    render() {
        this.updater.digest({
            list: [
                { type: 'success-zan', content: '创建成功' },
                { type: 'success-ok', content: '创建成功' },
                { type: 'success-highfive', content: '达成合作' },
                { type: 'success-shakehands', content: '创建成功' },
                { type: 'success-cheer', content: '达成合作' },
                { type: 'success-cooperation', content: '开始推广' },
                { type: 'success-trumpet', content: '创建成功' },
                { type: 'error-permission', content: '无权限访问' },
                { type: 'error-disconnect', content: '已断开链接' },
                { type: 'error-load', content: '加载失败' },
                { type: 'error-empty', content: '暂无数据' },
                { type: 'error-todo', content: '功能建设中' }
            ],
            btns: [{
                text: '主要按钮',
                mode: 'primary',
                link: 'https://www.tmall.com/',
                outer: true
            }]
        });
    }
});