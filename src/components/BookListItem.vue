<template>
  <td class="book-items">{{ "Title: " + title }}</td>
  <td class="book-items">
    <router-link :to="{ name: 'details', params: { isbn: isbn } }">
      {{ "ISBN: " + isbn }}</router-link
    >
  </td>
  <td class="table-button">
    <input
      type="button"
      class="button"
      value="read"
      @click="checkStatus"
      :disabled="buttonIsActive"
    />
  </td>
  <!--router-link :to="{ name: 'details', params: { isbn: isbn } }">
    {{ title }}</router-link
  -->
</template>

<script>
export default {
  data() {
    return {
      buttonIsActive: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    isbn: {
      required: true,
    },
    nunPages: {
      type: Number,
      validator(propValue) {
        return propValue < 1000 ? propValue : "error";
      },
    },
  },
  methods: {
    checkStatus() {
      this.$emit("change-button");
      this.buttonIsActive = true;
    },
  },
};
</script>

<style scoped>
.book-items {
  border: 1px solid blue;
  width: 25rem;
  height: 2rem;
  padding: 0.5rem;
  margin: auto;
}
.table-button {
  border: 1px solid blue;
  width: 5rem;
}
</style>
