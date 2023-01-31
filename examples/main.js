import Vue from 'vue'
import App from './App.vue'
// import LicensePlate from '../packages'
import LicensePlate from "vue-license-plate";
import 'vue-license-plate/lib/licensePlate.css';

Vue.use(LicensePlate)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
