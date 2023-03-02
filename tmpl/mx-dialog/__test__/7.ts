import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest();
    },
    'confirm1<click>'(e) {
        this.confirm({
            title: '标题',
            content: '确定进行操作吗？'
        })
    },
    'confirm2<click>'(e) {
        this.confirm({
            title: '标题',
            content: '确定进行操作吗？',
            enterText: '确认按钮文案',
            enterCallback: (e) => {
                // e.preventDefault();
                console.log('确定按钮响应事件');
            },
            cancelText: '取消按钮文案',
            cancelCallback: (e) => {
                // e.preventDefault();
                console.log('取消按钮响应事件');
            }
        }, {
            width: 400,
            mask: true
        })
    },
    'confirm3<click>'(e) {
        this.confirm({
            title: '品牌色提示',
            content: '确定进行操作吗？'
        }, {
            type: 'highlight'
        })
    },
    'confirm4<click>'(e) {
        this.confirm({
            title: '错误提示',
            content: '确定进行操作吗？'
        }, {
            type: 'error'
        })
    },
    'confirm5<click>'(e) {
        this.confirm({
            title: '警告提示',
            content: '确定进行操作吗？'
        }, {
            type: 'warn'
        })
    },
    'confirm6<click>'(e) {
        this.confirm({
            title: '通过提示',
            content: '确定进行操作吗？'
        }, {
            type: 'pass'
        })
    },
});