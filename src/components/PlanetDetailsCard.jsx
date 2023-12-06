import PropTypes from "prop-types";
import {
  FaPeopleCarry,
  FaCloudSun,
  FaCircleNotch,
  FaWater,
} from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { GiHotSurface } from "react-icons/gi";
/**
 * PlanetDetailsCard Component
 * This component displays detailed information about a planet, including its name, image, and various characteristics.
 * @component
 * @param {object} planet - The planet object containing information.
 * @returns {JSX.Element} - Detailed information about the planet.
 */
export default function PlanetDetailsCard({ planet }) {
  // destructure planet object
  const {
    name,
    image,
    population,
    climate,
    diameter,
    gravity,
    orbital_period,
    rotation_period,
    surface_water,
    terrain,
  } = planet;

  return (
    <section className="w-full flex flex-col justify-start items-center gap-2 font-author mt-2">
      <p className="w-full lg:text-8xl sm:text-7xl text-5xl leading-[0.7] font-medium text-center capitalize">
        {name}
      </p>
      <img
        src={image}
        alt={`portriat of ${name}`}
        className="w-[350px] object-contain"
        width={350}
        height={350}
      />
      <section className="xl:w-[95%] sm:w-[98%] w-[90%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        <div className="flex justify-start items-center gap-x-12 w-full bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4">
          <FaPeopleCarry className="md:text-3xl text-2xl" />
          <div className="flex flex-col justify-start items-start md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
            <p className="text-tertiary/60 italic">population</p>
            <p className="font-medium">{population} people</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-12 w-full bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4">
          <FaCloudSun className="md:text-3xl text-2xl" />
          <div className="flex flex-col justify-start items-start md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
            <p className="text-tertiary/60 italic">climate</p>
            <p className="font-medium">{climate}</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-12 w-full bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4">
          <RiEditCircleLine className="md:text-3xl text-2xl" />
          <div className="flex flex-col justify-start items-start md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
            <p className="text-tertiary/60 italic">diameter</p>
            <p className="font-medium">{diameter} KM</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-12 w-full bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4">
          <MdKeyboardDoubleArrowDown className="md:text-3xl text-2xl" />
          <div className="flex flex-col justify-start items-start md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
            <p className="text-tertiary/60 italic">gravity</p>
            <p className="font-medium">{gravity}</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-12 w-full bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4">
          <FaCircleNotch className="md:text-3xl text-2xl" />
          <div className="flex flex-col justify-start items-start md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
            <p className="text-tertiary/60 italic">orbital period</p>
            <p className="font-medium">{orbital_period} days</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-12 w-full bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4">
          <FaCircleNotch className="md:text-3xl text-2xl" />
          <div className="flex flex-col justify-start items-start md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
            <p className="text-tertiary/60 italic">rotation period</p>
            <p className="font-medium">{rotation_period} hours</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-12 w-full bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4">
          <FaWater className="md:text-3xl text-2xl" />
          <div className="flex flex-col justify-start items-start md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
            <p className="text-tertiary/60 italic">surface water</p>
            <p className="font-medium">{surface_water}</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-12 w-full bg-primary/20 backdrop-blur-3xl drop-shadow-2xl py-2 px-4">
          <GiHotSurface className="md:text-3xl text-2xl" />
          <div className="flex flex-col justify-start items-start md:text-3xl sm:text-2xl text-[20px] font-normal capitalize">
            <p className="text-tertiary/60 italic">terrain</p>
            <p className="font-medium">{terrain}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

PlanetDetailsCard.propTypes = {
  planet: PropTypes.object,
};
