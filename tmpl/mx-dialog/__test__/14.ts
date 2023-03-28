import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@14.html',
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        let that = this;
        that.mxModal('@./modal-inner', {
            enterCallback: (data) => {
                that.alert('系统提示', `浮层内输入${data.name}`);
            },
            cancelCallback: () => {
                console.log('取消事件处理')
            }
        }, {
            header: {
                title: '全屏右出浮层',
                tip: '提示信息',
                iconTip: 'icon提示'
            },
        });
    },
    'open2<click>'(e) {
        let that = this;
        that.mxModal('@./modal-inner', {

        }, {
            header: {
                title: '全屏右出浮层',
            },
            footer: {
                enter: false,
                cancel: false,
            }
        });
    },
    'open3<click>'(e) {
        let that = this;
        that.mxModal('@./modal-inner', {
            
        }, {
            footer: {
                enterText: '自定义确认',
                cancelText: '自定义取消'
            }
        });
    },
    'open4<click>'(e) {
        this.mxModal('@./modal-inner', {
            
        }, {
            header: {
                title: '全屏右出浮层',
            },
            footer: {
                enterError: true,
            }
        });
    },
    'open5<click>'(e) {
        let dlg = this.mxModal('@./modal-inner', {
            
        }, {
            header: {
                title: '全屏右出浮层',
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