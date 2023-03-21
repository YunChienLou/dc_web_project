<template>
  <div class="row" style="width: 100%">
    <div class="col-sm-3 pe-0">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              依廠牌分類
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="nav nav-fill flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Porsche
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Audi </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Volkswagen </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Skoda </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">PEUGEOT </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CITROËN </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              依車輛部位分類
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="nav nav-fill flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >內裝</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">外觀</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">引擎室</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">車輪</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              依原產地分類
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="nav nav-fill flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >美國</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">德國</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">比利時</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-9 pe-0">
      <Heading :heading="'搜尋結果'" class="mt-5" />
      <div
        class="row mx-5 text-start row-cols-auto overflow-auto"
        style="max-height: 80vh"
      >
        <div v-for="i in 20" :key="i" class="col">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-outline-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../components/Heading.vue";
export default {
  components: {
    Heading,
  },
};
</script>

<style scoped>
.accordion-body {
  padding: 0% 1rem;
}
</style>
