<template>
  <table class="book-list" v-for="(book, i) in booksApi" v-bind:key="i">
    <book-list-item
      @change-button="checkStatus"
      :title="book.title"
      :isbn="book.isbn"
      :subtitle="book.subtitle"
    />
  </table>
</template>

<script>
import globalbooks from "./../__mocks__/books.json";

export default {
  data() {
    return {
      books: [],
      substring: "tt",
      booksApi: [],
    };
  },
  mounted() {
    this.books = globalbooks.books;
  },
  methods: {
    changeButton() {
      console.log(this.buttonIsActive);
      this.buttonIsActive = true;
    },
  },
  async created() {
    const apiUrl = "http://localhost:4730/books";
    const httpElement = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const jsonData = await httpElement.json();
    this.booksApi = jsonData;
  },
};
</script>

<style scoped lang="scss">
.book-list {
  margin: auto;
}
</style>
