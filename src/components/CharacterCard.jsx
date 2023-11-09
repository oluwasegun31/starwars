import PropTypes from "prop-types";
import anakin from "../assets/anakin.jpg";

export default function CharacterCard({ character }) {
  const { name, image } = character;

  return (
    <div className="w-full sm:h-[400px] h-[350px] bg-primary/20 backdrop-blur-3xl drop-shadow-lg cursor-pointer font-author relative overflow-hidden group">
      <p className="sm:text-2xl text-lg font-medium absolute bottom-4 right-2 z-20 group-hover:-right-full transition-all duration-300">
        {name}
      </p>
      <img
        src={anakin}
        alt="character"
        className="group-hover:grayscale group-hover:scale-105 transition-all duration-300 w-full h-full object-cover"
      />
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};
