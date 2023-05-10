import { FunctionComponent } from "react";
import Card from "./Card";
export interface ISliderItemsProps {
  slides: Array<{
    url: string;
    title: string;
    card: {
      title: string;
      description: string;
      codePen: string;
      github: string;
    };
  }>;
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
  const currentSlide = slides[currentIndex];

  return (
    <div className="slider-item-wrap">
      {slides.map((_, slideIndex) => (
        <Card key={slideIndex} data={currentSlide.card} />
      ))}
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
