import { useState } from "react";
import classes from "./Slideshow.module.css";
import Hello from "../assets/Welcome.jpg";
import Welcome from "../assets/pizzaCrudo.jpg";
import download from "../assets/rana.jpg";
import dough from "../assets/arancini.jpg";

const slidingImages = [
  {
    url: Hello,
    caption: "Slide 1",
  },
  {
    url: Welcome,
    caption: "Slide 2",
  },
  {
    url: download,
    caption: "Slide 3",
  },
  {
    url: dough,
    caption: "Slide 4",
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidingImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextHandler = () => {
    const isLastSlide = currentIndex === slidingImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    // console.log(`${slidingImages[currentIndex].url}`);
  };
  
  return (
    <div className={classes.sliderStyle}>
      <div className={classes.leftArrowStyles} onClick={goToPreviousHandler}>
        ❰
      </div>
      <div className={classes.Slidestyle}>
        <img src={slidingImages[currentIndex].url} alt="pictures"></img>
      </div>
      <div className={classes.rightArrowStyles} onClick={goToNextHandler}>
        ❱
      </div>
    </div>
  );
};

export default Slideshow;
