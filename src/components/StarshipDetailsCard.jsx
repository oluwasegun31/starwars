/**
 * StarshipDetailsCard Component
 * This component displays detailed information about a Starship, including its name, image, and various characteristics.
 * @component
 * @param {object} starship - The planet object containing information.
 * @returns {JSX.Element} - Detailed information about the Starship.
 */
export default function StarshipDetailsCard({ starship }) {
  // destructure
  const {
    MGLT,
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    hyperdrive_rating,
    image,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    passengers,
    starship_class,
  } = starship;
  return (
    <section className="w-full flex flex-col justify-start items-center gap-2 font-author mt-2">
      <p className="font-medium capitalize lg:text-8xl sm:text-7xl text-5xl leading-[0.7]">
        {name}
      </p>
      <img
        src={image}
        alt={`image of ${name}`}
        className="sm:w-[400px] w-[300px] object-contain"
        width={400}
        height={300}
      />
      <section className="xl:w-[95%] sm:w-[98%] w-[90%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Model</p>
          <p className="font-medium">{model}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Manufacturer</p>
          <p className="font-medium">{manufacturer}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Starship Class</p>
          <p className="font-medium">{starship_class}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Crew</p>
          <p className="font-medium">{crew}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Passengers</p>
          <p className="font-medium">{passengers}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Length</p>
          <p className="font-medium">{length} m</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Max Atm Speed</p>
          <p className="font-medium">{max_atmosphering_speed} Km</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Hyperdrive Rating</p>
          <p className="font-medium">
            {parseFloat(hyperdrive_rating).toFixed(1)}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Cost</p>
          <p className="font-medium">{cost_in_credits} Credits</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Cargo Capacity</p>
          <p className="font-medium">{cargo_capacity} tons</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">Consumables</p>
          <p className="font-medium">{consumables} tons</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-0 bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4 md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
          <p className="text-tertiary/60 italic">MGLT</p>
          <p className="font-medium">{MGLT} tons</p>
        </div>
      </section>
    </section>
  );
}
