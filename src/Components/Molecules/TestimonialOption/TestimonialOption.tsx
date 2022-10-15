import "./TestimonialOption.scss"

type Props = {
  testIndex: {
    index: number;
    img:string;
    name: string;
    job: string;
    testimonial: string;
  }
}

export default function TestimonialOption({ testIndex }: Props) {
  const { name, job, testimonial, index, img } = testIndex

  const preventDragHandler = (e) => {
    e.preventDefault();
  }

  return (

    <section className="testimonial">
      <img className="testimonial__img" onDragStart={preventDragHandler} src={`testimonialsImgs/${img}.png`} alt="person" />
      <h4 className="testimonial__name">{name}</h4>
      <p className="testimonial__subtitle">{job}</p>
      <p className="testimonial__paragraph">
        {testimonial}
      </p>
    </section>
  )
}

