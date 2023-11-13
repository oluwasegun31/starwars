import PropTypes from "prop-types";

export default function CharacterCard({ character }) {
  const { name, image } = character;

  return (
    <div className="w-full sm:h-[400px] h-[350px] bg-primary/20 backdrop-blur-3xl drop-shadow-lg flex justify-center items-center cursor-pointer font-author relative overflow-hidden group">
      <p className="sm:text-2xl text-lg text-white font-medium absolute bottom-4 right-2 z-20 group-hover:-right-full transition-all duration-300 mix-blend-difference">
        {name}
      </p>
      <img
        src={image}
        alt="character"
        className="group-hover:scale-105 transition-all duration-300 w-[80%] object-cover"
      />
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};
