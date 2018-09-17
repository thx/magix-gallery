let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');
let $ = require('$');
let Moment = require('moment');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@17.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            radioes: ['radio1', 'radio2', 'radio3'],
            selected: {
                checkboxes: ['checkbox1'],
                radio: 'radio2',
                single: '',  //下拉框单选
                multiComma: '', //下拉框多选逗号分隔
                multiArr: [], //下拉框多选数组
                str: '', //汉字/字母/数字/下划线
                date: Moment().format(Formater), //单个日期
                vs: true,
                start: Moment().subtract(1, 'days').format(Formater), //时间段开始时间
                end: Moment().add(1, 'days').format(Formater), //时间段结束时间
                type: 'custom', //默认还是自定义（自定义带输入框）
                int: 10,
                switch: true //开关
            }
        });
    },
    'confirm<click>'(e){
        let that = this;
        let valid = that.isValid();

        if(valid){
            // 校验通过
            // 双向绑定的数据，继续执行后续操作
            let selected = that.updater.get('selected');
            that.updater.digest({
                tip: '<span class="color-green"><i class="mc-iconfont displacement-2">&#xe6ad;</i>校验失败</span>'
            })
        }else{
            // 校验失败
            that.updater.digest({
                tip: '<span class="color-red"><i class="mc-iconfont displacement-2">&#xe6ad;</i>校验通过</span>'
            })
        }
    }
});