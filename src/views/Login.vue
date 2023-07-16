<template>
  <main class="mt-16">
    <h3>Login</h3>
    <v-form class="form" v-on:submit.prevent="handleLogin">
      <v-container>
        <v-responsive class="mx-auto" max-width="344">
          <v-text-field
            v-model.trim="email"
            type="email"
            label="E-mail"
            class="bg-deep-purple-lighten-5 my-2 rounded-sm"
            color="black"
            required
          ></v-text-field>
          <v-text-field
            v-model.trim="loginPassword"
            label="Password"
            color="black"
            class="bg-deep-purple-lighten-5 my-2 rounded-sm"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
            required
          >
          </v-text-field>
          <p class="text-error">
            <small>{{ error ? error : null }}</small>
          </p>
          <v-btn
            variant="elevated"
            color="black"
            type="submit"
            append-icon="mdi-login"
            >Login</v-btn
          >
        </v-responsive>
      </v-container>
    </v-form>
    <p>
      <small>
        You don't have an account?
        <router-link class="bg-green py-1 px-2 rounded" to="/sign-up"
          >Signup</router-link
        ></small
      >
    </p>
  </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.$store.commit("setDisplayButton", false);
    this.$store.commit("setPassword", "");
    this.$store.commit("setLoginPassword", "");
    setTimeout(async () => {
      const user = await this.getUserDetails();
      if (user === null) return;
      else {
        this.$store.commit("setEmail", user.email);
        this.$store.commit("setPassword", user.password);
        this.$store.commit("setFirstName", user.firstname);
        this.$store.commit("setLastName", user.lastname);
        this.$store.commit("setConfirmPassword", user.password);
      }
    }, 1000);
  },
  methods: {
    getUserDetails() {
      const date = new Date().getTime();
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = localStorage.getItem("user");
          if (JSON.parse(data) && date > JSON.parse(data).expiry) {
            localStorage.removeItem("user");
            resolve(null);
            return;
          }
          if (data === null) {
            resolve(null);
            return;
          } else {
            const user = JSON.parse(data);
            resolve(user);
            return;
          }
        });
      });
    },
    async handleLogin() {
      await this.$store.dispatch("asyncCheckFieldFillLogin");
      if (this.$store.state.error) return;
      await this.$store.dispatch("asyncCheckEmail");
      if (this.$store.state.error) return;
      const res = await this.getUserDetails();
      if (res === null) {
        this.$store.state.error = "You don't have an account, sign up";
        return;
      }
      if (
        res.email !== this.$store.state.user.email ||
        res.password !== this.$store.state.loginPassword
      ) {
        this.$store.state.error = "Invalid email or password";
        return;
      }
      if (
        this.$store.state.user.email &&
        this.$store.state.user.password &&
        this.$store.state.user.firstname &&
        this.$store.state.user.lastname
      ) {
        this.$store.commit("setPassword", this.$store.state.loginPassword);
        setTimeout(() => this.$router.replace("/products"));
        return;
      }
    },
  },
  computed: {
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        return this.$store.commit("setEmail", value);
      },
    },
    loginPassword: {
      get() {
        return this.$store.state.loginPassword;
      },
      set(value) {
        return this.$store.commit("setLoginPassword", value);
      },
    },
    password: {
      get() {
        return this.$store.state.user.password;
      },
      set(value) {
        return this.$store.commit("setPassword", value);
      },
    },
    error() {
      return this.$store.state.error;
    },
    displayButton: {
      get() {
        return this.$store.state.displayButton;
      },
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h4 {
  color: #fff;
}
</style>
