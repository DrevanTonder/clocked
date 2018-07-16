<template>
    <div class="main has-text-primary">
        <time class="main-text" :datetime="time">     
            <h1 class="time is-size-1"><span class="time-big">{{ hours }}</span>:<span class="time-big">{{ minutes }}</span>:<span class="time-small">{{ seconds }}</span></h1>

            <h2 class="is-size-2">{{ dayAsString }}, {{ date }} {{ monthAsString }}</h2>
        </time>
    </div>    
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      time: new Date(),
      interval: setInterval(() => (this.time = new Date()), 1000)
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  computed: {
    dayAsString() {
      return moment(this.time).format("dddd");
    },

    monthAsString() {
      return moment(this.time).format("MMMM");
    },

    year() {
      return moment(this.time).format("YYYY");
    },

    month() {
      return moment(this.time).format("MM");
    },

    date() {
      return moment(this.time).format("D");
    },

    day() {
      return moment(this.time).format("d");
    },

    hours() {
      return moment(this.time).format("HH");
    },

    minutes() {
      return moment(this.time).format("mm");
    },

    seconds() {
      return moment(this.time).format("ss");
    }
  }
};
</script>
