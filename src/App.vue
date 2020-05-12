<template lang="pug">
  div#app
    .container
      header-block
      main-block
    footer-block
</template>

<script>
import HeaderBlock from './components/header-block'
import MainBlock from './components/main-block'
import FooterBlock from './components/footer-block'

export default {
  name: 'App',
  components: {
    HeaderBlock,
    MainBlock,
    FooterBlock
  }
}
</script>

<style lang="scss">
@import "~@/styles/app.scss";
@import "~@/styles/variables.scss";
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 1.42857143;
  color: #505050;
  background-color: transparent;
}
.container {
  min-height: 100%;
  margin-bottom: -150px;
}
</style>
