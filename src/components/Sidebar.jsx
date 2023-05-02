import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sidebar } from "../animations/sidebarAnimation";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const Sidebar = React.memo(({ currentCategory, changeCategory,isOpen,toggle}) => {


  return (
    <AnimatePresence>
      <motion.div
        layout
        animate={isOpen ? "open" : "closed"}
        variants={sidebar}
        className={`flex flex-col absolute bg-black opacity-90 z-10 overflow-hidden`}
      >
       
        <motion.div>
          <MenuToggle toggle={() => toggle(!isOpen)}></MenuToggle>
          <Navigation
            changeCategory={changeCategory}
            currentCategory={currentCategory}
            open={open}
          ></Navigation>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

export default Sidebar;
