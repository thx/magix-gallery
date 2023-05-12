/**
 * 通过样式控制节点显示隐藏而不是直接节点有没有
 * 同时触发keyup和fucosout的时候，一个执行了可能导致input节点没有，而另一个获取到undefined
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Form from '../mx-form/index';
import * as Validator from '../mx-form/validator';
const MxEditorPlaceholder = '${content}';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    mixins: [Form, Validator],
    init(extra) {
        let that = this;
        that.assign(extra);

        that.on('destroy', () => {
            clearTimeout(that['@{out.timer}']);
        })
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        let rules = extra.rules || {}; // form同步校验
        let asyncRules = extra.asyncRules; // 异步校验

        let content = extra.content,
            tmpl = extra.tmpl || MxEditorPlaceholder;
        that['@{old.content}'] = content;

        // width: auto / 100% / 100
        let width = isNaN(extra.width) ? (extra.width || '80px') : (extra.width + 'px');

        // 兼容老api small
        let size = extra.size || ((extra.small + '' === 'true') ? 'small' : 'normal');
        if (['small', 'normal'].indexOf(size) < 0) {
            size = 'normal';
        }

        // 禁用
        let disabled = (extra.disabled + '' === 'true');

        // 编辑笔是否固定展示
        let fixedIcon = (extra.fixedIcon + '' === 'true');

        // 格式化方法
        let replaceFn = extra.replaceFn;

        that.updater.set({
            replaceFn,
            fixedIcon,
            disabled,
            tmpl,
            dis: tmpl.replace(MxEditorPlaceholder, replaceFn ? replaceFn(content) : content),
            content,
            rules,
            asyncRules,
            size,
            width,
            editing: false,
        });
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(content);

        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{show}<click>'(e) {
        e.preventDefault();
        this.updater.digest({
            editing: true
        })
        $(`#${this.id}_input input`).focus();
    },

    '@{valid}'(val) {
        let { asyncRules, rules } = this.updater.get();
        return new Promise(resolve => {
            if (!asyncRules) {
                resolve(rules);
            } else {
                asyncRules(val).then(msg => {
                    resolve(Magix.mix(rules, {
                        fn: () => {
                            return msg;
                        }
                    }));
                })
            }
        })
    },

    async '@{out}<keyup>'(e) {
        let that = this;
        if (e.keyCode == 13) {
            let val = e.target.value;
            let rules = await this['@{valid}'](val);
            this.updater.digest({
                rules,
            });

            if (that.isValid()) {
                let { tmpl, replaceFn } = that.updater.get();
                that.updater.digest({
                    editing: false,
                    dis: tmpl.replace(MxEditorPlaceholder, replaceFn ? replaceFn(val) : val),
                    content: val
                })

                // 只触发一次trigger，此处不外抛事件
                // let val = that.updater.get('content');
                // if (that['@{old.content}'] != val) {
                //     $('#' + that.id).trigger({
                //         type: 'edit',
                //         editText: val
                //     })
                // }

            }

        }
    },

    async '@{out}<focusout>'(e) {
        e.stopPropagation();
        let that = this;
        let val = e.target.value;
        let rules = await this['@{valid}'](val);
        this.updater.digest({
            rules,
        });
        if (!that.isValid()) {
            return;
        }

        let { tmpl, content, replaceFn } = that.updater.get();
        that.updater.digest({
            editing: false,
            dis: tmpl.replace(MxEditorPlaceholder, replaceFn ? replaceFn(val) : val),
            content: val
        })

        // 只触发一次trigger
        if (that['@{old.content}'] != content) {
            // 双向绑定

            let d = {
                type: 'change',
                editText: content,
                content,
            }

            // 双向绑定对象补充
            let mxcResult = that['@{get.mxc.vars}'](that['@{owner.node}'], d);
            Magix.mix(d, mxcResult);
            that['@{owner.node}'].val(that['@{old.content}'] = content).trigger(d);

            // 兼容老的事件处理
            $('#' + that.id).trigger({
                type: 'edit',
                editText: content
            })
        }
    },

    '@{stop}<change,focusin>'(e) {
        e.stopPropagation();
    },
});