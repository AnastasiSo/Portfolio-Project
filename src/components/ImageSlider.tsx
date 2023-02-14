import CircularButton from "@components/CircularButton";
import { FunctionComponent, useState } from "react";
export interface IImageSliderProps {
  slides: Array<{ url: string; title: string }>;
}

const ImageSlider: FunctionComponent<IImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideImg = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="slider">
      <CircularButton
        direction="left"
        handlerOnClick={goToPrevious}
        className="left-circular-button"
      />
      <div className="slide-item" style={slideImg}></div>
      <CircularButton
        handlerOnClick={goToNext}
        className="right-circular-button"
      />
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="dot"
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
