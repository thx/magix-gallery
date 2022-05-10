let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@71.html',
    render() {
        this.updater.digest({
            list: [{
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                title: '左上角图片打标',
                tip: '图片左上角，上距离16px，左距离24px展示打标图片，图片高度20px，宽度自适应',
                imgTag: 'https://img.alicdn.com/tfs/TB1kkbEdoT1gK0jSZFrXXcNCXXa-100-34.png',
            }, {
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                title: '左上角文案打标',
                tip: '图片左上角，上距离16px，左距离24px使用打标组件展示打标文案',
                imgTagText: 'ISSUE 01',
            }, {
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                title: '标题右侧图片打标',
                tip: '标题右侧展示打标图片，图片高度为20px，宽度自适应，垂直居中对齐',
                titleTag: 'https://img.alicdn.com/imgextra/i4/O1CN01SnHiJl1gHAxmqaEOk_!!6000000004116-2-tps-140-40.png',
            }, {
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                title: '标题右侧文案打标',
                tip: '标题右侧使用打标组件展示打标文案，宽度自适应，垂直居中对齐',
                titleTagText: 'ISSUE 01',
            }, {
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                title: '左上角纯自定义打标图片',
                tip: '图片左上角（0,0）处展示打标内容，支持代码片段，完全自定义，宽高均不限制',
                leftTagHtml: '<img width="68" src="https://img.alicdn.com/imgextra/i4/O1CN01DQ1g3t1rfs4Y7c0Mb_!!6000000005659-2-tps-130-46.png" />',
            }, {
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                title: '右上角纯自定义打标图片',
                tip: '图片右上角（0,0）处展示打标内容，支持代码片段，完全自定义，宽高均不限制',
                rightTagHtml: '<img width="56" src="https://img.alicdn.com/imgextra/i3/O1CN01Jof61J1ajDVsfvhqm_!!6000000003365-2-tps-101-114.png" />',
            }],
            viewId: this.id
        });
    }
});