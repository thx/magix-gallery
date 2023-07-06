import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
import * as Guides from '../index';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@3.html',
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
        this.showMxGuides({
            mode: 'point',
            list: [{
                sizzle: `#dropdown_${viewId}`,
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01lXaOMJ1rTVNPSftyQ_!!6000000005632-2-tps-133-109.png',
                title: '大标题',
                tip: '提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'right',
            }]
        })
    }
});