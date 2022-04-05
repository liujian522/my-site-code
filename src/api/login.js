function delay(times = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, times)
    })
}
export async function login(loginId, password) {
    await delay(2000)
    if (loginId === 'admin' && password === '123123') {
        const user = {
            loginId,
        }
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
}
export async function loginOut() {
    await delay(1000)
    localStorage.removeItem('user');
    return null;
}

export async function whoAmI() {
    await delay(1000);
    const myUser = localStorage.getItem('user');
    if (myUser) {
        return JSON.parse(myUser);
    } else {
        return undefined;
    }
}