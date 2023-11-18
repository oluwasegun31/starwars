import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import {
  EmptyError,
  FormLoader,
  CharacterCard,
  SearchInput,
} from "../../components";
import { StarWarsContext } from "../../context";
import { useSearchParams } from "react-router-dom";
import { handleSearch } from "../../javascriptFunc/searchFunc";
/**
 * Characters Component
 * This component displays a list of Star Wars characters and provides search functionality.
 */
export default function Characters() {
  // Context to access Star Wars characters data
  const { isLoading, characters, showCharacters } = useContext(StarWarsContext);
  // UseRef hook to manage input field for search term
  const searchRef = useRef();
  // useSearchParams hook to access search query from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";
  // Hook Scroll to the top of the page and fetch characters and set initial search term on first mount
  useEffect(() => {
    window.scrollTo(0, 0);
    showCharacters();
    searchRef.current.value = searchTerm;
  }, []);
  // useMemo hook to memoize filtered array of characters for performance optimization
  const filteredArr = useMemo(() => {
    return characters.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm);
    });
  }, [characters, searchTerm]);
  // useCallback hook to memoize search function for performance optimization
  const searchCharacters = useCallback(() => {
    handleSearch(searchRef, setSearchParams);
  }, []);

  return (
    <section className="min-h-screen relative">
      <SearchInput
        searchRef={searchRef}
        searchItem={searchCharacters}
        setSearchParams={setSearchParams}
      />
      {isLoading ? (
        <FormLoader />
      ) : filteredArr.length === 0 ? (
        <EmptyError data={"characters"} />
      ) : (
        <section className="xl:w-[90%] md:w-[85%] w-[92%]  mx-auto grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 mt-10">
          {filteredArr.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
        </section>
      )}
    </section>
  );
}
