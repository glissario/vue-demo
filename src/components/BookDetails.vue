<template>
  <div class="table">
    <img class="image" :src="booksdata.cover" />
    <h1 class="title">{{ booksdata.title + ": " }}</h1>
    <h2 class="subtitle">{{ booksdata.subtitle }}</h2>
    <div>
      <p class="author">
        {{ "Author: " + booksdata.author }}
      </p>
      <p>
        {{
          "published by: " +
          booksdata.publisher +
          " - pages: " +
          booksdata.numPages
        }}
      </p>
      <big> {{ "for only: " + booksdata.price }} </big>
    </div>
    <p class="abstract">{{ booksdata.abstract }}</p>
  </div>
  <button @click="myIsbn">next</button>
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

    const httpElement = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const jsonData = await httpElement.json();
    this.booksdata = jsonData;
  },
};
</script>

<style scoped>
.table {
  width: 50rem;
  margin: auto;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  box-shadow: rgba(208, 206, 206, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.image {
  margin: auto;
  grid-column-start: span 1;
  grid-row-start: span 3;
  align-self: center;

  box-shadow: rgba(208, 206, 206, 0.3) 0px 19px 38px,
    rgba(208, 206, 206, 0.22) 0px 15px 12px;
}
.title {
  padding-right: 1rem;
  margin: 0rem 1rem;
  margin-top: 1.5rem;
}
.subtitle {
  font-size: 1.25rem;
  padding-right: 1rem;
  margin: 0rem 1rem;
}
.author {
  display: inline;
  margin: 0;
}
.abstract {
  grid-column-start: span 2;
  margin: 0.5rem;
  padding: 0.5rem 2.5rem;
  text-align: left;
}
</style>
