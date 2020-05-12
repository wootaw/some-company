<template lang="pug">
  footer
    .footer-wrapper
      .grid
        ul.menu
          li Picing
          li Blog
          li Webinars
          li Events
          li Help Center
        span &copy; Copyright 2017, intricately, Inc. All Right Reserved.
      .grid.right
        ul.menu
          li Terms and Conditions
          li Privacy Policy
        ul.social-media
          li
            img(src="~@/assets/fill-118.svg")
          li
            img(src="~@/assets/fill-92.svg")
          li
            img(src="~@/assets/fill-93.svg")
</template>

<style lang="scss">
@import "~@/styles/variables.scss";
footer {
  background-color: $grey_color_lt;
  font-size: 14px;
  .footer-wrapper {
    height: 100px;
    width: 1200px;
    margin: 0 auto;
    padding: 10px 0 40px 0;
    display: flex;
  }
  .grid {
    width: 50%;
    text-align: left;
    &.right {
      text-align: right;
    }
  }
  ul {
    padding: 0;
    li {
      display: inline-block;
    }
    &.menu {
      margin: 30px 0;
      li {
        color: $primary_color;
        padding: 0 30px 0 0;
        position: relative;
        &::after {
          content: "|";
          display: block;
          width: 30px;
          position: absolute;
          right: 0;
          top: 0;
          text-align: center;
        }
        &:last-child {
          padding: 0;
          &::after {
            display: none;
          }
        }
      }
    }
    &.social-media {
      margin: 0;
      li {
        margin-left: 15px;
      }
    }
  }
}
</style>