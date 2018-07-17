<template>
    <time class="time" :datetime="time">
        <h1>
            <span class="time-big" :contenteditable="edit">{{ time | minutes }}</span>
            <span class="time-small">:</span>
            <span class="time-big" :contenteditable="edit">{{ time | seconds }}</span>
            <span class="time-small">:<span :contenteditable="edit">{{ time | milliseconds }}</span></span>
        </h1>
    </time>
</template>


<script>
export default {
  props: {
    time: {
      required: true,
      type: Number
    },

    edit: {
      required: false,
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>
