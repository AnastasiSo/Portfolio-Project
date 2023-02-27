import { FunctionComponent } from "react";
export interface ISliderItemsProps {
  slides: Array<{ url: string; title: string }>;
  currentIndex: number;
  setCurrentIndex: (newVal: number) => void;
}

const SliderItems: FunctionComponent<ISliderItemsProps> = ({
  slides,
  currentIndex,
  setCurrentIndex,
}) => {
  const slideImg = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-item-wrap">
      <div className="slide-item" style={slideImg}></div>
      <div className="dots-container">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${currentIndex == slideIndex ? "active" : ""}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default SliderItems;
