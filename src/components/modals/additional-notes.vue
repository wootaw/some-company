<template lang="pug">
  .modal-dialog.additional-notes
    .close-btn(@click="closeModal")
      img(src="~@/assets/close.svg")
    .field
      label ADDITIONAL NOTES
      textarea(
        v-model="text"
        placeholder="e.g. Good Tech Company"
        rows="8"
      )
    .buttons
      button(@click="saveNotes") SAVE
</template>

<script>
import { EventBus } from "@/utils/event-bus";
export default {
  props: ["notes"],

  data() {
    return {
      text: null
    };
  },

  methods: {
    closeModal() {
      EventBus.$emit("modal", null);
    },

    saveNotes() {
      EventBus.$emit("save-notes", this.text);
    }
  },

  mounted() {
    this.text = this.notes;
  }
};
</script>

<style lang="scss">
@import "~@/styles/variables.scss";
.additional-notes {
  text-align: left;
  width: 500px;
  height: 250px;
  padding: 20px;
  position: relative;
  .close-btn {
    position: absolute;
    right: 0;
    padding: 0 15px 0 0;
    img {
      cursor: pointer;
    }
  }
}
.buttons {
  width: 100%;
  text-align: right;
  button {
    background-color: $primary_color;
    color: white;
    border-radius: 4px;
    padding: 5px 20px;
    outline: none;
    cursor: pointer;
  }
}
</style>