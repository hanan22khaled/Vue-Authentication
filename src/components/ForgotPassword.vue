<!-- eslint-disable-->
<template>
  <div class="container">
    <form @submit.prevent="forgotPassword">
      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label"
          >Email address :
        </label>
        <input type="email" class="form-control" v-model="user.email" />
        
      </div>
      <button type="submit" class="btn btn-primary">Reset Password</button>
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
        email: "",
      },
    };
  },
  methods: {
    forgotPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("check your mailbox")
          this.user={
            email:''
          }
        })

        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style></style>
