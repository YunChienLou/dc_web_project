<template>
  <Navbar />
  <div class="d-flex flex-column page-height">
    <router-view />
  </div>
  <FixButton />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FixButton from "./components/FixButton.vue";
export default {
  components: { Navbar, Footer, FixButton },
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.page-height {
  min-height: 70vh;
}
</style>
