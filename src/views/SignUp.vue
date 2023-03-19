<template>
  <main>
    <h3>Sign Up</h3>
    <v-form v-on:submit.prevent="signUpForm" class="form">
      <v-container>
        <v-text-field
          v-model.trim="firstname"
          type="text"
          label="First name"
          class="bg-deep-purple-lighten-5 my-2 rounded-sm"
          required
        ></v-text-field>

        <v-text-field
          v-model.trim="lastname"
          type="text"
          class="bg-deep-purple-lighten-5 my-2 rounded-sm"
          label="Last name"
          required
        ></v-text-field>

        <v-text-field
          v-model.trim="this.$store.state.user.email"
          type="email"
          label="E-mail"
          class="bg-deep-purple-lighten-5 my-2 rounded-sm"
          required
        ></v-text-field>

        <v-text-field
          v-model.trim="password"
          label="Password"
          type="password"
          color="black"
          class="bg-deep-purple-lighten-5 my-2 rounded-sm"
          required
          append-inner-icon="mdi-eye"
        >
        </v-text-field>

        <v-text-field
          v-model.trim="confirmPassword"
          label="Confirm Password"
          type="password"
          color="black"
          append-inner-icon="mdi-eye"
          required
          class="bg-deep-purple-lighten-5 my-2 rounded-sm"
        >
        </v-text-field>
        <p class="text-error">
          <small>{{ error ? error : null }}</small>
        </p>
        <v-btn
          color="black"
          variant="elevated"
          type="submit"
          append-icon="mdi-account-plus"
          >Sign Up</v-btn
        >
      </v-container>
    </v-form>
    <p>
      <small
        >Already have an account?
        <router-link class="bg-green py-1 px-2 rounded" to="/login"
          >Login</router-link
        ></small
      >
    </p>
  </main>
</template>

<script>
export default {
  name: "SignUp",
  mounted() {
    this.$store.commit("setDisplayButton", false);
    this.$store.commit("setPassword", "");
    this.$store.commit("setConfirmPassword", "");
    this.$store.state.error = "";
  },
  methods: {
    async signUpForm() {
      await this.$store.dispatch("asyncCheckFieldFill");
      if (this.$store.state.error) return;
      await this.$store.dispatch("asyncCheckEmail");
      if (this.$store.state.error) return;
      await this.$store.dispatch("asyncCheckPassword");
      if (this.$store.state.error) return;
      await this.$store.dispatch("asyncSaveDetails");
    },
  },
  computed: {
    firstname: {
      get() {
        return this.$store.state.user.firstname;
      },
      set(value) {
        return this.$store.commit("setFirstName", value);
      },
    },
    lastname: {
      get() {
        return this.$store.state.user.lastname;
      },
      set(value) {
        return this.$store.commit("setLastName", value);
      },
    },
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
    confirmPassword: {
      get() {
        return this.$store.state.user.confirmPassword;
      },
      set(value) {
        return this.$store.commit("setConfirmPassword", value);
      },
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
