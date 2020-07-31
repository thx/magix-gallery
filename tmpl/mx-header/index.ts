import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Dialog from '../mx-dialog/index';
Magix.applyStyle('@index.less');
Magix.applyStyle('@../mx-popover/index.less');

export default View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    init(ops) {
        let me = this;
        me.updater.snapshot();
        me.assign(ops);

        me.on('destroy', () => {
            clearTimeout(me['@{hide.timer}']);
            clearTimeout(me['@{show.bottom.timer}']);
        });
    },
    assign(ops) {
        let me = this;
        let altered = me.updater.altered();

        let wrapperId = ops.wrapper || '';
        let wrapper = wrapperId ? $('#' + wrapperId) : $(window);

        let devInfo = me['@{get.dev.info}'](); // 设备信息
        let navs = ops.navs || [];
        let dark = (ops.dark + '' !== 'false'); //默认是true
        let links = (ops.links + '' !== 'false'); //是否需要顶部外链信息，默认是true
        let bottomLinks = links;
        let login = (ops.login + '' !== 'false'); //是否需要显示登录信息，默认是true
        let height,
            width = +ops.width;
        if (dark) {
            // 历史使用方式兼容
            // 黑底色版必有外链，外链处不显示用户信息
            links = true;
            login = false;
            height = 88;
            if (!width) {
                width = wrapper.outerWidth() - 120;
            }
        } else {
            // 白底版本
            height = 100;
        }
        if (!devInfo.pc) {
            links = false;
        }
        if (!links) {
            // 无线端隐藏顶部产品线信息，收起到右侧抽屉
            height -= 50;
        }

        //默认不选中任何一个导航，表示选中的一级导航
        // 如果默认为某个二级导航，订正选中态为一级的
        let valueKey = ops.valueKey || 'value',
            textKey = ops.textKey || 'text',
            linkKey = ops.linkKey || 'link'

        let cur = ops.cur || '';
        let parent = '', child = '';
        navs.forEach(nav => {
            if (nav[valueKey] == cur) {
                // 选中的是一级菜单
                parent = nav[valueKey];
                child = '';
            }

            let allLinks = nav.subs && nav.subs.length > 0;
            if (nav.subs && nav.subs.length > 0) {
                let groupMap = {};
                let pId = `${me.id}_all`;
                nav.subs.forEach(sub => {
                    // 是否全部为链接类型
                    allLinks = allLinks && !!sub[linkKey];

                    groupMap[sub.group || pId] = groupMap[sub.group || pId] || {
                        title: sub.group,
                        subs: []
                    };
                    groupMap[sub.group || pId].subs.push(sub);

                    if (sub[valueKey] == cur) {
                        // 选中的是二级菜单
                        parent = nav[valueKey];
                        child = sub[valueKey];
                    }
                })
                let groups = Object.values(groupMap);
                nav.groupInfos = {
                    showThird: (groups.length > 0) && !groupMap[pId], // 是否显示为三级结构
                    list: groups
                }
            }

            // 子选项全为外链时，点击一级菜单默认跳转第一个外链
            nav[linkKey] = nav[linkKey] || (allLinks ? nav.subs[0][linkKey] : '');

            // 移动端加icon，取后两个字
            nav.bottomText = nav[textKey].slice(-2);
            nav.icon = nav.icon || '<i class="mc-iconfont">&#xe724;</i>';
        })
        let bottomNavs = navs.slice(0, 6);
        me.updater.set({
            wrapperId,
            width,
            height,
            navs,
            valueKey,
            textKey,
            linkKey,
            parent,
            child,
            dark,
            login,
            bizCode: ops.bizCode || '',  //项目bizCode
            loginView: ops.loginView || '',  //登录页面
            user: ops.user || '',
            logoutUrl: ops.logoutUrl || '',  //退出接口
            links,
            bottomLinks,
            bottomNavs,
            styles: `top: ${(links ? 50 : 0)}px;`,
            logo: ops.logo || '//img.alicdn.com/tfs/TB12M.meYH1gK0jSZFwXXc7aXXa-392-100.png',
            ceiling: (ops.ceiling + '' !== 'false'), //是否需要吸顶功能，默认是true,
            rightCeilingShow: (ops.rightCeilingShow + '' === 'true'), // 右侧view是否默认不显示，吸顶时显示
            rightView: ops.rightView || '',  //右侧自定义view
            rightViewData: ops.rightViewData || {},
            devInfo
        })
        me['@{wrapper}'] = wrapper;

        if (!altered) {
            altered = me.updater.altered();
        }
        if (altered) {
            me.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        let me = this;
        $.getJSON('//g.alicdn.com/mm/bp-source/lib/code.json', (data) => {
            me.updater.digest({
                list: data.products,
                fixed: false,
                bottomNavShow: true
            });

            let { wrapperId, links, ceiling, devInfo } = me.updater.get();
            if (!me['@{init.header.scroll}'] && ceiling) {
                let wrapper = me['@{wrapper}'];
                let scrollFn = () => {
                    let others = $('#' + me.id + ' .@index.less:others');
                    let otherHeight = 0;
                    if (others.length > 0) {
                        otherHeight = others.outerHeight()
                    }
                    let scrollTop = wrapper.scrollTop();
                    let styles = [
                        'width: 100%',
                        'left: 0'
                    ];
                    if (wrapperId) {
                        styles.push(
                            'position: absolute',
                            'top: ' + scrollTop + 'px'
                        )
                    } else {
                        styles.push(
                            'position: fixed',
                            'top: 0'
                        )
                    }
                    if (scrollTop > otherHeight) {
                        me.updater.digest({
                            fixed: true,
                            styles: styles.join(';')
                        })
                    } else {
                        me.updater.digest({
                            fixed: false,
                            styles: `top: ${(links ? 50 : 0)}px;`
                        })
                    }
                }
                me['@{init.header.scroll}'] = 1;
                wrapper.on('scroll.header', scrollFn);
                me.on('destroy', () => {
                    wrapper.off('scroll.header', scrollFn);
                })
                scrollFn();
            }

            if (!me['@{init.bottom.scroll}'] && (devInfo.phone || devInfo.pad)) {
                let wrapper = me['@{wrapper}'];
                let scrollFn = () => {
                    // 滚动时底部导航隐藏，滚动结束再显示
                    clearTimeout(me['@{show.bottom.timer}']);
                    me['@{show.bottom.timer}'] = setTimeout(() => {
                        me.updater.digest({
                            bottomNavShow: true
                        })
                    }, 400)
                    me.updater.digest({
                        bottomNavShow: false
                    })
                }
                me['@{init.bottom.scroll}'] = 1;
                wrapper.on('scroll.bottom', scrollFn);
                me.on('destroy', () => {
                    wrapper.off('scroll.bottom', scrollFn);
                })
            }
        })
    },
    'to<click>'(event) {
        let me = this;
        let { navs, valueKey, linkKey } = me.updater.get();
        let { nav = {}, sub = {} } = event.params;

        if ($.isEmptyObject(sub)) {
            // 点击一级的情况：
            // 1：无二级
            //     1-1：本身外链  --  页面上a标签直接打开了不会进入该方法
            //     1-2：本身对应一个页面  --  处理：跳转对应页面
            // 2：有二级
            //     2-1：全部外链  --  处理：不需响应
            //     2-2：有本页打开内容  --  处理：跳转第一个本页打开的内容
            if (!nav.subs || !nav.subs.length) {
                // 无二级
            } else {
                // 有二级
                let subs = nav.subs || [];
                let allOuts = true;
                for (let i = 0; i < subs.length; i++) {
                    if (!subs[i][linkKey]) {
                        sub = subs[i];
                        allOuts = false;
                        break;
                    }
                }
                if (allOuts) {
                    return;
                }
            }
        }

        // 当前选中的tab
        let selected = {};
        if ($.isEmptyObject(sub)) {
            // 一级导航
            selected = nav;
        } else {
            // 二级导航
            selected = sub;
        }

        // 高亮一级导航
        navs.forEach(n => {
            n.hover = false;
        })
        me.updater.digest({
            parent: nav[valueKey] || '',
            child: sub[valueKey] || ''
        })

        $('#' + me.id).trigger({
            type: 'navchange',
            nav: selected
        })
    },

    /**
     * bizCode：各产品bizCode，用于包装登陆框逻辑
     * loginView：已废弃，用bizCode替换，根据bizCode项目包装登陆框逻辑（历史逻辑依然兼容）
     */
    'showLogin<click>'(e) {
        let { bizCode, loginView } = this.updater.get();
        if (!bizCode) {
            this.mxLoginView(loginView);
        } else {
            this.mxLoginView({
                bizCode
            });
        }
    },
    'enter<focusin>'(e) {
        $(e.eventTarget).attr('data-hover', true);
    },
    'out<focusout>'(e) {
        $(e.eventTarget).attr('data-hover', false);
    },

    'showSubs<mouseover>'(e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let me = this;
        clearTimeout(me['@{hide.timer}']);
        let { navIndex } = e.params;
        let { navs } = me.updater.get();
        for (let i = 0; i < navs.length; i++) {
            navs[i].hover = (navIndex == i);
        }
        me.updater.digest({
            navs
        })
    },
    'enterSubs<mouseover>'(e) {
        clearTimeout(this['@{hide.timer}']);
    },
    'hideSubs<mouseout>'(e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let me = this;
        clearTimeout(me['@{hide.timer}']);

        me['@{hide.timer}'] = setTimeout(() => {
            let { navIndex } = e.params;
            let { navs } = me.updater.get();
            navs[navIndex].hover = false;
            me.updater.digest({
                navs
            })
        }, 200)
    },

    'showDrawer<click>'(e) {
        let me = this;
        let { list, spm } = me.updater.get();
        let dlg = me.mxModal('@./drawer', {
            data: {
                list,
                spm
            }
        }, {
                width: 220,
                footer: {
                    enter: false,
                    cancel: false
                },
                card: false
            });

        me.updater.digest({
            bottomNavShow: false
        })

        dlg.afterClose(e => {
            me.updater.digest({
                bottomNavShow: true
            })
        })
    }
});
