import {
    createRouter,
    createWebHistory
} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/admin/login",
            name: "login",
            component: () => import("../pages/Login.vue"),
        },
        {
            path: "/admin",
            name: "main",
            component: () => import("../pages/Main.vue"),
        },
        {
            path: "/admin/request/main",
            name: "request_main",
            component: () => import("../pages/Request/Main.vue"),
        },
        {
            path: "/admin/request/professional",
            name: "request_professional",
            component: () => import("../pages/Request/Professional.vue"),
        },
        {
            path: "/admin/request/contact",
            name: "request_contact",
            component: () => import("../pages/Request/MainContact.vue"),
        },
        {
            path: "/admin/articles/created",
            name: "articles_created",
            component: () => import("../pages/Articles/Created.vue"),
        },
        {
            path: "/admin/articles/edit/:id",
            name: "articles_edit",
            component: () => import("../pages/Articles/Edit.vue"),
        },
        {
            path: "/admin/articles/main",
            name: "articles_main",
            component: () => import("../pages/Articles/Main.vue"),
        },


        {
            path: "/admin/blog/created",
            name: "blog_created",
            component: () => import("../pages/Blog/Created.vue"),
        },
        {
            path: "/admin/blog/edit/:id",
            name: "blog_edit",
            component: () => import("../pages/Blog/Edit.vue"),
        },
        {
            path: "/admin/blog/main",
            name: "blog_main",
            component: () => import("../pages/Blog/Main.vue"),
        },


        {
            path: "/admin/project/created",
            name: "project_created",
            component: () => import("../pages/Project/Created.vue"),
        },
        {
            path: "/admin/project/edit/:id",
            name: "project_edit",
            component: () => import("../pages/Project/Edit.vue"),
        },
        {
            path: "/admin/project/main",
            name: "project_main",
            component: () => import("../pages/Project/Main.vue"),
        },



        {
            path: "/admin/settings",
            name: "settings",
            component: () => import("../pages/Settings/Main.vue"),
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import("../pages/Error/Error-404.vue"),
        },
    ],
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/admin/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('admin');

  if (authRequired && !loggedIn) {
      next('/admin/login');
  } else {
      next();
  }
});

export default router;
