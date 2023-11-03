import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./config";

// This function retrieves all the URL of images stored directly in Firebase
const retrieveAllImage = async () => {
    // Get the storage reference for the images folder
    const imageRef = ref(storage, "icons");
    // List all the files in the images folder
    const result = await listAll(imageRef);
    // Map over each image file and get its download URL
    const urlPromises = result.items.map((itemRef) => {
        return getDownloadURL(itemRef);
    });
    // Wait for all the download URLs to be resolved
    const imagesUrls = await Promise.all(urlPromises);
    // Return the array of image download URLs
    return imagesUrls;
};

export { retrieveAllImage }