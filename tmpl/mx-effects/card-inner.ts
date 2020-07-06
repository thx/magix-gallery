import Magix from 'magix';
Magix.applyStyle('@card.less');

export default Magix.View.extend({
    tmpl: '@card-inner.html',
    init(e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign(e) {
        let that = this;
        let altered = that.updater.altered();

        that.updater.set({
            item: e.item,
            innerData: e.innerData
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
        this.updater.digest();
    }
});