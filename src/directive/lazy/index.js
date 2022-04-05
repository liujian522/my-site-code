import loadingSvg from '@/assets/loading.svg';
import eventBus from '../../eventBus';
import debounce from '@/utils/debounce';
import url from '@/utils/URL_IMG'
let imgArray = [];

function setImgs() {
    for (const item of imgArray) {
        if (!item && !item.src) {
            return;
        };
        item.dom.src = loadingSvg;
        const minHeight = 150;
        const top = item.dom.getBoundingClientRect().top;
        const clientHeight = document.documentElement.clientHeight;
        if (top < clientHeight && (top + minHeight) > 0) {
            item.dom.src = item.src;
            imgArray = imgArray.filter((i) => {
                return i !== item;
            })
        }
    }
}

function pushImgArr(el, binding) {
    imgArray.push({
        dom: el,
        src: url + binding.value,
    });
}

eventBus.$on('scroll', debounce(setImgs, 1))
export default {
    inserted(el, binding) {
        pushImgArr(el, binding);
        setImgs();
    },
    unbind(el) { //解绑删除数组元素
        imgArray = imgArray.filter(item => item.dom !== el);
    },
}