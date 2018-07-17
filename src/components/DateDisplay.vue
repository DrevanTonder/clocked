<template>
  <time class="time" :datetime="time">
    <h2 class="time-small">{{ dayOfWeek }}, {{ date }} {{ month }}</h2>
  </time>
</template>

<script>
import moment from "moment";

export default {
  props: {
    time: {
      required: true,
      type: Number
    }
  },

  computed: {
    dayOfWeek() {
      return moment(this.time).format("dddd");
    },

    date() {
      return moment(this.time).format("D");
    },

    month() {
      return moment(this.time).format("MM");
    }
  }
};
</script>
