<template>
  <div v-show="isVisible">
    <div class="infoHeader">Book-Informations: {{ info }}</div>
    <div class="box" v-bind:class="{ red: isRed }"></div>
    <div class="box blue"></div>
    <div
      class="box green"
      v-on:click="switchBorder()"
      v-bind:class="{ border: isBordered }"
    ></div>
  </div>
  <button class="button" v-on:click="toggleText()">{{ infoboxStatus }}</button>
</template>

<script>
export default {
  data() {
    return {
      info: "Titel",
      isVisible: true,
      isRed: true,
      isBordered: true,
    };
  },
  methods: {
    toggleText() {
      this.isVisible = !this.isVisible;
    },
    switchBorder() {
      this.isBordered = !this.isBordered;
    },
  },
  computed: {
    infoboxStatus() {
      return this.isVisible ? "hide" : "show";
    },
  },
};
</script>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  display: inline-block;
  background-color: gray;
  border: 3px solid transparent;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.border {
  border: 3px solid black;
}
.button {
  display: block;
  margin: auto;
}
.infoHeader {
  display: block;
  margin: auto;
}
</style>
