import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest();
    },
    'alert1<click>'(e) {
        // 等价于 this.alert('系统异常', '测试内容');
        this.alert({
            title: '系统异常',
            content: '测试内容',
        })
    },
    'alert2<click>'(e) {
        this.alert({
            title: '系统异常',
            content: '测试内容',
            enterText: '我知道了',
            enterCallback: () => {
                console.log('点击确认后响应')
            }
        });
    },
    'alert3<click>'(e) {
        this.alert({
            title: '品牌色提示',
            content: '测试内容'
        }, {
            type: 'highlight'
        });
    },
    'alert4<click>'(e) {
        this.alert({
            title: '错误提示',
            content: '测试内容'
        }, {
            type: 'error'
        });
    },
    'alert5<click>'(e) {
        this.alert({
            title: '警告提示',
            content: '测试内容'
        }, {
            type: 'warn'
        });
    },
    'alert6<click>'(e) {
        this.alert({
            title: '通过提示',
            content: '测试内容'
        }, {
            type: 'pass'
        });
    },
});