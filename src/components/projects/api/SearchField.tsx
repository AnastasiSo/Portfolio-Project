import axios from "axios";
import { FunctionComponent, Key, useEffect, useRef, useState } from "react";
const API_URL = "https://api.unsplash.com/search/photos";
const REACT_API_KEY = "UCnponr8TqMg0f4R0j2tYI5xpONs6HwdtccnCw8FVNY";

const SearchField: FunctionComponent = () => {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    fetchImages("work");
  }, []);

  const fetchImages = async (searchQuery: string) => {
    try {
      if (searchQuery) {
        setErrorMsg("");
        const { data } = await axios.get(
          `${API_URL}?query=${searchQuery}&per_page=6&client_id=${REACT_API_KEY}`
        );
        setImages(data.results);
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later.");
      console.log(error);
    }
  };

  const handlerSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    fetchImages(searchInput.current.value);
  };
  return (
    <div className="api-search">
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      <form className="api-search-form" onSubmit={handlerSearch}>
        <input
          type="search"
          placeholder="You can start with the word: cat."
          ref={searchInput}
        ></input>
        <button>
          <span>SEARCH</span>
        </button>
      </form>
      <div className="api-search-gallery">
        {images.map(
          (image: {
            id: Key;
            urls: { small: string };
            alt_description: string;
          }) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              className="image"
            />
          )
        )}
      </div>
    </div>
  );
};

export default SearchField;
