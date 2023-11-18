import { useContext, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { StarWarsContext } from "../../context";
import { FormLoader, PlanetDetailsCard } from "../../components";
/**
 * PlanetsDetails Component
 * This component displays detailed information about a specific planet. It fetches planets from the context, finds the planet with the matching ID, and renders the planetDetailsCard component with the relevant character data.
 * Also, it provides a navigation back button.
 *
 * @returns {JSX.Element} - Detailed view of the planet.
 */
export default function PlanetsDetails() {
  // Get context values
  const { showPlanets, planets, isLoading } = useContext(StarWarsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  // Fetch characters if not already fetched
  useEffect(() => {
    window.scrollTo(0, 0);
    showPlanets();
  }, []);
  // Find the planet with the matching ID from the planets list
  const clickedPlanet = planets.find((planet) => {
    return planet.id === id;
  });
  // Check for errors and display loading indicator if planets are not loaded
  if (isLoading) {
    return (
      <div className="h-[93vh]">
        <FormLoader />
      </div>
    );
  }
  // Return the PlanetDetailsCard component with the relevant character data
  return (
    <section className="min-h-[93vh] relative">
      <div
        className="sm:ml-10 ml-5 sm:text-5xl text-4xl cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft />
      </div>
      <PlanetDetailsCard planet={clickedPlanet} />
    </section>
  );
}
