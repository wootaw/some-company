<template lang="pug">
  .data-wrapper
    h4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmode tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    .field
      label COMPANY NAME
      input(type="text" placeholder="e.g. Your Company Name")
    .field
      label COMPANY SPEND
      input(type="text" placeholder="e.g. $150,000")
    .field
      label COMPANY SPEND ABILITY
      input(type="text" placeholder="e.g. $150,000")
    .field
      label NOTES
      textarea
</template>

<style lang="scss">
@import "~@/styles/variables.scss";
.data-wrapper {
  border: 1px solid $grey_color;
  border-radius: 6px;
  padding: 20px;
  text-align: left;
  h4 {
    padding: 0;
    margin: 0;
  }
}
</style>