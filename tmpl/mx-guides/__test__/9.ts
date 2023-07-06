import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
import * as Guides from '../../mx-guides/index';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@9.html',
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

        let path = Router.parse().path;
        let bizCode = '';
        if (path.indexOf('all/revision/ztc') > -1) {
            bizCode = 'subway';
        }

        // point：单点
        // module：模块
        let guideDlg = this.showMxGuides({
            mode: 'point',
            bizCode,
            type: 'breath',
            list: [{
                sizzle: `#dropdown_${viewId}`,
                // title: '第1步·大标题',
                tip: '第一步提示信息提示信息提示信息提示信息提示信息',
                placement: 'right',
            }, {
                sizzle: `#input_${viewId}`,
                // title: '第2步·大标题',
                tip: '第二步提示信息提示信息',
                placement: 'left',
            }, {
                sizzle: `#switch_${viewId}`,
                // title: '第3步·大标题',
                tip: '第三步提示信息提示信息提示信息提示信息提示信息',
                placement: 'bottom',
            }, {
                sizzle: `#btn_${viewId}`,
                // title: '第4步·大标题',
                tip: '第四步提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'top',
            }]
        });

        guideDlg.on('cancel', (e) => {
            // e.index 当前帧
            // 引导关闭 todo something
        })
    }
});