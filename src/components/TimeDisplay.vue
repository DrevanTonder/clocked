<template>
  <time :datetime="time">
      <b>{{ hour }}:{{ minute }}:{{ second }}</b>
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
