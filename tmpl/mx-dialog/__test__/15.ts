import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@15.html',
    render() {
        // {
        //     text: 'xsmall',
        //     value: 368,
        // }
        this.updater.digest({
            list: [{
                text: 'xlarge',
                value: 1248,
            }, {
                text: 'large',
                value: 1008,
            }, {
                text: 'normal',
                value: 768,
            }, {
                text: 'small',
                value: 528,
            }]
        });
    },
    'open<click>'(e) {
        let item = e.params.item;
        this.mxModal('@./modal-tip', {
            content: `当前浮层ladder.width = '${item.text}'，宽度${item.value}px`,
        }, {
            ladder: {
                width: item.text,
            },
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
            },
        });
    }
});