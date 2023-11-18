import PropTypes from "prop-types";
/**
 * CharacterDetailsCard Component
 * This component displays detailed information about a specific character.
 * @component
 * @param {Object} character - The character object containing detailed information.
 * @returns {JSX.Element} - Detailed card view of the character.
 */
export default function CharacterDetailsCard({ character }) {
  // Destructure character data
  const {
    name,
    image,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    skin_color,
    starships,
    vehicles,
  } = character;
  return (
    <section className="font-author flex flex-col sm:gap-20 gap-10 md:px-6 px-3">
      <p className="w-full text-center lg:text-9xl sm:text-8xl text-6xl font-medium mix-blend-difference opacity-60 z-20">
        {name}
      </p>
      <section className="flex sm:flex-row flex-col sm:justify-between justify-center items-center lg:text-3xl text-2xl font-medium capitalize">
        <div>
          <p>Gender: {gender}</p>
          <p>Birth Year: {birth_year}</p>
          <p>Height: {height}cm</p>
          <p>Mass: {mass}kg</p>
          <p>Skin color: {skin_color}</p>
        </div>
        <div>
          <p>eye color: {eye_color}</p>
          <p>hair color: {hair_color}</p>
          <p>homeworld: {homeworld}</p>
          <p>starship: {starships[0]}</p>
          <p>Vehicles: {vehicles[0]}</p>
        </div>
      </section>
      <img
        src={image}
        alt={`Portriat of ${name}`}
        className="md:absolute relative  bottom-0 left-[50%] -translate-x-[50%] lg:w-[440px] md:w-[400px] w-[350px] object-contain"
      />
    </section>
  );
}

CharacterDetailsCard.propTypes = {
  // Validate character prop type
  character: PropTypes.object,
};
