const SearchBar = () => {
  return (
    <form className="flex-grow p-2">
      <div className="relative w-full rounded border">
        <button className="btn btn-ghost btn-circle absolute top-0 left-0">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search film"
          className="input w-full pl-12 flex-grow focus:border-none"
          required
        />
        <div className="absolute top-0 bottom-0 right-1 flex">
          <select className="m-auto text-center p-1 bg-gray-50 rounded-full">
            <option selected>All</option>
            <option value="series">Series</option>
            <option value="movies">Movies</option>
            <option value="anim">Anime</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
