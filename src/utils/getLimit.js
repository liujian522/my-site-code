export default function getLimit(options) {
    let limit = [];
    let op = {};
    options.split('&').forEach((el, index) => {
        limit.push(el.split('='))
    })
    limit.forEach((r, i) => {
        op[r[0]] = r[1]
    })
    return op;
}