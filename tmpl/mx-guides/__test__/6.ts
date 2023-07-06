import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
import * as Guides from '../../mx-guides/index';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@6.html',
    mixins: [Form, Validator, Guides],
    render() {
        let viewId = this.id;
        let mxRadioes = [{
            text: '选项1',
            value: 'radio1'
        }, {
            text: '选项2',
            value: 'radio2',
        }, {
            text: '选项3',
            value: 'radio3'
        }];

        let mxCheckboxes = [{
            text: '选项1',
            value: 'checkbox1'
        }, {
            text: '选项2',
            value: 'checkbox2',
        }, {
            text: '选项3',
            value: 'checkbox3'
        }];

        this.updater.digest({
            viewId,
            mxRadioes,
            mxCheckboxes,
            selected: {
                mxRadio: mxRadioes[0].value,
                mxCheckboxes: [mxCheckboxes[0].value],
                single: '',
                type: 'custom', //默认还是自定义（自定义带输入框）
                int: 10,
                switch: true
            }
        });

        // point：单点
        // module：模块
        let guideDlg = this.showMxGuides({
            scrollWrapper: `#custom_form_${viewId}`,
            mode: 'point',
            list: [{
                sizzle: `#dropdown_${viewId}`,
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01lXaOMJ1rTVNPSftyQ_!!6000000005632-2-tps-133-109.png',
                title: '第1步·大标题',
                tip: '第一步提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'bottom',
            }, {
                sizzle: `#input_${viewId}`,
                img: 'https://img.alicdn.com/imgextra/i1/O1CN01LWsk261aWqnmX29ZP_!!6000000003338-2-tps-133-109.png',
                title: '第2步·大标题',
                tip: '第二步提示信息提示信息',
                placement: 'left',
            }, {
                sizzle: `#switch_${viewId}`,
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01zYkSsU24ckNIUCnHv_!!6000000007412-2-tps-133-109.png',
                title: '第3步·大标题',
                tip: '第三步提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'right',
            }, {
                sizzle: `#btn_${viewId}`,
                img: 'https://img.alicdn.com/imgextra/i1/O1CN01fE43IR1x2Nc7sXIDu_!!6000000006385-2-tps-133-109.png',
                title: '第4步·大标题',
                tip: '第四步提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'top',
            }]
        });

        guideDlg.on('cancel', (e) => {
            // e.index 当前帧
            // 引导关闭 todo something
        })
    }
});