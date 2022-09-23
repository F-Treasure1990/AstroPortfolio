import "./Button.scss"
interface iButton {
  variant: "solid" | "border" | "green" | "purple" | "neutral";
  label?: string | Date;
  children?: React.ReactNode;
}

const Button: React.FC<iButton> = ({ variant, children, label }) => {
  return (
    <button className={`btn ${variant}`}>
      {children}
      {label}
      {variant === "green" && "code"}
      {variant === "purple" && "design"}
    </button>
  )
}

export default Button
