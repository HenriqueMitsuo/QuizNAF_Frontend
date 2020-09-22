import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

import authGuard from "./guards/AuthGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {  
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/Question/:id",
    name: "Question",
    component: () => import("../views/Question.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  routes
});

// Route Guards
router.beforeEach((to, from, next) => {
  authGuard(to, from, next);
});

export default router;
