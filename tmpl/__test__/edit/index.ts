import Magix from 'magix';
import Base from './theme';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';
import * as Dialog from '../../mx-dialog/index';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@index.html',
    mixins: [Form, Validator, Dialog],
    init(e) {
        let list = [
            {
                text: '组件品牌色配置',
                tip: '除品牌色相关可调整，其余辅助色不建议覆盖',
                subs: [
                    {
                        type: 'color',
                        key: '--color-brand',
                        text: '品牌色',
                        tip: '组件品牌色，组件基本色值都基于品牌色产生'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-gradient',
                        text: '品牌渐变色',
                        tip: '组件品牌色渐变色，默认=var(--color-brand)不渐变'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-hover',
                        text: '品牌色hover',
                        tip: '组件品牌色hover色值，默认#000000（10%）和品牌色（90%）混合生成'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-hover-gradient',
                        text: '品牌hover渐变色',
                        tip: '组件品牌色hover渐变色值，默认等于var(--color-brand-hover-gradient)'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-opacity',
                        text: '品牌色10%',
                        tip: '主要应用于下拉选项选中态背景色；默认组件品牌色透明度10%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-light',
                        text: '品牌色20%',
                        tip: '主要应用于表格单行hover操作行背景值，开关浅色，滑动轴浅色；默认组件品牌色透明度20%'
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
                        text: '品牌hover文案色',
                        tip: '品牌色区块上文案hover颜色，默认#ffffff'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-vs',
                        text: '品牌对比色',
                        tip: '品牌色对比色，常用与报表对比场景'
                    },
                ]
            },
            {
                text: '品牌按钮',
                subs: [
                    {
                        type: 'text',
                        key: '--btn-border-radius',
                        text: '按钮圆角',
                        tip: '按钮圆角，默认4px',
                        disabled: true,
                        placeholder: 3,
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-text',
                        text: '主要按钮文字',
                        tip: '深底色按钮文字颜色',
                    },
                    {
                        type: 'color',
                        key: '--btn-brand',
                        text: '主要按钮背景',
                        tip: '主要按钮色，默认等于品牌色var(--color-brand)'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-gradient',
                        text: '主要按钮背景渐变',
                        tip: '主要按钮色支持渐变，默认等于var(--color-brand-gradient)',
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-text-hover',
                        text: '主要按钮hover文字',
                        tip: '深底色按钮hover时文字颜色'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-hover',
                        text: '主要按钮hover背景',
                        tip: '主要按钮hover色值，默认等于var(--color-brand-hover)'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-gradient-hover',
                        text: '主要按钮hover背景渐变',
                        tip: '主要按钮hover色值支持渐变，默认等于var(--color-brand-hover-gradient)',
                        placeholder: 1,
                    },
                    {
                        type: 'color',
                        key: '--btn-text',
                        text: '次要按钮文字',
                        tip: '次要按钮文字颜色，默认#333',
                    },
                    {
                        type: 'color',
                        key: '--btn-border',
                        text: '次要按钮边框',
                        tip: '浅底色按钮边框颜色，默认为品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-bg',
                        text: '次要按钮背景',
                        tip: '次要按钮背景色，默认为品牌色10%',
                    },
                    {
                        type: 'color',
                        key: '--btn-text-hover',
                        text: '次要按钮hover文字',
                        tip: '次要按钮hover文字颜色，默认#333'
                    },
                    {
                        type: 'color',
                        key: '--btn-border-hover',
                        text: '次要按钮hover边框',
                        tip: '次要按钮hover时边框颜色，默认为品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-bg-hover',
                        text: '次要按钮hover背景',
                        tip: '次要按钮hover时背景颜色，默认为品牌色20%'
                    },
                ]
            },
            {
                text: '字体相关',
                subs: [
                    {
                        type: 'text',
                        key: '--line-height',
                        text: '文本行高',
                        tip: '文本行高，默认1.5',
                        disabled: true,
                    },
                    {
                        type: 'text',
                        key: '--font-size',
                        text: '字体大小',
                        tip: '字体大小，默认12px，组件基于此参数计算节点大小',
                        disabled: true,
                    },
                ]
            },
            {
                text: '背景边框',
                subs: [
                    {
                        type: 'color',
                        key: '--color-bg',
                        text: '灰色背景色',
                        tip: '大面积灰色色块背景色，比如表格表头灰色',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--color-bg-hover',
                        text: 'hover选中背景色',
                        tip: '某些节点hover时或者选中态需要加上背景色，比如下拉框选项的hover色和选中背景色，等于--color-brand-opacity，默认为品牌色10%',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--color-border',
                        text: '辅助线条颜色',
                        tip: '常用语区块分隔边框线；默认#e6e6e6',
                        disabled: true,
                    },
                    {
                        type: 'text',
                        key: '--border-radius',
                        text: '组件圆角',
                        tip: '组件圆角，默认4px',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--bg-highlight',
                        text: '组件背景色',
                        tip: 'input，dropdown，calendar等组件的背景颜色；',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--border-highlight',
                        text: '组件边框色',
                        tip: 'input，dropdown，calendar等组件的边框颜色；',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--bg-highlight-hover',
                        text: '组件hover背景色',
                        tip: 'input，dropdown，calendar等组件的hover背景颜色；',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--border-highlight-hover',
                        text: '组件hover边框色',
                        tip: 'input，dropdown，calendar等组件的hover边框颜色；默认品牌色',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--bg-highlight-active',
                        text: '组件激活态背景',
                        tip: 'input，dropdown，calendar等组件激活态背景色；',
                        disabled: true,
                    },
                    {
                        type: 'color',
                        key: '--border-highlight-active',
                        text: '组件激活态边框',
                        tip: 'input，dropdown，calendar等组件激活态背景色；默认品牌色',
                        disabled: true,
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
                text: 'bp预留差异配置',
                tip: '背景色为保证bp一致性不建议调整',
                subs: [
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
                ]
            },
        ];
        list.forEach(group => {
            group.subs.forEach(sub => {
                Magix.mix(sub, {
                    displayKey: sub.key.replace('--', '')
                })
            })
        });

        this.updater.set({
            viewId: this.id,
            custom: '#51a300',
            list,
        })

        this['@{owner.node}'] = $('#' + this.id);
    },
    async render() {
        let { themes } = await this.initTheme();

        // 宽度计算
        let itemWidth = 128;
        let themeWidth = itemWidth * 4 / (themes.length + 1);

        this.updater.set({
            itemWidth,
            themeWidth,
            themes,
            themeKey: themes[0]['key'],
        })

        this.setValues();
    },
    setValues(post) {
        let { list, themeKey, custom, themes } = this.updater.get();
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
            colors = this['@{get.base}']({
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
        this.updater.digest({
            cur,
            list
        })

        // 通知iframe改变颜色
        let frame = document.getElementById('frame_' + this.id);
        if (post) {
            frame.contentWindow.postMessage({
                type: 'changeTheme',
                colors
            }, '*');
        } else {
            // 加载完成
            frame.onload = () => {
                frame.contentWindow.postMessage({
                    type: 'changeTheme',
                    colors,
                }, '*');
            };
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
            // 品牌色变化时所有变量切换
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

            // 联动调整的变量
            let linkages = {
                '--color-brand-gradient': {
                    '--btn-brand-gradient': event.color,
                },
                '--color-brand-hover-gradient': {
                    '--btn-brand-gradient-hover': event.color,
                }
            }
            let links = Magix.mix({
                [key]: event.color,
            }, linkages[key] || {});

            list.forEach(g => {
                g.subs.forEach(s => {
                    s.value = links[s.key] || s.value;
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
        this.mxModal('@./copy', {
            list: this.updater.get('list'),
        }, {
            header: {
                title: '复制我的定制主题',
            },
            footer: {
                enter: false
            },
            width: 800
        });
    }
});