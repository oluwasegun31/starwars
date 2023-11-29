import { useContext, useEffect } from "react";
import { StarWarsContext } from "../../context";
import { useNavigate, useParams } from "react-router-dom";
import { FormLoader, StarshipDetailsCard } from "../../components";
import { BsArrowLeft } from "react-icons/bs";
/**
 * StarshipsDetails component displays the deails of Star Wars starship.
 */
export default function StarshipDetails() {
  // Get context values
  const { showStarships, starships, isLoading } = useContext(StarWarsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  // Fetch characters if not already fetched
  useEffect(() => {
    // Scroll to the top of the page on every URL change
    window.scrollTo(0, 0);
    showStarships();
  }, []);
  // Find the character with the matching ID from the characters list
  const clickedStarship = starships.find((starship) => {
    return id === starship.id;
  });
  // Check for errors and display loading indicator if characters are not loaded
  if (isLoading) {
    return (
      <div className="h-[93vh]">
        <FormLoader />
      </div>
    );
  }
  return (
    <section className="min-h-[93vh] relative">
      <div
        className="sm:ml-10 ml-5 sm:text-5xl text-4xl cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft />
      </div>
      <StarshipDetailsCard starship={clickedStarship} />
    </section>
  );
}
