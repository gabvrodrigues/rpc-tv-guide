import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueAxios, axios, BootstrapVue);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
