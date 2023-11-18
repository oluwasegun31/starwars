import { MdOutlineMailOutline } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { passwordResetLogic } from "../../firebase/passwordReset";
import { FormError } from "../../components";
/**
 * ResetPassword Component
 * This component allows users to reset their password. It takes an email input,
 * sends a reset link to the user's email, and navigates back to the sign-in page.
 */
export default function ResetPassword() {
  useEffect(() => {
    // Scroll to the top of the page on every URL change
    window.scrollTo(0, 0);
  }, []);
  // Create state variable to store error message
  const [isError, setIsError] = useState(null);
  // Get navigation function from router-dom and a ref to access the email input field
  const navigate = useNavigate();
  const emailRef = useRef();
  // Function to handle the password reset request
  const resetPassword = async () => {
    // Get the email value from the input field
    const email = emailRef.current.value;
    // Check if the email field is empty
    if (email === "") {
      // Set error message and clear it after 4 seconds
      setIsError("Input an Email!");
      setTimeout(() => setIsError(null), 4000);
    } else {
      // Call the passwordResetLogic function to handle the actual password reset request
      const success = passwordResetLogic(email);
      // Check the success of the passwordResetLogic function, On success navigate to the signin page and On failure, set an error message and clear it after 4 seconds
      success ? navigate("/signin") : setIsError("something went wrong!");
      setTimeout(() => setIsError(null), 4000);
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center font-author relative">
      <div
        className="fixed top-20 left-10 cursor-pointer text-4xl"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft />
      </div>
      <aside className="lg:w-[620px] sm:w-[500px] w-[90%] h-full bg-alternate/10 backdrop-blur-3xl drop-shadow-lg font-author flex flex-col justify-center items-start gap-2 py-7 px-2">
        <p className="w-full sm:text-5xl text-4xl text-center capitalize">
          forgot password
        </p>
        <p className="sm:w-[70%] w-full sm:text-lg text-base text-center mx-auto leading-none">
          that's okay. It happens to only you! fill in the correct email to
          reset your password
        </p>
        <form className="flex flex-col justify-start items-start gap-2 w-full relative sm:px-10 px-5 mt-14">
          <div className="w-full">
            <label
              htmlFor="email"
              className="w-full sm:text-2xl text-lg font-medium capitalize opacity-70"
            >
              Email*
            </label>
            <input
              type="email"
              className="bg-transparent border-b border-b-tertiary/40 w-full outline-none focus:border-b-tertiary/70 sm:text-2xl text-lg"
              ref={emailRef}
            />
            <MdOutlineMailOutline className="absolute bottom-2 right-12 text-[20px]" />
            <button
              type="button"
              className="w-full py-2 bg-tertiary text-alternate sm:text-2xl text-lg font-medium capitalize mt-6"
              onClick={() => resetPassword()}
            >
              Reset
            </button>
          </div>
        </form>
        <p className="w-full text-center sm:text-lg text-base">
          Shockingly remembers password?
          <Link to={"/signin"} className="text-secondary ml-2">
            Log in
          </Link>
        </p>
      </aside>
      {isError && <FormError errMessage={isError} />}
    </section>
  );
}
