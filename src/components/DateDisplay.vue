<template>
  <span class="tag is-danger"> 
    <time :datetime="time">
      {{ dayOfWeek }}, {{ date }} {{ month }}
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
    dayOfWeek() {
      return moment(this.time).format("dddd");
    },

    date() {
      return moment(this.time).format("D");
    },

    month() {
      return moment(this.time).format("MMMM");
    }
  }
};
</script>
