import Base from './base';
export default Base.extend({
    render() {
        this.updater.digest({
            second: true
        });
    }
});