import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@22.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        let list = [{
            text: '模块1',
            value: 1,
            dialogOptions: {
                width: 800,
                header: {
                    title: '模块1标题',
                    tip: '模块1标题旁提示信息',
                },
                footer: {
                    enterText: '提交1',
                    cancelText: '取消1',
                }
            }
        }, {
            text: '模块2',
            value: 2,
            dialogOptions: {
                width: 400,
                header: {
                    title: '模块2标题',
                    tip: '模块2标题旁提示信息',
                },
                footer: {
                    enterText: '提交2',
                    cancelText: '取消2',
                }
            }
        }, {
            text: '模块3',
            value: 3,
            dialogOptions: {
                width: 600,
                header: {
                    title: '模块3标题',
                    tip: '模块3标题旁提示信息',
                },
                footer: {
                    enterText: '提交3',
                    cancelText: '取消3',
                }
            }
        }];

        this.mxModal('@./reset', {
            isModal: true,
            list,
            selected: list[0].value,
        }, {
            ...list[0].dialogOptions,
            footer: {
                enter: true,
                cancel: true,
                ...(list[0].dialogOptions?.footer || {})
            },
            modal: true,
            height: 500,
        });
    }
});