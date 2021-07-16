let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@global.style');
Magix.applyStyle('@scoped.style');
Magix.applyStyle('@base.less');

module.exports = Magix.View.extend({
    tmpl: '@base.html',
    init() {
        this.observeLocation({
            path: true
        });

        this.$map = {};
    },
    render() {
        $(window).scrollTop(0);
        let that = this;
        let updater = that.updater;

        // 当前路径
        let loc = Magix.Router.parse();
        let path = loc.path;
        let headers = [{
            id: 'gallery',
            name: '组件',
            path: '/input/index',
            paths: [{
                subs: [{
                    name: '更新记录',
                    path: '/all/update'
                }]
            }, {
                name: '基础规范',
                subs: [{
                    name: '双向绑定约定',
                    tip: '下述详细说明如何写一个支持多参数且数据双向绑定的组件',
                    path: '/all/bind',
                    icon: '&#xe6d1;'
                }, {
                    name: '_config说明',
                    path: '/all/config',
                    icon: '&#xe64f;'
                }, {
                    name: '相关文档链接',
                    path: '/all/links',
                    icon: '&#xe60d;'
                }]
                // {
                //     name: '关于兼容性',
                //     path: '/all/compatibility',
                //     icon: '&#xe9e5;'
                // }
            }, {
                name: '基础元素及布局',
                subs: [{
                    name: '输入框',
                    prefix: 'mx-input',
                    tip: '包装input，处理动效样式及输入提示',
                    path: '/input/index',
                    icon: '&#xe642;'
                }, {
                    name: '复选框',
                    prefix: 'mx-checkbox',
                    tip: '包装indeterminate状态；支持级联选择功能',
                    path: '/checkbox/index',
                    icon: '&#xe63f;'
                }, {
                    name: '单选框',
                    prefix: 'mx-radio',
                    tip: '包含卡片样式的radio选择框',
                    path: '/radio/index',
                    icon: '&#xe657;'
                }, {
                    name: '按钮',
                    prefix: 'mx-btn',
                    tip: '点击查看<a rel="noopener noreferrer" target="_blank" href="https://done.alibaba-inc.com/file/BfeHD00VvQXv/ROf2KIXCwf3UfVd6/preview?aid=0F362069-A45F-4B3E-AB2B-F4B17371AE14" class="color-brand">按钮交互规范</a>',
                    path: '/btn/index',
                    icon: '&#xe691;'
                }, {
                    name: '布局',
                    prefix: 'mx-grid 布局',
                    tip: '基于display:flex实现，简化api',
                    path: '/grid/index',
                    icon: '&#xe6b4;'
                }, {
                    name: 'trigger + 展开项',
                    tip: '使用组件内置class实现一个类似于dropdown，下拉框内容自定义的模块',
                    path: '/style/trigger',
                    icon: '&#xeb94;'
                }]
            }, {
                name: 'mx-form 表单（mixins）',
                subs: [{
                    name: '支持的校验项',
                    path: '/form/mixins',
                    icon: '&#xe64e;'
                }, {
                    name: 'view挂载isValid',
                    path: '/form/valid',
                    icon: '&#xe621;'
                }, {
                    name: '双向绑定 + 校验',
                    path: '/form/index',
                    icon: '&#xe60d;'
                }, {
                    name: '警告类校验场景',
                    path: '/form/warn',
                    icon: '&#xe656;'
                }, {
                    name: '表单样式',
                    path: '/form/style',
                    icon: '&#xe62c;'
                }]
            }, {
                name: 'mx-stickytable 表格',
                subs: [{
                    name: '使用注意点及API',
                    path: '/stickytable/desc',
                    icon: '&#xe64f;'
                }, {
                    name: '表头文案及分组',
                    path: '/stickytable/thead-group',
                    icon: '&#xe62a;'
                }, {
                    name: '表格左右分栏',
                    path: '/stickytable/left-right-sticky',
                    icon: '&#xe693;'
                }, {
                    name: '自由列宽',
                    path: '/stickytable/drag',
                    icon: '&#xe64d;'
                }, {
                    name: '表头吸顶',
                    path: '/stickytable/sticky',
                    icon: '&#xe641;'
                }, {
                    name: '联动筛选项吸顶',
                    path: '/stickytable/filter-sticky',
                    icon: '&#xe7a4;'
                }, {
                    name: '同行操作项',
                    path: '/stickytable/oper-items',
                    icon: '&#xe7b5;'
                }, {
                    name: '分行操作项',
                    path: '/stickytable/oper-lines',
                    icon: '&#xe7b5;'
                }, {
                    name: 'checkbox联动选择',
                    path: '/stickytable/checkbox',
                    icon: '&#xe63f;'
                }, {
                    name: '表格指标排序',
                    path: '/stickytable/sort',
                    icon: '&#xe6cc;'
                }, {
                    name: '展开子行',
                    path: '/stickytable/sub',
                    icon: '&#xeb73;'
                }, {
                    name: '子表格嵌套',
                    path: '/stickytable/sub-table',
                    icon: '&#xe64f;'
                }, {
                    name: '表格空状态',
                    path: '/stickytable/empty',
                    icon: '&#xe685;'
                }, {
                    name: '刷新loading场景',
                    path: '/stickytable/loading',
                    icon: '&#xe6ab;'
                }, {
                    name: '普通table样式',
                    path: '/stickytable/style',
                    icon: '&#xe63e;'
                }, {
                    name: '异常情况问题自查',
                    path: '/stickytable/error',
                    icon: '&#xe611;'
                }]
            },
            {
                name: '数据交互',
                subs: [
                    // {
                    //     name: '下拉框（单选）',
                    //     prefix: 'mx-dropdown',
                    //     tip: '支持click展开和hover展开两种形式；<span class="color-brand">下拉列表在组件内；</span>支持双向绑定',
                    //     path: '/dropdown/index',
                    //     icon: '&#xe7a4;'
                    // }, {
                    //     name: '下拉框（多选）',
                    //     prefix: 'mx-dropdown.multiple',
                    //     tip: '支持click展开和hover展开两种形式；<span class="color-brand">下拉列表在组件内；</span>支持双向绑定',
                    //     path: '/dropdown/multiple',
                    //     icon: '&#xe7a4;'
                    // },
                    {
                        name: '下拉框（追加到body版）',
                        prefix: 'mx-dropdown.bd',
                        tip: '支持click展开和hover展开两种形式；<span class="color-brand">下拉列表追加到body；</span>支持双向绑定',
                        path: '/dropdown/bd',
                        icon: '&#xe7a4;'
                    }, {
                        name: '日历（选择单日）',
                        prefix: 'mx-calendar.datepicker',
                        tip: '支持双向绑定',
                        path: '/calendar/index',
                        icon: '&#xe60e;'
                    }, {
                        name: '日历（选择时间段）',
                        prefix: 'mx-calendar.rangepicker',
                        tip: '支持双向绑定',
                        path: '/calendar/range',
                        icon: '&#xe60e;'
                    }, {
                        name: '时分秒选择',
                        prefix: 'mx-time',
                        tip: '支持双向绑定',
                        path: '/time/index',
                        icon: '&#xe604;'
                    }, {
                        name: '分页',
                        prefix: 'mx-pagination',
                        path: '/pagination/index',
                        icon: '&#xe61a;'
                    }, {
                        name: '底边线tab切换',
                        prefix: 'mx-tabs',
                        tip: '一般适用于一级导航，支持双向绑定',
                        path: '/tabs/index',
                        icon: '&#xe62a;'
                    }, {
                        name: '盒状分组',
                        prefix: 'mx-tabs.box',
                        tip: '一般适用于快捷筛选，支持双向绑定',
                        path: '/tabs/box',
                        icon: '&#xe62a;'
                    }, {
                        name: '各种样式tab组件',
                        tip: '竖版tab组件，时间轴tab组件',
                        path: '/tabs/style',
                        icon: '&#xe62a;'
                    }, {
                        name: 'tab切换锚点工具',
                        prefix: 'mx-tabs.anchor',
                        tip: '一般适用于一级导航，支持双向绑定，点击tab锚点到对应的模块',
                        path: '/tabs/anchor',
                        icon: '&#xe62e;'
                    }, {
                        name: '可编辑内容',
                        prefix: 'mx-editor',
                        tip: 'hover显示编辑按钮',
                        path: '/editor/index',
                        icon: '&#xe698;'
                    }, {
                        name: '搜索',
                        prefix: 'mx-search',
                        tip: '支持选择类型搜索和普通搜索',
                        path: '/search/index',
                        icon: '&#xe651;'
                    }, {
                        name: '可选项提示suggest',
                        prefix: 'mx-suggest',
                        tip: '支持双向绑定',
                        path: '/suggest/index',
                        icon: '&#xe654;'
                    }, {
                        name: '开关',
                        prefix: 'mx-switch',
                        tip: '支持双向绑定',
                        path: '/switch/index',
                        icon: '&#xe72c;'
                    }, {
                        name: '树状结构',
                        prefix: 'mx-tree',
                        tip: '支持双向绑定，实现为dom操作',
                        path: '/tree/index',
                        icon: '&#xe62b;'
                    }, {
                        name: '树状结构',
                        prefix: 'mx-tree.data',
                        tip: '支持双向绑定，数据驱动版本',
                        path: '/tree/data',
                        icon: '&#xe62b;'
                    }, {
                        name: '级联选择',
                        prefix: 'mx-cascade',
                        tip: '支持双向绑定',
                        path: '/cascade/index',
                        icon: '&#xe60a;'
                    }, {
                        name: '级联卡片选择',
                        prefix: 'mx-cascade.card',
                        tip: '除展现样式外，其余同mx-cascade',
                        path: '/cascade/card',
                        icon: '&#xe60a;'
                    }, {
                        name: '标签选择',
                        prefix: 'mx-taginput',
                        tip: '支持双向绑定',
                        path: '/taginput/index',
                        icon: '&#xe794;'
                    }, {
                        name: '更多菜单选择',
                        prefix: 'mx-popmenu',
                        path: '/popmenu/index',
                        icon: '&#xe62c;'
                    }, {
                        name: '上传',
                        prefix: 'mx-uploader',
                        path: '/uploader/index',
                        icon: '&#xe63c;'
                    }, {
                        name: '二级列表单选',
                        prefix: 'mx-secradio',
                        path: '/secradio/index',
                        icon: '&#xe657;'
                    }, {
                        name: '单个滑块',
                        prefix: 'mx-slider',
                        path: '/slider/index',
                        icon: '&#xe664;'
                    }, {
                        name: '滑块选择范围',
                        prefix: 'mx-slider.range',
                        path: '/slider/range',
                        icon: '&#xe664;'
                    }, {
                        name: '指标默认配置及选择排序',
                        prefix: 'mx-indics',
                        path: '/indics/index',
                        icon: '&#xe731;'
                    }, {
                        name: '拖动排序',
                        prefix: 'mx-dragsort',
                        path: '/dragsort/index',
                        icon: '&#xe64d;'
                    }, {
                        name: '复制',
                        prefix: 'mx-copy',
                        tip: '该组件引入了第三方 <a rel="noopener noreferrer" target="_blank" href="https://clipboardjs.com/" class="color-brand">https://clipboardjs.com/</a> 代码',
                        path: '/copy/index',
                        icon: '&#xe610;'
                    }, {
                        name: '颜色选择',
                        prefix: 'mx-color.picker',
                        path: '/color/index',
                        icon: '&#xe720;'
                    }]
            }, {
                name: '提示反馈',
                subs: [{
                    name: '气泡提示',
                    prefix: 'mx-popover',
                    tip: '默认使用span标签生成，可自定义tag',
                    path: '/popover/index',
                    icon: '&#xe654;'
                }, {
                    name: '气泡确认框',
                    prefix: 'mx-popconfirm',
                    tip: '点击出确认浮层',
                    path: '/popconfirm/index',
                    icon: '&#xe7ff;'
                }, {
                    name: 'loading加载',
                    prefix: 'mx-loading',
                    path: '/loading/index',
                    icon: '&#xe6ab;'
                }, {
                    name: '全局提示',
                    prefix: 'mx-gtip',
                    path: '/gtip/index',
                    icon: '&#xe662;'
                }, {
                    name: '异常页面',
                    prefix: 'mx-error',
                    tip: '各种异常情况提示页面（包含empty空状态，no-access无权限等场景）',
                    path: '/error/index',
                    icon: '&#xe611;'
                },
                // {
                //     name: '空状态',
                //     prefix: 'mx-effects.empty',
                //     tip: '404找不到页面',
                //     path: '/effects/empty',
                //     icon: '&#xe611;'
                // }, 
                {
                    name: '打标',
                    prefix: 'mx-effects.icon',
                    path: '/effects/icon',
                    icon: '&#xe600;'
                }, {
                    name: '提示公告',
                    prefix: 'mx-effects.notice',
                    path: '/effects/notice',
                    icon: '&#xe662;'
                }, {
                    name: 'feedback',
                    prefix: 'mx-feedback',
                    tip: '<a class="mr20 color-brand" href="https://yuque.antfin-inc.com/uxradar/openapi/idgcdi" target="_blank"  rel="noopener noreferrer">UX Radar接入文档</a><a class="color-brand" href="https://uxradar.alibaba-inc.com/" target="_blank"  rel="noopener noreferrer">UX Radar官网</a>',
                    path: '/feedback/index',
                    icon: '&#xe613;'
                }, {
                    name: '老版万象客服问答',
                    prefix: 'mx-wanxiang',
                    tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/wanxiang/technology/description" target="_blank"  rel="noopener noreferrer">服务窗接入wiki文档</a>',
                    path: '/wanxiang/index',
                    icon: '&#xe767;'
                }, {
                    name: '新版万象客服问答',
                    prefix: 'mx-im.wx',
                    tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/nue/everywhere/gdb60g" target="_blank"  rel="noopener noreferrer">服务窗接入wiki文档</a>',
                    path: '/im/wanxiang',
                    icon: '&#xe767;'
                }, {
                    name: '阿里小蜜',
                    prefix: 'mx-im.alime',
                    tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto" target="_blank"  rel="noopener noreferrer">接入手册</a>',
                    path: '/im/alime',
                    icon: '&#xe647;'
                }, {
                    name: '钉钉唤起',
                    prefix: 'mx-im.dd',
                    tip: '<a class="color-brand" href="https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7386797.0.0.WN76gC&treeId=176&articleId=106086&docType=1" target="_blank"  rel="noopener noreferrer">钉钉PC端统一跳转协议</a>',
                    path: '/im/dingding',
                    icon: '&#xe677;'
                }, {
                    name: '旺旺点灯',
                    prefix: 'mx-im.ww',
                    tip: '<a class="color-brand" href="http://gitlab.alibaba-inc.com/aliww/web.ww" target="_blank"  rel="noopener noreferrer">接入说明</a>',
                    path: '/im/wangwang',
                    icon: '&#xe75c;'
                }, {
                    name: '浏览器兼容提示',
                    path: '/effects/ua',
                    icon: '&#xe631;'
                }]
            }, {
                name: '数据展示',
                subs: [{
                    name: '图表',
                    prefix: 'mx-chart',
                    tip: 'chartpark图表使用示例',
                    path: '/chart/index',
                    icon: '&#xe670;'
                }, {
                    name: '浮层',
                    prefix: 'mx-dialog',
                    tip: 'Magix.View上挂载mxDialog（新开浮层），alert（提醒），confirm（二次确认），点击空白处自动关闭浮层',
                    path: '/dialog/index',
                    icon: '&#xe7ff;'
                }, {
                    name: '全屏右出浮层',
                    prefix: 'mx-dialog: mxModal',
                    tip: 'Magix.View上挂载mxModal',
                    path: '/dialog/modal',
                    icon: '&#xe7ff;'
                }, {
                    name: '缩略图和预览',
                    prefix: 'mx-preview',
                    tip: '支持图片，视频，html，文件链，套图（大小图）',
                    path: '/preview/index',
                    icon: '&#xe755;'
                }, {
                    name: '轮播',
                    prefix: 'mx-carousel',
                    path: '/carousel/index',
                    icon: '&#xe78b;'
                }, {
                    name: '折叠面板',
                    prefix: 'mx-collapse',
                    tip: '可以折叠/展开的内容区域',
                    path: '/collapse/index',
                    icon: '&#xe6a0;'
                }, {
                    name: '卡片(图文链接+指标+轮播)',
                    prefix: 'mx-effects.card',
                    path: '/effects/card',
                    icon: '&#xe600;'
                }, {
                    name: '评分',
                    prefix: 'mx-effects.star',
                    path: '/effects/star',
                    icon: '&#xe646;'
                }, {
                    name: '分时段进度',
                    prefix: 'mx-effects.pipeline',
                    path: '/effects/pipeline',
                    icon: '&#xe62f;'
                }, {
                    name: '刻度型进度比例',
                    prefix: 'mx-effects.degree',
                    path: '/effects/degree',
                    // <mx-effects.progress type="degree" /> 老版 刻度型进度比例
                    // path: '/effects/progress2', 
                    icon: '&#xe6e4;'
                }, {
                    name: '条型进度比例',
                    tip: '支持渐变',
                    path: '/effects/progress1',
                    icon: '&#xe6e4;'
                }, {
                    name: '圆形进度比例',
                    path: '/effects/progress3',
                    icon: '&#xe6e4;'
                },
                // {
                //     name: '空状态',
                //     path: '/effects/empty',
                //     icon: '&#xe685;'
                // }, {
                //     name: '标题',
                //     path: '/title/index',
                //     icon: '&#xe786;'
                // },
                {
                    name: '数值动画',
                    prefix: 'mx-number',
                    tip: '数值跳动动画',
                    path: '/number/index',
                    icon: '&#xe8c4;'
                }, {
                    name: '流程分模块展示',
                    tip: '侧边快捷导航，样式同流程组件',
                    path: '/main/dis',
                    icon: '&#xe623;'
                }]
            }, {
                name: '流程类',
                subs: [{
                    name: '侧边导航分步流程',
                    path: '/main/index',
                    icon: '&#xe64c;'
                }, {
                    name: '简单纵向分步流程',
                    path: '/main/ver',
                    icon: '&#xe623;'
                }, {
                    name: '简单横向分步流程',
                    path: '/main/hor',
                    icon: '&#xe690;'
                }]
            }, {
                name: '业务组件',
                subs: [{
                    name: '阿里妈妈站点吊头',
                    prefix: 'mx-header',
                    path: '/header/index',
                    icon: '&#xe780;'
                }, {
                    name: '阿里妈妈通用吊底',
                    prefix: 'mx-footer',
                    path: '/footer/index',
                    icon: '&#xe617;'
                }, {
                    name: '选择地域',
                    path: '/area/index',
                    icon: '&#xe663;'
                }, {
                    name: '时段折扣',
                    path: '/duration/index',
                    icon: '&#xe67c;'
                }, {
                    name: '时段选择',
                    path: '/hour/index',
                    icon: '&#xe67c;'
                }, {
                    name: 'icon状态切换与显示',
                    prefix: 'mx-status',
                    tip: '结合iconfont使用，用icon缩略显示当前状态属性',
                    path: '/status/index',
                    icon: '&#xe61a;'
                }, {
                    name: '下拉框状态切换与显示',
                    prefix: 'mx-status.dropdown',
                    tip: '结合iconfont使用，展现样式同dropdown',
                    path: '/status/dropdown',
                    icon: '&#xe7a4;'
                }]
            }, {
                name: '动效',
                subs: [{
                    name: '扩散动画',
                    path: '/style/anim-expand',
                    icon: '&#xe657;'
                }, {
                    name: '其他常用效果',
                    path: '/style/anim-common',
                    icon: '&#xe66b;'
                }]
            }]
        }, {
            id: 'scaffold',
            name: '脚手架',
            path: '/all/pro/init',
            paths: [{
                subs: [{
                    name: '10分钟快速上手',
                    path: '/all/pro/init'
                }, {
                    name: '项目主题色配置',
                    path: '/all/pro/theme'
                }, {
                    name: '菜单配置',
                    path: '/all/pro/menu'
                }, {
                    name: 'Magix跨项目公用view',
                    tip: 'Magix的微前端之路',
                    path: '/all/pro/cross'
                }, {
                    name: '关于本地组件的约定',
                    path: '/all/pro/local'
                }, {
                    name: '覆盖组件样式',
                    path: '/all/pro/styles'
                }, {
                    name: 'chartpark图表',
                    tip: '<a href="https://chartpark.alibaba-inc.com/" target="_blank" rel="noopener noreferrer" class="color-brand">https://chartpark.alibaba-inc.com/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=ru4x0jq" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>释剑</a><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>浩添</a>',
                    path: '/all/pro/chartpark'
                }, {
                    name: '数据小站接入',
                    tip: '<a href="http://data.alimama.net/" target="_blank" rel="noopener noreferrer" class="color-brand">http://data.alimama.net/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>浩添</a>',
                    path: '/all/pro/data'
                }, {
                    name: '淘宝登录框接入',
                    tip: '接入文档<a rel="noopener noreferrer" href="https://yuque.antfin-inc.com/up/login-doc/rgfgka" target="_blank" class="link-brand">https://yuque.antfin-inc.com/up/login-doc/rgfgka</a>',
                    path: '/all/pro/login'
                }, {
                    name: '页面监听参数变化回到顶部',
                    path: '/all/pro/top'
                }]
            }]
        }, {
            id: 'edit',
            name: '主题在线编辑',
            // new: that.getCookie('header_edit') ? '' : '在线调整颜色，快速生成项目预览，定制专属配色方案',
            path: '/all/edit/index',
            paths: [{
                subs: [{
                    name: '在线编辑',
                    path: '/all/edit/index'
                }]
            }]
        }, {
            id: 'pro',
            name: 'PRO',
            // new: that.getCookie('header_pro') ? '' : '广告投放bp完整示例，借助rap模拟真实应用',
            outer: 'https://thx.github.io/magix-gallery/pro.html'
        }]

        let pathMap = {}, // 路径index映射
            suggests = []; //全局提示
        headers.forEach((header, i) => {
            (header.paths || []).forEach(item => {
                (item.subs || []).forEach(sub => {
                    if (!sub.prefix) {
                        sub.prefix = sub.name;
                    } else {
                        sub.name = sub.prefix + ' ' + sub.name;
                    }
                })

                let subs = item.subs.map(sub => {
                    pathMap[sub.path] = i;
                    return {
                        ...sub,
                        text: header.name + ' - ' + sub.name + (sub.tip ? `<span class="color-9 ml10">${sub.tip}</span>` : ''),
                        value: 'mx-' + sub.path.slice(1)
                    }
                });
                suggests = suggests.concat(subs);
            })
        })
        let curIndex = pathMap[path];
        headers[curIndex].cur = true;

        // 当前tab可选
        let list = headers[curIndex].paths;
        let all = [];
        list.forEach((item, index) => {
            // 默认全部展开
            item.index = index;
            item.close = that.$map[item.subs[0].path] || false;
            all = all.concat(item.subs);
        })

        let view = path.slice(1);
        let i = view.indexOf('/');
        if (path.indexOf('/all/') > -1) {
            view = '__test__' + view.slice(i);
        } else {
            view = 'mx-' + view.slice(0, i) + '/__test__' + view.slice(i);
        }

        // 当前路径所属组展开
        let curNames = [];
        let count = 0;
        list.forEach(item => {
            item.subs.forEach(sub => {
                count++;
                if (sub.path == path) {
                    item.close = false;
                    that.$map[item.subs[0].path] = false;
                    if (item.name) {
                        curNames.push(item.name);
                    }
                }
            })
        })
        let cur = {}, prev = {}, next = {};
        for (let index = 0; index < all.length; index++) {
            let sub = all[index];
            if (sub.path == path) {
                if (all[index - 1]) {
                    prev = all[index - 1];
                }
                if (all[index + 1]) {
                    next = all[index + 1];
                }
                curNames.push(sub.name);
                cur = {
                    name: curNames.join('&nbsp;-&nbsp;'),
                    tip: sub.tip
                };
            }
        }

        let theme = {
            show: false,
            update: !that.getCookie('gallery_theme'),
            color: that.getCookie('gallery_theme_color') || '#51a300'
        }

        // 30天过期
        that.setCookie('gallery_theme', true, `h${(24 * 30)}`);

        updater.digest({
            headers,
            suggests,
            all,
            count,
            list,
            cur,
            prev,
            next,
            path,
            view,
            minHeight: $(window).height(),
            theme
        });

        // 当前选中项滚动到可视范围之内
        let curNode = $('#' + that.id + ' .@base.less:nav.@base.less:cur');
        if (curNode && curNode.length) {
            if (curNode[0].scrollIntoViewIfNeeded) {
                curNode[0].scrollIntoViewIfNeeded();
            } else if (curNode[0].scrollIntoView) {
                curNode[0].scrollIntoView();
            }
        }
    },

    'showPicker<click>'(e) {
        let theme = this.updater.get('theme');
        theme.show = true;
        theme.update = false;
        this.updater.digest(theme);
    },

    'changeColors<change>'(e) {
        if (e.brand) {
            // 自定义的配色方案保留
            // 30天过期
            this.setCookie('gallery_theme_color', e.brand, `h${(24 * 30)}`);
        }
        let colors = e.colors;
        for (let key in colors) {
            document.body.style.setProperty(key, colors[key]);
        }

        let theme = this.updater.get('theme');
        theme.show = false;
        this.updater.digest(theme);
    },

    '$doc<click>'(event) {
        let that = this;
        let theme = that.updater.get('theme');
        if (theme.show) {
            let node = $('#' + that.id + ' .@base.less:base-logo');
            let target = event.target;
            if (!Magix.inside(target, node[0])) {
                theme.show = false;
                that.updater.digest(theme);
            }
        }
    },

    'toggle<click>'(e) {
        let that = this;
        let updater = that.updater;
        let list = updater.get('list');
        let index = e.params.index;
        list[index].close = !list[index].close;
        that.$map[list[index].subs[0].path] = list[index].close;

        updater.digest({
            list
        })
    },
    'suggest<suggest>'(e) {
        let value = e.selected.value;
        Magix.Router.to(value.replace('mx-', '/'));
    },
    '$win<scroll>'(e) {
        let that = this;

        let mainNode = $('#' + that.id);
        let bodyNode = mainNode.find('.@base.less:base-main');
        let leftNode = mainNode.find('.@base.less:base-left');
        let scrollTop = $(window).scrollTop();
        let bodyTop = bodyNode.offset().top;
        let fixed = that.updater.get('fixed');
        if (scrollTop > bodyTop) {
            if (fixed) {
                return;
            }
            that.updater.set({
                fixed: true
            })
            leftNode.addClass('@base.less:fixed');
        } else {
            if (!fixed) {
                return;
            }
            that.updater.set({
                fixed: false
            })
            leftNode.removeClass('@base.less:fixed');
        }
    },
    '$win<resize>'() {
        let that = this;
        let winHeight = $(window).height();
        let mainNode = $('#' + that.id);
        let leftNode = mainNode.find('.@base.less:base-left');
        that.updater.set({
            minHeight: winHeight
        });
        leftNode.css('height', winHeight);
    },

    'back<click>'(e) {
        $(window).scrollTop(0);
    },

    /**
     * 导航提示本地更新
     */
    'readed<click>'(e) {
        let id = e.params.id;
        // 30天过期
        let h = 24 * 30;
        this.setCookie(`header_${id}`, true, `h${h}`);
    },

    getCookie(name) {
        let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        let arr = document.cookie.match(reg);
        if (arr && arr.length) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    },

    setCookie(name, value, time) {
        //这是有设定过期时间的使用示例：
        //s20是代表20秒
        //h是指小时，如12小时则是：h12
        //d是天数，30天则：d30
        let getsec = (str) => {
            let sec;
            let str1 = str.substring(1, str.length) * 1;
            let str2 = str.substring(0, 1);
            switch (str2) {
                case 's':
                    sec = str1 * 1000;
                    break;
                case 'h':
                    sec = str1 * 60 * 60 * 1000;
                    break;
                case 'd':
                    sec = str1 * 24 * 60 * 60 * 1000;
                    break;
            }
            return sec;
        }

        // time过期时间
        let strsec = getsec(time);
        let exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);

        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    }
});