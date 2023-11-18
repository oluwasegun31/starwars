import { TbUserHexagon } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { retrieveAllImage } from "../../firebase/retrieveImages";
import { updateBasicProfile } from "../../firebase/updateProfile";
import { useNavigate } from "react-router-dom";
import { FormError, FormLoader } from "../../components";
/**
 * AccountSetup Component - This component handles the account setup process for a user. It allows them to choose a display name and a profile picture.
 * It retrieves available profile pictures from Firebase and updates the user's information accordingly.
 */
export default function AccountSetup() {
  // retrieved images state
  const [images, setImages] = useState([]);
  // profile picture state
  const [profilePic, setProfilePic] = useState(null);
  // display name ref
  const displayNameRef = useRef();
  // setLoading context
  const [isLoading, setIsLoading] = useState(false);
  // setError context
  const [isError, setIsError] = useState(null);
  // navigate function
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top of the page on every URL change
    window.scrollTo(0, 0);
    // Retrieve all the image URLs from Firebase
    const retrievedImages = async () => {
      const imagesUrl = await retrieveAllImage();
      // Set the state with the retrieved image URLs
      setImages(imagesUrl);
    };
    retrievedImages();
  }, []);
  // function that updates the user display name and profile picture;
  const updateUserProfile = async () => {
    // Get the display name value from the input field
    const displayName = displayNameRef.current.value;
    // Check if the display name field is empty
    if (displayName === "") {
      // Set error message and clear it after 4 seconds
      setIsError("Input Display Name");
      setTimeout(() => setIsError(null), 4000);
    } else {
      // Set loading state to true
      setIsLoading(true);
      // Call the updateBasicProfile function to update the user's profile
      const success = await updateBasicProfile(displayName, profilePic);
      // Set loading state to false
      setIsLoading(false);
      // Check the success of the updateBasicProfile function. Navigate to the 'test' page on successful profile update or Set error message and clear it after 4 seconds if unsuccessful
      success
        ? navigate("/test", { replace: true })
        : setIsError("something went wrong!");
      setTimeout(() => setIsError(null), 4000);
    }
  };

  return (
    <section className="w-full h-[90vh] font-author">
      <p className="text-center lg:text-7xl sm:text-6xl text-4xl capitalize font-medium leading-none">
        Account setup
      </p>
      <p className="text-center md:text-2xl text-[20px] font-normal">
        complete the last step to get started
      </p>
      <section className="bg-alternate/10 backdrop-blur-3xl drop-shadow-lg md:w-[650px] w-[90%] mx-auto mt-10 p-5">
        <form className="flex flex-col gap-6 justify-start items-start w-full">
          <div className="w-full sm:text-2xl text-[20px] flex flex-col gap-2 justify-start items-start">
            <label className="capitalize opacity-70" htmlFor="displayName">
              display name:
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-b-tertiary/40 outline-none focus:border-b-tertiary/75"
              ref={displayNameRef}
              title="displayName"
              id="displayName"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="capitalize opacity-70 sm:text-2xl text-[20px]">
              Profile Picture
            </p>
            <p className="text-center text-lg">select a profile picture</p>
            <div className="w-full flex justify-center items-center mb-4">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="icons"
                  className="sm:w-16 w-14 object-contain cursor-pointer hover:scale-110"
                />
              ) : (
                <TbUserHexagon className="md:text-6xl text-5xl mx-auto" />
              )}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {images.map((img, index) => {
                return (
                  <img
                    src={img}
                    alt="icons"
                    key={index}
                    className="sm:w-20 w-16 object-contain cursor-pointer hover:scale-110"
                    onClick={(e) => setProfilePic(e.target.src)}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              type="button"
              className="text-[20px] font-medium uppercase bg-tertiary text-primary px-3 py-1"
              onClick={() => updateUserProfile()}
            >
              submit
            </button>
          </div>
        </form>
      </section>
      {isError && <FormError errMessage={"Input Display Name"} />}
      {isLoading && <FormLoader />}
    </section>
  );
}
