import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { StarWarsContext } from "../../context/StarWarsDataContext";
import {
  EmptyError,
  FormLoader,
  PlanetCard,
  SearchInput,
} from "../../components";
import { useSearchParams } from "react-router-dom";
import { handleSearch } from "../../javascriptFunc/searchFunc";
/**
 * Planets Component
 * This component displays a list of planets and provides a search functionality.
 *
 * @component
 * @returns {JSX.Element} - Planets page with search input, loading indicator, error, or list of planets.
 */
export default function Planets() {
  // Get the isLoading, planets, and showPlanets data from the StarWarsContext
  const { isLoading, planets, showPlanets } = useContext(StarWarsContext);
  // Create a ref to store the search input element
  const searchRef = useRef();
  // Get the current search term from the URL query parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";
  // Scroll to the top of the page on initial render, Fetch the planets data and Set the default search term in the input field
  useEffect(() => {
    window.scrollTo(0, 0);
    showPlanets();
    searchRef.current.value = searchTerm;
  }, []);
  // Memoize the filtered array of planets based on the search term
  const filteredArr = useMemo(() => {
    return planets.filter((planet) => {
      return planet.name.toLowerCase().includes(searchTerm);
    });
  }, [planets, searchTerm]);
  // Create a callback function to handle search input changes
  const searchPlanets = useCallback(() => {
    handleSearch(searchRef, setSearchParams);
  }, []);

  return (
    <section className="min-h-screen">
      <SearchInput
        searchRef={searchRef}
        searchItem={searchPlanets}
        setSearchParams={setSearchParams}
      />
      {isLoading ? (
        <FormLoader />
      ) : filteredArr.length === 0 ? (
        <EmptyError data={"planets"} />
      ) : (
        <section className="xl:w-[90%] sm:w-[92%] w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {filteredArr.map((planet) => {
            return <PlanetCard key={planet.id} planet={planet} />;
          })}
        </section>
      )}
    </section>
  );
}
