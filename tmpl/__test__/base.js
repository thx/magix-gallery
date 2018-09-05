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

        let list = [{
            subs: [{
                name: '更新记录',
                path: '/all/update'
            }]
        }, {
            name: '脚手架（组件应用场景）',
            subs: [{
                name: '10分钟快速上手',
                path: '/all/pro/init',
                icon: '&#xe6ea;'
            }, {
                name: '定制主题 + 覆盖组件样式',
                path: '/all/pro/theme',
                icon: '&#xeb6e;'
            }, {
                name: '菜单配置',
                path: '/all/pro/menu',
                icon: '&#xe65e;'
            }, {
                name: '前后端权限约定',
                path: '/all/pro/permission',
                icon: '&#xe6d1;'
            }, {
                name: '跨项目渲染magix view',
                path: '/all/pro/cross',
                icon: '&#xe6b6;'
            }, {
                name: '本地组件',
                path: '/all/pro/local',
                icon: '&#xe648;'
            }, {
                name: 'rap接口管理',
                path: '/all/pro/rap',
                icon: '&#xe60b;'
            }, {
                name: 'chartpark图表',
                tip: '接口人 @浩添 @释剑',
                path: '/all/pro/chartpark',
                icon: '&#xe670;'
            }, {
                name: '数据小站接入',
                path: '/all/pro/data',
                icon: '&#xe7be;'
            }, {
                name: '淘宝登陆框接入',
                tip: '接入文档<a rel="noopener noreferrer" href="https://lark.alipay.com/up/login-doc/xvgy82" target="_blank" class="link-brand">https://lark.alipay.com/up/login-doc/xvgy82</a>',
                path: '/all/pro/login',
                icon: '&#xe609;'
            }, {
                name: '页面监听参数变化回到顶部',
                path: '/all/pro/top',
                icon: '&#xe62d;'
            }, {
                name: '国际化',
                path: '/all/pro/medusa',
                icon: '&#xe620;'
            }, {
                name: '其他杂项',
                path: '/all/pro/other',
                icon: '&#xe62c;'
            }]
        }, {
            name: '表单（mixins）',
            subs: [{
                name: '支持的校验项',
                path: '/form/mixins',
                icon: '&#xe64e;'
            }, {
                name: '双向绑定 + 校验使用场景',
                path: '/form/index',
                icon: '&#xe731;'
            }]
        }, {
            name: '表格（mixins）',
            subs: [{
                name: '说明及注意点',
                path: '/table/desc',
                icon: '&#xe64f;'
            }, {
                name: '左右分栏',
                path: '/table/index1',
                icon: '&#xe693;'
            }, {
                name: '表头分组 + 子表格',
                path: '/table/index2',
                icon: '&#xe770;'
            }, {
                name: '自定义吸顶容器',
                path: '/table/index11',
                icon: '&#xe7b6;'
            }, {
                name: '操作项在下方',
                path: '/table/index3',
                icon: '&#xe7b5;'
            }, {
                name: '操作项在同一行',
                path: '/table/index4',
                icon: '&#xe7b5;'
            }, {
                name: '指标排序',
                path: '/table/index10',
                icon: '&#xe608;'
            }, {
                name: '翻页版',
                path: '/table/index5',
                icon: '&#xe655;'
            }, {
                name: '展开子表格',
                path: '/table/index6',
                icon: '&#xeb73;'
            }, {
                name: 'checkbox选中操作行',
                path: '/table/index7',
                icon: '&#xe695;'
            }, {
                name: '普通表格',
                path: '/table/index8',
                icon: '&#xe63e;'
            }, {
                name: '任意colspan的计算',
                path: '/table/index9',
                icon: '&#xe79b;'
            }]
        }, {
            name: '数据交互',
            subs: [{
                name: '下拉框（单选）',
                tip: '支持click展开和hover展开两种形式',
                path: '/dropdown/index',
                icon: '&#xe7a4;'
            }, {
                name: '下拉框（多选）',
                tip: '支持click展开和hover展开两种形式',
                path: '/dropdown/multiple',
                icon: '&#xe7a4;'
            }, {
                name: '日历（选择单日）',
                path: '/calendar/index',
                icon: '&#xe60e;'
            }, {
                name: '日历（选择时间段）',
                path: '/calendar/range',
                icon: '&#xe60e;'
            }, {
                name: '分页',
                path: '/pagination/index',
                icon: '&#xe61a;'
            }, {
                name: '底边线tab切换',
                tip: '一般适用于一级导航',
                path: '/tabs/index',
                icon: '&#xe62a;'
            }, {
                name: '盒状分组',
                tip: '一般适用于快捷筛选',
                path: '/tabs/box',
                icon: '&#xe62a;'
            }, {
                name: '可编辑内容',
                tip: 'hover显示编辑按钮',
                path: '/editor/index',
                icon: '&#xe698;'
            }, {
                name: '流程',
                path: '/main/index',
                icon: '&#xe64c;'
            }, {
                name: '搜索',
                tip: '支持选择类型搜索和普通搜索',
                path: '/search/index',
                icon: '&#xe651;'
            }, {
                name: '开关',
                path: '/switch/index',
                icon: '&#xe72c;'
            }, {
                name: '树状结构',
                tip: '组件获取的选中值是最底层数据的value',
                path: '/tree/index',
                icon: '&#xe62b;'
            }, {
                name: '标签选择',
                path: '/taginput/index',
                icon: '&#xe794;'
            }, {
                name: '上传',
                path: '/uploader/index',
                icon: '&#xe63c;'
            }, {
                name: '复制',
                tip: '该组件引入了第三方 <a rel="noopener noreferrer" target="_blank" href="https://zenorocha.github.io/clipboard.js" class="color-brand">https://zenorocha.github.io/clipboard.js</a> 代码',
                path: '/copy/index',
                icon: '&#xe610;'
            }, {
                name: '单个滑块',
                path: '/slider/index',
                icon: '&#xe664;'
            }, {
                name: '滑块选择范围',
                path: '/slider/range',
                icon: '&#xe664;'
            }, {
                name: '指标默认配置及选择排序',
                path: '/indics/index',
                icon: '&#xe731;'
            }, {
                name: 'icon状态切换与显示',
                tip: '结合iconfont使用，用icon缩略显示当前状态属性',
                path: '/status/index',
                icon: '&#xe61a;'
            }, {
                name: 'dropdown状态切换与显示',
                tip: '结合iconfont使用，展现样式同dropdown',
                path: '/status/dropdown',
                icon: '&#xe7a4;'
            }]
        }, {
            name: '提示反馈',
            subs: [{
                name: 'popover气泡提示',
                tip: '默认使用span标签生成，可自定义tag',
                path: '/popover/index',
                icon: '&#xe654;'
            }, {
                name: 'popconfirm气泡确认框',
                tip: '点击出确认浮层',
                path: '/popconfirm/index',
                icon: '&#xe7ff;'
            }, {
                name: 'loading加载',
                path: '/loading/index',
                icon: '&#xe6ab;'
            }, {
                name: '异常页面',
                tip: '404找不到页面',
                path: '/error/index',
                icon: '&#xe611;'
            }, {
                name: '旺旺唤起',
                path: '/wangwang/index',
                icon: '&#xe75c;'
            }, {
                name: '钉钉唤起',
                path: '/dingding/index',
                icon: '&#xe677;'
            }, {
                name: 'feedback接入',
                path: '/feedback/index',
                icon: '&#xe613;'
            }, {
                name: '万象客服问答',
                path: '/wanxiang/index',
                icon: '&#xe767;'
            }]
        }, {
            name: '数据展示',
            subs: [{
                name: '浮层',
                tip: 'Magix.View上挂载mxDialog（新开浮层），alert（提醒），confirm（二次确认），mxDialogGroup（内容分组显示）',
                path: '/dialog/index',
                icon: '&#xe7ff;'
            }, {
                name: '缩略图和预览',
                tip: '支持图片，视频，html，文件链，套图（大小图）',
                path: '/preview/index',
                icon: '&#xe755;'
            }, {
                name: '轮播',
                path: '/carousel/index',
                icon: '&#xe78b;'
            }]
        }, {
            name: '样式',
            subs: [{
                name: '基础',
                path: '/style/index',
                icon: '&#xe62c;'
            }, {
                name: 'checkbox',
                tip: '包装indeterminate状态，无需操作dom',
                path: '/checkbox/index',
                icon: '&#xe63f;'
            }, {
                name: '标题',
                path: '/title/index',
                icon: '&#xe786;'
            }, {
                name: '打标',
                path: '/effects/icon',
                icon: '&#xe600;'
            }, {
                name: '提示公告',
                path: '/effects/notice',
                icon: '&#xe662;'
            }, {
                name: '评分',
                path: '/effects/star',
                icon: '&#xe646;'
            }, {
                name: '进度条',
                tip: '条型，刻度型',
                path: '/effects/progress',
                icon: '&#xe6e4;'
            }, {
                name: '各种动效',
                path: '/effects/anim',
                icon: '&#xe66b;'
            }, {
                name: '空状态',
                path: '/effects/empty',
                icon: '&#xe685;'
            }]
        }, {
            name: '业务组件',
            subs: [{
                name: '阿里妈妈站点吊头',
                tip: '产品+学习与支持<a target="_blank" class="link-brand" href="//alp.alibaba-inc.com/#!/page/jsonp-editor/index?id=1375248">配置地址</a>',
                path: '/header/index',
                icon: '&#xe780;'
            }, {
                name: '阿里妈妈通用吊底',
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
            }]
        }]

        let all = [];
        list.forEach((item, index) => {
            // 默认全部展开
            item.index = index;
            item.expand = true;
            all = all.concat(item.subs);
        })
        this.updater.set({
            all,
            list
        })
    },
    render() {
        $(window).scrollTop(0);
        let that = this;
        let updater = that.updater;
        let list = updater.get('list'),
            all = updater.get('all');

        // 当前路径
        let loc = Magix.Router.parse();
        let path = loc.path;
        let view = path.slice(1);
        let i = view.indexOf('/');
        if (path.indexOf('/all/') > -1) {
            view = '__test__' + view.slice(i);
        } else {
            view = 'mx-' + view.slice(0, i) + '/__test__' + view.slice(i);
        }

        // 当前路径所属组展开
        let curNames = [];
        list.forEach(item => {
            item.subs.forEach(sub => {
                if (sub.path == path) {
                    item.expand = true;
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
        updater.digest({
            list,
            cur,
            prev,
            next,
            path,
            view,
            minHeight: $(window).height()
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
    'toggle<click>'(e) {
        let updater = this.updater;
        let list = updater.get('list');
        list[e.params.index].expand = !list[e.params.index].expand;
        updater.digest({
            list
        })
    },
    '$win<scroll>'(e) {
        let that = this;

        let mainNode = $('#' + that.id);
        let bodyNode = mainNode.find('.@base.less:main');
        let scrollTop = $(window).scrollTop();
        let bodyTop = bodyNode.offset().top;
        if (scrollTop > bodyTop) {
            if (that.updater.get('fixed')) {
                return;
            }
            that.updater.digest({
                fixed: true
            })
        } else {
            if (!that.updater.get('fixed')) {
                return;
            }
            that.updater.digest({
                fixed: false
            })
        }
    },
    '$win<resize>'() {
        let that = this;
        clearTimeout(that.winResizeTimer);

        that.winResizeTimer = setTimeout(that.wrapAsync(() => {
            that.updater.set({
                minHeight: $(window).height()
            }).digest();
        }), 200);
    }
});