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
      <div class="collapse navbar-collapse navbar-right" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">首頁</a>
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
export default {};
</script>

<style></style>
