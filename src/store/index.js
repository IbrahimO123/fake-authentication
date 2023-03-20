import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    error: "",
    snackbar: false,
    success: "",
    displayButton: false,
    loginPassword: "",
    user: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  },
  mutations: {
    setFirstName(state, payload) {
      state.user.firstname = payload;
    },
    setLastName(state, payload) {
      state.user.lastname = payload;
    },
    setEmail(state, payload) {
      state.user.email = payload;
    },
    setLoginPassword(state, payload) {
      state.loginPassword = payload;
    },
    setPassword(state, payload) {
      state.user.password = payload;
    },
    setConfirmPassword(state, payload) {
      state.user.confirmPassword = payload;
    },
    setSnackBar(state, payload) {
      state.snackbar = payload;
    },
    setDisplayButton(state, payload) {
      state.displayButton = payload;
    },
    checkFieldFill(state) {
      if (
        state.user.firstname === "" ||
        state.user.lastname === "" ||
        state.user.email === "" ||
        state.user.password === "" ||
        state.user.confirmPassword === ""
      ) {
        state.error = "Please fill all fields";
        return state.error;
      } else return (state.error = "");
    },
    checkFieldFillLogin(state) {
      if (state.user.email === "" || state.loginPassword === "") {
        state.error = "Please fill all fields";
        return state.error;
      } else {
        state.error = "";
        return;
      }
    },
    checkEmail(state) {
      if (state.user.email.includes("@") && state.user.email.includes("."))
        return (state.error = "");

      return (state.error = "Please enter a valid email");
    },
    checkPassword(state) {
      if (state.user.password !== state.user.confirmPassword) {
        return (state.error = "Password does not match");
      }
      if (state.user.password.length < 5) {
        return (state.error = "Password length must be more 5 characters");
      } else if (state.user.password.length > 10) {
        return (state.error = "Password length must not be 10 characters");
      }
      return (state.error = "");
    },
    saveDetails(state) {
      const user = {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        email: state.user.email,
        password: state.user.password,
        expiry: new Date().getTime() || 0,
      };
      localStorage.setItem("user", JSON.stringify(user));
      state.error = "";
      state.snackbar = true;
      state.success = "Sign up successful";
      return setTimeout(() => router.replace("/login"), 2000);
    },
    getDetails() {
      const date = new Date().getTime();
      if (
        JSON.parse(localStorage.getItem("user")) &&
        date > JSON.parse(localStorage.getItem("user")).expiry
      ) {
        localStorage.removeItem("user");
        return false;
      } else {
        return JSON.parse(localStorage.getItem("user"));
      }
    },
    LogOut(state) {
      state.error = "";
      state.snackbar = true;
      state.success = "Logout successful";
      state.user.firstname = "";
      state.user.lastname = "";
      state.user.email = "";
      state.loginPassword = "";
      state.user.password = "";
      state.user.confirmPassword = "";
      return setTimeout(() => router.replace("/login"), 1500);
    },
  },
  actions: {
    asyncCheckFieldFill({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("checkFieldFill");
          resolve();
        });
      });
    },
    asyncCheckFieldFillLogin({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("checkFieldFillLogin");
          resolve();
        });
      });
    },
    asyncCheckEmail({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("checkEmail");
          resolve();
        });
      });
    },
    asyncCheckPassword({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("checkPassword");
          resolve();
        });
      });
    },
    asyncSaveDetails({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("saveDetails");
          resolve();
        });
      });
    },
    asyncGetDetails({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("getDetails");
          resolve();
        });
      });
    },
    asyncLogOut({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("LogOut");
          resolve();
        });
      });
    },
  },
  modules: {},
});
