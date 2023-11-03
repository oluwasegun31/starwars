import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// instance of the Google provider object
const googleProvider = new GoogleAuthProvider();
// set success and error to false and null respectively
let success = false;
let googleProviderError = null;
// function that signs up a user with google provider if successful returns true and error type null and if unsuccesful returns the error type to the error message and returns false
const googleProviderLogic = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        success = true;
        googleProviderError = null;
        return success
    } catch (err) {
        success = false;
        googleProviderError = err.message;
        return success
    }
}

export { googleProviderLogic, googleProviderError }