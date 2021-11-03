import Magix, { Router } from 'magix';
import * as $ from '$';
Magix.applyStyle('@global.style');
Magix.applyStyle('@scoped.style');
Magix.applyStyle('@base.less');

export default Magix.View.extend({
    tmpl: '@base.html',
    init() {
        this.observeLocation({
            path: true
        });
    },
    render() {
        $(window).scrollTop(0);
        let that = this;

        // 当前路径
        let { path } = Router.parse();

        let headers = [{
            id: 'gallery',
            name: '组件',
            path: '/btn/index',
            paths: [{
                name: '开发指南',
                subs: [{
                    name: '更新记录',
                    path: '/all/update'
                }, {
                    name: '关于双向绑定约定',
                    tip: '详细说明如何写一个支持多参数且数据双向绑定的组件',
                    path: '/all/bind',
                }, {
                    name: '关于_config定义',
                    path: '/all/config',
                }, {
                    name: 'trigger + 展开项',
                    tip: '使用组件内置class实现一个类似于dropdown，下拉框内容自定义的模块',
                    path: '/style/trigger',
                }, {
                    name: '相关文档链接',
                    path: '/all/links',
                }]
            }, {
                name: '样式',
                subs: [{
                    name: 'mx-color.picker 颜色选择',
                    path: '/color/index',
                }, {
                    name: 'mx-grid 栅格布局',
                    path: '/grid/index',
                }]
            }, {
                name: '通用',
                subs: [{
                    name: 'mx-btn 按钮',
                    tip: '点击查看<a rel="noopener noreferrer" target="_blank" href="https://done.alibaba-inc.com/file/BfeHD00VvQXv/ROf2KIXCwf3UfVd6/preview?aid=0F362069-A45F-4B3E-AB2B-F4B17371AE14" class="color-brand">按钮交互规范</a>',
                    path: '/btn/index',
                }, {
                    name: 'mx-popmenu 菜单按钮',
                    path: '/popmenu/index',
                }, {
                    name: 'mx-radio 单选',
                    tip: '包装原生radio，支持配置说明，打标',
                    path: '/radio/index',
                }, {
                    name: 'mx-checkbox 多选',
                    tip: '包装indeterminate状态；支持级联选择功能',
                    path: '/checkbox/index',
                }, {
                    name: 'mx-dropdown.box 按钮型选择',
                    tip: '支持单选or多选；支持双向绑定',
                    path: '/dropdown/box',
                    icon: '&#xe691;'
                }, {
                    name: 'mx-radio.card 卡片型单选',
                    tip: '卡片样式的radio单选框',
                    path: '/radio/card',
                }, {
                    name: 'mx-checkbox.card 卡片型多选',
                    tip: '卡片样式的checkbox多选框',
                    path: '/checkbox/card',
                }, {
                    name: 'mx-switch 开关',
                    tip: '支持双向绑定',
                    path: '/switch/index',
                }, {
                    name: 'mx-error 空/异常状态',
                    tip: '各种异常情况提示页面（包含empty空状态，no access无权限等场景）',
                    path: '/error/index',
                }, {
                    name: 'mx-effects.ua 浏览器兼容提示',
                    path: '/effects/ua',
                }]
            }, {
                name: '数据输入',
                subs: [{
                    name: 'mx-input 输入框',
                    tip: '包装input，处理动效样式及输入提示等功能',
                    path: '/input/index',
                }, {
                    name: 'mx-textarea 多行文本框',
                    tip: '包装多行文本框，处理动效样式及输入提示等功能',
                    path: '/textarea/index',
                }, {
                    name: 'mx-taginput 标签选择',
                    path: '/taginput/index',
                }, {
                    name: 'mx-dropdown.bd 下拉框单选',
                    tip: '支持click展开和hover展开；<span class="color-brand">下拉列表追加到body；</span>支持双向绑定',
                    path: '/dropdown/bd',
                }, {
                    name: 'mx-dropdown.bd 下拉框多选',
                    tip: '支持click展开和hover展开；<span class="color-brand">下拉列表追加到body；</span>支持双向绑定',
                    path: '/dropdown/bd-multi',
                }, {
                    name: 'mx-search 类型搜索框',
                    tip: '支持选择类型搜索和普通搜索',
                    path: '/search/index',
                }, {
                    name: 'mx-suggest 选项搜索框',
                    path: '/suggest/index',
                }, {
                    name: 'mx-editor 文字编辑',
                    tip: 'hover显示编辑按钮，点击编辑按钮显示输入框',
                    path: '/editor/index',
                }, {
                    name: 'mx-calendar.datepicker 日历单日',
                    path: '/calendar/index',
                }, {
                    name: 'mx-calendar.rangepicker 日历时段',
                    path: '/calendar/range',
                }, {
                    name: 'mx-time 时分秒选择',
                    path: '/time/index',
                }, {
                    name: 'mx-hour 时间选择',
                    path: '/hour/index',
                }, {
                    name: 'mx-area 地域选择',
                    path: '/area/index',
                }, {
                    name: 'mx-cascade 级联选择',
                    path: '/cascade/index',
                }, {
                    name: 'mx-cascade.card 卡片型级联选择',
                    tip: '除展现样式外，其余同mx-cascade',
                    path: '/cascade/card',
                }, {
                    name: 'mx-status 投放状态',
                    tip: 'icon型结合iconfont使用，用icon缩略显示当前状态属性；也可展示为下拉框样式；',
                    path: '/status/index',
                }, {
                    name: 'mx-slider 单滑块数值区间',
                    path: '/slider/index',
                }, {
                    name: 'mx-slider.range 双滑块数值区间',
                    path: '/slider/range',
                }, {
                    name: 'mx-duration 时段折扣',
                    path: '/duration/index',
                }, {
                    name: 'mx-transfer 穿梭框',
                    path: '/transfer/index',
                }, {
                    name: 'mx-uploader 上传',
                    path: '/uploader/index',
                }, {
                    name: 'mx-indics 指标选择及排序',
                    path: '/indics/index',
                }, {
                    name: 'mx-dragsort 拖动排序',
                    path: '/dragsort/index',
                }, {
                    name: 'mx-copy 复制',
                    tip: '该组件引入了第三方 <a rel="noopener noreferrer" target="_blank" href="https://clipboardjs.com/" class="color-brand">https://clipboardjs.com/</a> 代码',
                    path: '/copy/index',
                }]
            }, {
                name: '导航',
                subs: [{
                    name: 'mx-header 一级导航',
                    path: '/header/index',
                }, {
                    name: 'common-code 二级导航',
                    path: '/all/pro/common-code-menu',
                }, {
                    name: 'mx-main.dis 快捷导航',
                    tip: '左侧快捷模块导航，样式同流程组件',
                    path: '/main/dis',
                }, {
                    name: 'mx-pagination 翻页器',
                    tip: '支持复杂模式，精简版和顺序翻页版本，pager支持双向绑定',
                    path: '/pagination/index',
                }, {
                    name: 'mx-main 纵向步骤导航',
                    tip: '常用于bp主流程分步骤创建模块',
                    path: '/main/index',
                }, {
                    name: 'mx-main.hor 横向步骤导航',
                    path: '/main/hor',
                }, {
                    name: 'mx-tabs 底边线tab分组',
                    tip: '一般适用于一级导航，支持双向绑定',
                    path: '/tabs/index',
                }, {
                    name: 'mx-tabs.box 盒状tab分组',
                    tip: '一般适用于快捷筛选，支持双向绑定',
                    path: '/tabs/box',
                }, {
                    name: 'mx-tabs.anchor 底边线tab跟随',
                    tip: '一般适用于一级导航，支持双向绑定，滚动页面导航锚点跟随，点击tab锚点到对应的模块',
                    path: '/tabs/anchor',
                }, {
                    name: '其他展现样式tab组件',
                    tip: '竖版tab组件；时间轴pipeline组件',
                    path: '/tabs/style',
                }]
            }, {
                name: '内容展示',
                subs: [{
                    name: 'mx-effects.card 卡片',
                    tip: '图文链接卡片，图文指标展示卡片，支持平铺展示或者轮播',
                    path: '/effects/card',
                }, {
                    name: 'mx-number 数据展示',
                    tip: '数值跳动动画',
                    path: '/number/index',
                }, {
                    name: 'mx-form 表单',
                    path: '/form/valid',
                }, {
                    name: '表单支持的校验项',
                    fullName: 'mx-form 表单支持的校验项',
                    path: '/form/mixins',
                    child: true,
                }, {
                    name: '表单双向绑定+校验',
                    fullName: 'mx-form 表单双向绑定+校验',
                    path: '/form/index',
                    child: true,
                }, {
                    name: '警告类校验场景',
                    fullName: 'mx-form 表单警告类校验场景',
                    path: '/form/warn',
                    child: true,
                }, {
                    name: '表单样式',
                    fullName: 'mx-form 表单样式',
                    path: '/form/style',
                    child: true,
                }, {
                    name: 'mx-stickytable 表格',
                    tip: '使用注意点及API',
                    path: '/stickytable/desc',
                }, {
                    name: '表头文案及分组',
                    fullName: 'mx-stickytable 表头文案及分组',
                    path: '/stickytable/thead-group',
                    child: true,
                }, {
                    name: '表格左右分栏',
                    fullName: 'mx-stickytable 表格左右分栏',
                    path: '/stickytable/left-right-sticky',
                    child: true,
                }, {
                    name: '自由列宽',
                    fullName: 'mx-stickytable 表格自由列宽',
                    path: '/stickytable/drag',
                    child: true,
                }, {
                    name: '表头吸顶',
                    fullName: 'mx-stickytable 表头吸顶',
                    path: '/stickytable/sticky',
                    child: true,
                }, {
                    name: '联动筛选项吸顶',
                    fullName: 'mx-stickytable 联动筛选项吸顶',
                    path: '/stickytable/filter-sticky',
                    child: true,
                }, {
                    name: '同行操作项',
                    fullName: 'mx-stickytable 同行操作项',
                    path: '/stickytable/oper-items',
                    child: true,
                }, {
                    name: '分行操作项',
                    fullName: 'mx-stickytable 分行操作项',
                    path: '/stickytable/oper-lines',
                    child: true,
                }, {
                    name: 'checkbox联动选择',
                    fullName: 'mx-stickytable checkbox联动选择',
                    path: '/stickytable/checkbox',
                    child: true,
                }, {
                    name: '指标排序',
                    fullName: 'mx-stickytable 指标排序',
                    path: '/stickytable/sort',
                    child: true,
                }, {
                    name: '展开收起子行',
                    fullName: 'mx-stickytable 展开收起子行',
                    path: '/stickytable/sub',
                    child: true,
                }, {
                    name: '子表格嵌套',
                    fullName: 'mx-stickytable 子表格嵌套',
                    path: '/stickytable/sub-table',
                    child: true,
                }, {
                    name: '表格空状态',
                    fullName: 'mx-stickytable 表格空状态',
                    path: '/stickytable/empty',
                    child: true,
                }, {
                    name: '数据刷新loading',
                    fullName: 'mx-stickytable 表格数据刷新loading',
                    path: '/stickytable/loading',
                    child: true,
                }, {
                    name: '仅使用表格样式',
                    fullName: 'mx-stickytable 仅使用表格样式',
                    path: '/stickytable/style',
                    child: true,
                }, {
                    name: '异常情况问题自查',
                    fullName: 'mx-stickytable 表格异常情况问题自查',
                    path: '/stickytable/error',
                    child: true,
                }, {
                    name: 'mx-effects.icon 标签',
                    path: '/effects/icon',
                }, {
                    name: 'mx-carousel 轮播',
                    path: '/carousel/index',
                }, {
                    name: 'mx-preview 图片预览',
                    tip: '支持图片，视频，html，文件链，套图（大小图）',
                    path: '/preview/index',
                }, {
                    name: 'mx-tree.data 树形结构',
                    tip: '支持双向绑定，数据驱动版本',
                    path: '/tree/data',
                }, {
                    name: 'mx-secradio 二级树形结构单选',
                    path: '/secradio/index',
                }, {
                    name: 'mx-collapse 折叠面板',
                    tip: '可以折叠/展开的内容区域，支持自定义展示view',
                    path: '/collapse/index',
                }, {
                    name: 'mx-footer 页脚',
                    path: '/footer/index',
                }]
            }, {
                name: '反馈',
                subs: [{
                    name: 'mx-dialog 对话框',
                    tip: 'Magix.View上挂载mxDialog（新开浮层），alert（提醒），confirm（二次确认），点击空白处自动关闭浮层',
                    path: '/dialog/index',
                }, {
                    name: 'mx-dialog: mxModal 抽屉浮层',
                    tip: 'Magix.View上挂载mxModal',
                    path: '/dialog/modal',
                }, {
                    name: 'mx-gtip 悬浮提示',
                    path: '/gtip/index',
                }, {
                    name: 'mx-popover 气泡通知',
                    tip: '默认使用span标签生成，支持自定义展示view',
                    path: '/popover/index',
                }, {
                    name: 'mx-popconfirm 气泡二次确认',
                    tip: '点击出二次确认浮层，通过则回调',
                    path: '/popconfirm/index',
                }, {
                    name: 'mx-effects.notice 提示信息栏',
                    path: '/effects/notice',
                }, {
                    name: 'mx-effects.progress 条型进度',
                    tip: '支持渐变',
                    path: '/effects/progress1',
                }, {
                    name: 'mx-effects.progress 圆形进度',
                    path: '/effects/progress3',
                }, {
                    name: 'mx-effects.pipeline 时段进度',
                    path: '/effects/pipeline',
                }, {
                    name: 'mx-effects.degree 热度条',
                    path: '/effects/degree',
                }, {
                    name: 'mx-effects.result 结果',
                    path: '/effects/result',
                }, {
                    name: 'mx-effects.star 评分',
                    path: '/effects/star',
                }, {
                    name: 'mx-effects.zan 点赞点踩',
                    path: '/effects/zan',
                }, {
                    name: 'mx-loading 加载',
                    path: '/loading/index',
                }, {
                    name: 'mx-im.wx 智能客服-万象',
                    tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/nue/everywhere/gdb60g" target="_blank"  rel="noopener noreferrer">服务窗接入wiki文档</a>',
                    path: '/im/wanxiang',
                }, {
                    name: 'mx-im.alime 智能客服-阿里小蜜',
                    tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto" target="_blank"  rel="noopener noreferrer">接入手册</a>',
                    path: '/im/alime',
                }, {
                    name: 'mx-im.dd 智能客服-钉钉',
                    tip: '<a class="color-brand" href="https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7386797.0.0.WN76gC&treeId=176&articleId=106086&docType=1" target="_blank"  rel="noopener noreferrer">钉钉PC端统一跳转协议</a>',
                    path: '/im/dingding',
                }, {
                    name: 'mx-im.ww 智能客服-旺旺',
                    tip: '<a class="color-brand" href="http://gitlab.alibaba-inc.com/aliww/web.ww" target="_blank"  rel="noopener noreferrer">接入说明</a>',
                    path: '/im/wangwang',
                }, {
                    name: 'mx-feedback 问卷反馈',
                    tip: '<a class="mr20 color-brand" href="https://yuque.antfin-inc.com/uxradar/openapi/idgcdi" target="_blank"  rel="noopener noreferrer">UX Radar接入文档</a><a class="color-brand" href="https://uxradar.alibaba-inc.com/" target="_blank"  rel="noopener noreferrer">UX Radar官网</a>',
                    path: '/feedback/index',
                }]
            }, {
                name: '图表',
                subs: [{
                    name: 'mx-chart 图表',
                    tip: 'chartpark图表包装，方便使用',
                    path: '/chart/index',
                }, {
                    name: 'chartpark 图表接入说明',
                    tip: '<a href="https://chartpark.alibaba-inc.com/" target="_blank" rel="noopener noreferrer" class="color-brand">https://chartpark.alibaba-inc.com/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=ru4x0jq" class="ml5"><i class="mc-iconfont color-brand fontsize-18">&#xe677;</i>释剑</a><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5">',
                    path: '/all/pro/chartpark'
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
            }, {
                name: '不透出的组件',
                subs: [{
                    name: 'mx-dropdown',
                    tip: 'mx-dropdown.bd替换；支持click展开和hover展开两种形式；<span class="color-brand">下拉列表在组件内；</span>支持双向绑定',
                    path: '/dropdown/index',
                }, {
                    name: 'mx-dropdown.multiple',
                    tip: 'mx-dropdown.bd替换；支持click展开和hover展开两种形式；<span class="color-brand">下拉列表在组件内；</span>支持双向绑定',
                    path: '/dropdown/multiple',
                }, {
                    name: 'mx-effects.empty 空状态',
                    tip: '404找不到页面，合并到mx-error',
                    path: '/effects/empty',
                }, {
                    name: 'mx-title 标题',
                    path: '/title/index',
                }, {
                    name: 'mx-tree 树状结构',
                    tip: '支持双向绑定，实现为dom操作',
                    path: '/tree/index',
                }, {
                    name: 'mx-wanxiang 老版万象',
                    tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/wanxiang/technology/description" target="_blank"  rel="noopener noreferrer">服务窗接入wiki文档</a>',
                    path: '/wanxiang/index',
                }, {
                    name: '简单纵向分步流程',
                    path: '/main/ver',
                }]
            }]
        }, {
            id: 'edit',
            name: '主题在线编辑',
            // new: that.getCookie('header_edit') ? '' : '在线调整颜色，快速生成项目预览，定制专属配色方案',
            path: '/all/edit/index',
            paths: [{
                subs: [{
                    name: '主题在线编辑',
                    path: '/all/edit/index'
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
                    name: '数据小站接入',
                    tip: '<a href="http://data.alimama.net/" target="_blank" rel="noopener noreferrer" class="color-brand">http://data.alimama.net/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18">&#xe677;</i>浩添</a>',
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
            id: 'pro',
            name: 'PRO',
            // new: that.getCookie('header_pro') ? '' : '广告投放bp完整示例，借助rap模拟真实应用',
            outer: 'https://thx.github.io/magix-gallery/pro.html'
        }];

        let pathMap = {}, // 路径index映射
            suggests = []; // 全局提示
        headers.forEach((header, i) => {
            header.paths = header.paths || [];
            header.paths.forEach(item => {
                suggests = suggests.concat((item.subs || []).map(sub => {
                    pathMap[sub.path] = i;
                    return {
                        ...sub,
                        text: (item.subs.length > 1) ? `${header.name}&nbsp;-` + (item.name ? `【${item.name}】` : '') + (sub.fullName || sub.name) + (sub.tip ? `<span class="color-9 ml10">${sub.tip}</span>` : '') : header.name,
                        value: 'mx-' + sub.path.slice(1)
                    }
                }));
            })
        });
        // 顶部一级导航选中态
        let curIndex = pathMap[path];
        Magix.mix(headers[curIndex], {
            cur: true
        })

        // 转化到demo地址
        let view = path.slice(1);
        let i = view.indexOf('/');
        if (path.indexOf('/all/') > -1) {
            view = '__test__' + view.slice(i);
        } else {
            view = 'mx-' + view.slice(0, i) + '/__test__' + view.slice(i);
        }

        // 当前路径所属组展开
        let list = headers[curIndex].paths;
        let cur = {}, prev = {}, next = {};
        let count = 0;
        list.forEach((item, index) => {
            Magix.mix(item, {
                index,
                subs: item.subs || []
            })
            item.subs.forEach((sub, subIndex) => {
                count++;
                if (sub.path == path) {
                    let prevItem = list[index - 1],
                        nextItem = list[index + 1];
                    if (item.subs[subIndex - 1]) {
                        prev = item.subs[subIndex - 1];
                    } else if (prevItem && prevItem.subs && prevItem.subs.length) {
                        prev = prevItem.subs[prevItem.subs.length - 1];
                    }

                    if (item.subs[subIndex + 1]) {
                        next = item.subs[subIndex + 1];
                    } else if (nextItem && nextItem.subs && nextItem.subs.length) {
                        next = nextItem.subs[0];
                    }
                    cur = {
                        name: (item.name ? `${item.name}&nbsp;-&nbsp;` : '') + `${sub.fullName || sub.name}`,
                        tip: sub.tip
                    };
                }
            });
        });

        let theme = {
            show: false,
            update: !that.getCookie('gallery_theme'),
            color: that.getCookie('gallery_theme_color') || '#51a300'
        }
        // 30天过期
        that.setCookie('gallery_theme', true, `h${(24 * 30)}`);

        that.updater.digest({
            headers,
            suggests,
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
        let curNode = $('#' + that.id + ' .@base.less:cur-nav');
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