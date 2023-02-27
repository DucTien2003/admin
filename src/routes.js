import DefaultLayout from "./layouts/DefaultLayout.vue";
import ForgotPass from "./layouts/public/ForgotPass.vue";
import Login from "./layouts/public/Login.vue";
import Register from "./layouts/public/Register.vue";

import Dashboard from "./views/Dashboard.vue";
import Tablets from "./views/Tablets.vue";
import Borders from "./views/utilities/Borders.vue";
import Colors from "./views/utilities/Colors.vue";

export const routes = [
  // layout
  {
    path: "/",
    name: "default-layout",
    component: DefaultLayout,
    children: [
      // views
      {
        path: "",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "/tablets",
        name: "tablets",
        component: Tablets
      },
      {
        path: "/borders",
        name: "borders",
        component: Borders
      },
      {
        path: "/colors",
        name: "colors",
        component: Colors
      }
    ]
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
