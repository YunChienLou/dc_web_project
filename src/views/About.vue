<template>
  <div class="about">
    <LandingPic
      :imageUrl="img"
      :title="heading"
      :paragraph="'德群貿易，成立30年來的故事...'"
    />
    <div class="container">
      <div class="row flex-row-reverse">
        <div class="col-sm-5 my-5 text-sm-start">
          <h1 class="display-2 fw-bold">公司沿革</h1>
          <p class="my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            expedita doloribus. Totam amet quos autem consequuntur consectetur,
            itaque quaerat, modi laudantium commodi recusandae quam aut
            excepturi nobis, tempora atque reiciendis?
          </p>
          <button type="button" class="btn btn-primary fw-bold">
            了解更多!
          </button>
        </div>
        <div class="col d-flex flex-column overflow-hidden">
          <div class="row row-cols-4 flex-grow-1">
            <div class="col p-0" style="transform: translateY(50px)">
              <img
                class="img-item rounded my-3"
                src="../assets/p1.jpeg"
                style="width: 80%"
                alt=""
              />
            </div>
            <div class="col p-0" style="transform: translateY(-60px)">
              <img
                class="img-item rounded my-3"
                src="../assets/p2.jpeg"
                style="width: 80%"
                alt=""
              />
              <img
                class="img-item rounded mb-3"
                src="../assets/p3.jpeg"
                style="width: 80%"
                alt=""
              />
            </div>
            <div class="col p-0" style="transform: translateY(70px)">
              <img
                class="img-item rounded my-3"
                style="width: 80%"
                src="../assets/p4.jpg"
                alt=""
              />
              <img
                class="img-item rounded mb-3"
                src="../assets/p1.jpeg"
                style="width: 80%"
                alt=""
              />
            </div>
            <div class="col p-0">
              <img
                class="img-item rounded my-3"
                src="../assets/p2.jpeg"
                style="width: 80%"
                alt=""
              />
              <img
                class="img-item rounded mb-3"
                src="../assets/p3.jpeg"
                style="width: 80%"
                alt=""
              />
            </div>
          </div>
        </div>
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

<style scoped>
.img-item {
  width: 150px;
  height: 200px;
  object-fit: cover;
}
</style>
