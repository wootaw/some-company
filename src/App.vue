<template lang="pug">
  div#app
    .container
      header-block
      main-block
      .modal(
        :class="{'hidden': modal == null}"
        @click.self="modal=null"
      )
        .modal-wrapper
          .modal-cell
            component(:is="modal" v-bind="dialogParams")
    footer-block
</template>

<script>
import HeaderBlock from "./components/header-block";
import MainBlock from "./components/main-block";
import FooterBlock from "./components/footer-block";
import AdditionalNotes from "./components/modals/additional-notes";
import { EventBus } from "./utils/event-bus";

export default {
  name: "App",
  components: {
    HeaderBlock,
    MainBlock,
    FooterBlock,
    AdditionalNotes
  },

  data() {
    return {
      modal: null,
      dialogParams: {}
    };
  },

  mounted() {
    EventBus.$on("modal", param => {
      if (param == null) {
        this.modal = null;
      } else {
        this.modal = param.dialog;
        this.dialogParams = param.params || {};
      }
    });
  }
};
</script>

<style lang="scss">
@import "~@/styles/app.scss";
@import "~@/styles/variables.scss";
#app {
  font-family: sans-serif, Helvetica, Arial;
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
  position: relative;
  .modal {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.4);
    &.hidden {
      display: none;
    }
    .modal-wrapper {
      display: table;
      height: 100%;
      margin: 0 auto;
      .modal-cell {
        display: table-cell;
        vertical-align: middle;
      }
    }
    .modal-dialog {
      margin: 0 auto;
      background-color: white;
      border-radius: 6px;
      box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
