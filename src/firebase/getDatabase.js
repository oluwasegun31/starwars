import { collection, getDocs } from "firebase/firestore"
import { auth, db } from "./config"

let getDataError = null;

const getDatabaseLogic = async (dataPath) => {
    const dataReference = collection(db, dataPath);
    try {
        const rawData = await getDocs(dataReference);
        const data = rawData.docs.map(item => ({
            ...item.data(),
            id: item.id,
        }))
        getDataError = null;
        return data
    } catch (err) {
        getDataError(err.message);
        return false
    }
};

export { getDatabaseLogic, getDataError }