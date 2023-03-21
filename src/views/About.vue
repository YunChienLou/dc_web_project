<template>
  <div class="about">
    <LandingPic
      :imageUrl="img"
      :title="heading"
      :paragraph="'德群貿易，成立30年來的故事...'"
    />
    <div class="container">
      <div class="row my-5">
        <div class="col-6 text-start">
          <h1 class="display-2 fw-bold">公司沿革</h1>
          <p style="width: 60%">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            expedita doloribus. Totam amet quos autem consequuntur consectetur,
            itaque quaerat, modi laudantium commodi recusandae quam aut
            excepturi nobis, tempora atque reiciendis?
          </p>
          <button type="button" class="btn btn-primary">了解更多!</button>
        </div>
        <div class="col"></div>
      </div>
    </div>
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
