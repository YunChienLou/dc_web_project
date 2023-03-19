<template>
  <div class="position-relative component_size">
    <img :src="require(`@/assets/${imageUrl}`)" class="imgSize" alt="..." />
    <div
      class="bg-dark border border-white p-3 p-sm-4 position-absolute top-50 start-50 translate-middle text-white"
    >
      <h1 class="">
        {{ props.title }}
      </h1>
      <p>{{ props.paragraph }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: { type: String, required: true },
  paragraph: { type: String, require: false },
  imageUrl: { type: String, require: true },
});
</script>

<style scoped>
.imgSize {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
</style>
>
