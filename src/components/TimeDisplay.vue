<template>
  <span class="tag is-success">
    <time :datetime="time">
        {{ hour }}:{{ minute }}:{{ second }}
    </time>
  </span>
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
