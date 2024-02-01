import { FunctionComponent, useContext, useState } from "react";
import { ImageContext } from "./RestAPI";

const SearchField: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handlerInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handlerButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handlerEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="rest-api-project">
      <form>
        <input
          type="search"
          placeholder="You can start with the word: cat."
          value={searchValue}
          onChange={handlerInputChange}
          onKeyDown={handlerEnterSearch}
        ></input>
        <button onClick={handlerButtonSearch} disabled={!searchValue}>
          <span>SEARCH</span>
        </button>
      </form>
    </div>
  );
};
export default SearchField;
