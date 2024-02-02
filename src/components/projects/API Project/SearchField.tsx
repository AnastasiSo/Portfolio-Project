import axios from "axios";
import { FunctionComponent, useEffect, useRef } from "react";
const API_URL = "https://api.unsplash.com/search/photos";
interface ISearchField {
  REACT_API_KEY: string;
}
const SearchField: FunctionComponent<ISearchField> = () => {
  console.log("key", import.meta.env.REACT_API_KEY);
  const searchInput = useRef(null);

  useEffect(() => {
    const getImages = async () => {
      const { data } = axios.get(
        `${API_URL}?query=${searchInput.current.value}&page=1&per_page=6`
      );
    };
    getImages();
  }, []);

  const handlerSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
  };
  return (
    <div className="rest-api-project">
      <form onSubmit={handlerSearch}>
        <input
          type="search"
          placeholder="You can start with the word: cat."
          ref={searchInput}
        ></input>
        <button>
          <span>SEARCH</span>
        </button>
      </form>
    </div>
  );
};
export default SearchField;
