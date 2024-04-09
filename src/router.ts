import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import Clothing from "./components/Clothing.vue"
import Electronics from "./components/Electronics.vue";
import Groceries from "./components/Groceries.vue";
import BestSeller from "./components/BestSeller.vue";
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: "/",
    name: "clothing",
    props: true,
    component: Clothing,
  },
  {
    path: "/",
    name: "electronics",
    props: true,
    component: Electronics,
  },
  {
    path: "/",
    name: "groceries",
    props: true,
    component: Groceries,
  },
  {
    path: "/",
    name: "bestseller",
    props: true,
    component: BestSeller,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
