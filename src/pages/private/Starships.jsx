import {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { StarWarsContext } from "../../context";
import { useSearchParams } from "react-router-dom";
import {
  EmptyError,
  FormLoader,
  SearchInput,
  StarshipCard,
} from "../../components";
import { handleSearch } from "../../javascriptFunc/searchFunc";
/**
 * Starships component displays a list of Star Wars starships with search functionality.
 */
export default function Starships() {
  // Context to access Star Wars starships data
  const { isLoading, starships, showStarships } = useContext(StarWarsContext);
  const searchRef = useRef(); // UseRef hook to manage input field for search term
  // useSearchParams hook to access search query from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";
  // Hook Scroll to the top of the page and fetch characters and set initial search term on first mount
  useEffect(() => {
    window.scrollTo(0, 0);
    showStarships();
    searchRef.current.value = searchTerm;
  }, []);
  // useMemo hook to memoize filtered array of starships for performance optimization
  const filteredArr = useMemo(() => {
    return starships.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm);
    });
  }, [searchTerm, starships]);
  // useCallback hook to memoize search function for performance optimization
  const searchStarship = useCallback(() => {
    handleSearch(searchRef, setSearchParams);
  }, []);
  return (
    <section className="min-h-screen relative font-author">
      <SearchInput
        searchRef={searchRef}
        setSearchParams={setSearchParams}
        searchItem={searchStarship}
      />
      {isLoading ? (
        <FormLoader />
      ) : filteredArr.length === 0 ? (
        <EmptyError data={"starships"} />
      ) : (
        <Suspense fallback={<p>Loading....</p>}>
          <section className="xl:w-[90%] md:w-[85%] w-[92%]  mx-auto grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2 mt-10">
            {filteredArr.map((starship) => {
              return <StarshipCard key={starship.id} starship={starship} />;
            })}
          </section>
        </Suspense>
      )}
    </section>
  );
}
