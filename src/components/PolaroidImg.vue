<template>
  <div class="polaroid">
    <div class="polaroid__img-container">
      <img class="polaroid__img" :src="imgSrc" :alt="alt" />
    </div>
    <div class="polaroid__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string;
  alt: string;
}>();
</script>

<style scoped>
.polaroid {
  max-width: 400px;
}
.polaroid__img-container {
  display: flex;
  border-radius: var(--r-medium);
  overflow: hidden;
  box-shadow: var(--shadow-inset);
  margin-bottom: var(--s-medium);
}
.polaroid__img {
  z-index: -1;
}
.polaroid__content {
  display: block;
  text-align: center;
}
</style>
