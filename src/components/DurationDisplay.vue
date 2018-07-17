<template>
    <time class="time" :datetime="time">
        <h1>
            <span class="time-big">{{ hours }}</span>
            <span class="time-small">hr </span>
            <span class="time-big">{{ minutes }}</span>
            <span class="time-small">m </span>
            <span class="time-big">{{ seconds }}</span>
            <span class="time-small">s {{ milliseconds }}</span>
        </h1>
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
    hours() {
      return moment.duration(this.time).hours();
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
