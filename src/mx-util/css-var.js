/**
 * 获取css变量
 * 优先级：style设置 > root配置，在线预览配置 #!/all/edit/index
 */
module.exports = {
    get: (key, def) => {
        let root = window.getComputedStyle(document.documentElement);
        let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
        if (!v) {
            return def || '';
        } else {
            return v.trim();
        }
    }
}