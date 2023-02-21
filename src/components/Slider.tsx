import CircularButton from "@components/CircularButton";
import Container from "@components/layout/Container";
import SliderItem from "@components/SliderItem";
import { FunctionComponent, useState } from "react";
const Slider: FunctionComponent = () => {
  const slides = [
    { url: "../img/project-1.gif", title: "Cards" },
    { url: "../img/project-2.gif", title: "DragDrop" },
    { url: "../img/project-3.gif", title: "Slider" },
    { url: "../img/project-4.gif", title: "Board" },
    { url: "../img/project-5.gif", title: "Game" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (currentIndex) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (currentIndex) => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <div className="slider">
        <CircularButton
          direction="left"
          handlerOnClick={() => goToPrevious(currentIndex)}
          className="left-circular-button"
        />
        <SliderItem
          slides={slides}
          currentIndex={currentIndex}
          setCurrentIndex={(newVal) => setCurrentIndex(newVal)}
        />
        <CircularButton
          handlerOnClick={() => goToNext(currentIndex)}
          className="right-circular-button"
        />
      </div>
    </Container>
  );
};
export default Slider;
