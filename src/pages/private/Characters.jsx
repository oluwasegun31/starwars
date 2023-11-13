import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { EmptyError, FormLoader, CharacterCard } from "../../components";
import { StarWarsContext } from "../../context";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
/**
 * Characters Component
 * This component displays a list of Star Wars characters and provides search functionality.
 */
export default function Characters() {
  const { isLoading, characters, showCharacters } = useContext(StarWarsContext);
  const searchRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";

  useEffect(() => {
    showCharacters();
    searchRef.current.value = searchTerm;
  }, []);

  const filteredArr = useMemo(() => {
    return characters.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm);
    });
  }, [characters, searchTerm]);

  const searchCharacters = useCallback(() => {
    const name = searchRef.current.value;
    name
      ? setSearchParams(
          (prev) => {
            prev.set("name", name);
            return prev;
          },
          { replace: true }
        )
      : setSearchParams({});
  }, []);

  const onSearchChange = () => {
    searchRef.current.value === "" ? setSearchParams({}) : null;
  };

  return (
    <section className="min-h-screen relative">
      <section className="w-[97%] mx-auto py-1 flex justify-center items-center font-author gap-4">
        <input
          type="text"
          className="bg-transparent border-b border-b-tertiary/40 md:w-[400px] w-[70%] outline-none focus:border-b-tertiary/75 text-2xl px-1"
          id="search"
          ref={searchRef}
          onChange={onSearchChange}
        />
        <button
          className="px-5 py-2 bg-alternate text-lg font-medium"
          name="search"
          type="button"
          onClick={() => searchCharacters()}
        >
          <BsSearch />
        </button>
      </section>
      {isLoading ? (
        <FormLoader />
      ) : filteredArr.length === 0 ? (
        <EmptyError data={"characters"} />
      ) : (
        <section>
          <div className="xl:w-[90%] md:w-[85%] w-[92%]  mx-auto grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 mt-10">
            {filteredArr.map((character) => {
              return <CharacterCard key={character.id} character={character} />;
            })}
          </div>
        </section>
      )}
    </section>
  );
}
