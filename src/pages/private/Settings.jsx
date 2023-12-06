import { Suspense, useContext, useEffect, useState } from "react";
import { GlobalUserContext } from "../../context";
// Import components
import {
  FormError,
  FormLoader,
  FormSuccess,
  PublicSettings,
} from "../../components";
// Import firebase functions
import { retrieveAllImage } from "../../firebase/retrieveImages";
import {
  updateBasicProfile,
  updateProfileError,
} from "../../firebase/updateProfile";
import { signoutLogic } from "../../authentication/signout";

export default function Settings() {
  // Get user from context
  const { user } = useContext(GlobalUserContext);
  // State variables
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [displayURL, SetDisplayURL] = useState(user?.photoURL);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Fetch all images from firebase
    const retrievedImages = async () => {
      const imagesUrl = await retrieveAllImage();
      // update state with fetched images
      setImages(imagesUrl);
    };
    retrievedImages();
  }, []);

  // Logout function
  const logout = () => {
    signoutLogic();
  };

  // Update profile function
  const updateProfile = async () => {
    setIsLoading(true);
    const success = await updateBasicProfile(displayName, displayURL);
    if (success) {
      // Update error and success states
      setIsError(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    } else {
      // Update error and success states
      setIsError(true);
      setIsSuccess(false);
      setTimeout(() => setIsError(false), 4000);
    }
    setIsLoading(false);
  };

  return (
    <section className="w-full min-h-screen font-author md:px-5 px-4 relative">
      <div className="flex justify-between items-center mb-10">
        <p className="md:text-7xl text-4xl font-medium capitalize">Settings</p>
        {user && (
          <button
            className="outline-none bg-alternate md:px-4 px-2 md:py-2 py-1 md:text-2xl text-lg font-medium cursor-pointer"
            onClick={() => logout()}
          >
            Logout
          </button>
        )}
      </div>
      {user ? (
        <section className="w-full flex flex-col justify-center items-center gap-10 ">
          <p className="w-full text-center md:text-4xl text-2xl font-medium">
            Welcome {user.displayName}
          </p>
          <form className="bg-alternate/10 backdrop-blur-3xl drop-shadow-lg md:w-[650px] w-full md:p-5 p-3">
            <div className="sm:text-2xl text-[22px] font-medium mb-10">
              <label htmlFor="displayName">Display Name</label>
              <input
                type="text"
                name="displayName"
                className="w-full bg-primary/20 mt-3 outline-none px-4 py-2"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2 sm:text-2xl text-[22px] font-medium mb-10">
              <p>Display Picture</p>
              <img
                src={displayURL}
                alt="display picture"
                className="w-20 h-20"
              />
              <div className="flex justify-center flex-wrap items-center gap-3 mt-8">
                {images.map((image, index) => {
                  return (
                    <img
                      src={image}
                      alt="icons"
                      key={index}
                      className="sm:w-20 w-14 sm:h-20 h-14 cursor-pointer"
                      onClick={(e) => SetDisplayURL(e.target.src)}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="w-[300px] bg-secondary text-2xl font-medium py-2 cursor-pointer"
                type="button"
                onClick={() => updateProfile()}
              >
                Update
              </button>
            </div>
          </form>
        </section>
      ) : (
        <Suspense fallback={<p>Loading....</p>}>
          <PublicSettings />
        </Suspense>
      )}
      {isLoading && <FormLoader />}
      {isError && <FormError errMessage={updateProfileError} />}
      {isSuccess && <FormSuccess succMessage={"Updated Successfully"} />}
    </section>
  );
}
