import Magix, { Router } from 'magix';
import * as $ from '$';
import Menu from '../menu';
import Base from '../base';

export default Base.extend({
    init() {
        this.updater.set({
            placeholder: 'test_version',
        });

        this.observeLocation(['comp']);
    },
    render() {
        window.scrollTo(0, 0);
        let that = this;
        let { placeholder } = that.updater.get();
        let { params, path } = Router.parse();
        let reg = /\//g;
        let defComp = ('/btn/index').replace(reg, placeholder);
        let comp = params.comp || defComp;

        let gallerys = $.extend(true, [], Menu.gallery);
        let headers = [{
            cur: true,
            id: 'gallery',
            name: '组件',
            path: `${path}?comp=${defComp}`,
            paths: gallerys.map(item => {
                return {
                    ...item,
                    subs: item.subs.map(sub => {
                        let subComp = sub.path.replace(reg, placeholder);
                        return {
                            ...sub,
                            comp: subComp,
                            path: `${path}?comp=${subComp}`,
                        }
                    })
                };
            })
        }];

        // 组件搜索
        let suggests = [];
        Menu.gallery.forEach(item => {
            item.subs.map(sub => {
                suggests.push({
                    ...sub,
                    text: (item.name ? `【${item.name}】` : '') + (sub.fullName || sub.name) + (sub.tip ? `<span class="color-9 ml10">${sub.tip}</span>` : ''),
                    value: 'mx-' + sub.path.slice(1),
                })
            })
        });

        // 当前组件路径
        let view = (comp.replace(new RegExp(`${placeholder}`, 'g'), '/')).slice(1);
        let i = view.indexOf('/');
        if (view.startsWith('all/')) {
            view = '__test__' + view.slice(i);
        } else {
            view = 'mx-' + view.slice(0, i) + '/__test__' + view.slice(i);
        }

        // 当前路径所属组
        let list = headers[0].paths;
        let cur = {}, prev = {}, next = {};
        let count = 0;
        list.forEach((item, index) => {
            Magix.mix(item, {
                index,
            })
            item.subs.forEach((sub, subIndex) => {
                count++;
                Magix.mix(sub, {
                    index: subIndex,
                    cur: sub.comp == comp,
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
                        tip: sub.tip
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

        // 当前选中项滚动到可视范围之内
        try {
            let selectedItem = document.querySelector('#' + that.id + ' .@../base.less:cur-nav'),
                inner = document.querySelector('#' + that.id + ' .@../base.less:base-left');
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

    'suggest<change>'(e) {
        let { placeholder } = this.updater.get();
        let { path } = Router.parse();
        let reg = /\//g;
        let comp = e.item.path.replace(reg, placeholder);
        Magix.Router.to(`${path}?comp=${comp}`);
    },
});