import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  slideUp: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
};

const MotionWrapper = ({
  children,
  variant = "fade",
  duration = 0.6,
  delay = 0,
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
