<template>
    <time :datetime="time">
        <h1 class="time">
            <span class="time-big">{{ time | minutes }}</span>:<span class="time-big">{{ time | seconds }}</span>:<span class="time-small">{{ time | milliseconds }}</span>
        </h1>
    </time>
</template>


<script>
export default {
  props: {
    time: {
      required: true,
      type: Number
    }
  }
};
</script>
