import PropTypes from "prop-types";
/**
 * EmptyError Component
 * This component is displayed when there's an error and data cannot be loaded. It provides an error message.
 * @param {string} data - The specific data that couldn't be loaded, shown in the error message.
 */
export default function EmptyError({ data }) {
  return (
    <section className="w-full h-[90vh] flex flex-col justify-center items-center gap-4 font-author text-center">
      <p className="capitalize font-medium md:text-6xl sm:text-5xl text-3xl leading-none">
        Something went wrong!
      </p>
      <p className="font-medium sm:text-2xl text-lg leading-none">
        Unable to load {data}!
      </p>
    </section>
  );
}

EmptyError.propTypes = {
  data: PropTypes.string,
};
