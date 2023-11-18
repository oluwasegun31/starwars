export default function PlanetCard({ planet }) {
  const { image, id, name } = planet;
  return (
    <div className="sm:h-[150px] h-[130px] bg-primary/20 backdrop-blur-3xl drop-shadow-lg relative overflow-hidden flex items-center pr-4 font-author cursor-pointer hover:scale-105 transition-all duration-300">
      <p className="w-full text-end font-medium sm:text-3xl text-2xl capitalize">
        {name}
      </p>
      <img
        src={image}
        alt={`${name} picture`}
        className="sm:w-48 w-36 object-contain absolute -bottom-12 -left-12"
      />
    </div>
  );
}
