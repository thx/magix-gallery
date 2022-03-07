import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@carousel.html',
    render() {
        let list = [{
            value: 'dot-in-center',
            text: 'dot-in-center(默认)'
        }, {
            value: 'dot-in-left',
            text: 'dot-in-left'
        }, {
            value: 'dot-in-right',
            text: 'dot-in-right'
        }, {
            value: 'dot-out-center',
            text: 'dot-out-center'
        }, {
            value: 'line-in-center',
            text: 'line-in-center'
        }, {
            value: 'line-in-left',
            text: 'line-in-left'
        }, {
            value: 'line-in-right',
            text: 'line-in-right'
        }, {
            value: 'line-out-center',
            text: 'line-out-center'
        }]

        let verticals = [{
            value: 'false',
            text: '水平(默认)'
        }, {
            value: 'true',
            text: '垂直'
        }]

        this.updater.digest({
            viewId: this.id,
            cur: list[2],
            list,
            curVer: verticals[1],
            verticals
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            cur: e.params.item
        })
    },
    'changeVer<change>'(e) {
        this.updater.digest({
            curVer: e.params.item
        })
    }
});