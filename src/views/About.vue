<template>
  <div class="about">
    <LandingPic
      :imageUrl="img"
      :title="heading"
      :paragraph="'德群貿易，成立30年來的故事...'"
    />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { ref } from "vue";
import LandingPic from "../components/LandingPic.vue";
export default {
  components: { LandingPic },
  setup() {
    const heading = ref("公司沿革");
    const img = ref(`car-repair.jpg`);

    return { heading, img };
  },
};
</script>
