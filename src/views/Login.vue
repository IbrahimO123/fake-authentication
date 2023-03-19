<template>
  <main>
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
            v-model.trim="passwordLogin"
            label="Password"
            type="password"
            color="black"
            class="bg-deep-purple-lighten-5 my-2 rounded-sm"
            append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
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
      showPassword: false,
      emailLogin: "",
      passwordLogin: "",
    };
  },
  mounted() {
    this.$store.commit("setDisplayButton", false);
    this.$store.commit("setPassword", "");
    setTimeout(async () => {
      const user = await this.getuserDetails();
      if (user === null) return this.$router.push("/sign-up");
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
    getuserDetails() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = localStorage.getItem("user");
          if (data === null) {
            this.$store.state.error = "You don't have an account, sign up";
            setTimeout(() => this.$router.push("/sign-up"), 1000);
            return;
          }
          const user = JSON.parse(data);
          resolve(user);
        });
      });
    },
    async handleLogin() {
      await this.$store.dispatch("asyncCheckFieldFillLogin");
      if (this.$store.state.error) return;
      await this.$store.dispatch("asyncCheckEmail");
      if (this.$store.state.error) return;
      const res = await this.getuserDetails();
      if (res === null) return;
      if (
        res.email !== this.$store.state.user.email ||
        res.password !== this.passwordLogin
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
        this.$store.commit("setPassword", this.passwordLogin);
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
  height: 100%;
}
h4 {
  color: #fff;
}
</style>
