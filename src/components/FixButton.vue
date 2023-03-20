<template>
  <div class="fix-button">
    <button type="button" class="btn btn-lg btn-danger" @click="clickBtn">
      聯絡我們!  <font-awesome-icon :icon="['fas', 'angle-up']" />
    </button>
  </div>
  <transition name="bg">
    <div
      v-if="bgShow"
      class="bg-white vh-100 vw-100 fix-background"
      @click="closeBg"
    ></div>
  </transition>
  <transition name="round">
    <div v-if="bgShow" class="bg-light border-end border-danger border-5 fix-round-shape round-shape">
      <div class="d-flex flex-column justify-content-between round-content text-black">
        <div class="">
          <font-awesome-icon class="me-4 bg-light" :icon="['fab', 'facebook-square']" />
          <h1 class="fw-bold" style="display: inline-block">Facebook</h1>
        </div>

        <div class="">
          <img class="me-4" src="../assets/black-line-icon-logo-png-4.png" style="width:3rem; height:3rem;" />
          <h1 class="fw-bold" style="display: inline-block">Line</h1>
        </div>
        <div class="">
          <font-awesome-icon class="me-4" :icon="['fas', 'phone']" />
          <h1 class="fw-bold" style="display: inline-block">Phone</h1>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const bgShow = ref(false);
const clickBtn = () => {
  bgShow.value = true;
};
const closeBg = () => {
  bgShow.value = false;
};
</script>

<style scope>
.fix-button {
  position: fixed;
  right: 30px;
  bottom: 60px;
}
.fix-background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.6;
}

.round-content {
  transform: translateX(2rem) translateY(-2rem) rotate(90deg);
  transform-origin: bottom center;
  font-size: 3rem;
}

.fix-round-shape {
  position: fixed;
  bottom: 0;
  right: 0;
  translate: 50%;
  transform: rotate(270deg);
  transform-origin: bottom center;
}
.round-shape {
  width: 40rem;
  height: 20rem;
  z-index: 101;
  border-radius: 20rem 20rem 0 0;
}

.bg-enter-active,
.bg-leave-active {
  transition: opacity 0.5s ease;
}

.bg-enter-from,
.bg-leave-to {
  opacity: 0;
}

.round-enter-active,
.round-leave-active {
  transition: transform 0.5s ease;
}

.round-enter-from,
.round-leave-to {
  transform: rotate(180deg);
}

/* .v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity 0.5s ease;
} */
</style>
