<template>
  <table class="book-list">
    <tr v-for="(book, i) in booksApi" v-bind:key="i">
      <book-list-item
        @change-button="checkStatus"
        :title="book.title"
        :isbn="book.isbn"
      />
    </tr>
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
/*
.book-items {
  border: 1px solid blue;
  width: 25rem;
  height: 2rem;
  padding: 0.5rem;
  margin: auto;
}*/
</style>
