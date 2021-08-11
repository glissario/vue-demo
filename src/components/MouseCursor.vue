<template>
  <div
    v-bind:id="mId"
    v-on:mousemove="mousePosition($event)"
    class="mouse-position"
  >
    last mouse-coordinates: x: {{ x }} + y: {{ y }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: "",
      y: "",
      mId: "mouse",
    };
  },
  computed: {},

  methods: {
    mousePosition(event) {
      //console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
  watch: {
    x() {
      if (this.x > 150) {
        alert("Achtung zu weit rechts");
      }
    },
    y: function (currentY, prevY) {
      console.log(currentY);
      console.log("prev" + prevY);
      if (prevY >= 60 && currentY < 60) {
        alert("nicht so hoch");
        this.y = 0;
      }
    },
  },
};
</script>

<style scoped>
.mouse-position {
  border: 5px solid red;
  width: 20rem;
  height: 8rem;
  padding: 0.5rem;
  margin: auto;
}
</style>
