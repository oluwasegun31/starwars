import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// set success and error to false and null respectively
let success = false;
let signupError = null;

// function that signs up a user with email and password as argument if successful returns true and error type null and if unsuccesful returns the error type to the error message and returns false
const signupLogic = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        success = true;
        signupError = null;
        return success
    } catch (err) {
        success = false;
        signupError = err.message;
        return success
    }
}

export { signupLogic, signupError }