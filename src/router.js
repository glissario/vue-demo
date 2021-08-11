import { createRouter, createWebHistory } from "vue-router";

const BookList = () => import("./views/BookList.vue");
const Books = () => import("./views/Books.vue");
const About = () => import("./views/About.vue");
const BookDetails = () => import("./views/BookDetails.vue");

//56:30
//52:00
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/books",
      name: "books",
      component: Books,
      children: [
        {
          path: "",
          component: BookList,
          name: "books",
        },

        {
          path: "/books/:isbn",
          name: "details",
          component: BookDetails,
        },
      ],
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
