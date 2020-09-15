import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import { isSignedIn } from "../services/AuthService";

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
      isSignedIn() === true ? next() : next('/');  
    }
  },
  {
    path: "/Question/:id",
    name: "Question",
    component: () => import("../views/Question.vue"),
    beforeEnter (_, __, next) {
      isSignedIn() === true ? next() : next('/');  
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
