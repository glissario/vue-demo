<template>
  <ul>
    <li @click="navigate('books')">
      <router-link :to="{ name: 'books' }" active-class="active"
        >Books</router-link
      >
    </li>
    <li>
      <router-link :to="{ name: 'about' }" active-class="active"
        >About</router-link
      >
    </li>
  </ul>
</template>

<style lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;

  li {
    float: left;
  }

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover:not(.active) {
      background-color: #111111;
    }

    &.active {
      background-color: #4caf50;
    }
  }
}
</style>
