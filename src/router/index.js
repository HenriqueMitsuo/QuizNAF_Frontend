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
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    beforeEnter (_, __, next) {
      checkAuth() === true ? next() : next('/');  
    }
  },
  {
    path: "/Question/:id",
    name: "Question",
    component: () => import("../views/Question.vue"),
    beforeEnter (_, __, next) {
      checkAuth() === true ? next() : next('/');  
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
