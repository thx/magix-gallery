import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        this.mxDialog('@./dialog-inner-tip', {
            content: '只使用默认头部'
        }, {
            height: 320,
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
            }
        });
    },
    'open2<click>'(e) {
        this.mxDialog('@./dialog-inner-tip', {
            content: '只使用默认尾部'
        }, {
            height: 320,
            footer: {
                enter: true,
                cancel: true,
            }
        });
    },
    'open3<click>'(e) {
        this.mxDialog('@./dialog-inner-tip', {
            content: '使用默认头部+尾部',
            enterCallback: (data) => {
                // 确定按钮的回调
            },
            cancelCallback: () => {
                // 取消按钮的回调
            },
        }, {
            height: 320,
            header: {
                title: '浮层标题',
                tip: '标题旁提示'
            },
            footer: {
                enter: true,
                cancel: true,
            }
        });
    },
    'open4<click>'(e) {
        this.mxDialog('@./dialog-inner-tip', {
            content: '使用默认头部+尾部，确定按钮为警告按钮'
        }, {
            height: 320,
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
            },
            footer: {
                enter: true,
                enterError: true,
                cancel: true,
            }
        });
    },
    'open5<click>'(e) {
        let dlg = this.mxDialog('@./dialog-inner-tip', {
            content: '使用默认头部+尾部，额外还有自定义按钮'
        }, {
            height: 320,
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
            },
            footer: {
                enter: true,
                cancel: false,
            },
            dialogCustomBtns: [{
                text: '自定义无校验按钮',
                callback: () => {
                    dlg.close();
                }
            }, {
                text: '自定义校验按钮',
                mode: 'primary',
                check: true,
                callback: (params) => {
                    // params 浮层区域内容数据
                    // todo something
                    dlg.close();
                }
            }]
        });
    }
});