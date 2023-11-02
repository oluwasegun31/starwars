import PropTypes from "prop-types";
/**
 * FormError Component
 * This component displays an error message in a fixed position.
 */
export default function FormError({ errMessage }) {
  return (
    <section className="fixed top-16 right-6 p-2 bg-secondary z-30 border-l-4 border-l-primary font-author">
      <p className="sm:text-lg text-base font-semibold text-white">
        Error: {errMessage}
      </p>
    </section>
  );
}

FormError.propsType = {
  errMessage: PropTypes.string,
};
