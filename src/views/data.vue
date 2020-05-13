<template lang="pug">
  .data-wrapper
    h4.mb-15  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmode tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    .fields.two
      .field
        label COMPANY NAME
        input(type="text" placeholder="e.g. Your Company Name")
    .fields.two
      .field
        label COMPANY SPEND
        input(type="text" placeholder="e.g. $150,000")
    .fields.two
      .field
        label COMPANY SPEND ABILITY
        input(type="text" placeholder="e.g. $150,000")
    .field
      label NOTES
      textarea(placeholder="e.g. Good Tech Company" rows="8")
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
  .fields {
    display: flex;
    &.two {
      .field {
        width: 50%;
      }
    }
  }
  .field {
    padding: 10px 0;
    label {
      display: block;
      margin: 0 0 5px 0;
    }
    input,
    textarea {
      width: 100%;
      margin: 0em;
      outline: none;
      font-size: 1em;
      padding: 0.67857143em 1em;
      border-radius: 6px;
      border: 1px solid $grey_color;
      box-shadow: 0 0 1px 4px $grey_color_lt;
      &::placeholder {
        color: $grey_color;
      }
    }
    textarea {
      box-sizing: border-box;
    }
  }
}
</style>