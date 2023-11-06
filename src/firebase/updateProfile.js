import { updateProfile } from "firebase/auth";
import { auth } from "./config";

let updateProfileError = null;

// a Function that updates the display name and profile url and returns true or false in certain conditions
const updateBasicProfile = async (displayName, profileUrl) => {
    try {
        // await the updateprofile that takes displayName and profileURL as arguments
        await updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: profileUrl
        })
        // set the error to null and return true
        updateProfileError = null;
        return true
    } catch (err) {
        // set the profile error to err.message and return false
        updateProfileError = err.message;
        return false
    }

}

export { updateBasicProfile, updateProfileError }