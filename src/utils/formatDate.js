export default function(time, showTime = false) {
    const date = new Date(+time)
    let str = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    if (!showTime) {
        return str
    } else {
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        const second = date.getSeconds().toString().padStart(2, '0');
        str += `  ${hour}:${minute}:${second}`;
        return str;
    }

}