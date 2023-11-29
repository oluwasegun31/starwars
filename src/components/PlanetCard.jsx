import { useNavigate } from "react-router-dom";
/**
 * PlanetCard component displays information about a planet.
 * @component
 * @param {Object} planet - Planet data object containing properties like id, name, image.
 * @returns {JSX.Element} - Detailed information about the planet.
 */
export default function PlanetCard({ planet }) {
  const { image, id, name } = planet;
  const navigate = useNavigate();

  return (
    <div
      className="sm:h-[150px] h-[130px] bg-primary/20 backdrop-blur-3xl drop-shadow-lg relative overflow-hidden flex items-center pr-4 font-author cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={() => navigate(id)}
    >
      <p className="w-full text-end font-medium sm:text-3xl text-2xl capitalize">
        {name}
      </p>
      <div className="absolute -bottom-12 -left-12 p-[1px] rounded-full bg-primary/20 backdrop-blur-3xl">
        <img
          src={image}
          alt={`${name} picture`}
          className="sm:w-44 w-36 object-contain"
        />
      </div>
    </div>
  );
}
