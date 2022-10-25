<template>
  <div @click="toggle" class="flip-container">
    <div
      class="flippable-card flippable-card--front"
      :class="{ show: showFront }"
    >
      <slot name="front"></slot>
      <span class="material-symbols-outlined position--bottom-right">
        navigate_next
      </span>
    </div>
    <div
      class="flippable-card flippable-card--back"
      :class="{ show: !showFront }"
    >
      <slot name="back"></slot>
      <span class="material-symbols-outlined position--bottom-left">
        navigate_before
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showFront = ref(true);

const toggle = function () {
  showFront.value = !showFront.value;
};

defineExpose({ showFront, toggle });
</script>

<style scoped>
.flip-container {
  display: grid;
  grid: auto / 1fr;
  background-color: transparent;
  perspective: 1000px;
}

.flippable-card--front:not(.show) {
  transform: rotateY(180deg);
}
.flippable-card--back:not(.show) {
  transform: rotateY(-180deg);
}
.flippable-card {
  grid-area: 1/1;
  backface-visibility: hidden;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  background: var(--c-white);
  box-shadow: 2px 2px 5px -2px var(--c-black-mute);
  border-radius: var(--r-medium);
  overflow: hidden;
  padding: 0.5rem 0.5rem calc(0.5rem + 24px);
}
</style>
