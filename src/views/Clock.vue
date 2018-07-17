<template>
    <div class="main has-text-primary">
        <time class="main-text" :datetime="time">     
            <h1 class="time is-size-1"><span class="time-big">{{ time | hours }}</span>:<span class="time-big">{{ time | minutes }}</span>:<span class="time-small">{{ time | seconds }}</span></h1>

            <h2 class="is-size-2">{{ time | dayString }}, {{ time | date }} {{ time | monthString }}</h2>
        </time>
    </div>    
</template>

<script>
export default {
  data() {
    return {
      time: new Date(),
      interval: setInterval(() => (this.time = new Date()), 1000)
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
