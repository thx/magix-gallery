import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';

export default View.extend({
    tmpl: '@../mx-dropdown/bd.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        Monitor['@{setup}']();

        this['@{owner.node}'] = $('#' + this.id);

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + this.id)[0].hasAttribute('mx-disabled');

        let time = extra.time;
        if (!time) {
            let format = t => {
                if (t < 10) return '0' + t;
                return t;
            };

            let d = new Date();
            time = format(d.getHours()) + ':' +
                format(d.getMinutes()) + ':' +
                format(d.getSeconds());
        }

        this.updater.set({
            disabled,
            time,
            types: extra.types,
        });

        this.on('destroy', () => {
            ['@{dealy.show.timer}', '@{dealy.hide.timer}', '@{anim.timer}'].forEach(timerKey => {
                if (this[timerKey]) {
                    clearTimeout(this[timerKey]);
                }
            });

            $('#time_bd_' + this.id).remove();
            Monitor['@{remove}'](this);
            Monitor['@{teardown}']();
        });

        // 固定刷新
        return true;
    },
    render() {
        this.updater.digest();
        this['@{val}']();
    },

    '@{val}'(fire) {
        let { time } = this.updater.get();
        this['@{owner.node}'].val(time);
        if (fire) {
            this['@{owner.node}'].trigger({
                type: 'change',
                time,
            });
        }
    },

    '@{init}'() {
        let me = this;

        let toggleNode = $('#toggle_' + me.id);
        let posWidth = toggleNode.outerWidth(),
            vId = me.id;

        let width = Math.max(posWidth, 220);
        let ddId = `time_bd_${vId}`;
        let ddNode = $(`#${ddId}`);
        if (!ddNode.length) {
            ddNode = $(`<div mx-view class="mx-output-bottom" id="${ddId}"
                style="width: ${width}px;"></div>`);
            $(document.body).append(ddNode);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe(ddId, '');
        vf.on('created', () => {
            me['@{setPos}']();
        });
        me['@{content.vf}'] = vf;
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'time_bd_' + this.id);
    },

    '@{show}'() {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        if (!me['@{pos.init}']) {
            me['@{pos.init}'] = true;
            me['@{init}']();
        }

        let { expand } = me.updater.get();
        if (expand) {
            return;
        };

        me['@{content.vf}'].mountView('@./content', {
            // data,
            prepare: () => {
                // 每次show时都重新定位
                let ddNode = me['@{setPos}']();
                ddNode.addClass('mx-output-open');
                Monitor['@{add}'](me);
            },
            submit: (result) => {
                // 选中
                me['@{hide}']();
                me.updater.set(result);
                me['@{val}'](true);
            },
            cancel: () => {
                // 关闭
                me['@{hide}']();
            },
        })
        me.updater.digest({
            expand: true
        })
    },

    '@{hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        let { expand } = me.updater.get();
        if (expand) {
            me.updater.digest({
                expand: false
            })
            let ddNode = $('#time_bd_' + me.id);
            ddNode.removeClass('mx-output-open');
            Monitor['@{remove}'](me);
        }
    },
    '@{setPos}'() {
        let me = this;
        let oNode = me['@{owner.node}'];
        let ddNode = $('#time_bd_' + me.id);

        let winWidth = window.innerWidth,
            winHeight = window.innerHeight,
            winScrollTop = $(window).scrollTop(),
            height = oNode.outerHeight(),
            offset = oNode.offset(),
            rWidth = ddNode.outerWidth(),
            rHeight = ddNode.outerHeight();

        let top = offset.top + height,
            left = offset.left;
        // 修正到可视范围之内
        if (top + rHeight > winHeight + winScrollTop) {
            top = winHeight + winScrollTop - rHeight - 10;
        }
        if (left + rWidth > winWidth) {
            let scrollbarWidth = winWidth - document.documentElement.clientWidth;
            left = winWidth - rWidth - scrollbarWidth;
        }
        ddNode.css({ left, top });
        return ddNode;
    },

    '@{toggle}<click>'(e) {
        let me = this;
        if (me.updater.get('animing')) {
            return;
        };

        // 扩散动画时长变量
        let ms = me['@{get.css.var}']('--mx-comp-expand-amin-timer');

        // 只记录状态不digest
        let node = e.eventTarget;
        me.updater.set({ animing: true })
        node.setAttribute('mx-comp-expand-amin', 'animing');
        me['@{anim.timer}'] = setTimeout(() => {
            node.setAttribute('mx-comp-expand-amin', 'animend');
            me.updater.set({ animing: false })
        }, ms.replace('ms', ''));

        let expand = me.updater.get('expand');
        if (expand) {
            me['@{hide}']();
        } else {
            me['@{show}']();
        }
    },

    // '@{hide}<click>'(e) {
    //     let me = this;

    //     let oldTime = me.updater.get('time');
    //     let newTime = oldTime;
    //     if (e.params.enter) {
    //         // 确定
    //         let vf = Magix.Vframe.get(me.id + '_content');
    //         newTime = vf.invoke('val');
    //     }
    //     me['@{hide}']();
    //     if (e.params.enter) {
    //         // 确定
    //         if (oldTime != newTime) {
    //             me.updater.digest({
    //                 time: newTime
    //             });
    //             me['@{owner.node}'].val(newTime).trigger({
    //                 type: 'change',
    //                 time: newTime
    //             });
    //         }
    //     }
    // },
    // '@{stop}<change,focusin,focusout>'(e) {
    //     e.stopPropagation();
    // }
});