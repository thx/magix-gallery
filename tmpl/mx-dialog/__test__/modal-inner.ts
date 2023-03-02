import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@modal-inner.html',
    init(extra) {
        this.updater.set({
            viewId: this.id,
            readonly: extra.readonly,
            num: 12,
            line: 20,
            index: 1
        })
    },
    render() {
        let that = this;
        // 延时显示loading动画
        setTimeout(() => {
            that.updater.digest();
        }, 400)
    },
    'add<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line + 1
        });
    },
    'remove<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line - 1
        });
    },
    'changeIndex<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: +index + 1
        });
    },
    check() {
        let that = this;
        let ok = that.isValid();

        let name = '';
        if (ok) {
            name = that.updater.get('name');
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ok,
                    msg: '请按照要求填写完信息再提交',
                    data: {
                        name
                    }
                })
            }, 1000)
        })
    },
    'test<click>'(e) {
        this.mxModal('@./quick', {

        }, {
            width: 800,
            header: {
                title: '全屏右出浮层',
                tip: '提示信息'
            },
            footer: {
                enterText: '确认',
                cancelText: '取消'
            }
        });
    },
}, {
    dialogOptions: {
        width: 1000
    }
});
