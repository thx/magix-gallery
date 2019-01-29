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
            name: '组件',
            path: '/form/mixins'
        }, {
            name: '脚手架',
            path: '/all/pro/init'
        }, {
            name: '其他杂项',
            path: '/all/other/update'
        }]
        let map = {
            0: [{
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
                }]
            }, {
                name: '表单（mixins）',
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
                }, {
                    name: '异常情况记录',
                    path: '/form/error',
                    icon: '&#xe611;'
                }]
            }, {
                name: '表格（mixins）',
                subs: [{
                    name: '表格使用说明及注意点',
                    path: '/table/desc',
                    icon: '&#xe64f;'
                }, {
                    name: '表格左右分栏',
                    path: '/table/index1',
                    icon: '&#xe693;'
                }, {
                    name: '表头分组 + 子表格',
                    path: '/table/index2',
                    icon: '&#xe770;'
                }, {
                    name: '操作项在下方',
                    path: '/table/index3',
                    icon: '&#xe7b5;'
                }, {
                    name: '操作项在同一行',
                    path: '/table/index4',
                    icon: '&#xe7b5;'
                }, {
                    name: '表头吸顶',
                    path: '/table/index11',
                    icon: '&#xe641;'
                }, {
                    name: '指标排序',
                    path: '/table/index10',
                    icon: '&#xe608;'
                }, {
                    name: '展开子表格',
                    path: '/table/index6',
                    icon: '&#xeb73;'
                }, {
                    name: 'checkbox选中操作行',
                    tip: 'mixins&nbsp;[mx-checkbox/storestate]&nbsp;和&nbsp;[mx-checkbox/linkage]',
                    path: '/table/index7',
                    icon: '&#xe695;'
                }, {
                    name: '翻页版',
                    path: '/table/index5',
                    icon: '&#xe655;'
                }, {
                    name: '普通表格',
                    path: '/table/index8',
                    icon: '&#xe63e;'
                }, {
                    name: '任意colspan的计算',
                    path: '/table/index9',
                    icon: '&#xe79b;'
                }, {
                    name: '筛选项同表头一起吸顶',
                    path: '/table/index12',
                    icon: '&#xe641;'
                }]
            }, {
                name: '数据交互',
                subs: [{
                    name: '下拉框（单选）',
                    tip: '支持click展开和hover展开两种形式；下拉列表在组件内；支持双向绑定',
                    path: '/dropdown/index',
                    icon: '&#xe7a4;'
                }, {
                    name: '下拉框（多选）',
                    tip: '支持click展开和hover展开两种形式；下拉列表在组件内；支持双向绑定',
                    path: '/dropdown/multiple',
                    icon: '&#xe7a4;'
                }, 
                // {
                //     name: '下拉框（追加到body版）',
                //     tip: '支持click展开和hover展开两种形式',
                //     path: '/dropdown/dd',
                //     icon: '&#xe7a4;'
                // }, 
                {
                    name: '日历（选择单日）',
                    tip: '支持双向绑定',
                    path: '/calendar/index',
                    icon: '&#xe60e;'
                }, {
                    name: '日历（选择时间段）',
                    tip: '支持双向绑定',
                    path: '/calendar/range',
                    icon: '&#xe60e;'
                }, {
                    name: '时分秒选择',
                    tip: '支持双向绑定',
                    path: '/time/index',
                    icon: '&#xe604;'
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
                    name: '搜索',
                    tip: '支持选择类型搜索和普通搜索',
                    path: '/search/index',
                    icon: '&#xe651;'
                }, {
                    name: '可选项提示suggest',
                    tip: '支持双向绑定',
                    path: '/suggest/index',
                    icon: '&#xe654;'
                }, {
                    name: '开关',
                    tip: '支持双向绑定',
                    path: '/switch/index',
                    icon: '&#xe72c;'
                }, {
                    name: '树状结构',
                    path: '/tree/index',
                    icon: '&#xe62b;'
                }, {
                    name: '级联选择',
                    tip: '支持双向绑定',
                    path: '/cascade/index',
                    icon: '&#xe60a;'
                }, {
                    name: '二级单选',
                    path: '/secradio/index',
                    icon: '&#xe657;'
                }, {
                    name: '标签选择',
                    tip: '支持双向绑定',
                    path: '/taginput/index',
                    icon: '&#xe794;'
                }, {
                    name: 'popmenu更多菜单',
                    path: '/popmenu/index',
                    icon: '&#xe62c;'
                }, {
                    name: '上传',
                    path: '/uploader/index',
                    icon: '&#xe63c;'
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
                }, {
                    name: '复制',
                    tip: '该组件引入了第三方 <a rel="noopener noreferrer" target="_blank" href="https://zenorocha.github.io/clipboard.js" class="color-brand">https://zenorocha.github.io/clipboard.js</a> 代码',
                    path: '/copy/index',
                    icon: '&#xe610;'
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
                    name: '全局提示',
                    path: '/gtip/index',
                    icon: '&#xe662;'
                }, {
                    name: '异常页面',
                    tip: '404找不到页面',
                    path: '/error/index',
                    icon: '&#xe611;'
                }, {
                    name: '万象客服问答',
                    tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/wanxiang/technology/description" target="_blank"  rel="noopener noreferrer">服务窗接入wiki文档</a>',
                    path: '/wanxiang/index',
                    icon: '&#xe767;'
                }, {
                    name: '钉钉唤起',
                    tip: '<a class="color-brand" href="https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7386797.0.0.WN76gC&treeId=176&articleId=106086&docType=1" target="_blank"  rel="noopener noreferrer">钉钉PC端统一跳转协议</a>',
                    path: '/im/dingding',
                    icon: '&#xe677;'
                }, {
                    name: '旺旺点灯',
                    tip: '<a class="color-brand" href="http://gitlab.alibaba-inc.com/aliww/web.ww" target="_blank"  rel="noopener noreferrer">接入说明</a>',
                    path: '/im/wangwang',
                    icon: '&#xe75c;'
                }]
            }, {
                name: '数据展示',
                subs: [{
                    name: '浮层',
                    tip: 'Magix.View上挂载mxDialog（新开浮层），alert（提醒），confirm（二次确认），mxDialogGroup（内容分组显示）',
                    path: '/dialog/index',
                    icon: '&#xe7ff;'
                }, {
                    name: '全屏右出浮层',
                    tip: 'Magix.View上挂载mxModal',
                    path: '/dialog/modal',
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
                name: '流程类',
                subs: [{
                    name: '侧边导航分步流程',
                    path: '/main/index',
                    icon: '&#xe64c;'
                }, {
                    name: '简单横向分步流程',
                    path: '/main/hor',
                    icon: '&#xe690;'
                }, {
                    name: '简单纵向分步流程',
                    path: '/main/ver',
                    icon: '&#xe65e;'
                }]
            }, {
                name: '样式',
                subs: [{
                    name: '布局',
                    tip: '基于display:flex实现，简化api',
                    path: '/grid/index',
                    icon: '&#xe6b4;'
                }, {
                    name: 'checkbox',
                    tip: '包装indeterminate状态，只负责对样式进行控制',
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
                    name: '进度比例',
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
                }, {
                    name: '其他常用',
                    path: '/style/index',
                    icon: '&#xe62c;'
                }]
            }, {
                name: '业务组件',
                subs: [{
                    name: '阿里妈妈站点吊头',
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
            }],
            1: [{
                subs: [{
                    name: '10分钟快速上手',
                    path: '/all/pro/init'
                }, {
                    name: '定制主题 + 覆盖组件样式',
                    path: '/all/pro/theme'
                }, {
                    name: '菜单配置',
                    path: '/all/pro/menu'
                }, {
                    name: 'magix3跨项目公用view',
                    path: '/all/pro/cross'
                }, {
                    name: '关于本地组件的约定',
                    path: '/all/pro/local'
                }, {
                    name: 'chartpark图表',
                    tip: '<a href="https://chartpark.alibaba-inc.com/" target="_blank" rel="noopener noreferrer" class="color-brand">https://chartpark.alibaba-inc.com/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=ru4x0jq" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>释剑</a><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>浩添</a>',
                    path: '/all/pro/chartpark'
                }, {
                    name: '数据小站接入',
                    tip: '<a href="http://data.alimama.net/" target="_blank" rel="noopener noreferrer" class="color-brand">http://data.alimama.net/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>浩添</a>',
                    path: '/all/pro/data'
                }, {
                    name: '淘宝登陆框接入',
                    tip: '接入文档<a rel="noopener noreferrer" href="https://lark.alipay.com/up/login-doc/xvgy82" target="_blank" class="link-brand">https://lark.alipay.com/up/login-doc/xvgy82</a>',
                    path: '/all/pro/login'
                }, {
                    name: '页面监听参数变化回到顶部',
                    path: '/all/pro/top'
                }]
            }],
            2: [{
                subs: [{
                    name: '更新记录',
                    path: '/all/other/update'
                }, {
                    name: '相关链接',
                    path: '/all/other/links'
                }]
            }]
        }
        let curIndex = 0;
        if (path.indexOf('/all/other/') > -1) {
            // 脚手架相关内容
            curIndex = 2;
        } else if (path.indexOf('/all/pro/') > -1) {
            // 脚手架相关内容
            curIndex = 1;
        }
        headers[curIndex].cur = true;
        let list = map[curIndex];

        let suggests = [],  //全局提示
            all = []; // 当前tab可选
        for (let i in map) {
            map[i].forEach((item) => {
                let subs = $.extend(true, [], item.subs);
                subs.forEach(sub => {
                    sub.text = headers[i].name + ' - ' + sub.name;
                    sub.value = sub.path;
                    sub.value = 'mx-' + sub.value.slice(1);
                })
                suggests = suggests.concat(subs);
            })

            if (i == curIndex) {
                map[i].forEach((item, index) => {
                    // 默认全部展开
                    item.index = index;
                    item.close = that.$map[item.subs[0].path] || false;
                    all = all.concat(item.subs);
                })
            }
        }

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
        updater.digest({
            headers,
            suggests,
            all,
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
        
        // clearTimeout(that.winResizeTimer);

        // that.winResizeTimer = setTimeout(that.wrapAsync(() => {
        //     that.updater.set({
        //         minHeight: $(window).height()
        //     }).digest();
        // }), 200);
    },
    'back<click>'(e) {
        $(window).scrollTop(0);
    }
});
