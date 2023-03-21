<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">德群貿易</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">公司沿革</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">銷售產品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">聯絡方式</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.router-link-active {
  color: #ffffff;
  font-weight: bold;
  padding-bottom: 0;
  border-bottom: 2px solid red;
}
@media screen and (max-width: 600px) {
  .router-link-active {
    color: #ffffff;
    font-weight: bold;
    padding-bottom: 0;
    border-bottom: 0px;
  }
}
</style>
