export default {
    gallery: [{
        name: '开发指南',
        subs: [{
            name: '关于双向绑定约定',
            tip: '详细说明如何写一个支持多参数且数据双向绑定的组件',
            path: '/all/bind',
        }, {
            name: '关于_config定义',
            path: '/all/config',
        }, {
            name: '相关文档链接',
            path: '/all/links',
        }]
    }, {
        name: '样式',
        subs: [{
            name: '关于常用样式class的说明',
            path: '/style/class',
        }, {
            name: '使用变量书写样式',
            path: '/style/var',
        }, {
            name: 'trigger + 展开项',
            tip: '使用组件内置class实现一个类似于dropdown，下拉框内容自定义的模块',
            path: '/style/trigger',
        }, {
            name: 'mx-color.picker 颜色选择',
            path: '/color/index',
        }, {
            name: 'mx-grid.row mx-grid.col 栅格布局',
            path: '/grid/row-column',
        }, {
            name: 'mx-grid 卡片',
            path: '/grid/index',
        }]
    }, {
        name: '通用',
        subs: [{
            name: 'mx-btn 按钮',
            tip: '点击查看<a rel="noopener noreferrer" target="_blank" href="https://done.alibaba-inc.com/file/1vGU0dwwS3oq/cw9MSQQQbWjpMTfZ/preview?m=SPECS&aid=01F037C2-928C-4BAA-9FE4-771FDC189F2A&pageId=F3EB291F-D9CE-4CED-B1DA-DBA0A79DE7D5" class="color-brand">按钮交互规范</a>',
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
        }, {
            name: 'mx-radio.cards 卡片型单选',
            tip: '卡片样式的radio单选框',
            path: '/radio/card',
        }, {
            name: 'mx-checkbox.cards 卡片型多选',
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
            name: 'mx-taginput 标签搜索多选',
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
            name: 'mx-suggest 单选搜索框',
            path: '/suggest/index',
        }, {
            name: 'mx-editor 文字/数值编辑',
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
            name: 'mx-cascade 级联单选',
            path: '/cascade/index',
        }, {
            name: 'mx-cascade 级联多选',
            path: '/cascade/multi',
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
            name: 'mx-tabs.menu 二级导航',
            path: '/tabs/menu',
        }, {
            name: 'mx-tabs.pipeline 纵向线型导航',
            path: '/tabs/pipeline',
        }, {
            name: 'mx-breadcrumb 面包屑',
            path: '/breadcrumb/index',
        }, {
            name: 'mx-pagination 翻页器',
            tip: '支持复杂模式，精简版和顺序翻页版本，pager支持双向绑定',
            path: '/pagination/index',
        }, {
            name: 'mx-main 纵向步骤导航',
            tip: '常用于bp主流程分步骤创建模块',
            path: '/main/nav',
        }, {
            name: '线性导航+默认按钮',
            path: '/main/1',
            child: true,
        }, {
            name: '线性导航+自定义按钮',
            path: '/main/2',
            child: true,
        }, {
            name: '线性导航+动态切换步骤',
            path: '/main/3',
            child: true,
        }, {
            name: '深底色侧边',
            path: '/main/index',
            child: true,
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
            name: 'mx-tabs 可编辑tab',
            tip: '可动态增删tab，支持双向绑定',
            path: '/tabs/edit',
        }, {
            name: '其他展现样式tab组件',
            tip: '竖版tab组件',
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
            name: '高亮&异常&警告&通过',
            fullName: 'mx-form 表单高亮&异常&警告&通过',
            path: '/form/warn',
            child: true,
        }, {
            name: '表单样式(阶梯规则应用)',
            fullName: 'mx-form 表单样式(阶梯规则应用)',
            tip: '常规样式，默认左对齐，可配置右对齐，必选样式及阶梯规则应用',
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
            name: '同行 & 分行操作项',
            fullName: 'mx-stickytable 同行 & 分行操作项',
            path: '/stickytable/oper-lines',
            child: true,
        }, {
            name: 'rowspan',
            fullName: 'mx-stickytable 设置rowspan',
            path: '/stickytable/rowspan',
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
            name: '常用场景（物料素材）',
            fullName: 'mx-stickytable 常用场景示例',
            tip: '以下示例显示常用场景，如列表刷新局部loading，宝贝列表等等的推荐使用方式',
            path: '/stickytable/oper-items',
            child: true,
        }, {
            name: '阶梯规则应用',
            fullName: 'mx-stickytable 阶梯规则应用',
            path: '/stickytable/loading',
            child: true,
        }, {
            name: '表格样式',
            fullName: 'mx-stickytable 表格各种展现样式，紧凑型 & 常规尺寸 & 宽松型',
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
            name: 'mx-tree 树状结构',
            path: '/tree/index',
        }, {
            name: 'mx-transfer 穿梭框',
            path: '/transfer/index',
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
            name: 'mx-effects.progress 条形进度',
            tip: '支持渐变',
            path: '/effects/progress',
        }, {
            name: 'mx-effects.progress 圆形进度',
            tip: '支持渐变，缺口圆环',
            path: '/effects/circle',
        }, {
            name: 'mx-effects.pipeline 步骤导航',
            path: '/effects/step',
        }, {
            name: 'mx-effects.pipeline 活动日历进度',
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
            name: 'mx-guides 分步引导',
            path: '/guides/index',
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
            name: 'chartpark 图表接入说明',
            tip: '<a href="https://chartpark.alibaba-inc.com/" target="_blank" rel="noopener noreferrer" class="color-brand">https://chartpark.alibaba-inc.com/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=ru4x0jq" class="ml4"><i class="mc-iconfont color-brand fontsize-18">&#xe677;</i>释剑</a>',
            path: '/all/pro/chartpark'
        }, {
            name: 'mx-chart 图表',
            tip: 'chartpark图表包装，方便使用',
            path: '/chart/index',
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
}