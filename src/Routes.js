import Home from "./components/Home";
const User = resolve => {
  require.ensure(["./components/User/User"], ()=> {
  resolve(require("./components/User/User"));
 }) 
}
import Header from "./components/Header";
import notFound from "./components/notfound";
import UserDetail from "./components/User/UserDetail";
import UserStart from "./components/User/UserStart";
import UserEdit from "./components/User/UserEdit";

export const routes = [
  {
    path: "",
    components: {
      default: Home,
      "header-top": Header,
    },
    name: "home",
  },
  {
    path: "/404",
    name: "notFound",
    component: notFound,
  },
  {
    path: "*",
    redirect: { name: "notFound" },
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-top": Header,
    },

    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "userEdit" },
    ],
  },
];
