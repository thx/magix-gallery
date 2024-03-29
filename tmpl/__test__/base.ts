import Magix, { Router } from 'magix';
import * as $ from '$';
import Menu from './menu';
import * as Guides from '../mx-guides/index';
Magix.applyStyle('@global.style');
Magix.applyStyle('@scoped.style');
Magix.applyStyle('@base.less');

export default Magix.View.extend({
    tmpl: '@base.html',
    mixins: [Guides],
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

        let gallerys = $.extend(true, [], Menu.gallery);
        gallerys[0].subs.unshift({
            name: '更新记录',
            path: '/all/update'
        });

        let headers = [{
            id: 'gallery',
            name: '组件',
            path: '/btn/index',
            paths: gallerys
        }, {
            id: 'edit',
            name: '主题在线编辑',
            // new: that.getCookie('header_edit') ? '' : '在线调整颜色，快速生成项目预览，定制专属配色方案',
            path: '/all/edit/index',
            paths: [{
                subs: [{
                    name: '整体效果预览',
                    path: '/all/edit/index'
                }]
            }, {
                name: '变量配置细节说明',
                subs: [{
                    name: '品牌色相关',
                    path: '/all/var/brand'
                }, {
                    name: '组件trigger及展开项',
                    path: '/all/var/trigger'
                }, {
                    name: '按钮',
                    path: '/all/var/btn'
                }, {
                    name: '其他基础配置',
                    path: '/all/var/basis'
                }]
            }]
        }];

        if (location.host.indexOf('thx.github.io') < 0) {
            // 外网不透出脚手架相关
            headers.push({
                id: 'scaffold',
                name: '脚手架',
                path: '/all/pro/init',
                paths: [{
                    name: '基础约定',
                    subs: [{
                        name: '10分钟快速上手',
                        path: '/all/pro/init'
                    }, {
                        name: '关于项目文件目录的约定',
                        path: '/all/pro/theme'
                    }, {
                        name: '【Magix微前端】跨项目公用view',
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
                        tip: '<a href="http://data.alimama.net/" target="_blank" rel="noopener noreferrer" class="color-brand">http://data.alimama.net/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml4"><i class="mc-iconfont color-brand fontsize-18">&#xe677;</i>浩添</a>',
                        path: '/all/pro/data'
                    }, {
                        name: '淘宝登录框接入',
                        tip: '接入文档<a rel="noopener noreferrer" href="https://yuque.antfin-inc.com/up/login-doc/rgfgka" target="_blank" class="link-brand">https://yuque.antfin-inc.com/up/login-doc/rgfgka</a>',
                        path: '/all/pro/login'
                    }]
                }, {
                    name: '常见业务场景示例',
                    subs: [{
                        name: 'mx-loading 和 showLoading',
                        path: '/all/pro/loading'
                    }, {
                        name: '筛选项 + 展示列表',
                        path: '/all/pro/list'
                    }, {
                        name: '页面监听参数变化回到顶部',
                        path: '/all/pro/top'
                    }]
                }]
            }, {
                id: 'pro',
                name: 'PRO',
                // new: that.getCookie('header_pro') ? '' : '广告投放bp完整示例，借助rap模拟真实应用',
                outer: 'https://mo.m.taobao.com/one-stop/page_20220622_134853_227'
            })
        }

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
                Magix.mix(sub, {
                    index: subIndex,
                    cur: sub.path == path,
                })

                if (sub.cur) {
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
                        tip: sub.tip,
                    };
                }
            });
        });

        that.updater.digest({
            viewId: that.id,
            headers,
            suggests,
            count,
            list,
            cur,
            prev,
            next,
            path,
            view,
            minHeight: window.innerHeight,
            theme: {
                show: false,
                color: that.getCookie('gallery_theme_color') || '#51a300'
            },
        });

        // let themeCount = +that.getCookie('gallery_theme_20220315_0') || 0;
        // if (themeCount < 1) {
        //     let guideDlg = that.showMxGuides({
        //         mode: 'point',
        //         list: [{
        //             sizzle: `#base_logo_${that.id}`,
        //             img: 'https://img.alicdn.com/imgextra/i1/O1CN01OzBsJh1XA0ChMhJO1_!!6000000002882-2-tps-128-200.png',
        //             title: '更新提示',
        //             tip: '点击logo快速切换多种主题样式',
        //             placement: 'bottom',
        //             offset: {
        //                 left: 60
        //             }
        //         }]
        //     });
        //     guideDlg.on('cancel', (e) => {
        //         // 30天过期
        //         that.setCookie('gallery_theme_20220315_0', themeCount + 1, `h${(24 * 30)}`);
        //     })
        // }

        // 当前选中项滚动到可视范围之内
        try {
            let selectedItem = document.querySelector('#' + that.id + ' .@./base.less:cur-nav'),
                inner = document.querySelector('#' + that.id + ' .@./base.less:base-left');
            let { top: it, height: ih } = inner.getBoundingClientRect(),
                { top: st, height: sh } = selectedItem.getBoundingClientRect(),
                scrollTop = inner.scrollTop;
            // 20 headerheight 间距的影响
            let gap = st - 20 - it;
            if (gap > ih || (gap + sh > ih)) {
                inner.scrollTo({
                    top: scrollTop + (gap - ih) + sh + 100,
                });
            } else if (gap < 0) {
                inner.scrollTo({
                    top: scrollTop + gap - 100,
                });
            } else {
                // 可见范围内
            }
        } catch (error) {

        }
    },

    'showPicker<click>'(e) {
        let { theme } = this.updater.get();
        this.updater.digest({
            theme: Magix.mix(theme, {
                show: true,
            })
        });
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

        let { theme } = this.updater.get();
        this.updater.digest({
            theme: Magix.mix(theme, {
                show: false,
            })
        });
    },

    '$doc<click>'(event) {
        let { theme } = this.updater.get();
        if (theme.show) {
            let node = $('#' + this.id + ' .@base.less:base-logo');
            let target = event.target;
            if (!Magix.inside(target, node[0])) {
                this.updater.digest({
                    theme: Magix.mix(theme, {
                        show: false,
                    })
                });
            }
        }
    },

    'suggest<change>'(e) {
        let value = e.selected;
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
        let winHeight = window.innerHeight;
        this.updater.set({
            minHeight: winHeight
        });
        $('#' + this.id).find('.@base.less:base-left').css('height', winHeight);
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
            return decodeURIComponent(arr[2]);
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

        document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + exp.toGMTString();
    }
});