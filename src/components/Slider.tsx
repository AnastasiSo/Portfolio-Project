import ImageSlider from "@components/ImageSlider";
import Container from "@components/layout/Container";
import { FunctionComponent } from "react";

const Slider: FunctionComponent = () => {
  const slides = [
    { url: "../img/project-1.gif", title: "Cards" },
    { url: "../img/project-2.gif", title: "DragDrop" },
    { url: "../img/project-3.gif", title: "Slider" },
    { url: "../img/project-4.gif", title: "Board" },
    { url: "../img/project-5.gif", title: "Game" },
  ];

  return (
    <Container>
      <div className="slider-wrap">
        <ImageSlider slides={slides} />
      </div>
    </Container>
  );
};
export default Slider;
