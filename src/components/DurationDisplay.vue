<template>
    <time :datetime="time">
        <h1>
            <span v-if="hours >= 1"><b>{{ hours }}</b>hr </span>
            <span v-if="minutes >= 1"><b>{{ minutes }}</b>m </span>
            <b>{{ seconds }}</b>s
            <b>{{ milliseconds }}</b>ms
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
