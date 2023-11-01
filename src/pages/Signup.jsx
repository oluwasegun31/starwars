import { Link } from "react-router-dom";
import { FormInput } from "../components";

export default function SigupPage() {
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
        <FormInput formType={"sign up"} />
        <p className="sm:text-[20px] text-lg text-center w-full">
          Already have an account?
          <Link className="text-secondary ml-2" to={"/signin"}>
            Sign In
          </Link>
        </p>
      </aside>
    </section>
  );
}
