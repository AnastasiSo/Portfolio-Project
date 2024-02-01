import { useContext } from "react";
import Image from "./Image";
import { ImageContext } from "./RestAPI";
import Skeleton from "./Skeleton";
const ImagesGallery = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
      <h1 className="rest-api-description-results">
        Results for {searchImage || "Cats"}
      </h1>
      <div className="rest-api-gallery">
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data, key) => <Image data={data} key={key} />)
        )}
      </div>
    </>
  );
};
export default ImagesGallery;
