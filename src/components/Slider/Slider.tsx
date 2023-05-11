import CircularButton from "@components/navigation/CircularButton";
import SliderItems from "@components/slider/SliderItems";
import projectBoardImg from "@public/assets/projects/projectBoard.gif";
import projectCardImg from "@public/assets/projects/projectCards.gif";
import projectDragDropImg from "@public/assets/projects/projectDragDrop.gif";
import projectGameImg from "@public/assets/projects/projectGame.gif";
import projectSliderImg from "@public/assets/projects/projectSlider.gif";
import { Fragment, FunctionComponent, useState } from "react";

const Slider: FunctionComponent = () => {
  const slides = [
    {
      url: projectCardImg,
      title: "Cards",
      card: {
        title: "Cards",
        description:
          "This Cards-slider with clickable images. When clicked, the image enlarges.",
        codePen: "https://codepen.io/AnastasiiaSorina/pen/yLxPMLv",
        github: "https://github.com/AnastasiiaSorina/JS-Challenge-Cards",
      },
    },
    {
      url: projectDragDropImg,
      title: "DragDrop",
      card: {
        title: "Drag & Drop",
        description:
          "Implemented the ability to drag the block to one of the three columns.",
        codePen: "https://codepen.io/AnastasiiaSorina/pen/qBMVrdG",
        github: "https://github.com/AnastasiiaSorina/JS-Challenge-DragDrop ",
      },
    },
    {
      url: projectSliderImg,
      title: "Slider",
      card: {
        title: "Slider",
        description: "Slider with beautiful animation.",
        codePen: "https://codepen.io/AnastasiiaSorina/pen/VwGrpeY",
        github: "https://github.com/AnastasiiaSorina/JS-Challenge-Slider ",
      },
    },
    {
      url: projectBoardImg,
      title: "Board",
      card: {
        title: "Board",
        description:
          "A board that reacts to cursor movement. And randomly alternates color. Decorated with smooth animation.",
        codePen: "https://codepen.io/AnastasiiaSorina/pen/mdGqWWr",
        github: "https://github.com/AnastasiiaSorina/JS-Challenge-Board",
      },
    },
    {
      url: projectGameImg,
      title: "Game",
      card: {
        title: "Game",
        description:
          "Game: the goal of which is to click on the maximum possible number of randomly pop-up circles. For the time you choose. You can choose the game time 10, 20, 30 seconds. At the end of your time, the score of the game will be waiting for you.",
        codePen: "https://codepen.io/AnastasiiaSorina/pen/WNgXpjd",
        github: "https://github.com/AnastasiiaSorina/JS-Challenge-Game ",
      },
    },
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
