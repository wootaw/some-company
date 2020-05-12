<template lang="pug">
  main
    breadcrumb
    section
      .section-wrapper
        nav-menu
        .main-wrapper
          router-view
</template>

<script>
import Breadcrumb from './breadcrumb'
import NavMenu from './nav-menu'

export default {
  name: 'App',
  components: {
    Breadcrumb,
    NavMenu
  }
}
</script>

<style lang="scss">
@import "~@/styles/variables.scss";
main {
  padding: 0 0 180px 0;
}
.section-wrapper {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.main-wrapper {
  margin-left: 20px;
  width: 918px;
}
</style>