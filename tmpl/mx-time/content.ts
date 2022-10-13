import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as I18n from '../mx-medusa/util';
Magix.applyStyle('@content.less');

export default View.extend({
    tmpl: '@content.html',
    init(extra) {
        this.updater.set({
            parseTime: (time) => {
                if (!time) {
                    let d = new Date();
                    time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                }
                let ts = time.split(':');
                if (ts.length != 3) {
                    throw new Error('bad time:' + time);
                }
                return {
                    '@{hour}': parseInt(ts[0], 10) || 0,
                    '@{minute}': parseInt(ts[1], 10) || 0,
                    '@{second}': parseInt(ts[2], 10) || 0
                };
            },
            parseType: (type) => {
                if (!type) {
                    type = 'all';
                }
                let enables = {
                    '@{hour}': true,
                    '@{minute}': true,
                    '@{second}': true
                };
                let keysMap = {
                    hour: '@{hour}',
                    minute: '@{minute}',
                    second: '@{second}'
                };
                if (type != 'all') {
                    for (let p in keysMap) {
                        if (type.indexOf(p) === -1) {
                            delete enables[keysMap[p]];
                        }
                    }
                }
                return enables;
            },
            format: (t) => {
                if (t < 10) return '0' + t;
                return t;
            },
        });

        this.assign(extra);
    },
    assign(extra) {
        this.viewOptions = extra;
        this.updater.snapshot();

        let data = extra.data || {};
        let { parseTime, parseType } = this.updater.get();
        let time = parseTime(data.time);
        let types = parseType(data.types);
        this.updater.set({
            ...data,
            mins: {
                '@{hour}': +data.hourMin || 0,
                '@{minute}': +data.minuteMin || 0,
                '@{second}': +data.secondMin || 0,
            },
            maxs: {
                '@{hour}': +data.hourMax || 23,
                '@{minute}': +data.minuteMax || 59,
                '@{second}': +data.secondMax || 59,
            },
            time,
            types,
            submitText: I18n['dialog.submit'],
            cancelText: I18n['dialog.cancel'],
        });

        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();

        let viewOptions = this.viewOptions;
        if (viewOptions.prepare) {
            viewOptions.prepare();
        }
    },

    val(v) {
        let { parseTime, format } = this.updater.get();
        if (v) {
            this.updater.digest({
                time: parseTime(v),
            });
        }
        let { time } = this.updater.get();
        return format(time['@{hour}']) + ':' + format(time['@{minute}']) + ':' + format(time['@{second}']);
    },

    '@{change.time.by.type}'(type, increase) {
        let { time, mins, maxs } = this.updater.get();

        let min = mins[type],
            max = maxs[type];
        if (increase) {
            time[type]++;
        } else {
            time[type]--;
        }
        if (time[type] > max) {
            time[type] = min;
        } else if (time[type] < min) {
            time[type] = max;
        }
        this.updater.digest({
            time,
        });
    },

    '@{fire.event}'() {
        let node = $('#' + this.id);
        let { time, format } = this.updater.get();
        node.trigger({
            type: 'change',
            time: format(time['@{hour}']) + ':' + format(time['@{minute}']) + ':' + format(time['@{second}']),
        });
    },

    '@{change}<click>'(e) {
        if (!this['@{fast.change.start}']) {
            let params = e.params;
            this['@{change.time.by.type}'](params.type, params.inc);
            this['@{fire.event}']();
        }
    },

    '@{set}<change>'(e) {
        e.stopPropagation();

        let { format, mins, maxs, time } = this.updater.get();
        let type = e.params.type;

        let min = mins[type],
            max = maxs[type];

        let value = e.eventTarget.value;
        let v = parseInt(value, 10);
        let fire = false;
        if (v || v === 0) {
            if (v < min) {
                v = min;
            } else if (v > max) {
                v = max;
            }
            if (v !== time[type]) {
                fire = true;
                time[type] = v;
            } else {
                time[type] = format(v);
            }
        } else {
            time[type] = format(time[type]);
        }
        this.updater.digest({
            time,
        });
        if (fire) {
            this['@{fire.event}']();
        }
    },
    '@{fast.start}<mousedown>'(e) {
        let that = this;
        let params = e.params;
        that['@{long.tap.timer}'] = setTimeout(that.wrapAsync(() => {
            that['@{interval.timer}'] = setInterval(that.wrapAsync(() => {
                that['@{fast.change.start}'] = true;
                that['@{change.time.by.type}'](params.type, params.inc);
            }), 50);
        }), 250);
    },

    '@{press.check}<keydown>'(e) {
        let that = this;
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            that['@{change.time.by.type}'](e.params.type, e.keyCode == 38);
            clearTimeout(that['@{event.dealy.timer}']);
            that['@{event.dealy.timer}'] = setTimeout(that.wrapAsync(() => {
                that['@{fire.event}']();
            }), 100);
        }
    },

    '$doc<mouseup>'() {
        let that = this;
        clearTimeout(that['@{long.tap.timer}']);
        clearInterval(that['@{interval.timer}']);
        setTimeout(that.wrapAsync(() => {
            if (that['@{fast.change.start}']) {
                that['@{fire.event}']();
            }
            delete that['@{fast.change.start}'];
        }), 0);
    },

    '@{submit}<click>'(e) {
        let viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit(this.val());
        }
    },

    '@{cancel}<click>'(e) {
        let viewOptions = this.viewOptions;
        if (viewOptions.cancel) {
            viewOptions.cancel();
        }
    },
});