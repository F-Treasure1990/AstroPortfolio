import "./TestimonialsPicker.scss"

const TestimonialsPicker = ({ selected }) => {
  return (
    <div className={`testimonial-picker__option ${selected && "testimonial-picker__option--selected"}`}></div>
  )
}

export default TestimonialsPicker
