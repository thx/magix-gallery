/**
 * 规范详见 https://done.alibaba-inc.com/file/BfeHD00VvQXv/myXymOLxV7CzLfCj/preview?aid=E94400E7-4A72-4B2C-9F7B-638D34E9091A
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');
const ErrorImgs = {
    'not-found': {
        img: 'https://img.alicdn.com/imgextra/i3/O1CN01HxdbtP25wGyLnsVm6_!!6000000007590-2-tps-640-640.png',
        tip: '抱歉，您查看的页面不存在',
        btns: true
    },
    'network-error': {
        img: 'https://img.alicdn.com/imgextra/i1/O1CN0130rpiy1iWrqBxpyvk_!!6000000004421-2-tps-640-640.png',
        tip: '网络连接失败，请检查您的网络连接',
        btns: true
    },
    'empty-content': {
        img: 'https://img.alicdn.com/imgextra/i2/O1CN019BKalx1jpvwbFqcgf_!!6000000004598-2-tps-640-640.png',
        tip: '暂无内容',
        btns: false
    },
    'empty-search': {
        img: 'https://img.alicdn.com/imgextra/i4/O1CN010Nyi2z1iwyPwAj92j_!!6000000004478-2-tps-640-640.png',
        tip: '暂无查询数据',
        btns: false
    },
    'no-access': {
        img: 'https://img.alicdn.com/imgextra/i3/O1CN01DuPHt51T2RHx1NjVA_!!6000000002324-2-tps-640-640.png',
        tip: '暂无访问权限',
        btns: true
    },
    'loading': {
        img: 'https://img.alicdn.com/imgextra/i3/O1CN01qDrmgL1IXA5LwALvI_!!6000000000902-2-tps-640-640.png',
        tip: '数据计算中，请耐心等待',
        btns: false
    },
    'construction': {
        img: 'https://img.alicdn.com/imgextra/i4/O1CN01nTmtNh1Kwvb0sKiPm_!!6000000001229-2-tps-640-640.png',
        tip: '功能建设中',
        btns: false
    }
}

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra, configs) {
        // 当前数据截快照
        this.updater.snapshot();

        // 尺寸 normal small xsmall
        let mode;
        if (extra.hasOwnProperty('mode')) {
            mode = extra.mode;
        } else {
            // 容器宽度大于360且高度大于360：mode=normal（图文320*320）
            // 容器宽度小于160且高度小于160：mode=xsmall（仅展示文案不显示图片）
            // 容器宽度160 ~ 360或者高度160 ~ 360：mode=small（图文120*120）
            try {
                let { clientWidth, clientHeight } = document.getElementById(this.owner.pId);
                if (clientWidth > 360 && clientHeight > 360) {
                    mode = 'normal';
                } else if (clientWidth < 160 && clientHeight < 160) {
                    mode = 'xsmall';
                } else {
                    mode = 'small';
                }
            } catch (error) {
                mode = 'normal';
            }
        }

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

        // 默认配置
        let config = ErrorImgs[type] || ErrorImgs['not-found'];

        // 是否有返回首页和上一步按钮
        let btns = config.btns;
        if (extra.hasOwnProperty('btns')) {
            btns = (extra.btns + '' === 'true');
        }

        // 背景颜色 transparent grey
        let bg = extra.bg || 'transparent';

        // 展示内容
        let tip = '';
        if (configs && configs.node) {
            // attr change
            // 此时取owner.innerHTML为button
            tip = extra.tip || configs.node.innerHTML || config.tip;
        } else {
            // 首次渲染
            let owner = document.getElementById(this.id);
            tip = extra.tip || owner.innerHTML || config.tip;
        }

        this.updater.set({
            bg,
            mode,
            type,
            data: extra.data || {},
            textLines: extra.textLines || 3,
            img: config.img,
            tip,
            btns
        })

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    'back<click>'(e) {
        e.preventDefault();
        history.back();
    }
});