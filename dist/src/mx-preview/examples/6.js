let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@6.html',
    render() {
        let list = [
            'https://img.alicdn.com/tfs/TB1xt_lwmBYBeNjy0FeXXbnmFXa-690-416.jpg',
            'https://img.alicdn.com/tfs/TB1UUX7wbGYBuNjy0FoXXciBFXa-686-408.jpg',
            'https://img.alicdn.com/tfs/TB1klyskwDD8KJjy0FdXXcjvXXa-254-218.png',
            'https://img.alicdn.com/tfs/TB1tX04gbYI8KJjy0FaXXbAiVXa-550-832.png',
            'https://img.alicdn.com/tfs/TB1ByTYaMoQMeJjy0FpXXcTxpXa-420-320.png',
            'https://img.alicdn.com/tfs/TB1WO78SpXXXXbEapXXXXXXXXXX-1039-693.png',
            'https://img.alicdn.com/tfs/TB1UoWNPFXXXXc1aXXXXXXXXXXX-158-93.png',
            'https://img.alicdn.com/tfs/TB1K8oRPXXXXXcDXpXXXXXXXXXX-455-250.png',
            'https://img.alicdn.com/tfs/TB1HHqEIVXXXXaYXVXXXXXXXXXX.jpg'
        ]
        this.updater.digest({
            list
        });
    }
});