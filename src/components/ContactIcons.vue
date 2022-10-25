<template>
  <h3>{{ msg }}</h3>
  <div class="contact">
    <div
      v-for="item in contactItems"
      class="contact__item"
      :key="item.linkHref"
    >
      <a :href="item.linkHref" target="_blank" @click.stop>
        <img :src="item.iconSrc" :alt="item.iconAlt" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export interface ContactItem {
  iconSrc: string;
  iconAlt: string;
  linkHref: string;
}
export default {
  props: {
    contactItems: {
      type: Array<ContactItem>,
    },
    msg: {
      type: String,
    },
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact__item {
  width: 3rem;
  margin: 0.5rem 1rem;
}
.contact__item:hover img {
  transform: scale(1.2);
}
</style>
