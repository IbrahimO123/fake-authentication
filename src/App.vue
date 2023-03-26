<template>
  <v-app>
    <v-main class="bg-deep-purple-darken-1 text-deep-purple-lighten-5">
      <v-responsive class="mx-auto" max-width="100px">
        <v-navigation-drawer
          v-model="drawer"
          left
          :permanent="mdAndUp"
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
            <router-link to="/notfound">
              <v-list-item
                prepend-icon="mdi-cancel"
                title="404 Page"
                value="notfound"
              ></v-list-item
            ></router-link>
          </template>
        </v-navigation-drawer>
      </v-responsive>
      <v-toolbar color="white" right>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-list density="compact">
          <router-link to="/">
            <v-list-item
              class="body-1"
              prepend-icon="mdi-two-factor-authentication"
              title="AUTHENTICATION"
              value="authentication"
            ></v-list-item>
          </router-link>
        </v-list>
        <template v-slot:append>
          <template v-if="email && firstname && lastname && displayButton">
            <router-link to="/user-products">
              <v-list-item
                :title="status ? 'Cart' : null"
                value="cart"
                prepend-icon="mdi-cart-variant"
              ></v-list-item>
            </router-link>
          </template>
        </template>
      </v-toolbar>
      <router-view />
      <v-snackbar
        v-model="snackbar"
        :location="status ? 'bottom' : 'top'"
        :timeout="1500"
        max-width="50px"
        :color="color ? 'blue-grey-lighten-4' : 'success'"
      >
        {{ success }}
        <template v-slot:actions> </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { useDisplay } from "vuetify";
export default {
  name: "App",
  data() {
    return {
      drawer: null,
    };
  },
  setup() {
    const { mdAndUp } = useDisplay();

    return { mdAndUp, status: mdAndUp.value };
  },
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
    status() {
      const { mdAndUp } = useDisplay();
      return mdAndUp.value;
    },
    color() {
      return this.$store.state.color;
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
  width: 30%;
}
@media (max-width: 900px) {
  .form {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .form {
    width: 85%;
  }
}
</style>
