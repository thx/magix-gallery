import Base from './index';
export default Base.extend({
    render() {
        this.updater.digest({
            second: true
        });
    }
});