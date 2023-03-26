import "./TestimonialOption.scss";
import { motion } from "framer-motion";

type Props = {
  testIndex: {
    index: number;
    img: string;
    name: string;
    job: string;
    testimonial: string;
  };
};

export default function TestimonialOption({ testIndex }: Props) {
  const { name, job, testimonial, img } = testIndex;

  return (
    <section className="testimonial">
      <motion.img
        width={90}
        height={90}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="testimonial__img"
        draggable={false}
        src={`testimonialsImgs/${img}.png`}
        alt="person"
        loading="lazy"
      />
      <h2 className="testimonial__name">{name}</h2>
      <p className="testimonial__subtitle">{job}</p>
      <p className="testimonial__paragraph">{testimonial}</p>
    </section>
  );
}
