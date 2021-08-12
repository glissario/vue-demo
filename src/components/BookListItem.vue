<template>
  <tr class="line">
    <td class="title">
      {{ title + ": " }}
      <small>{{ subtitle }}</small>
    </td>
    <td class="isbn">
      <router-link :to="{ name: 'details', params: { isbn } }">
        {{ "ISBN: " + isbn }}</router-link
      >
    </td>
    <td class="table-button">
      <input
        type="button"
        class="button"
        :value="buttonText"
        @click="checkStatus"
      />
    </td>
  </tr>
  <!--  :disabled="buttonIsActive"-->
  <!--router-link :to="{ name: 'details', params: { isbn: isbn } }">
    {{ title }}</router-link
  -->
</template>

<script>
export default {
  data() {
    return {
      buttonText: "not read ❌",
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
      console.log(this.buttonText);
      return this.buttonText !== "read ✅"
        ? (this.buttonText = "read ✅")
        : (this.buttonText = "not read ❌");
    },
  },
};
</script>

<style scoped>
.line {
  padding-bottom: 2rem;
}
.title {
  _border: 1px solid blue;
  border-bottom: 5px dotted gray;
  width: 35rem;
  height: 2rem;
  padding: 1.5rem 0.5rem;
  margin: auto;
  hyphens: auto;
}
.isbn {
  border-bottom: 5px dotted gray;
  width: 15rem;
  height: 2rem;
  padding: 0.5rem;
  margin: auto;
}

.table-button {
  border-bottom: 5px dotted gray;
  width: 10rem;
}
</style>
