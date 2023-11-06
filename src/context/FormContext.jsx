import { createContext, useRef, useState } from "react";
import { googleProviderLogic } from "../authentication/googleProvider";
import { useNavigate } from "react-router-dom";
import { githubProviderLogic } from "../authentication/githubProvider";
/**
 * FormProvider Component
 * This component provides a context to manage email and password references, google and github authentication.
 */
export const FormContext = createContext(null);

export default function FormProvider({ children }) {
  // error message state, loading state and navigate function
  const [errorMessage, setErrorMessage] = useState(null);
  const [formLoading, setFormLoading] = useState(null);
  const navigate = useNavigate();
  // email and password ref
  const emailRef = useRef();
  const passwordRef = useRef();

  // function that handles google provider authentication
  const googleAuthentication = async () => {
    const success = await googleProviderLogic();
    if (success) {
      navigate("/test", { replace: true });
    } else {
      setErrorMessage("Something went wrong!");
      setTimeout(() => setErrorMessage(null), 4000);
    }
  };

  // function that handles github provider authentication
  const githubAuthentication = async () => {
    const success = await githubProviderLogic();
    if (success) {
      navigate("/test", { replace: true });
    } else {
      setErrorMessage("Something went wrong!");
      setTimeout(() => setErrorMessage(null), 4000);
    }
  };
  return (
    <FormContext.Provider
      value={{
        emailRef,
        passwordRef,
        errorMessage,
        setErrorMessage,
        googleAuthentication,
        githubAuthentication,
        formLoading,
        setFormLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
