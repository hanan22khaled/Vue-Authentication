/*eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import * as firebase from "firebase";
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyB3xoXOIXw1WXoy3D_YzbikUXxwwMpZAOs",
  authDomain: "auth-dbe87.firebaseapp.com",
  projectId: "auth-dbe87",
  storageBucket: "auth-dbe87.appspot.com",
  messagingSenderId: "614654704219",
  appId: "1:614654704219:web:90a735d9049bee51979d7e",
  measurementId: "G-RXC9YE6QZ6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
