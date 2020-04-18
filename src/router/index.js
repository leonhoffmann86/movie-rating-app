import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";
import AddMovie from "@/components/AddMovie";
import Movie from "@/components/Movie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // eslint-disable-next-line prettier/prettier
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    // eslint-disable-next-line prettier/prettier
    component: Contact,
  },
  {
    path: "/movies/add",
    name: "AddMovie",
    // eslint-disable-next-line prettier/prettier
    component: AddMovie,
  },
  {
    path: "/movies/:id",
    name: "Movie",
    component: Movie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // eslint-disable-next-line prettier/prettier
  routes,
});

export default router;
