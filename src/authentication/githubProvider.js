import { auth } from "../firebase/config";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
// instance of the Github  provider object
const githubProvider = new GithubAuthProvider();
// set success and error to false and null respectively
let success = false;
let githubProviderError = null;
// function that signs up a user with github provider if successful returns true and error type null and if unsuccesful returns the error type to the error message and returns false
const githubProviderLogic = async () => {
    try {
        await signInWithPopup(auth, githubProvider);
        success = true;
        githubProviderError = null;
        return success;
    } catch (err) {
        success = false;
        githubProviderError = err.message;
        return success
    }
}

export { githubProviderLogic, githubProviderError }