import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/posts",
    name: "Post",
    component: () => import("../views/posts/list-post/ListPostView/"),
  },
  {
    path: "/posts/create",
    name: "Write Post",

    component: () => import("../views/posts/create-post/CreatePostView"),
  },
  {
    path: "/post/edit/:id",
    name: "EditPost",
    component: () => import("../views/posts/edit-post/EditPostView"),
  },
  {
    path: "/post/:id",
    name: "ReadPost",
    component: () => import("../views/posts/read-post/ReadPostView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
