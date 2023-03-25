import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  provider,
} from "../../firebase";

export default async function handleGoogleSignIn() {
  try {
    const auth = getAuth();
    const res = await signInWithPopup(auth, provider);
    const credentials = await GoogleAuthProvider.credentialFromResult(res);
    const token = credentials.accessToken;
    const user = res.user;
    console.log(user);
    return {
      user,
    };
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
    const credentials = GoogleAuthProvider.credentialFromError(e);
    console.log(errorCode, errorMessage, credentials);
    return {
      errorCode,
      errorMessage,
    };
  }
}
