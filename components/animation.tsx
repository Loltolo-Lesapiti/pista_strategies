import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";
import Image from "next/image";

//Defining props interface.
type AnimationProps = MotionProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  };

// Container fade in animation.
export const FadeInContainer: React.FC<AnimationProps> = ({
  children,
  ...props
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerchildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};

//Fade in item animation.
export const FadeInItem: React.FC<AnimationProps> = ({
  children,
  ...props
}) => {
  const itemFadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div variants={itemFadeInVariant} {...props}>
      {children}
    </motion.div>
  );
};

export const MotionImage = motion(Image);

//Card animation.

export const CardAnimation: React.FC<AnimationProps> = ({
  children,
  ...props
}) => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div variants={cardVariants} {...props}>
      {children}
    </motion.div>
  );
};
