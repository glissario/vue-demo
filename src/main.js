import { createApp } from "vue";
import App from "./App.vue";
import BookListItem from "./components/BookListItem.vue";
import router from "./router";

const app = createApp(App).use(router);

app.component("book-list-item", BookListItem);

app.mount("#app");
