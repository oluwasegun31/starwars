import { useNavigate } from "react-router-dom";

export default function PublicSettings() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-[60vh] flex flex-col gap-8 justify-center items-center font-author">
      <div className="text-center text-4xl font-medium">
        <p>Already have an account?</p>
        <button
          className="bg-secondary px-6 py-2 mt-2 cursor-pointer outline-none"
          onClick={() => navigate("/signin")}
        >
          Sign in
        </button>
      </div>
      <div className="text-center text-4xl font-medium">
        <p>Don't have an account?</p>
        <button
          className="bg-secondary px-6 py-2 mt-2 cursor-pointer outline-none"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
      </div>
    </section>
  );
}
