let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@update.less');

module.exports = Magix.View.extend({
    tmpl: '@update.html',
    render() {
        let list = [{
            ver: '1.2.2',
            time: '2018-12-21',
            subs: [{
                type: 'add',
                subs: [{
                    title: '全屏右出浮层，<a href="#!/dialog/modal" class="color-brand">查看详情</a>'
                }, {
                    title: '布局组件，<a href="#!/grid/index" class="color-brand">查看详情</a>'
                }, {
                    title: 'mx-taginput增加配置max，可限制选择个数上限'
                }]
            }, {
                type: 'notice',
                title: '全新视觉规范，组件相关调整平滑升级',
                subs: [{
                    title: '默认按钮样式提取为变量，可在项目中覆盖配置 @btn-text，@btn-text-hover，@btn-border，@btn-border-hover，@btn-bg，@btn-bg-hover'
                },{
                    title: '指标默认配置及选择排序（mx-indics）浮层改成全屏右出，<a href="#!/indics/index" class="color-brand">查看详情</a>'
                }, {
                    title: '开关（mx-switch）增加文字显示版，<a href="#!/switch/index" class="color-brand">查看详情</a>'
                }, {
                    title: '盒状分组（mx-tabs.box）增加空心显示显示版，<a href="#!/tabs/box" class="color-brand">查看详情</a>'
                }]
            }]
        }, {
            ver: '1.2.1',
            time: '2018-12-06',
            subs: [{
                type: 'add', // add or bug or notice
                title: '功能全概览',
                subs: [{
                    title: '表单',
                    subs: [
                        '双向绑定',
                        '丰富的校验类型：必填，checkbox，radio，dropdown必选，refresh，动态添加，正则，字个数，字符个数，数字，数字范围，节点不重复，节点一致等等',
                        '支持警告类提示场景'
                    ]
                }, {
                    title: '表格',
                    subs: [
                        '支持左右分栏，操作项分行，大数据量下依然保持页面简介明了',
                        '表头可相对任意容器吸顶',
                        '覆盖了常见的批量选中操作行，排序功能',
                        '支持普通翻页查看大量数据'
                    ]
                }, {
                    title: 'dropdown：单选多选自由切换，多选可限制选择上限'
                }, {
                    title: '日历',
                    subs: [
                        '单日，单日对比，可细节到时分秒',
                        '时间段，可细节到时分秒'
                    ]
                }, {
                    title: '分页：快捷切换分页数，页面；可限制为顺序翻页'
                }, {
                    title: '分组',
                    subs: [
                        '盒状分组，常适用于页面筛选',
                        '底边线分组，常适用于一级分组标题'
                    ]
                }, {
                    title: '内容区域可编辑：支持自定义模板，各种检验轻松加'
                }, {
                    title: '快捷搜索',
                    subs: [
                        '单类型搜索，多类型搜索均支持',
                        '单选，多选自由选中',
                        '动态加载可搜索内容'
                    ]
                }, {
                    title: '开关'
                }, {
                    title: '树形结构',
                    subs: [
                        '支持级联显示再单选',
                        '平铺单选多选任意挑',
                        '内容过长时可展开收起',
                        '只读'
                    ]
                }, {
                    title: '标签选择'
                }, {
                    title: '更多菜单：hover展示，点击展示，右键显示任意选'
                }, {
                    title: '滑块选择：单值或者范围'
                }, {
                    title: '指标默认配置及选择排序'
                }, {
                    title: '状态切换与显示：支持icon或者dropdown两种形式'
                }, {
                    title: '多样提示反馈：二次确认，hover小提示框，loading；对接集团钉钉，旺旺，万象等等'
                }, {
                    title: '缩略图和预览：支持图片，视频，html，文件等多种形式，实现懒加载，优化性能'
                }, {
                    title: '分步流程：侧边导航，顶部导航，将复杂流程简单化'
                }, {
                    title: '常用样式：打标，提示公告，评分，空状态，进度比例，各种动效等等'
                }, {
                    title: '业务组件：',
                    subs: [
                        '阿里妈妈通用吊顶，吊底',
                        '地域选择',
                        '时段选择'
                    ]
                }]
            }]
        }]
        this.updater.digest({
            list
        });
    }
});