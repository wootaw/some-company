<template lang="pug">
  .nav-wrapper
    ul.nav
      li
        router-link(to="/data") COMPANY DATA
      li
        router-link(to="/table") COMPANY TABLE
      li
        router-link(to="/page") COMPANY PAGE
</template>

<style lang="scss">
@import "~@/styles/variables.scss";
ul.nav {
  width: 260px;
  margin: 0;
  padding: 0;
  border: 1px solid $grey_color;
  border-radius: 6px;
  overflow: hidden;
  li {
    list-style: none;
    a {
      display: block;
      padding: 20px;
      border-bottom: 1px solid $grey_color;
      text-align: left;
      text-decoration: none;
      color: $primary_color;
      &.router-link-active {
        border-left: 4px solid $primary_color_dk;
        background-color: $grey_color_lt;
      }
    }
    &:last-child a {
      border-bottom: 0;
    }
  }
}
</style>