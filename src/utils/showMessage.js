//
import getComponentRootDom from './getComponentRootDom';
import Icon from '@/components/icon';
import styles from './showMessage.module.less';
/**
 * @param {String} content 提示消息
 * @param {String} type 类型 xinxi jinggao ok close
 * @param {Element} container 容器 
 * @param {Element} duration 消息事件 
 * content, type = 'xinxi', container = document.body, duration = '2000'
 */
export default function(options = {}) {
    //创建元素
    const content = options.content || '';
    const container = options.container || document.body;
    const duration = options.duration || 2000;
    const type = options.type || 'xinxi';
    const div = document.createElement("div");
    const icon = getComponentRootDom(Icon, { type });
    div.innerHTML = `<span class="${styles.icon}">${icon.outerHTML}<span>${content}</span></span>`;
    // cssmodule后的名字存在对象中
    const styleName = styles[`message-${type}`];
    div.className = `${styles.message} ${styleName}`;
    if (options.container) {
        if (getComputedStyle(container, null).position === 'static') {
            container.style.position = 'relative';
        }
    }
    container.appendChild(div);
    // 强制渲染一次
    div.clientHeight;
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%) translateY(0px)`;
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-20px)`;
        addEventListener('transitionend', () => {
            div.remove();
            //执行回调函数
            options.callBack && options.callBack();
        }, { once: 'true' })
    }, duration)
}