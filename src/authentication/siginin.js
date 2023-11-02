import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

// set success and error to false and null respectively
let success = false;
let signinError = null;

// function that signs in a user with email and password as argument if successful returns true and error type null and if unsuccesful returns the error type to the error message and returns false 
const signinLogic = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user);
        success = true;
        signinError = null;
        return success
    } catch (err) {
        console.error(err.message);
        success = false;
        signinError = err.message;
        return success
    }
}

export { signinLogic, signinError }