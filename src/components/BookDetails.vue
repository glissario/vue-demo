<template>
  <div class="table">
    <img class="image" :src="booksdata.cover" />
    <h1>{{ booksdata.title }}</h1>
    <h2>{{ booksdata.subtitle }}</h2>
    <div>
      <p class="author">
        {{
          "published by: " +
          booksdata.publisher +
          ", author: " +
          booksdata.author
        }}
      </p>
      <p>
        {{ "pages: " + booksdata.numPages + " - for only: " + booksdata.price }}
      </p>
    </div>
    <p class="abstract">{{ booksdata.abstract }}</p>
  </div>
</template>

<script>
export default {
  name: "BookDetails",
  data() {
    return {
      booksdata: "",
      image: "localhost:4730/covers/1001606140805.png",
    };
  },

  beforeRouteUpdate() {
    this.isbn = this.$route.params.isbn;
  },

  beforeRouteLeave() {
    const answer = window.confirm("Bist du sicher?");
    console.log("test");
    return answer;
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
h2 {
  font-size: 18;
}

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
.author {
  display: inline;
  margin: 0;
}
.abstract {
  grid-column-start: span 2;
}
</style>
