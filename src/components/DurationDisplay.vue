<template>
  <time :datetime="time">
    <span v-if="hours >= 1"><b>{{ hours }}</b>hr </span>
    <span v-if="minutes >= 1"><b>{{ minutes }}</b>m </span>
    <b>{{ seconds }}</b>s
    <span v-if="ms"><b>{{ milliseconds }}</b>ms</span>
  </time>
</template>


<script>
import moment from "moment";

export default {
  props: {
    time: {
      required: true,
      type: Number
    },

    ms: {
      required: false,
      type: Boolean,
      default() {
        return true;
      }
    }
  },

  computed: {
    hours() {
      return Math.floor(moment.duration(this.time).asHours());
    },

    minutes() {
      return moment.duration(this.time).minutes();
    },

    seconds() {
      return moment.duration(this.time).seconds();
    },

    milliseconds() {
      return moment.duration(this.time).milliseconds();
    }
  }
};
</script>

<style lang="scss" scoped>
b {
  font-size: 2em;
}
</style>
