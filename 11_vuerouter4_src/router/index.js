import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import Home from "../pages/Home.vue"
// import About from "../pages/About.vue"
// 路由懒加载
// const About = () => import("../pages/About.vue")
// 对分包进行命名
// const About = () => import(/* webpackChunkName: "about" */ "../pages/About.vue")

// 创建一个路由
const router = createRouter({
    // 指定采用的模式：hash
    // history: createWebHashHistory(),
    // 指定采用的模式：history
    history: createWebHistory(),
    // 映射关系
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            // name属性应该是独一无二的
            name: "home",
            path: "/home",
            component: Home,
            // meta属性
            meta: {
                title: "首页"
            },
            // 添加嵌套路由
            children: [
                {
                    path: "/home",
                    redirect: "/home/news"
                },
                {
                    path: "news",  // url:/home/news
                    component: () => import("../pages/News.vue")
                },
                {
                    path: "message",
                    component: () => import("../pages/Message.vue")
                }
            ]
        },
        {
            name: "about",
            path: "/about",
            // component: About
            component: import("../pages/About.vue")
        },
        {
            name: "user",
            // 添加动态路由
            path: "/user/:id",
            component: () => import("../pages/User.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("../pages/NotFound.vue")
        }
    ]
})

let isAdmin = true
if (isAdmin) {
    // 动态添加路由
    // 一级路由
    router.addRoute({
        path: "/dashboard",
        component: () => import("../pages/Dashboard.vue")
    })
    // 二级路由
    router.addRoute("dashboard", {
        path: "user",
        component: () => import("../pages/User.vue")
    })
}

// 全局前置守卫，在导航触发时会被调用
// 参数：to，即将进入的路由对象；from：即将离开的路由对象
router.beforeEach((to, from) => {
    console.log(to, from)
    // 1.进入到任何别的页面，都跳转到user页面
    // if(to.path!=="/user"){
    //     return "/user"
    // }

    // 2.进入dashboard页面，需要先登录
    let token = "abccba"
    if (!token && to.path == '/dashboard') {
        return "/user"
    }
})

export default router