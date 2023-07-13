import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra, configs) {
        let that = this;

        // 当前数据截快照
        that.updater.snapshot();

        // 展现样式
        let color, colorHover;
        switch (extra.mode) {
            case 'common':
                color = '#666666';
                colorHover = '#333333';
                break;

            // case 'brand':
            default:
                color = 'var(--color-brand)';
                colorHover = 'var(--color-brand-hover)';
                break;
        }

        // 展示内容
        let content = '';
        if (configs && configs.node) {
            // attr change
            // 此时取owner.innerHTML为button
            content = extra.content || configs.node.innerHTML || '';
        } else {
            // 首次渲染
            let owner = document.getElementById(that.id);
            content = extra.content || owner.innerHTML || '';
        }

        // 禁用按钮
        let disabled = (extra.disabled + '' === 'true');

        let prefix = '', suffix = '';
        switch (extra.icon) {
            case 'edit':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe64e;</i>';
                break;

            case 'test':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe661;</i>';
                break;

            case 'copy':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe65e;</i>';
                break;

            case 'setting':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe70f;</i>';
                break;

            case 'add':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe60c;</i>';
                break;

            case 'delete':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe714;</i>';
                break;

            case 'upload':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe718;</i>';
                break;

            case 'download':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe717;</i>';
                break;

            case 'drag':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe658;</i>';
                break;

            case 'filter':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe676;</i>';
                break;

            case 'zoom':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe677;</i>';
                break;

            case 'link':
                prefix = '<i class="mx-iconfont @index.less:prefix" style="font-size: 16px;">&#xe7cc;</i>';
                break;

            case 'appendix':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe604;</i>';
                break;

            case 'follow':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe627;</i>';
                break;

            case 'mark':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe63a;</i>';
                break;

            case 'ellipsis':
                prefix = '<i class="mx-iconfont @index.less:prefix">&#xe67c;</i>';
                break;

            case 'arrow-right':
                suffix = '<i class="mx-iconfont @index.less:suffix" style="font-size: 12px; margin-left: 0px;">&#xe616;</i>';
                break;

            case 'arrow-top':
                suffix = '<i class="mx-iconfont @index.less:suffix">&#xe680;</i>';
                break;

            case 'arrow-bottom':
                suffix = '<i class="mx-iconfont @index.less:suffix">&#xe682;</i>';
                break;
        }
        that.updater.set({
            styles: `
                --mx-alink-color: ${extra.color || color};
                --mx-alink-color-hover: ${extra.colorHover || colorHover};
            `,
            prefix,
            suffix,
            content,
            disabled,
            disabledTip: extra.disabledTip || '',
            disabledWidth: extra.disabledWidth || 200,
            disabledPlacement: extra.disabledPlacement || 'bottom',
            tagContent: extra.tagContent || '',
            tagColor: extra.tagColor || 'var(--color-red)',
            linkHref: extra.linkHref, // 外链处理
            linkTarget: extra.linkTarget || '_blank',
        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },

    '@{stop}<click>'(e) {
        e.stopPropagation();
    },
});