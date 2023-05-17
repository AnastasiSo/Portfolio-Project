import { Fragment, FunctionComponent, useState } from "react";
import CircularButton from "../navigation/CircularButton";

const Facts: FunctionComponent = () => {
  const facts = [
    "I can stand on my hands and I can teach you how to do it.",
    "I can program while sitting in the splits.",
    "I turn off the light with my foot if my hands are full.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (currentIndex) => {
    const isLastSlide = currentIndex === facts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Fragment>
      <div className="facts">
        <h5 className="facts-item">{facts[currentIndex]}</h5>
        <CircularButton
          handlerOnClick={() => goToNext(currentIndex)}
          className="right-circular-button"
        />
      </div>
    </Fragment>
  );
};
export default Facts;
