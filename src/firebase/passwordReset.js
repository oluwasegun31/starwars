import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./config";

// Declare a global variable to store the password reset error message
let passwordResetError = null;
// Function to handle the password reset logic
const passwordResetLogic = async (email) => {
    // Attempt to send a password reset email using Firebase authentication
    try {
        await sendPasswordResetEmail(auth, email);
        // Clear the password reset error message if the request is successful
        passwordResetError = null;
        // Return true to indicate success
        return true
    } catch (err) {
        // Set the password reset error message to the error message
        passwordResetError = err.message;
        // Return false to indicate failure
        return false;
    }
}

export { passwordResetLogic, passwordResetError }