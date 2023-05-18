import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@30.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            rules1: {
                int: true,
                fn: (str) => {
                    // 返回错误信息则认为校验不通过
                    return (+str % 2 == 0) ? '请输入奇数' : null;
                }
            },
            rules2: {
                int: true,
                fn: (str) => {
                    return null;
                }
            }
        });
    },
    async  'asyncCheck<focusout>'(e) {
        let newRules = await this.judge();
        let { rules2 } = this.updater.get();
        this.updater.digest({
            rules2: {
                ...rules2,
                ...newRules,
            }
        });
        this.isValid({
            sizzle: `#${this.id}_right`
        });
    },

    judge() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    fn: (str) => {
                        return (+str % 2 == 0) ? '请输入奇数' : null;
                    }
                })
            }, 1000)
        })
    },

    async 'submit<click>'(e) {
        let newRules = await this.judge();
        let { rules2 } = this.updater.get();
        this.updater.digest({
            rules2: {
                ...rules2,
                ...newRules,
            }
        });
        if (this.isValid({
            sizzle: `#${this.id}_right`
        })) {
            // 可提交
            this.updater.digest({
                successInfo: '可提交',
                errorInfo: ''
            })
        } else {
            this.updater.digest({
                successInfo: '',
                errorInfo: '请检查设置'
            })
        }
    }
});