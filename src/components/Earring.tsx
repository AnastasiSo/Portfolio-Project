import { useEffect, useState } from "react";

const Earring = () => {
  const str = "HTML & CSS JAVASCRIPT REACT SASS";

  const [spans, setSpans] = useState([]);

  useEffect(() => {
    const newSpans = str.split("").map((char, i) => ({
      char,
      rotate: 11 * i,
    }));
    setSpans(newSpans);
  }, [str]);

  return (
    <div className="earring">
      <p id="text">
        {spans.map((span, index) => (
          <span key={index} style={{ transform: `rotate(${span.rotate}deg)` }}>
            {span.char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Earring;
