import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        this.mxDialog('@./dialog-inner-form', {
            
        }, {
            height: 320,
            header: {
                title: '浮层标题'
            },
            footer: {
                enter: true,
                cancel: true,
            }
        });
    },
    'open2<click>'(e) {
        this.mxDialog('@./dialog-multi', {
            number: 1
        }, {
            width: 800,
            height: 320,
            modal: true,
            header: {
                title: '多个带modal的浮层'
            },
            footer: {
                enter: false,
                cancel: true,
            },
        });
    },
    'open3<click>'(e) {
        this.mxDialog('@./dialog-inner-tip', {
            content: 'blankSpaceClosable默认为true，点击空白处自动关闭浮层<br/>配置blankSpaceClosable=false取消该功能'
        }, {
            height: 320,
            header: {
                title: '浮层标题'
            },
            footer: {
                enter: true,
                cancel: true,
            }
        });
    },
    'closeAll<click>'(e) {
        this.mxCloseAllDialogs();
    },
});