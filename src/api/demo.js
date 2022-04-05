import request from './request';
export async function getDemo() {
    return await request.get("/api/project");
}