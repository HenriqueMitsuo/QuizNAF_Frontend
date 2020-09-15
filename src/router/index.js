import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import { checkAuth } from "../services/AuthService";

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
  }
];

const router = new VueRouter({
  routes
});

// Route Guards
router.beforeEach((to, from, next) => {
  if ((to.matched.some(record => record.meta.requiresAuth))) {
    // Essa rota requer auth. Se não estiver logado, redirecionar para tela de login
    checkAuth() ? next() : next('/');
  } else {
    next();
  }
});

export default router;
