import Vue from 'vue'
import App from './App.vue'
// import LicensePlate from '../packages'
import LicensePlate from "vue2-license-plate";
import 'vue2-license-plate/lib/licensePlate.css';
Vue.config.productionTip = false

Vue.use(LicensePlate)

new Vue({
  render: h => h(App),
}).$mount('#app')
