import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import SignUp from "../views/auth/SignUp.vue";
import SignIn from "../views/auth/SignIn.vue";
import AboutViewVue from "@/views/AboutView.vue";
import ServicesViewVue from "@/views/ServicesView.vue";
import ServiceDetailVue from "@/views/ServiceDetail.vue";

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
  {
    path: "/about",
    name: "About",
    component: AboutViewVue,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesViewVue,
  },
  {
    path: "/services/:slug",
    name: "ServiceDetail",
    component: ServiceDetailVue,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
