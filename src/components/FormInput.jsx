import { MdOutlineMailOutline, MdPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FormContext } from "../context";
/**
 * FormInput Component
 * This component renders a form input for email and password, along with social login options.
 */
export default function FormInput({ formType, onClick }) {
  // form input context
  const { emailRef, passwordRef, googleAuthentication, githubAuthentication } =
    useContext(FormContext);

  return (
    <form className="sm:w-[70%] w-[95%] mx-auto mt-5 flex flex-col gap-5 justify-start items-start px-4">
      <div className="flex flex-col justify-start items-start gap-2 w-full relative">
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
        <MdOutlineMailOutline className="absolute bottom-2 right-2 text-[20px]" />
      </div>
      <div className="flex flex-col justify-start items-start gap-2 w-full relative">
        <label
          htmlFor="email"
          className="w-full sm:text-2xl text-lg font-medium capitalize opacity-70"
        >
          password*
        </label>
        <input
          type="password"
          className="bg-transparent border-b border-b-tertiary/40 w-full outline-none focus:border-b-tertiary/70 sm:text-2xl text-lg"
          ref={passwordRef}
        />
        <MdPassword className="absolute bottom-2 right-2 text-[20px]" />
      </div>
      <button
        type="button"
        className="w-full py-2 bg-tertiary text-alternate sm:text-2xl text-lg font-medium capitalize"
        onClick={onClick}
      >
        {formType}
      </button>
      <div className="w-full text-center flex flex-col justify-center items-center gap-2">
        <p className="text-lg font-medium">{formType} with</p>
        <div className="text-3xl flex justify-center items-center gap-4">
          <FcGoogle
            className="cursor-pointer"
            onClick={() => googleAuthentication()}
          />
          <BsGithub
            className="cursor-pointer"
            onClick={() => githubAuthentication()}
          />
        </div>
      </div>
    </form>
  );
}

FormInput.propsType = {
  formType: PropTypes.string,
  onClick: PropTypes.func,
};
