import Magix from 'magix';
import * as $ from '$';
import * as Base from './theme';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';
import * as Dialog from '../../mx-dialog/index';
Magix.applyStyle('@theme.less');

export default Base.extend({
    tmpl: '@index.html',
    mixins: [Form, Validator, Dialog],
    init(e) {
        this.initTheme();

        let list = [
            {
                text: '组件品牌色配置',
                tip: '除品牌色相关可调整，其余辅助色不建议覆盖',
                subs: [
                    {
                        type: 'color',
                        key: '--color-brand',  // 等于--app-brand
                        text: '组件品牌色',
                        tip: '组件品牌色，组件基本色值都基于品牌色产生'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-hover',
                        text: '品牌色hover',
                        tip: '组件品牌色hover色值，默认#000000（10%）和品牌色（90%）混合生成'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-light',
                        text: '品牌色20%',
                        tip: '主要应用于表格单行hover操作行背景值，开关浅色，滑动轴浅色；默认组件品牌色透明度20%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-opacity',
                        text: '品牌色10%',
                        tip: '主要应用于表格单行hover显示行背景值，下拉选项选中态背景色；默认组件品牌色透明度10%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-vs',
                        text: '品牌色对比色',
                        tip: '品牌色对比色，常用与报表对比场景'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-text',
                        text: '品牌文案色',
                        tip: '品牌色区块上文案颜色，默认#ffffff'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-text-hover',
                        text: '品牌文案hover色',
                        tip: '品牌色区块上文案hover颜色，默认#ffffff'
                    },
                    {
                        type: 'text',
                        key: '--btn-border-radius',
                        text: '按钮圆角',
                        tip: '按钮圆角，默认4px',
                        disabled: true
                    },
                    {
                        type: 'color',
                        key: '--btn-brand',
                        text: '品牌按钮',
                        tip: '品牌按钮色，支持渐变，默认等于品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-hover',
                        text: '品牌按钮hover',
                        tip: '品牌按钮hover色值，支持渐变，默认等于品牌色hover'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-text',
                        text: '品牌按钮文字',
                        tip: '深底色按钮文字颜色'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-text-hover',
                        text: '品牌按钮hover文字',
                        tip: '深底色按钮hover时文字颜色'
                    },
                    {
                        type: 'color',
                        key: '--btn-text',
                        text: '次要按钮文字',
                        tip: '次要按钮文字颜色，默认#333',
                    },
                    {
                        type: 'color',
                        key: '--btn-text-hover',
                        text: '次要按钮hover文字',
                        tip: '次要按钮hover文字颜色，默认#333'
                    },
                    {
                        type: 'color',
                        key: '--btn-border',
                        text: '次要按钮边框',
                        tip: '浅底色按钮边框颜色，默认为品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-border-hover',
                        text: '次要按钮hover边框',
                        tip: '次要按钮hover时边框颜色，默认为品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-bg',
                        text: '次要按钮背景',
                        tip: '次要按钮背景色，默认为品牌色10%'
                    },
                    {
                        type: 'color',
                        key: '--btn-bg-hover',
                        text: '次要按钮hover背景',
                        tip: '次要按钮hover时背景颜色，默认为品牌色20%'
                    },
                    {
                        type: 'color',
                        key: '--color-bg',
                        text: '灰色背景色',
                        tip: '大面积灰色色块背景色，比如表格表头灰色',
                        disabled: true
                    },
                    {
                        type: 'color',
                        key: '--color-bg-hover',
                        text: 'hover选中背景色',
                        tip: '某些节点hover时或者选中态需要加上背景色，比如下拉框选项的hover色和选中背景色，等于--color-brand-opacity，默认为品牌色10%',
                    },
                    {
                        type: 'color',
                        key: '--color-border',
                        text: '辅助线条颜色',
                        tip: '常用语区块分隔边框线；默认#e6e6e6',
                        disabled: true
                    },
                    {
                        type: 'text',
                        key: '--border-radius',
                        text: '组件圆角',
                        tip: '组件圆角，默认4px',
                        disabled: true
                    },
                    {
                        type: 'color',
                        key: '--border-highlight',
                        text: '组件边框色',
                        tip: 'input，dropdown，calendar等组件的边框颜色；',
                        disabled: true
                    },
                    {
                        type: 'color',
                        key: '--border-highlight-hover',
                        text: '组件边框hover色',
                        tip: 'input，dropdown，calendar等组件的边框hover颜色；默认品牌色',
                    },
                ]
            },
            {
                text: 'bp相关配置',
                tip: '背景色为保证bp一致性不建议调整',
                subs: [
                    {
                        type: 'color',
                        key: '--app-brand',
                        text: '品牌色',
                        tip: 'bp主品牌色，等于--color-brand'
                    },
                    {
                        type: 'color',
                        key: '--app-brand-gradient',
                        text: '品牌渐变色',
                        tip: '品牌色支持渐变，主要用于项目顶部和侧边导航，默认为=品牌色，即无渐变效果',
                    },
                    {
                        type: 'color',
                        key: '--app-nav-bg',
                        text: '侧边导航背景',
                        tip: '侧边导航背景色',
                        disabled: true
                    },
                    {
                        type: 'color',
                        key: '--app-bg',
                        text: '项目背景',
                        tip: '项目采用卡片色设计，白框底部背景色',
                        disabled: true
                    },
                    {
                        type: 'text',
                        key: '--app-min-width',
                        text: '最小宽度',
                        tip: 'bp最小宽度定义，默认1420',
                        disabled: true
                    },
                ]
            },
            {
                text: '辅助色值',
                tip: '与品牌色无关的辅助色值，为保证bp的一致性不建议修改',
                subs: [
                    {
                        type: 'color',
                        key: '--color-warn',
                        text: '黄色警告',
                        tip: '警告场景提示颜色',
                        disabled: true
                    },
                    {
                        type: 'color',
                        key: '--color-red',
                        text: '红色错误',
                        tip: '错误场景提示颜色',
                        disabled: true
                    },
                    {
                        type: 'color',
                        key: '--color-green',
                        text: '绿色通过',
                        tip: '通过场景提示颜色',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--color-blue',
                        text: '蓝色',
                        disabled: true,
                    },
                ]
            },
            {
                text: '字体相关',
                tip: '字体行高相关配置，为保证bp的一致性不建议修改',
                subs: [
                    {
                        type: 'text',
                        key: '--font-family',
                        text: '字体',
                        tip: '项目的字体族名称优先表',
                        disabled: true
                    },
                    {
                        type: 'text',
                        key: '--line-height',
                        text: '文本行高',
                        tip: '文本行高，默认1.5',
                        disabled: true
                    },
                    {
                        type: 'text',
                        key: '--font-size',
                        text: '字体大小',
                        tip: '字体大小，默认12px，组件基于此参数计算节点大小，<span class="color-brand">注：修改字体联动修改正常组件行高，小号组件行高</span>',
                        disabled: true
                    },
                    {
                        type: 'text',
                        key: '--input-height',
                        text: '正常组件行高',
                        tip: 'input，btn，dropdown，calendar等等组件的trigger节点行高，默认 = 字体 + 20',
                        disabled: true
                    },
                    {
                        type: 'text',
                        key: '--input-small-height',
                        text: '小号组件行高',
                        tip: '小号input，小号btn，dropdown下拉列表单个选项，默认 = 字体 + 14',
                        disabled: true
                    },
                ]
            }
        ];

        list.forEach(group => {
            group.subs.forEach(sub => {
                Magix.mix(sub, {
                    displayKey: sub.key.replace('--', '')
                })
            })
        })

        let { themes } = this.updater.get();
        let itemWidth = 126;
        let themeWidth = itemWidth * 4 / (themes.length + 1);

        let themeKey = 'feeds',
            cur;
        for (let i = 0; i < themes.length; i++) {
            if (themes[i].key == themeKey) {
                cur = i;
                break;
            }
        }

        this.updater.set({
            viewId: this.id,
            custom: '#51a300',
            themeKey,
            cur,
            itemWidth,
            themeWidth,
            list
        })
    },
    render() {
        this.setValues();
    },
    setValues(post) {
        let that = this;
        let { list, themeKey, custom, themes } = that.updater.get();
        let cur;
        for (let i = 0; i < themes.length; i++) {
            if (themes[i].key == themeKey) {
                cur = i;
                break;
            }
        };

        let colors = {};
        if (themeKey == 'custom') {
            // 自定义
            colors = that['@{get.base}']({
                '--color-brand': custom
            });
            cur = themes.length;
        } else {
            colors = themes[cur].colors;
        }
        list.forEach(g => {
            g.subs.forEach(s => {
                s.value = colors[s.key] || '';
            })
        })
        that.updater.digest({
            cur,
            list
        })

        if (post) {
            // 通知iframe改变颜色
            let frame = document.getElementById('frame_' + that.id);
            frame.contentWindow.postMessage({
                type: 'changeTheme',
                colors
            }, '*');
        }
    },
    'selectTheme<click>'(event) {
        let themeKey = event.params.themeKey;
        this.updater.set({
            themeKey
        })
        this.setValues(true);
    },
    'changeColor<change>'(event) {
        this.updater.set({
            custom: event.color,
            themeKey: 'custom'
        })
        this.setValues(true);
    },
    'sync<change>'(event) {
        let that = this;
        let list = that.updater.get('list');
        let colors = {};

        let key = event.params.key;
        if (key == '--color-brand') {
            // 品牌色变化时联动色值变化色值调整
            colors = that['@{get.base}']({
                [key]: event.color
            });
            list.forEach(g => {
                g.subs.forEach(s => {
                    s.value = colors[s.key];
                })
            })
        } else {
            // 其他配置调整
            list.forEach(g => {
                g.subs.forEach(s => {
                    colors[s.key] = s.value;
                })
            })
        }

        that.updater.digest({
            list
        })

        let frame = document.getElementById('frame_' + that.id);
        frame.contentWindow.postMessage({
            type: 'changeTheme',
            colors
        }, '*');
    },

    'copy<click>'(event) {
        let list = this.updater.get('list');
        let colors = {};
        list.forEach(g => {
            g.subs.forEach(s => {
                // 只复制非禁用的参数
                if (!s.disabled) {
                    colors[s.key] = s.value;
                }
            })
        })

        this.mxModal('@./copy', {
            colors
        }, {
            header: {
                title: '复制我的定制主题',
                tip: '此处仅透出品牌相关的配置，其他辅助配置不建议覆盖的不透出'
            },
            footer: {
                enter: false
            },
            width: 800
        });
    }
});