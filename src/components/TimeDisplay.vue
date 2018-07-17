<template>
  <time class="time" :datetime="time">
      <span class="time-big">{{ hour }}</span>
      <span class="time-small">:</span>
      <span class="time-big">{{ minute }}</span>
      <span class="time-small">:{{ second }}</span>
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
    hour() {
      return moment(this.time).format("HH");
    },

    minute() {
      return moment(this.time).format("mm");
    },

    second() {
      return moment(this.time).format("ss");
    }
  }
};
</script>
