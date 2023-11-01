import { Link } from "react-router-dom";
import { FormInput } from "../components";

export default function SigninPage() {
  return (
    <section className="w-full min-h-[90vh] flex justify-center items-center">
      <aside className="lg:w-[600px] sm:w-[500px] w-[85%] h-full bg-alternate/10 backdrop-blur-3xl drop-shadow-lg font-author flex flex-col justify-center items-start gap-3 pb-7">
        <p className="sm:text-6xl text-4xl capitalize w-full text-center mt-10">
          sign in
        </p>
        <FormInput formType={"sign in"} />
        <p className="sm:text-[20px] text-lg text-center w-full">
          Don't have an account?
          <Link className="text-secondary ml-2" to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </aside>
    </section>
  );
}
