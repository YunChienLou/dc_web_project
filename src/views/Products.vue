<template>
  <LandingPic
    :imageUrl="img"
    :title="heading"
    :paragraph="'我們提供的零部件種類，歡迎電話詢價'"
  />
</template>

<script>
import { ref } from "vue";
import LandingPic from "../components/LandingPic.vue";
export default {
  components: { LandingPic },
  setup() {
    const heading = ref("銷售產品");
    const img = ref(`car-parts.jpg`);

    return { heading, img };
  },
};
</script>

<style></style>
