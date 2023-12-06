import { Suspense, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StarWarsContext } from "../../context";
import { useEffect } from "react";
import { CharacterDetailsCard, FormLoader } from "../../components";
import { BsArrowLeft } from "react-icons/bs";
/**
 * CharacterDetails Component
 * This component displays detailed information about a specific character. It fetches characters from the context, finds the character with the matching ID, and renders the CharacterDetailsCard component with the relevant character data.
 * Also, it provides a navigation back button.
 *
 * @returns {JSX.Element} - Detailed view of the character.
 */
export default function CharacterDetails() {
  // Get context values
  const { showCharacters, characters, isLoading } = useContext(StarWarsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  // Fetch characters if not already fetched
  useEffect(() => {
    // Scroll to the top of the page on every URL change
    window.scrollTo(0, 0);
    showCharacters();
  }, []);
  // Find the character with the matching ID from the characters list
  const clickedCharacter = characters.find((character) => {
    return id === character.id;
  });
  // Check for errors and display loading indicator if characters are not loaded
  if (isLoading) {
    return (
      <div className="h-[93vh]">
        <FormLoader />
      </div>
    );
  }
  // Return the CharacterDetailsCard component with the relevant character data
  return (
    <section className="min-h-[93vh] relative">
      <div
        className="ml-10 sm:text-5xl text-4xl cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft />
      </div>
      <Suspense fallback={<p>Loading....</p>}>
        <CharacterDetailsCard character={clickedCharacter} />
      </Suspense>
    </section>
  );
}
