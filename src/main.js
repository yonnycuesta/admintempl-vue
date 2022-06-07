import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// My admin styles
import '../src/assets/css/vertical-layout-light/style.css'
import '../src/assets/css/feather/feather.css'
import '../src/assets/css/mdi/css/materialdesignicons.min.css'
import '../src/assets/css/ti-icons/css/themify-icons.css'
import '../src/assets/css/typicons/typicons.css'
import '../src/assets/css/simple-line-icons/css/simple-line-icons.css'
import '../src/assets/css/vendor.bundle.base.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
