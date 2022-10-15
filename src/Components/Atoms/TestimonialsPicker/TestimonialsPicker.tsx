import "./TestimonialsPicker.scss"

export default function TestimonialsPicker({ selected }) {
  return (
    <div className={`testimonial-picker__option ${selected && "testimonial-picker__option--selected"}`}></div>
  )
}

