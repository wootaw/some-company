<template lang="pug">
  section
    .breadcrumb-wrapper
      span(
        v-for="(breadcrumb, idx) in list"
        :key="idx"
        @click="routeTo(idx)"
      ) {{ breadcrumb.name }}
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    }
  },
  methods: {
    routeTo(p) {
      if (this.list[p].link) {
        this.$route.push(this.list[p].link);
      }
    },
    updateList() {
      this.list = this.$route.meta.breadcrumb;
    }
  }
};
</script>

<style lang="scss">
@import "~@/styles/variables.scss";
.breadcrumb-wrapper {
  height: 30px;
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
  line-height: 30px;
  text-align: left;
  span {
    display: inline-block;
    padding: 0 30px 0 0;
    position: relative;
    &::after {
      content: "/";
      padding: 0 10px;
      position: absolute;
      right: 0;
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>