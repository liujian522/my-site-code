function isImg(el) {
    return el.querySelector('img[data-role=loading]')
}
import styles from './index.module.less'

function createImg() {
    const img = document.createElement("img");
    img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F7%2F2%2F9%2F1813927.gif&refer=http%3A%2F%2Fimg.ui.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645243616&t=8eb7fb6671a0391c339c3894b6dc6156';
    img.dataset.role = "loading";
    img.className = styles.img;
    img.style.height = 100 + "px";
    return img;
}
export default function(el, bingding) { //导出一个函数
    const curImg = isImg(el);
    if (bingding.value) {
        if (!curImg) {
            const img = createImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}