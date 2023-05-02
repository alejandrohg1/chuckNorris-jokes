import React from "react";
import MenuItem from "./MenuItem";
import { categories } from "../data/categories";
import { motion } from "framer-motion";
import { menuItemVariants, navVariants } from "../animations/sidebarAnimation";

const Navigation = ({ currentCategory, changeCategory, open }) => {
  return (
    <motion.div
      variants={navVariants}
      className={` flex flex-col relative top-10 items-center gap-1`}
    >
      <motion.h2
        variants={menuItemVariants}
        className='text-lg  font-bold w-full text-white border-b border-white mb-3'
      >
        Categories
      </motion.h2>
      {categories.map((category, index) => (
        <MenuItem
          key={index}
          category={category}
          changeCategory={changeCategory}
          currentCategory={currentCategory}
        ></MenuItem>
      ))}
    </motion.div>
  );
};

export default Navigation;
