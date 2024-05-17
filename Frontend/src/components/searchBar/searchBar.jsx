import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];
function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="City Location"
          className="text"
        />
        <input
          type="number"
          name="Price"
          min={0}
          max={100000000}
          placeholder="Min Price"
          className="text"
        />
        <input
          type="number"
          name="Price"
          min={0}
          max={100000000}
          placeholder="Max Price"
          className="text"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
