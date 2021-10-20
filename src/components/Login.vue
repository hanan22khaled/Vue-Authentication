<!-- eslint-disable-->
<template>
  <div class="container">
    <form @submit.prevent="userLogin">
      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label"
          >Email address :
        </label>
        <input type="email" class="form-control" v-model="user.email" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword" class="form-label">Password : </label>
        <input type="password" class="form-control" v-model="user.password" />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
      <p class="foergot"><router-link to="/forgot-password">Forgot Password </router-link></p>
    </form>
  </div>
</template>
<!-- eslint-disable-->

<script>
/* eslint-disable */
import firebase from "firebase/app";
export default {
  data() {
    return {
      user: { 
        password: "",
        email: "",
      },
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/home");
        })

        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style></style>
