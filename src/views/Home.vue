<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/landingPic.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/landingPic.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/landingPic.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container mb-5">
      <div class="serving-brands my-3">
        <Heading :heading="'經銷廠商'" />
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div class="col">
            <div class="p-3 border bg-light">Porsche 保時捷</div>
            <img
              src="../assets/porsche-logo.png"
              class="img-thumbnail brand-logo"
              alt="porsche-logo"
            />
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Audi 奧迪</div>
            <img
              src="../assets/audi-logo-3.png"
              class="img-thumbnail brand-logo"
              alt="Audi-logo"
            />
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Volkswagen 福斯</div>
            <img
              src="../assets/volkswagen.png"
              class="img-thumbnail brand-logo"
              alt="Volkswagen-logo"
            />
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Skoda 斯柯達</div>
            <img
              src="../assets/Skoda-logo.png"
              class="img-thumbnail brand-logo"
              alt="Skoda-logo"
            />
          </div>
          <div class="col">
            <div class="p-3 border bg-light">PEUGEOT 標誌</div>
            <img
              src="../assets/peugeot-logo.png"
              class="img-thumbnail brand-logo"
              alt="peugeot-logo"
            />
          </div>
          <div class="col">
            <div class="p-3 border bg-light">CITROËN 雪鐵龍</div>
            <img
              src="../assets/Citroen.png"
              class="img-thumbnail brand-logo"
              alt="Citroen-logo"
            />
          </div>
        </div>
      </div>
      <div class="shipping my-3">
        <Heading :heading="'配送方式'" />
        1.自取 <br />
        2.本公司外務員配送 <br />
        3.lalamove
      </div>
      <div class="online-inquery my-3">
        <Heading :heading="'線上詢價'" />
        1.電話: 02 2513 3105 <br />
        2.Line : @TCT.COM
      </div>
      <div class="contact-info my-3">
        <Heading :heading="'聯絡我們'" />

        地址:中山區建國北路三段113巷31弄15號1樓, Taipei, Taiwan <br />
        電話: 02 2513 3105 <br />
        營業時間: 週一至週五 08:30-19:00
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Heading from "../components/Heading.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Heading,
  },
};
</script>

<style scoped>
.brand-logo {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
</style>
