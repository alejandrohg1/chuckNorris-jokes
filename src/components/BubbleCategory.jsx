import React from 'react'
import { motion } from 'framer-motion'
import { bubbleVariants } from '../animations/bubbleAnimation'


const BubbleCategory = ({currentCategory,isOpen}) => {
  return (
    <motion.div className='flex justify-center p-2 items-center absolute top-3 left-[4rem] z-20 rounded-3xl bg-white'
    variants={bubbleVariants}
    animate={isOpen ? 'initial' : 'active'}
    exit={{opacity:0}}
    transition={{duration:1,ease:'easeInOut'}}
    >
      {`Current category is ${currentCategory}`}
    </motion.div>
  )
}

export default BubbleCategory