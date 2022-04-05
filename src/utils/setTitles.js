let routerTitles = '';
let storeTitles = '';

function setTitle() {
    let title = null;
    const titleDom = document.querySelector('title');
    if (!routerTitles && !storeTitles) {
        return;
    } else if (routerTitles && !storeTitles) {
        title = routerTitles;
    } else if (!routerTitles && storeTitles) {
        title = storeTitles;
    } else {
        title = routerTitles + ' - ' + storeTitles;
    }
    titleDom.innerText = title;
}
export default {
    setRouterTitle(title) {
        routerTitles = title;
        setTitle();
    },
    setStoreTitle(title) {
        storeTitles = title;
        setTitle();
    }
}