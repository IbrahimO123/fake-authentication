<template>
  <v-app>
    <v-main class="bg-deep-purple-darken-1 text-deep-purple-lighten-5">
      <v-responsive class="mx-auto" max-width="100px">
        <v-navigation-drawer
          permanent
          class="bg-deep-purple-lighten-5 text-white pa-3"
        >
          <v-list density="compact">
            <router-link to="/">
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Home"
                value="home"
              ></v-list-item>
            </router-link>
          </v-list>
          <template v-slot:append>
            <template v-if="email && firstname && lastname && displayButton">
              <div class="pa-2">
                <v-btn
                  @click="logUserOut"
                  class="bg-deep-purple-darken-1 text-deep-purple-lighten-5"
                  block
                  append-icon="mdi-logout"
                >
                  Logout
                </v-btn>
              </div>
            </template>
            <template v-else>
              <router-link to="/login">
                <v-list-item
                  prepend-icon="mdi-login"
                  title="Login"
                  value="login"
                ></v-list-item
              ></router-link>
              <router-link to="/sign-up">
                <v-list-item
                  prepend-icon="mdi-account-plus"
                  title="Sign Up"
                  value="Sign Up"
                ></v-list-item>
              </router-link>
            </template>
          </template>
        </v-navigation-drawer>
      </v-responsive>
      <router-view />
      <v-snackbar v-model="snackbar" :timeout="1500" color="success">
        {{ success }}
        <template v-slot:actions> </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    firstname: {
      get() {
        return this.$store.state.user.firstname;
      },
    },
    lastname: {
      get() {
        return this.$store.state.user.lastname;
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
    },
    displayButton: {
      get() {
        return this.$store.state.displayButton;
      },
    },
    snackbar: {
      get() {
        return this.$store.state.snackbar;
      },
      set(value) {
        return this.$store.commit("setSnackBar", value);
      },
    },
    error() {
      return this.$store.state.error;
    },
    success() {
      return this.$store.state.success;
    },
  },
  methods: {
    async logUserOut() {
      await this.$store.dispatch("asyncLogOut");
      return;
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
  color: #673ab7;
}

.router-link-active {
  color: #688900;
}

.form {
  width: 35%;
}
</style>
