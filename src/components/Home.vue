<!-- eslint-disable-->

<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">About Me</h5>
      <p class="card-text">
        My Name Is {{ user.displayName }} <br/> Hello Every One!! <br />
        Here Is My Email: <br />
        {{ user.email }}
      </p>
      <button type="submit" @click="logout()" class="btn btn-outline-info">
        Log Out
      </button>
    </div>
  </div>
</template>
<!-- eslint-disable-->

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    },
  },
};
</script>

<style>
.card {
  margin: 60px;
  box-shadow: 0 0 5px 5px gray;
}
</style>
