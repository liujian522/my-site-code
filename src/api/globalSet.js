import request from './request';
export async function globalSet() {
    return await request.get("/api/setting");
}