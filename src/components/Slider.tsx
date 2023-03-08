import CircularButton from "@components/CircularButton";
import SliderItems from "@components/SliderItems";
import { Fragment, FunctionComponent, useState } from "react";
const Slider: FunctionComponent = () => {
  const slides = [
    { url: "/assets/project-1.gif", title: "Cards" },
    { url: "/assets/project-2.gif", title: "DragDrop" },
    { url: "/assets/project-3.gif", title: "Slider" },
    { url: "/assets/project-4.gif", title: "Board" },
    { url: "/assets/project-5.gif", title: "Game" },
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
    <Fragment>
      <div className="slider">
        <CircularButton
          direction="left"
          handlerOnClick={() => goToPrevious(currentIndex)}
          className="left-circular-button"
        />
        <SliderItems
          slides={slides}
          currentIndex={currentIndex}
          setCurrentIndex={(newVal) => setCurrentIndex(newVal)}
        />
        <CircularButton
          handlerOnClick={() => goToNext(currentIndex)}
          className="right-circular-button"
        />
      </div>
    </Fragment>
  );
};
export default Slider;
