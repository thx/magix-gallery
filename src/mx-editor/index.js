/**
 * 通过样式控制节点显示隐藏而不是直接节点有没有
 * 同时触发keyup和fucosout的时候，一个执行了可能导致input节点没有，而另一个获取到undefined
 */
let Magix = require('magix');
let Form = require('@..//mx-form/index');
let Validator = require('@../mx-form/validator');
Magix.applyStyle('@index.less');
let Placeholder = '${content}';

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Form, Validator],
    init(extra) {
        let that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);

        that.on('destroy', () => {
            clearTimeout(that['@{out.timer}']);
        })
    },
    assign(extra) {
        let that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        let altered = that.updater.altered();

        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        let rules = extra.rules || {},
            content = extra.content,
            small = (/^true$/i).test(extra.small),
            tmpl = extra.tmpl || Placeholder;
        that['@{old.content}'] = content;
        that.updater.set({
            viewId: that.id,
            tmpl,
            dis: tmpl.replace(Placeholder, content),
            content,
            rules,
            small,
            width: extra.width || 140,
            editing: false
        });
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(content);

        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }

        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }

        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    render() {
        this.updater.digest();
    },
    '@{show}<click>'(e) {
        e.preventDefault();
        this.updater.digest({
            editing: true
        })
        $('#' + this.id + '_input').focus();
    },
    '@{out}<keyup>'(e) {
        let that = this;
        let valid = that.isValid();

        if ((e.keyCode == 13) && valid) {
            let val = e.target.value;
            let tmpl = that.updater.get('tmpl');
            that.updater.digest({
                editing: false,
                dis: tmpl.replace(Placeholder, val),
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
    },

    '@{stop}<change,focusin>'(e) {
        e.stopPropagation();
    },

    '@{out}<focusout>'(e) {
        e.stopPropagation();
        let that = this;

        let valid = that.isValid();
        if (!valid) {
            return;
        }

        let val = e.target.value;
        let { tmpl, content } = that.updater.get();
        that.updater.digest({
            editing: false,
            dis: tmpl.replace(Placeholder, val),
            content: val
        })

        // 只触发一次trigger
        if (that['@{old.content}'] != content) {
            // 双向绑定
            that['@{owner.node}'].val(content).trigger({
                type: 'change',
                editText: content
            });

            // 兼容老的事件处理
            $('#' + that.id).trigger({
                type: 'edit',
                editText: content
            })
        }
    }
});