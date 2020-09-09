import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/Question",
    name: "Question",
    component: () => import("../views/Question.vue")
  },
  {
    path: "/Question1",
    name: "Question1",
    component: () => import("../views/QuestionExample1.vue")
  },
  {
    path: "/Question2",
    name: "Question2",
    component: () => import("../views/QuestionExample2.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
