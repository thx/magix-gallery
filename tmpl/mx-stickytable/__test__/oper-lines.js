let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@oper-lines.html',
    render() {
        let options = [{
            key: '&lt;tr <span class="color-brand">mx-stickytable-operation="line"</span>&gt;&lt;/tr&gt;',
            desc: '配置在tr上属性mx-stickytable-operation="line"<br/>表示该行为操作行<br/>默认不显示，hover时显示'
        }, {
            key: '&lt;td <span class="color-brand">mx-stickytable-operation="item"</span>&gt;&lt;/td&gt;',
            desc: '配置在td上属性mx-stickytable-operation="item"<br/>表示该单元格为同一行的操作项<br/>默认不显示，hover时显示'
        }];

        let list = [];
        for (let i = 0; i < 10; i++) {
            let item = {
                name: 'test'
            }
            for (let j = 0; j < 20; j++) {
                Magix.mix(item, {
                    [`field${j}`]: j
                })
            }
            list.push(item);
        }

        let fields = [];
        for (let i = 0; i < 20; i++) {
            fields.push({
                name: '标签',
                key: `field${i}`
            })
        }

        this.updater.digest({
            viewId: this.id,
            options,
            list,
            fields,
            hide: false
        });
    },
    'toggle<click>'(e) {
        let { hide } = this.updater.get()
        this.updater.digest({
            hide: !hide
        });
    }
});