import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";
import { searchChange } from "../javascriptFunc/searchFunc";
/**
 * SearchInput Component
 * This component provides a search input field with an associated search button.
 *
 * @component
 * @param {object} searchRef - Ref for the search input element.
 * @param {func} setSearchParams - Function to set search parameters.
 * @param {func} searchItem - Function to handle the search action.
 * @returns {JSX.Element} - Search input field with search button.
 */
export default function SearchInput({
  searchRef,
  setSearchParams,
  searchItem,
}) {
  return (
    <section className="w-[97%] mx-auto py-1 flex justify-center items-center font-author gap-4">
      <input
        type="text"
        className="bg-transparent border-b border-b-tertiary/40 md:w-[400px] w-[70%] outline-none focus:border-b-tertiary/75 text-2xl px-1"
        id="search"
        ref={searchRef}
        onChange={() => searchChange(searchRef, setSearchParams)}
      />
      <button
        className="px-5 py-2 bg-alternate text-lg font-medium"
        name="search"
        type="button"
        onClick={() => searchItem()}
      >
        <BsSearch />
      </button>
    </section>
  );
}

SearchInput.propTypes = {
  searchRef: PropTypes.object,
  onSearchChange: PropTypes.func,
  searchItem: PropTypes.func,
};
