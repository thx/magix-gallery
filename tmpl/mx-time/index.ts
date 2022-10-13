import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        Monitor['@{setup}']();
        this.assign(extra);

        this.on('destroy', () => {
            $('#mx_output_' + this.id).remove();
            Monitor['@{remove}'](this);
            Monitor['@{teardown}']();

            if (this['@{anim.timer}']) {
                clearTimeout(this['@{anim.timer}']);
            }
        });
    },
    assign(extra) {
        this['@{owner.node}'] = $('#' + this.id);
        this.updater.snapshot();

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
            configs: {
                time,
                types: extra.types,
                hourMin: extra.hourMin,
                hourMax: extra.hourMax,
                minuteMin: extra.minuteMin,
                minuteMax: extra.minuteMax,
                secondMin: extra.secondMin,
                secondMax: extra.secondMax,
            }
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{val}']();
    },

    '@{val}'(fire) {
        let { configs: { time } } = this.updater.get();
        this['@{owner.node}'].val(time);
        if (fire) {
            this['@{owner.node}'].trigger({
                type: 'change',
                time,
            });
        }
    },

    '@{init}'() {
        let vId = this.id;

        let ddId = `mx_output_${vId}`;
        let ddNode = $(`#${ddId}`);
        if (!ddNode.length) {
            ddNode = $(`<div mx-view class="mx-output" style="min-width: 0; max-width: none; width: 220px;" id="${ddId}"></div>`);
            $(document.body).append(ddNode);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = this.owner.mountVframe(ddId, '');
        vf.on('created', () => {
            this['@{set.pos}']();
        });
        this['@{content.vf}'] = vf;
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'mx_output_' + this.id);
    },

    '@{show}'() {
        if (!this['@{pos.init}']) {
            this['@{pos.init}'] = true;
            this['@{init}']();
        }

        if (this.updater.get('expand')) {
            return;
        }

        let { configs } = this.updater.get();
        this['@{content.vf}'].mountView('@./content', {
            data: {
                showBtns: true,
                ...configs,
            },
            prepare: () => {
                // 每次show时都重新定位
                let ddNode = this['@{set.pos}']();
                this['@{mx.output.show}'](ddNode);
                Monitor['@{add}'](this);
            },
            submit: (newTime) => {
                this['@{hide}']();
                this.updater.digest({
                    configs: Magix.mix(configs, {
                        time: newTime,
                    })
                });
                this['@{val}'](true);
            },
            cancel: () => {
                this['@{hide}']();
            },
        })
        this.updater.digest({
            expand: true
        })
    },

    '@{hide}'() {
        if (this.updater.get('expand')) {
            this.updater.digest({
                expand: false
            })
            let ddNode = $('#mx_output_' + this.id);
            this['@{mx.output.hide}'](ddNode);
            Monitor['@{remove}'](this);
        }
    },

    '@{set.pos}'() {
        let oNode = this['@{owner.node}'];
        let ddNode = $('#mx_output_' + this.id);

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
        if (this.updater.get('animing')) {
            return;
        };

        // 只记录状态不digest
        let node = e.eventTarget;
        this.updater.set({ animing: true })
        node.setAttribute('mx-comp-expand-amin', 'animing');
        this['@{anim.timer}'] = setTimeout(() => {
            node.setAttribute('mx-comp-expand-amin', 'animend');
            this.updater.set({ animing: false })
        }, this['@{get.css.time.var}']('--mx-comp-expand-amin-timer'));

        let expand = this.updater.get('expand');
        if (expand) {
            this['@{hide}']();
        } else {
            this['@{show}']();
        }
    }
});