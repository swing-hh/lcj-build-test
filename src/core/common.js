// 驼峰转换下划线
function toLine(name) {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}
export default { toLine }