<template>
  <p>Book Details {{ isbn }}</p>
  <p>{{ booksdata }}</p>
</template>

<script>
export default {
  name: "BookDetails",
  data() {
    return {
      booksdata: "",
    };
  },

  beforeRouteUpdate() {
    this.isbn = this.$route.params.isbn;
  },

  beforeRouteLeave() {
    window.confirm("Bist du sicher?");
  },

  async created() {
    this.isbn = this.$route.params.isbn;
    const apiUrl = "http://localhost:4730/books/" + this.isbn;
    console.log(apiUrl);
    const httpElement = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const jsonData = await httpElement.json();
    this.booksdata = jsonData;
    console.log(this.booksdata);
  },
};
</script>
