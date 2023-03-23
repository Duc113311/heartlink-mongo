import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/login/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login-page",
    component: LoginPage,
  },
  {
    path: "/login-new",
    name: "login-page",
    component: () =>
      import(/* webpackChunkName: "login-page" */ "../views/login/index.vue"),
  },
  {
    path: "/control-new",
    name: "control-page",
    component: () =>
      import(
        /* webpackChunkName: "control-page" */ "../views/control/index.vue"
      ),
  },
  // Home
  {
    path: "/dash-board",
    name: "dash-board",
    component: () =>
      import(
        /* webpackChunkName: "dash-board" */ "../views/dashboard/index.vue"
      ),
    children: [
      // Trang Home
      {
        path: "",
        name: "home-news",
        component: () =>
          import(
            /* webpackChunkName: "home-news" */ "../views/dashboard/home/index.vue"
          ),
      },
      // Explore
      {
        path: "/explore-new",
        name: "explore-news",
        component: () =>
          import(
            /* webpackChunkName: "explore-news" */ "../views/dashboard/explore/index.vue"
          ),
      },
      // Message
      {
        path: "/message-new",
        name: "message-new",
        component: () =>
          import(
            /* webpackChunkName: "message-new" */ "../views/dashboard/message/index.vue"
          ),
      },
      // Profile
    ],
  },
  // Like and topic
  {
    path: "/like-topic-news",
    name: "like-topic-news",
    component: () =>
      import(
        /* webpackChunkName: "like-topic-news" */ "../views/like-topic/index.vue"
      ),
  },

  // Setting
  {
    path: "/setting",
    name: "setting-page",
    component: () =>
      import(
        /* webpackChunkName: "setting-page" */ "../views/setting/index.vue"
      ),
  },

  // Thêm thông tin user
  {
    path: "/create-user",
    name: "create-profile",
    component: () =>
      import(
        /* webpackChunkName: "create-profile" */ "../views/create-profile/index.vue"
      ),
  },

  // Control
  {
    path: "/control",
    name: "home-page",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/home/index.vue"),
  },

  // Detail user
  {
    path: "/detail-user/:userId",
    name: "detail-user",
    component: () =>
      import(
        /* webpackChunkName: "detail-user" */ "../views/detail-user/index.vue"
      ),
  },

  // Home Test detail
  {
    path: "/home-new",
    name: "home-page",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/home/index.vue"),
  },

  {
    path: "/edit-profile/:userId",
    name: "edit-profile",
    component: () =>
      import(
        /* webpackChunkName: "setting-page" */ "../views/edit-profile/index.vue"
      ),
  },

  {
    path: "/setting-detail",
    name: "setting-detail",
    component: () =>
      import(
        /* webpackChunkName: "setting-detail" */ "../views/setting/detail/index.vue"
      ),
  },

  {
    path: "/chat",
    name: "chat-page",
    component: () =>
      import(
        /* webpackChunkName: "setting-detail" */ "../views/chat-page/index.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
