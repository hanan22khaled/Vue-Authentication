<!-- eslint-disable-->

<template>
  <div class="container">
    <form @submit.prevent="userRegesteration">
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Name : </label>
        <input type="text" class="form-control" v-model="user.name" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword" class="form-label">Password : </label>
        <input type="password" class="form-control" v-model="user.password" />
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label"
          >Email address :
        </label>
        <input type="email" class="form-control" v-model="user.email" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>
<!-- eslint-disable-->

<script>
import firebase from "firebase/app";
export default {
  name: "sign-up",
  data() {
    return {
      user: {
        name: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    userRegesteration() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              this.$router.push("/login");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style></style>
