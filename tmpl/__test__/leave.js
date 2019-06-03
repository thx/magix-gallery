let Magix = require('magix');
let Form = require('@../mx-form/index');
let Validator = require('@../mx-form/validator');
let Dialog = require('@../mx-dialog/index');
let GTip = require('@../mx-gtip/index');
let CopyText = '复制代码';

module.exports = Magix.View.extend({
    tmpl: '@leave.html',
    mixins: [Form, Validator, Dialog, GTip],
    init() {
        let that = this;
        that.updater.set({
            viewId: that.id,
            text1: CopyText,
            text2: CopyText
        })
        that.leaveTip('页面有变化且未保存，确认离开吗？', () => {
            return that.updater.altered();
        });
    },
    render() {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            radioes: ['radio1', 'radio2', 'radio3'],
            selected: {
                area: 1312,
                checkboxes: ['checkbox1'],
                radio: 'radio2',
                single: '',  //下拉框单选
                str: '', //汉字/字母/数字/下划线
                switch: true //开关
            }
        });
        this.updater.snapshot();
    },
    'save<click>'() {
        this.updater.snapshot();
    },
    leaveConfirm(resolve, reject, msg) {
        let that = this;
        that.mxDialog('__test__/leave-dlg', {
            title: '系统提示',
            content: msg,
            enterCallback: (save) => {
                if (save) {
                    that.gtip('数据保存中...', 1500);
                    setTimeout(resolve, 1500);
                } else {
                    resolve();
                }
            },
            cancelCallback: reject
        }, {
            width: 400
        });
    },
    'done<success>'(e) {
        let that = this;
        let id = e.params.id;
        let data = {};
        data['text' + id] = '<i class="mc-iconfont @scoped.style:desc-tip-icon">&#xe630;</i>复制成功';
        that.updater.digest(data);
        
        setTimeout(() => {
            data['text' + id] = CopyText;
            that.updater.digest(data);
        }, 1000);
    }
});