import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((sliding, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides act" : "inact"}
        >
          <img className="slide-image" src={sliding.urls} alt="" />
          <h2 className="slide-title">{sliding.title}</h2>
          <h3 className="slide-text">{sliding.description}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
