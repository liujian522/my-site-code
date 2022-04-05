export default (fn, timers = 100) => {
    let timer = null;
    return (dom) => {
        clearInterval(timer);
        timer = setTimeout(() => {
            fn(dom);
        }, timers);
    }
}
// debounce(this.setSelect([0,1]),1000)