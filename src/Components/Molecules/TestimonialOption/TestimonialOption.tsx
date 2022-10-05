import "./TestimonialOption.scss"

type Props = {
  testIndex: {
    index: number;
    name: string;
    job: string;
    testimonial: string;
  }
}

const TestimonialOption: React.FC<Props> = ({ testIndex }) => {
  const { name, job, testimonial, index } = testIndex
  const preventDragHandler = (e) => {
    e.preventDefault();
  }

  return (

    <section className="testimonial">
      <img className="testimonial__img" onDragStart={preventDragHandler} src={`avatar${index}.png`} alt="person" />
      <h4 className="testimonial__name">{name}</h4>
      <p className="testimonial__subtitle">{job}</p>
      <p className="testimonial__paragraph">
        {testimonial}
      </p>
    </section>
  )
}

export default TestimonialOption
