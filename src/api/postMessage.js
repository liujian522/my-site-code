import request from './request';
export async function postMessage(comment) {
    return await request.post("/api/message", comment);
}
export async function getMessage(page = 1, limit = 10, keyword = '') {
    return await request.get("/api/message", 'get', {
        params: {
            page,
            limit,
            keyword,
        }
    });
}