<template lang="pug">
  .page-wrapper
    .page-header
      img(src="~@/assets/logo.svg")
      .page-title
        h2 Microsoft
        span Redmond, WA USA
    .page-desc
      span At Microsoft, our mission is to empower every person and every organization on the plant to achive more. Our mission is grounded in both the world in which we live and the future we strive to create.
      a(href="#") View More...
    .page-cards
      .colunm
        .card
          .card-title ACTIVITIES
          .card-body
            ul.activities
              li(
                v-for="(c, idx) in activities"
                :key="idx"
              )
                .col-time {{ c.time }}
                .col-logo
                  img(:src="c.logo")
                .col-body
                  h5
                    span {{ c.company }}
                    span(v-if="c.replaced") replaced
                  h6(v-if="c.desc")
                    span Microsoft
                    span on 1 property

      .spacer
      .colunm
        .card
          .card-title SIMILAR COMPANIES
          .card-body PP
            //- ul
            //-   li ok
        .card
          .card-title COMPANY SPEND HISTORY
          .card-body PP
        .card
          .card-title COMPANY SPEND HISTORY
          .card-body PP
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          time: "8 days ago",
          logo: require("@/assets/video-platform.svg"),
          company: "Cloud Ochestration",
          replaced: true,
          desc: true
        },
        {
          time: "10 days ago",
          logo: require("@/assets/content-delivery.svg"),
          company: "Express Scripts",
          replaced: true,
          desc: true
        },
        {
          time: "12 days ago",
          logo: require("@/assets/waf-d-dos-security.svg"),
          company: "Kaiser Permanente",
          replaced: true,
          desc: true
        },
        {
          time: "14 days ago",
          logo: require("@/assets/traffic-management.svg"),
          company: "Molina Healthcare",
          replaced: true,
          desc: true
        },
        {
          time: "15 days ago",
          logo: require("@/assets/dns.svg"),
          company: "Express Scripts",
          replaced: true,
          desc: true
        },
        {
          time: "16 days ago",
          logo: require("@/assets/performance-monitoring.svg"),
          company: "Kaiser Permanente",
          replaced: true,
          desc: true
        },
        {
          time: "17 days ago",
          logo: require("@/assets/saas.svg"),
          company: "Molina Healthcare",
          replaced: true,
          desc: true
        },
        {
          time: "18 days ago",
          logo: require("@/assets/content-delivery.svg"),
          company: "Microsoft launched M-Cloud",
          replaced: false,
          desc: false
        }
      ]
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
.page-wrapper {
  text-align: left;
  h4 {
    padding: 0;
    margin: 0;
  }
  .page-header {
    display: flex;
    .page-title {
      padding: 0 15px;
      h2 {
        margin: 0 0 5px 0;
        font-size: 30px;
        font-weight: normal;
      }
      span {
        position: relative;
        padding: 0 0 0 20px;
        font-size: 14px;
        &::before {
          content: "";
          position: absolute;
          display: block;
          width: 10px;
          height: 20px;
          background-image: url(~@/assets/location.svg);
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    }
  }
  .page-desc {
    padding: 20px 0;
  }
  .page-cards {
    display: flex;
    .spacer {
      width: 15px;
    }
    .colunm {
      width: 50%;
    }
    .card {
      border: 1px solid $grey_color;
      border-radius: 6px;
      .card-title {
        padding: 10px 15px;
        font-size: 14px;
        font-weight: bold;
        border-bottom: 1px solid $grey_color;
      }
    }
    .activities {
      padding: 0;
      margin: 0;
      li {
        padding: 15px 10px;
        font-size: 14px;
        display: flex;
        border-bottom: 1px solid $grey_color;
        .col-time {
          width: 30%;
        }
        .col-logo {
          margin: 0 10px;
        }
        .col-body {
          h5, h6 {
            margin: 0;
          }
        }
        // .col-time, .col-logo, .col-body {

        // }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>