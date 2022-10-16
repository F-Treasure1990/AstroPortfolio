import "./TestimonialsSlider.scss"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import TestimonialOption from "@components/Molecules/TestimonialOption/TestimonialOption";
import testimonialData from "@data/TestimonialsData.json"
import TestimonialsPicker from "@components/Atoms/TestimonialsPicker/TestimonialsPicker";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    };
  }
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function TestimonialSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonalIndex = wrap(0, testimonialData.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };


  return (
    <div className="testimonial-slider">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          className="testimonial-slider__card"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <TestimonialOption testIndex={testimonialData[testimonalIndex]} />
        </motion.div>
      </AnimatePresence>
      {/* <div className="next" onClick={() => paginate(1)}> */}
      {/*   {"‣"} */}
      {/* </div> */}
      {/* <div className="prev" onClick={() => paginate(-1)}> */}
      {/*   {"‣"} */}
      {/* </div> */}
      <div className="testimonial-slider__picker">
        {testimonialData.map((_, index) => (<TestimonialsPicker selected={index === testimonalIndex} key={index}/>))}
      </div>
    </div>
  );
};
