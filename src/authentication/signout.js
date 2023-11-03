import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

let success = false;
let signoutError = null;

const signoutLogic = async () => {
    try {
        await signOut(auth);
        success = true;
        signoutError = null;
        return success
    } catch (err) {
        success = false;
        signoutError = err.message;
        return success
    }
}

export { signoutLogic, signoutError }