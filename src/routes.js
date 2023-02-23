import DefaultLayout from "./layouts/DefaultLayout.vue";
import ForgotPass from "./layouts/public/ForgotPass.vue";
import Login from "./layouts/public/Login.vue";
import Register from "./layouts/public/Register.vue";

export const routes = [
  {
    path: "/",
    name: "default-layout",
    component: DefaultLayout
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPass
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];
