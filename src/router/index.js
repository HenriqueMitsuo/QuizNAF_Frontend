import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

import authGuard from "./guards/AuthGuard";
import roleGuard from "./guards/RoleGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
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
    meta: { requiresAuth: true, requireRoles: [0, 1, 2] }
  },
  {
    path: "/Question/:id",
    name: "Question",
    component: () => import("../views/Question.vue"),
    meta: { requiresAuth: true, requireRoles: [0, 1, 2] }
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { requiresAuth: true, requireRoles: [0, 1, 2] }
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: { requiresAuth: true, requireRoles: [2] }
  },
  {
    path: "/Professor",
    name: "Professor",
    component: () => import("../views/Professor.vue"),
    meta: { requiresAuth: true, requireRoles: [1, 2] }
  },
  {
    path: "/Create/:id",
    name: "Create",
    component: () => import("../views/Create.vue"),
    meta: { requiresAuth: true, requireRoles: [1, 2] }
  },
  {
    path: "/Edit/:id",
    name: "Edit",
    component: () => import("../views/Edit.vue"),
    meta: { requiresAuth: true, requireRoles: [1, 2] }
  },
  {
    path: "/QuestionList/:id",
    name: "QuestionList",
    component: () => import("../views/QuestionList.vue"),
    meta: { requiresAuth: true, requireRoles: [1, 2] }
  }
];

const router = new VueRouter({
  routes
});

// Route Guards
router.beforeEach((to, from, next) => {
  authGuard(to, from, next);
  roleGuard(to, from, next);
});

export default router;
