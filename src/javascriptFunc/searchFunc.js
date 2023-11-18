// Function to handle updating search query in URL and triggering search action
const handleSearch = (searchRef, setSearchParams) => {
    // Get the current search term from the input field
    const name = searchRef.current.value;
    // If a search term is entered, update the URL with the search parameter
    if (name) {
        setSearchParams((prev) => {
            prev.set("name", name);
            return prev;
        }, { replace: true });
    } else {
        // If no search term is entered, clear the search parameters
        setSearchParams({});
    }
};

// Function to handle clearing search parameters when the input field is emptied
const searchChange = (searchRef, setSearchParams) => {
    if (searchRef.current.value === "") {
        setSearchParams({})
    }
    return
}

export { handleSearch, searchChange }