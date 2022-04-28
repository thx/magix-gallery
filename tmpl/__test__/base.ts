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
            minHeight: $(window).height(),
            theme: {
                show: false,
                color: that.getCookie('gallery_theme_color') || '#51a300'
            },
        });

        let themeCount = +that.getCookie('gallery_theme_20220315_0') || 0;
        if (themeCount < 1) {
            let guideDlg = that.showMxGuides({
                mode: 'point',
                list: [{
                    sizzle: `#base_logo_${that.id}`,
                    img: 'https://img.alicdn.com/imgextra/i1/O1CN01OzBsJh1XA0ChMhJO1_!!6000000002882-2-tps-128-200.png',
                    title: '更新提示',
                    tip: '点击logo快速切换多种主题样式',
                    placement: 'bottom',
                    offset: {
                        left: 60
                    }
                }]
            });
            guideDlg.on('cancel', (e) => {
                // 30天过期
                that.setCookie('gallery_theme_20220315_0', themeCount + 1, `h${(24 * 30)}`);
            })
        }

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
        let that = this;
        let winHeight = $(window).height();
        let mainNode = $('#' + that.id);
        let leftNode = mainNode.find('.@base.less:base-left');
        that.updater.set({
            minHeight: winHeight
        });
        leftNode.css('height', winHeight);
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