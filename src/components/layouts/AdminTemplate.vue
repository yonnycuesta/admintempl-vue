<template>
  <div class="container-scroller">
    <Header></Header>
    <div class="container-fluid page-body-wrapper">
      <Sidebar></Sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view />
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../../components/layouts/Footer.vue'
import Header from '../../components/layouts/Header.vue'
import Sidebar from '../../components/layouts/Sidebar.vue'

export default {
  components: {
    Footer,
    Header,
    Sidebar
  }
}
</script>
