<template lang="pug">
  .data-wrapper
    h4.mb-15  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmode tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    .fields.two
      .field(:class="{ 'error': error.name }")
        label COMPANY NAME
        input(
          type="text"
          placeholder="e.g. Your Company Name"
          v-model="form.name"
          @blur="checkName"
        )
        .info Company Name is required.
    .fields.two
      .field(:class="{ 'error': error.spend }")
        label COMPANY SPEND
        input(
          type="text"
          placeholder="e.g. $150,000"
          v-model="form.spend"
          @focus="unformat('spend')"
          @blur="checkAndFormatSpend"
        )
        .info Company Spend must be positive numbers
    .fields.two
      .field(:class="{ 'error': error.ability }")
        label COMPANY SPEND ABILITY
        .input-wrapper
          input(type="text" :placeholder="abilityPlaceholder")
          .fields-group.fields.two
            input(
              type="text"
              v-model="form.min"
              @focus="unformat('min')"
              @blur="checkAndFormatMin"
            )
            span -
            input(
              type="text"
              v-model="form.max"
              @focus="unformat('max')"
              @blur="checkAndFormatMax"
            )
        .info Minimum spend shouldn’t be larger than maximum spend
    .field
      label NOTES
      textarea(
        v-model="form.notes"
        placeholder="e.g. Good Tech Company"
        rows="8"
        @click="showModal"
      )
</template>

<script>
import { EventBus } from "../utils/event-bus";
export default {
  data() {
    return {
      form: {
        name: "",
        spend: "",
        min: "",
        max: "",
        notes: ""
      },
      error: {
        name: null,
        spend: null,
        ability: null
      },
      msg: {
        spend: ""
      }
    };
  },

  computed: {
    abilityPlaceholder() {
      return this.form.min == "" && this.form.max == ""
        ? "e.g. $150,000 - $330,000"
        : "";
    }
  },

  watch: {
    "form.name"() {
      this.checkName();
    },

    "form.spend"() {
      this.checkSpend();
    },

    "form.min"() {
      this.checkBetween();
    },

    "form.max"() {
      this.checkBetween();
    }
  },

  methods: {
    checkName() {
      this.error.name = this.form.name != "";
    },

    checkSpend() {
      let str = this.form.spend.split(",").join("");
      this.error.spend = str != "" && !/^\d+$/.test(str);
    },

    checkBetween() {
      let min = this.form.min.split(",").join("");
      let max = this.form.max.split(",").join("");
      this.error.ability =
        min != "" &&
        max != "" &&
        (!/^\d+$/.test(min) ||
          !/^\d+$/.test(max) ||
          parseInt(this.form.min, 10) >= parseInt(this.form.max, 10));
    },

    format(field) {
      let str = this.form[field];
      let r = /\d{3}$/;
      let numbers = [];
      let m = null;
      do {
        m = str.match(r);
        if (str !== "") {
          numbers.splice(0, 0, m == null ? str : m[0]);
        }
        str = str.replace(r, "");
      } while (m != null);
      this.form[field] = numbers.join(",");
    },

    unformat(field) {
      this.form[field] = this.form[field].split(",").join("");
    },

    checkAndFormatSpend() {
      this.checkSpend();
      if (!this.error.spend) {
        this.format("spend");
      }
    },

    checkAndFormatMin() {
      this.checkBetween();
      if (!this.error.ability) {
        this.format("min");
      }
    },

    checkAndFormatMax() {
      this.checkBetween();
      if (!this.error.ability) {
        this.format("max");
      }
    },

    showModal() {
      EventBus.$emit("modal", {
        dialog: "additional-notes",
        params: { notes: this.form.notes }
      });
    }
  },

  mounted() {
    EventBus.$on("save-notes", param => {
      if (param != null) {
        this.form.notes = param;
      }
      EventBus.$emit("modal", null);
    });
  }
};
</script>

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
}
</style>