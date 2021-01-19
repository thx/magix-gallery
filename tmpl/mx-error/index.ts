/**
 * 详见 https://aone.alibaba-inc.com/project/768817/sprint/detail?spm=a2o8d.corp_prod_sprint_show.0.0.1ec25d18XMBHvQ&sprintId=172605&akProjectId=768817&listType=0&selectedIssueId=30644848
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');
const ErrorImgs = {
    'not-found': {
        'img': 'https://img.alicdn.com/tfs/TB1t81hiiDsXe8jSZR0XXXK6FXa-600-600.png',
        'text': '抱歉，您查看的页面不存在'
    },
    'network-error': {
        'img': 'https://img.alicdn.com/tfs/TB1xcpQmA9l0K4jSZFKXXXFjpXa-600-600.png',
        'text': '网络连接失败，请检查您的网络连接'
    },
    'empty-content': {
        'img': 'https://img.alicdn.com/tfs/TB1zGfFVFP7gK0jSZFjXXc5aXXa-600-600.png',
        'text': '暂无内容'
    },
    'empty-search': {
        'img': 'https://img.alicdn.com/tfs/TB1My6aiQcx_u4jSZFlXXXnUFXa-600-600.png',
        'text': '暂无查询数据'
    },
    'no-access': {
        'img': 'https://img.alicdn.com/tfs/TB14NDrVFT7gK0jSZFpXXaTkpXa-600-600.png',
        'text': '暂无访问权限'
    },
    'loading': {
        'img': 'https://img.alicdn.com/tfs/TB1.D_xVNv1gK0jSZFFXXb0sXXa-600-600.png',
        'text': '数据计算中，请耐心等待'
    }
}

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        let type = (extra.type || 'not-found') + '';

        // 历史配置 兼容
        switch (type) {
            case '404':
                type = 'not-found';
                break;
            case '500':
            case '502':
                type = 'network-error';
                break;
        }
        this.updater.set({
            type,
            tip: extra.tip || $(`#${this.id}`).html(),
            btns: (extra.btns + '' !== 'false')
        })
    },
    render() {
        let that = this;
        // not-found： 404
        // network-error： 网络异常
        // empty-content： 暂无内容
        // empty-search： 暂无查询数据
        // no-access：暂无访问权限
        // loading：数据计算中，请耐心等待
        let { type, tip } = that.updater.get();
        let config = ErrorImgs[type] || ErrorImgs['not-found'];
        that.updater.digest(Magix.mix(config, {
            tip: tip || config.text
        }));
    },
    'back<click>'(e) {
        e.preventDefault();
        history.back();
    }
});