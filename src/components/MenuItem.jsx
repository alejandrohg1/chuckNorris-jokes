import React from "react";
import { menuItemVariants } from "../animations/sidebarAnimation";
import { motion } from "framer-motion";
export const MenuItem = ({ category, changeCategory, currentCategory }) => {
  return (
    <motion.button
      variants={menuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`relative bg-transparent  w-full h-10 text-white   ${
        category === currentCategory ? " underline" : "no-underline"
      } `}
      onClick={() => changeCategory(category)}
    > 
     <h2 className=' category-text'>{category.toUpperCase()}</h2>
    </motion.button>
  );
};

export default MenuItem;
