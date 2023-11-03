import { Link, useNavigate } from "react-router-dom";
import { FormError, FormInput, FormLoader } from "../components";
import { useContext } from "react";
import { FormContext } from "../context";
import { signinError, signinLogic } from "../authentication/siginin";
/**
 * SigninPage Component
 * This component presents the user interface for user sign in. Users can sign in with their email and password, and error handling is included for a seamless authentication process. It also provides a link to the sign-up page for existing users.
 */
export default function SigninPage() {
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
  // Function to handle the signin with email and password form
  const signinForm = async () => {
    // Set loading state to true
    setFormLoading(true);
    // Get the email and password values from the input fields
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    // Logic for signup
    const success = await signinLogic(emailValue, passwordValue);
    if (success) {
      // On success, clear loading and navigate to the home page
      setFormLoading(null);
      navigate("/", { replace: true });
    } else {
      // On failure, clear loading and set an error message based on error types
      setFormLoading(null);
      signinError === "Firebase: Error (auth/invalid-login-credentials)."
        ? setErrorMessage("Invalid email and password")
        : signinError ===
          "account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        ? setErrorMessage("Account disable: to many attempt")
        : setErrorMessage("something went wrong");
      setTimeout(() => setErrorMessage(null), 4000);
    }
  };

  return (
    <section className="w-full min-h-[90vh] flex justify-center items-center">
      <aside className="lg:w-[600px] sm:w-[500px] w-[85%] h-full bg-alternate/10 backdrop-blur-3xl drop-shadow-lg font-author flex flex-col justify-center items-start gap-3 pb-7">
        <p className="sm:text-6xl text-4xl capitalize w-full text-center mt-10">
          sign in
        </p>
        <FormInput formType={"sign in"} onClick={() => signinForm()} />
        <p className="sm:text-[20px] text-lg text-center w-full">
          Don't have an account?
          <Link className="text-secondary ml-2" to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </aside>
      {errorMessage && <FormError errMessage={errorMessage} />}
      {formLoading && <FormLoader />}
    </section>
  );
}
