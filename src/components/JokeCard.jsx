import React from "react";
import { motion } from "framer-motion";
import {
  sliderTransition,
  sliderVariants,
} from "../animations/sliderAnimatios";
import ButtonJoke from "./ButtonJoke";

const JokeCard = ({ activeIndex, data, direction, nextJoke, previousJoke }) => {
  return (
    
    <motion.div
      key={activeIndex}
      variants={sliderVariants}
      initial='incoming'
      animate='active'
      exit='exit '
      transition={sliderTransition}
      custom={direction}
      className='joke-card absolute w-8/12 sm:w-6/12 justify-center items-center overflow-hidden text-white overflow-y-auto'
    >
     
      {data ? (
        <div className='m-auto flex flex-col gap-4'>
          <div className='flex justify-between  items-center text-4xl'>
            <div className='flex items-center justify-between gap-3'>
              <hr className='border-white border-solid w-10' />
              {` ${activeIndex + 1}`}
            </div>
            <h3>{data.categories}</h3>
          </div>
          <h2 className='text-5xl'>{data.title}</h2>
          <p className='text-2xl'>{data.value}</p>

          <div className='buttons gap-7 flex  items-center text-lg'>
            <ButtonJoke handleClick={previousJoke} text="Previous Joke"></ButtonJoke>
            <ButtonJoke handleClick={nextJoke} text="Next Joke"></ButtonJoke>
          </div>
        </div>
      ) : (
        <NoJoke nextJoke={nextJoke}/>
      )}
    </motion.div>
    
  );
};

const NoJoke = ({nextJoke}) => {
  return (
    <div className='flex flex-col gap-4 text-black'>
      <div className='flex justify-between w-4/6 items-center text-4xl'>
        <div className='flex items-center justify-between gap-3'>
          <hr className='border-black border-solid w-10' />
          {`0`}
        </div>
        <h3>{':('}</h3>
      </div>
      <h2 className='text-5xl'>{'Hiii there'}</h2>
      <p className='text-2xl'>{'Try to push the button to move to a new joke'}</p>

      <div className='buttons flex text-lg'>
        <button onClick={nextJoke}>Next Joke</button>
      </div>
    </div>
  );
};

export default JokeCard;
