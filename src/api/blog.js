import request from './request';
//获取博客列表
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        },
    });
}
//获取博客文章分类 不管有无文章
export async function getBlogTypes() {
    return await request.get("/api/blogtype");
}

//获取单个博客
// path: /api/blog/:id
// method: GET
export async function getBlogType(id) {
    return await request.get(`/api/blog/${id}`, );
}


//提交评论
export async function postComment(comment) {
    return await request.post("/api/comment", comment)
}

//获取评论
// path: /api/comment
// method: GET
export async function getComment(blogid = -1, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            page,
            limit,
            blogid
        }
    })
}