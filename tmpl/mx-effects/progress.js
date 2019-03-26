let Magix = require('magix');
let $ = require('$');
let Util = require('@./util');
Magix.applyStyle('@progress.less');
let ClassNames = {
    left: '@progress.less:num-left',
    right: '@progress.less:num-right',
    top: '@progress.less:num-top',
    bottom: '@progress.less:num-bottom'
}

module.exports = Magix.View.extend({
    tmpl: '@progress.html',
    init(e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign(e) {
        let that = this;
        let altered = that.updater.altered();

        let num = +e.num || 0;
        let s = num + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        // 最多保留两位小数
        if (i > 2) {
            i = 2;
        }

        if (num < 0) {
            num = 0;
        }

        if (num > 100) {
            num = 100;
        }

        let type = e.type || 'line';
        let placement = (e.textPlacement || 'top');
        let width;
        let degree = 0,
            border = e.border || 8,
            color = e.color || '',
            colorGradient = e.colorGradient || '',
            color1, color2;
        switch (type) {
            case 'degree':
                // 刻度型，刻度取整
                degree = parseInt(num / 10);
                break;
            case 'circle':
                // 圆形
                if (!color) {
                    color = '#4d7fff';
                }
                width = e.width || 120;
                break;
            case 'gradient':
                // 渐变
                if(color){
                    let result = Util.toRgb(color);
                    color1 = `rgba(${result.r}, ${result.g}, ${result.b}, 0.4)`;
                    color2 = `rgba(${result.r}, ${result.g}, ${result.b}, 0.2)`;
                }
            case 'line':
                width = e.width || 200;
                break;
        }

        that.updater.set({
            viewId: that.id,
            placement,
            originNum: num,
            num: num.toFixed(i) + '%',
            cName: ClassNames[placement],
            color,
            colorGradient,
            color1,
            color2,
            type,
            text: (e.text + '' !== 'false'),  //是否显示文案
            degree,
            width: +width,
            border: +border,
            gradient: (type == 'gradient')
        });

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        let that = this;
        that.updater.digest();

        let type = that.updater.get('type'),
            originNum = that.updater.get('originNum');
        if (type == 'circle') {
            let circleNode = $('#' + that.id + '_circle');
            let right = circleNode.find('.@progress.less:half-right .@progress.less:progress'),
                left = circleNode.find('.@progress.less:half-left .@progress.less:progress');
            let deg = Math.ceil(360 * originNum / 100);
            let rightDeg, leftDeg;
            if(deg > 180){
                rightDeg = 180;
                leftDeg = deg - rightDeg;
            }else{
                rightDeg = deg;
                leftDeg = 0;
            }
            let duration = Math.ceil(1000 * originNum / 100), easing = 'linear';
            let rightDuration = Math.floor(duration * rightDeg / deg),
                leftDuration = Math.floor(duration * leftDeg / deg);
            right.animate({
                textIndent: 0
            }, {
                step: function (rNow, fx) {
                    let rt = (1 - rNow) * rightDeg - 135;
                    $(this).css({
                        '-webkit-transform': 'rotate(' + rt + 'deg)',
                        'transform': 'rotate(' + rt + 'deg)'
                    });
                },
                duration: rightDuration,
                done: () => {
                    if(leftDeg > 0){
                        left.animate({
                            textIndent: 0
                        }, {
                            step: function (lNow, fx) {
                                let lt = (1 - lNow) * leftDeg - 135;
                                $(this).css({
                                    '-webkit-transform': 'rotate(' + lt + 'deg)',
                                    'transform': 'rotate(' + lt + 'deg)'
                                });
                            },
                            duration: leftDuration
                        }, easing);
                    }
                }
            }, easing);
        }
    }
});