import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import SignUp from "../views/auth/SignUp.vue";
import SignIn from "../views/auth/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "SignIn",
    component: SignIn,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
