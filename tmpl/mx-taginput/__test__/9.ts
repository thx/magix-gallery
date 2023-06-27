import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest({
            items1: [],
            items2: [{
                text: 'one',
                value: 1
            }, {
                text: 'two',
                value: 2
            }],
            dynamicEnterFn: (val) => {
                let { items2 } = this.updater.get();
                return new Promise((resolve, reject) => {
                    if (Math.ceil(Math.random() * 10) % 2 == 0) {
                        // 添加失败返回失败提示
                        reject('添加标签失败');
                    } else {
                        // 添加成功返回对象
                        resolve({
                            text: val,
                            value: items2.length + 1,
                        });
                    }
                })
            }
        });
    }
});