import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../../firebase";

export default async function handleFirebaseSignIn() {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      this.$store.state.user.email,
      this.$store.state.user.password
    );
    const user = userCredential.user;
    let respond;
    if (user) {
      respond = await sendEmailVerification(auth.currentUser);
    }
    console.log(user);
    return {
      user,
      respond,
    };
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
    this.$store.state.error = errorMessage;
    console.log(errorCode, errorMessage);
    return {
      errorCode,
      errorMessage,
    };
  }
}
