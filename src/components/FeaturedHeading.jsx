import lightsaber from "../assets/lightsaber.png";
import PropTypes from "prop-types";
/**
 * FeaturedHeading Component
 * This component displays a featured header title along with an iconic lightsaber image.
 */

export default function FeaturedHeading({ heading }) {
  return (
    <div className="text-center font-supreme relative">
      <p className="text-lg">featured</p>
      <h4 className="font-semibold md:text-4xl text-[28px] uppercase leading-[0.8] text-secondary">
        {heading}
      </h4>
      <img
        src={lightsaber}
        alt="lightsaber"
        className="absolute -top-4 left-[50%] -translate-x-[50%] w-24 h-24 opacity-20"
      />
    </div>
  );
}

// passing proptypes to always be reminded the values to input
FeaturedHeading.propTypes = {
  heading: PropTypes.string,
};
