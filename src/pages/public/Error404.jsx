import { useNavigate } from "react-router-dom";
import starship from "../../assets/starship.png";
export default function Error404() {
  const navigate = useNavigate();
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center gap-3 font-author font-medium text-center p-2">
      <p className="sm:text-[10rem] text-7xl leading-none">404</p>
      <p className="sm:text-3xl text-[22px] leading-none">
        Seems you strayed away from the force!!
      </p>
      <img
        src={starship}
        alt="starship"
        className="sm:w-48 w-32 object-contain"
      />
      <button
        className="outline-none border border-white sm:px-6 px-4 sm:py-2 py-1 sm:text-3xl text-2xl hover:bg-alternate hover:border-transparent transition-all duration-300"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </section>
  );
}
