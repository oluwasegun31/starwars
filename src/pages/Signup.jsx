import { Link, useNavigate } from "react-router-dom";
import { FormInput, FormError, FormLoader } from "../components";
import { useContext, useState } from "react";
import { FormContext } from "../context";
import { signupError, signupLogic } from "../authentication/signup";
/**
 * SignupPage Component
 * This component presents the user interface for user registration. Users can sign up with their email and password, and error handling is included for a seamless registration process. It also provides a link to the sign-in page for existing users.
 */
export default function SigupPage() {
  // Get form input context and navigate function from FormContext and router-dom respectfully
  const {
    emailRef,
    passwordRef,
    errorMessage,
    setErrorMessage,
    formLoading,
    setFormLoading,
  } = useContext(FormContext);
  const navigate = useNavigate();
  // Function to handle the signup with email and password form
  const signupForm = async () => {
    // Set loading state to true
    setFormLoading(true);
    // Get the email and password values from the input fields
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    // Logic for signup
    const success = await signupLogic(emailValue, passwordValue);
    if (success) {
      // On success, clear loading and navigate to the home page
      setFormLoading(null);
      navigate("/account-setup", { replace: true });
    } else {
      // On failure, clear loading and set an error message based on error types
      setFormLoading(null);
      signupError === "Firebase: Error (auth/email-already-in-use)."
        ? setErrorMessage("Email Already in Use")
        : signupError === "Firebase: Error (auth/invalid-email)."
        ? setErrorMessage("Email Format Not supported")
        : signupError ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ? setErrorMessage("Password Must be more than 6 characters")
        : setErrorMessage("Something went wrong");
      setTimeout(() => setErrorMessage(null), 4000);
    }
  };

  return (
    <section className="w-full min-h-[90vh] grid md:grid-cols-2 grid-cols-1 gap-3">
      <aside className="flex justify-between items-center  py-8 sm:px-4 px-2">
        <div className="font-supreme text-center">
          <p className="font-semibold lg:text-5xl sm:text-4xl text-3xl leading-none mb-4">
            Don't have an account?
          </p>
          <p className="font-normal leading-none">
            Register to access all the features of our service. Search to access
            all information on yur favourite characters, spaceships and planets
          </p>
        </div>
      </aside>
      <aside className="w-full h-full bg-alternate/10 backdrop-blur-3xl drop-shadow-lg font-author flex flex-col justify-center items-start gap-3">
        <p className="sm:text-6xl text-4xl capitalize w-full text-center mt-10">
          sign up
        </p>
        <FormInput formType={"sign up"} onClick={() => signupForm()} />
        <p className="sm:text-[20px] text-lg text-center w-full">
          Already have an account?
          <Link className="text-secondary ml-2" to={"/signin"}>
            Sign In
          </Link>
        </p>
      </aside>
      {errorMessage && <FormError errMessage={errorMessage} />}
      {formLoading && <FormLoader />}
    </section>
  );
}
