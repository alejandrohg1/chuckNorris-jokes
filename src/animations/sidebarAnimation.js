export const sidebar = {
  open: {
    width: `10rem`,
    height: `100%`,
    borderRadius: '0%',
    overflowY: "auto",
    transition: {
      type: "spring",
      stiffness: 125,
      restDelta: 1,
      damping: 20
    }
  },
  closed: {
    width: '3rem',
    height: `3rem`,
    borderRadius: '50%',
    overflowY: "hidden",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};