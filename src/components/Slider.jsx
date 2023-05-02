import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JokeCard from "./JokeCard";
import { newShade } from "../utils/colors";

const Slider = ({ data, fetchNewJoke, loading }) => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const currentJoke = data[activeIndex - 1];

  const swipeToImage = (newIndex) => {
    setActiveIndex([activeIndex + newIndex, newIndex]);
  };

  const updateUpIndex = () => {
    swipeToImage(1);
  };

  const updateDownIndex = () => {
    if (activeIndex < 0) {
      setActiveIndex(0);
    }

    swipeToImage(-1);
  };

  const handleClick = () => {
    if (activeIndex > data.length - 1) {
      fetchNewJoke();
    }

    updateUpIndex();
  };

  return (
    <motion.div
      className='slider color-transition relative w-full h-screen flex flex-col overflow-y-auto'
      animate={{ backgroundColor: currentJoke ? currentJoke.color : "#fff" }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <div className='relative flex items-center justify-center w-full h-full'>
          <motion.div
            className={`blob color-transition absolute w-8/12  h-[75vh] sm:h-[80vh] `}
            style={{ backgroundColor: currentJoke ? newShade(currentJoke?.color, -20) : "#fff" }} 
            animate={{
              y:["5%","-5%"],
              borderRadius: [
                "30% 70% 73% 27% / 60% 31% 69% 40% ",
                "42% 58% 22% 78% / 67% 31% 69% 33% ",
                "42% 58% 38% 62% / 67% 53% 47% 33% ",
                "42% 58% 62% 38% / 67% 70% 30% 33% ",
                "30% 70% 73% 27% / 60% 31% 69% 40% ",
                "74% 26% 81% 19% / 48% 85% 15% 52% ",
                "68% 32% 74% 26% / 50% 81% 19% 50% ",
                "90% 10% 82% 18% / 52% 84% 16% 48% "

              ],
            }}
            transition={{ duration: 30,ease:"easeInOut",repeat:Infinity,repeatDelay:0,repeatType:"reverse"}}
          ></motion.div>
          <JokeCard
            activeIndex={activeIndex - 1}
            data={currentJoke}
            direction={direction}
            nextJoke={handleClick}
            previousJoke={updateDownIndex}
          ></JokeCard>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Slider;
