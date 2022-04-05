function delay(times) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, times)
    })
}

import 'nprogress/nprogress.css'
import { start, done, configure } from 'nprogress'

configure({
    trickleSpeed: 20, //时间
    showSpinner: false, //是否显示圆圈
})

start() //开始
done() //结束
function getPageComponent(page) { //该函数返回一个Promise
    return async() => {
        start();
        if (process.env.NODE_ENV !== 'production') { //不是生产阶段就等待
            await delay(2000);
        }
        const component = await page();
        done();
        return component
    }
}
// import Home from '';
// import About from '@/views/About';
// import Demo from;
// import Project from;
// import Blog from;
// import Details from;
// import Message from;
// import Person from;
// import Login from;
// import Loading from;
const routes = [{
        name: 'Home',
        path: '/',
        component: () =>
            import ('@/views/Home'),
        meta: { title: '主页', }
    },
    {
        name: 'About',
        path: '/about',
        component: () =>
            import ('@/views/About'),
        meta: { title: '关于我', }
    },
    {
        name: 'Demo',
        path: '/project/demo/:url',
        component: () =>
            import ('@/views/Project/Demo'),
        meta: { title: '项目和效果详情', }
    },
    {
        name: 'Project',
        path: '/project',
        component: () =>
            import ('@/views/Project'),
        meta: { title: '项目和效果', }
    },
    {
        name: 'Blog',
        path: '/article',
        component: () =>
            import ('@/views/Blog'),
        meta: { title: '文章', }
    },
    //动态路由
    {
        name: 'CategoryBlog',
        path: '/article/cate/:categoryId',
        component: () =>
            import ('@/views/Blog'),
        meta: { title: '文章分类', }
    },
    {
        name: 'Blogdetails',
        path: '/article/:detailId',
        component: () =>
            import ('@/views/Blog/components/Details'),
        meta: { title: '文章详情', }
    },

    {
        name: 'Message',
        path: '/message',
        component: () =>
            import ('@/views/Message'),
        meta: {
            title: '留言板',
            auth: true,
        }
    },
    {
        name: 'Person',
        path: '/person',
        component: () =>
            import ('@/views/Person'),
        meta: {
            title: '个人中心',
            auth: true,
        }
    },
    {
        name: 'Login',
        path: '/loginUser',
        component: () =>
            import ('@/components/Login'),
        meta: {
            title: '登录',
        }
    },
    {
        name: 'Loading',
        path: '/loading',
        component: () =>
            import ('@/views/Loading'),
        meta: {
            title: '加载中',
        }
    },
]
export default routes;