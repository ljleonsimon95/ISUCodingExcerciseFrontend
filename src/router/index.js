import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UsersListView from "@/views/UsersListView.vue";
import UserDetailsView from "@/views/UserDetailsView.vue";
import GetUserByIdDetailsView from "@/views/GetUserByIdDetailsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersListView,
  },
  {
    path: "/users/:id",
    name: "users_details",
    component: UserDetailsView,
  },
  {
    path: "/search-users",
    name: "search_users_details",
    component: GetUserByIdDetailsView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
