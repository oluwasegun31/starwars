import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
/**
 * CharacterCard Component
 * This component represents a card displaying information about a character.
 * @param {Object} character - The character object with properties like id, name, and image.
 * @returns {JSX.Element} - A card displaying the character's name and image.
 */
export default function CharacterCard({ character }) {
  // Destructure character data
  const { name, image, id } = character;
  // Get navigate function from react-router-dom
  const navigate = useNavigate();
  return (
    <div
      className="w-full sm:h-[400px] h-[350px] bg-primary/20 backdrop-blur-3xl drop-shadow-lg flex justify-center items-center cursor-pointer font-author relative overflow-hidden group"
      onClick={() => navigate(`${id}`)}
    >
      <p className="sm:text-2xl text-lg text-white font-medium absolute bottom-4 right-2 z-20 group-hover:-right-full transition-all duration-300 mix-blend-difference">
        {name}
      </p>
      <img
        src={image}
        alt={`Portrait of ${name}`}
        className="group-hover:scale-105 transition-all duration-300 w-[80%] object-cover"
        width={250}
        height={310}
      />
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};
