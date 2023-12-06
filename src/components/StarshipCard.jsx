import { useNavigate } from "react-router-dom";
/**
 * PlanetCard component displays information about a planet.
 *
 * @param {Object} planet - Planet data object containing properties like id, name, image.
 * @returns {JSX.Element} - Detailed information about the Starship.
 */
export default function StarshipCard({ starship }) {
  const navigate = useNavigate();
  const { name, image, id } = starship;
  return (
    <section
      className="bg-primary/20 backdrop-blur-3xl drop-shadow-lg h-[200px] p-3 flex justify-center items-center overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300"
      onClick={() => navigate(id)}
    >
      <img
        src={image}
        alt={`image of ${name}`}
        className="w-48 object-contain opacity-50"
        width={192}
        height={200}
      />
      <p className="sm:text-4xl text-3xl font-medium absolute top-[50%] -translate-y-[50%] bg-primary/30  px-3">
        {name}
      </p>
    </section>
  );
}
