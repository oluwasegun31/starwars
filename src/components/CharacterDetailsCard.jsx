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
    <section className="w-full font-author flex flex-col justify-center items-center md:px-6 px-3">
      <p className="w-full text-center lg:text-[7.2rem] sm:text-8xl text-6xl sm:leading-[0.6] leading-none font-medium mix-blend-difference opacity-60 z-20">
        {name}
      </p>
      <img
        src={image}
        alt={`Portriat of ${name}`}
        className="md:w-[300px] w-[230px] object-contain"
        width={300}
        height={350}
      />
      <section className="xl:w-[95%] sm:w-[98%] w-[90%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-4 capitalize leading-[1]">
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">Gender</p>
          <p className="font-medium">{gender}</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">birth year</p>
          <p className="font-medium">{birth_year}</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">height</p>
          <p className="font-medium">{height} cm</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">mass</p>
          <p className="font-medium">{mass} kg</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">homeworld</p>
          <p className="font-medium">{homeworld}</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">skin color</p>
          <p className="font-medium">{skin_color}</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">eye color</p>
          <p className="font-medium">{eye_color}</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">hair color</p>
          <p className="font-medium">{hair_color}</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">starship</p>
          <p className="font-medium">{starships[0]}</p>
        </div>
        <div className="bg-primary/20 backdrop-blur-3xl drop-shadow-2xl flex flex-col justify-start items-start sm:gap-2 gap-1 px-4 py-2 sm:text-3xl text-[20px]">
          <p className="italic font-normal opacity-75">vehicle</p>
          <p className="font-medium">{vehicles[0]}</p>
        </div>
      </section>
    </section>
  );
}

CharacterDetailsCard.propTypes = {
  // Validate character prop type
  character: PropTypes.object,
};
